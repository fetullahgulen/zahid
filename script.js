// Sayfa yüklendiğinde çalışır
window.onload = () => {
    console.log("%c [!] UYARI: KRİTİK SİSTEM HATASI ", "background: #ff0000; color: #ffffff; font-size: 30px; font-weight: bold;");
    console.log("%c Erişim yetkiniz yok. Tüm işlemler durduruldu. ", "color: #00ff41; font-size: 14px;");

    // Klavye tuşlarını engellemek istersen (Opsiyonel)
    document.onkeydown = function (e) {
        return false;
    };

    // Sağ tıklamayı engellemek istersen (Opsiyonel)
    document.addEventListener('contextmenu', event => event.preventDefault());
};