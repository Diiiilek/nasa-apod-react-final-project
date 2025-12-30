import { useEffect, useState } from "react";
import { getApodData } from "../services/nasaApi";

function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (selectedDate) => {
    try {
      setLoading(true);
      const result = await getApodData(selectedDate);
      setData(result);
      setError(null);
      setTranslatedText(""); // tarih değişince eski çeviriyi temizle
    } catch (err) {
      setError("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    fetchData(selectedDate);
  };

  // 🌗 Arka plan rengi hesaplama
  const getBackgroundStyle = () => {
    if (!data) return {};

    if (data.media_type === "video") {
      return {
        background: "linear-gradient(180deg, #050608, #0b0d17)",
        color: "#e0e0e0",
      };
    }

    if (data.explanation.length > 800) {
      return {
        background: "linear-gradient(180deg, #0b0d17, #1a1f3c)",
        color: "#ffffff",
      };
    }

    return {
      background: "linear-gradient(180deg, #1a1f3c, #2a2f5c)",
      color: "#f5f5f5",
    };
  };

  // 🇹🇷 Çeviri fonksiyonu
  const translateToTurkish = async () => {
    if (!data?.explanation) return;

    try {
      setIsTranslating(true);

      const response = await fetch("https://translate.argosopentech.com/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: data.explanation,
          source: "en",
          target: "tr",
          format: "text",
        }),
      });

      const result = await response.json();
      setTranslatedText(result.translatedText);
    } catch (error) {
       setTranslatedText(
    "⚠️ Çeviri servisi şu anda geçici olarak kullanılamıyor. " +
    "Açıklamalar NASA tarafından İngilizce olarak sağlanmaktadır.");
    } finally {
      setIsTranslating(false);
    }
    
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Veri yok</p>;

  return (
    <main style={getBackgroundStyle()}>
      <p className="instruction">
        📅 Bir tarih seçerek o güne ait NASA’nın uzay fotoğrafını ve açıklamasını
        görüntüleyebilirsiniz.
      </p>

      <input type="date" value={date} onChange={handleDateChange} />

      <h2>{data.title}</h2>

      {data.media_type === "image" ? (
        <img src={data.url} alt={data.title} width="500" />
      ) : (
        <iframe
          title="nasa-video"
          src={data.url}
          width="500"
          height="300"
          allow="fullscreen"
        ></iframe>
      )}

      {/* İngilizce açıklama */}
      <small style={{ opacity: 0.7, display: "block", marginBottom: "6px" }}>
         *Açıklamalar NASA tarafından İngilizce olarak sağlanmaktadır.*
      </small>

      <p>{data.explanation}</p>

      {/* Çeviri butonu */}
      <button
        onClick={translateToTurkish}
        disabled={isTranslating}
        style={{
          marginTop: "16px",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#9aa7ff",
          color: "#000",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        {isTranslating ? "Çevriliyor..." : "Türkçeye Çevir"}
      </button>

      {/* Türkçe açıklama */}
      {translatedText && (
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            lineHeight: "1.6",
          }}
        >
          <strong>Türkçe Açıklama:</strong>
          <p>{translatedText}</p>
        </div>
      )}
    </main>
  );
}

export default Content;
