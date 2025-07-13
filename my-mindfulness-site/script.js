document.addEventListener('DOMContentLoaded', function() {
    // 獲取今天要顯示文字的 HTML 元素
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');

    // 使用 fetch 函數向 ZenQuotes API 請求每日一句
    // 備註：API 內容在每天 UTC+0 的午夜更新，所以台灣時間早上8點後開啟，就會是新的一句。
    fetch('https://zenquotes.io/api/today')
        .then(response => {
            // 檢查請求是否成功
            if (!response.ok) {
                throw new Error('網路回應不佳');
            }
            return response.json(); // 將回應轉換為 JSON 格式
        })
        .then(data => {
            // 成功獲取資料後，將內容顯示在頁面上
            const quoteData = data[0];
            quoteTextElement.textContent = quoteData.q; // q 是語錄內容
            quoteAuthorElement.textContent = quoteData.a; // a 是作者
        })
        .catch(error => {
            // 如果抓取失敗，顯示錯誤訊息
            console.error('抓取每日一句時發生錯誤:', error);
            quoteTextElement.textContent = '今日的靜心小語迷路了，但請記得，平靜總在你的心中。';
        });
});```
