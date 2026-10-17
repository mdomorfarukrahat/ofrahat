export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, message } = req.body || {};

    if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required.' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return res.status(500).json({ error: 'Server configuration error: missing credentials.' });
    }

    const text = `💬 *Portfolio Website Message*\n\n👤 *From:* ${name}\n📝 *Message:* ${message}\n\n🌐 *Source:* ${req.headers.referer || 'Portfolio'}`;

    try {
        const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown'
            })
        });

        const telegramData = await telegramRes.json();

        if (telegramData.ok) {
            return res.status(200).json({ success: true, message: 'Delivered' });
        } else {
            console.error('Telegram API error:', telegramData);
            return res.status(502).json({ error: telegramData.description || 'Telegram rejected message.' });
        }
    } catch (err) {
        console.error('Network error reaching Telegram:', err);
        return res.status(500).json({ error: 'Failed to contact Telegram API.' });
    }
}
