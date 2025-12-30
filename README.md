🌌 NASA Astronomy Picture of the Day (APOD) – React Projesi

Bu proje, NASA’nın Astronomy Picture of the Day (APOD) API’si kullanılarak geliştirilmiş bir React web uygulamasıdır.
Kullanıcılar seçtikleri bir tarihe ait NASA’nın paylaştığı uzay fotoğrafını (veya videosunu) ve açıklamasını görüntüleyebilir.

🎯 Projenin Amacı

Bu projenin amacı:

Harici bir API kullanarak veri çekme becerisini göstermek

React’ta component yapısı, useState ve useEffect kullanımını uygulamak

Kullanıcı etkileşimi içeren, sade ve anlaşılır bir arayüz tasarlamak

Gerçek dünyaya yakın bir senaryo üzerinden frontend geliştirme pratiği yapmaktır

🛠️ Kullanılan Teknolojiler

React (Vite)

JavaScript (ES6+)

HTML5

CSS3

NASA APOD API

Git & GitHub

⚙️ Özellikler

📅 Tarih seçilerek ilgili güne ait içerik görüntüleme

🖼 Görsel veya 🎬 video türüne göre dinamik içerik gösterimi

🎨 İçeriğe göre dinamik arka plan rengi

🧭 Sayfanın tamamının merkezde hizalanması (flex tabanlı layout)

✨ Hover ve modern UI efektleri

🌍 Opsiyonel Türkçe çeviri özelliği (açık kaynaklı servis ile)

⚠️ Çeviri servisi çalışmadığında kullanıcıyı bilgiliren geri dönüş mekanizması

🌐 Türkçe Çeviri Hakkında

NASA APOD API yalnızca İngilizce içerik sağlamaktadır.
Bu nedenle projede:

Açıklamalar varsayılan olarak İngilizce gösterilmektedir

Kullanıcı isteğine bağlı olarak, açık kaynaklı bir çeviri servisi kullanılarak Türkçe çeviri yapılabilmektedir

Çeviri servisi erişilemediğinde kullanıcıya bilgilendirici bir mesaj gösterilmektedir

Bu yaklaşım, gerçek dünya uygulamalarında sıkça kullanılan graceful fallback mantığına örnek teşkil etmektedir.

🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamda çalıştırmak için:

git clone https://github.com/KULLANICI_ADIN/nasa-apod-react.git
cd nasa-apod-react
npm install
npm run dev


Tarayıcıda açmak için:

http://localhost:5173

📁 Proje Yapısı
src
├─ components
│  ├─ Header.jsx
│  ├─ Content.jsx
│  └─ Footer.jsx
├─ services
│  └─ nasaApi.js
├─ App.jsx
├─ App.css
├─ main.jsx

🧠 Geliştirici Notları

API işlemleri services klasörü altında soyutlanmıştır

Sayfa yerleşimi, büyük ekranlarda da dengeli görünmesi için merkez odaklı tasarlanmıştır

UI/UX kararlarında okunabilirlik ve sadelik ön planda tutulmuştur

👤 Geliştirici

Dilek Nur Çelik
Hacettepe Üniversitesi – Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE)

📜 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
