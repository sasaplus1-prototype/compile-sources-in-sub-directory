module.exports = {
  a({ name = '' }) {
    const out = name ? `Hi ${name}!` : 'Hello!';

    console.log(out);
  },
  b({ name = '' }) {
    return new Promise(
      resolve => resolve(name ? `Hi ${name}!` : 'Hello!')
    );
  },
  c() {
    return <div />;
  }
};
