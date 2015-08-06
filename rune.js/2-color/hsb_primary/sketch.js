var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

r.rect(0, 0, 200, r.height)
  .fill(Rune.HSV, 0, 100, 100)
  .stroke(false);

r.rect(200, 0, 200, r.height)
  .fill(Rune.HSV, 120, 100, 100)
  .stroke(false);

r.rect(400, 0, 200, r.height)
  .fill(Rune.HSV, 240, 100, 100)
  .stroke(false);

r.draw();