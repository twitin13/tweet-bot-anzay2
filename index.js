import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';

// 🔑 Ambil environment variables dari GitHub Secrets
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

(async () => {
  try {
    // 📝 Isi tweet kamu
    const textTweet = `
Ayam Koplo by Hangry on SHOPEEFOOD DISKON jadi 7Ka an aja ✨😭 Nasi Ayam Goreng Penyet + Sambel 🍗 

Pakai voucher disini sekarang👇👇
spf.shopee.co.id/10sWUtZlnB
spf.shopee.co.id/10sWUtZlnB

t. gofood grabfood kode promo go grab shopee food sfood daget gojek thr shopeepay
`;

    // 📸 Upload dua gambar
    const mediaId1 = await client.v1.uploadMedia('1.jpg');
    const mediaId2 = await client.v1.uploadMedia('2.jpg');

    // 🐦 Kirim tweet dengan teks + dua gambar
    const tweet = await client.v2.tweet({
      text: textTweet,
      media: { media_ids: [mediaId1, mediaId2] },
    });

    console.log('✅ Tweet terkirim:', tweet.data.id);
  } catch (error) {
    console.error('❌ Gagal kirim tweet:', error);
  }
})();
