import bcrypt from 'bcrypt';
async function hash() {
  const h = await bcrypt.hash('adya2026', 10);
  console.log('HASH:', h);
}
hash();
