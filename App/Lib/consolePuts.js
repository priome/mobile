console.puts = (string) => console.log(`%c ${string}`, customStyle)

const customStyle = [
  'background: #111111',
  'color: fuchsia',
  'display: block',
  'line-height: 20px',
  'padding: 5px 13px 5px 5px',
  'font-size: 1rem'
].join(';')
