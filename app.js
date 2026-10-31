// Конфигурация 20 цветовых палитр, оригинального бинарного шума из Ава Генератора (SoMe Friends),
// градиентного пятна на фоне, анимаций и расширенной библиотеки форм

// 20 гармоничных пресетов цветовых палитр, которые можно выбирать вручную, рандомизировать и закреплять замком
const PALETTE_MODES = [
  { id: "pal-01", label: "Киото Осень" },
  { id: "pal-02", label: "Неоновый Токио" },
  { id: "pal-03", label: "Природа Дзен" },
  { id: "pal-04", label: "Маття и Сакура" },
  { id: "pal-05", label: "Северное Море" },
  { id: "pal-06", label: "Персиковый Закат" },
  { id: "pal-07", label: "Лавандовый Сон" },
  { id: "pal-08", label: "Ретро Аркада" },
  { id: "pal-09", label: "Лесной Кодама" },
  { id: "pal-10", label: "Королевский Бархат" },
  { id: "pal-11", label: "Клубничное Молоко" },
  { id: "pal-12", label: "Кибер Матрица" },
  { id: "pal-13", label: "Пустыня Дюна" },
  { id: "pal-14", label: "Океанская Бездна" },
  { id: "pal-15", label: "Карамельный Латте" },
  { id: "pal-16", label: "Фуксия и Полночь" },
  { id: "pal-17", label: "Скандинавский Уют" },
  { id: "pal-18", label: "Тропический Манго" },
  { id: "pal-19", label: "Лунный Фарфор" },
  { id: "pal-20", label: "Золотой Дракон" }
];

// Вспомогательный конструктор пресета палитры из 17 гармоничных цветов
function createPalettePreset(name, swatches) {
  return {
    name,
    swatches,
    skins: [swatches[0], swatches[1], swatches[2], swatches[3], swatches[11], swatches[9]],
    hairs: [swatches[4], swatches[5], swatches[6], swatches[7], swatches[8], swatches[9], swatches[11], swatches[13], swatches[10]],
    eyes: [swatches[4], swatches[8], swatches[5], swatches[7], swatches[15]],
    mouths: [swatches[4], swatches[5], swatches[15]],
    bodies: [swatches[4], swatches[7], swatches[5], swatches[8], swatches[15], swatches[16], swatches[14]],
    accents: [swatches[10], swatches[6], swatches[9], swatches[5], swatches[11], swatches[12], swatches[13], swatches[14]]
  };
}

const PALETTES = {
  "pal-01": createPalettePreset("Киото Осень", [
    "#FBE5D8", "#F3C6AC", "#D99B78", "#9C664C",
    "#232126", "#E05A47", "#F2C14E", "#5A7D7C",
    "#5E49F4", "#F472B6", "#7EBCE6", "#F4F1EA",
    "#A8D5BA", "#C3A6E8", "#F7A072", "#9E4756", "#7D8C75"
  ]),
  "pal-02": createPalettePreset("Неоновый Токио", [
    "#FFF0E6", "#FAD2B8", "#E2A37E", "#8D5B4C",
    "#1B192E", "#FF4D6D", "#FFD166", "#06D6A0",
    "#7209B7", "#FF85A1", "#4CC9F0", "#F8F9FA",
    "#80ED99", "#B5179E", "#F77F00", "#D90429", "#4A4E69"
  ]),
  "pal-03": createPalettePreset("Природа Дзен", [
    "#FDF0D5", "#EBC8B2", "#C68B59", "#7F5539",
    "#2B2118", "#C85A32", "#E9C46A", "#84A98C",
    "#457B9D", "#E5989B", "#A8DADC", "#F4F1DE",
    "#52796F", "#9D8189", "#F4A261", "#6D597A", "#606C38"
  ]),
  "pal-04": createPalettePreset("Маття и Сакура", [
    "#FFF5F7", "#F7D6DF", "#E5B3BE", "#9E6B78",
    "#233329", "#E85D75", "#F9C784", "#4F772D",
    "#90A955", "#FF8FA3", "#A3C9A8", "#FAF9F6",
    "#C7E8CA", "#D8B4E2", "#F4978E", "#6B2D5C", "#31572C"
  ]),
  "pal-05": createPalettePreset("Северное Море", [
    "#F0F4F8", "#D9E2EC", "#BCCCDC", "#829AB1",
    "#102A43", "#E63946", "#F4A261", "#2A9D8F",
    "#1D3557", "#F28482", "#457B9D", "#F8FAFC",
    "#A8DADC", "#8ECAE6", "#FFB703", "#335C67", "#264653"
  ]),
  "pal-06": createPalettePreset("Персиковый Закат", [
    "#FFF3E6", "#FFD8BE", "#F4A27E", "#A45A3D",
    "#2D1E2F", "#FF5A5F", "#FFBE0B", "#FB5607",
    "#8338EC", "#FF85A1", "#FF9F1C", "#FFFBF7",
    "#FFCAD4", "#B5838D", "#F77F00", "#9B2226", "#6D597A"
  ]),
  "pal-07": createPalettePreset("Лавандовый Сон", [
    "#F8F5FF", "#E9D8FD", "#C4B5FD", "#7C6A96",
    "#1E1B4B", "#EC4899", "#FBBF24", "#6366F1",
    "#8B5CF6", "#F472B6", "#38BDF8", "#FAF5FF",
    "#A7F3D0", "#C084FC", "#FB7185", "#4C1D95", "#4338CA"
  ]),
  "pal-08": createPalettePreset("Ретро Аркада", [
    "#FFF8E7", "#F7D1B2", "#D6956A", "#854D27",
    "#141115", "#FF0055", "#FFBE0B", "#00F5D4",
    "#3A86FF", "#FF5D8F", "#00BBF9", "#F4F4F6",
    "#9BF6FF", "#9B5DE5", "#F15BB5", "#8338EC", "#2B2D42"
  ]),
  "pal-09": createPalettePreset("Лесной Кодама", [
    "#F4F1EA", "#E2D5C1", "#B89F7D", "#785E3E",
    "#1B2A1E", "#D95D39", "#E9C46A", "#2D6A4F",
    "#40916C", "#E07A5F", "#74C69D", "#FAF8F5",
    "#B7E4C7", "#95D5B2", "#F4A261", "#52796F", "#344E41"
  ]),
  "pal-10": createPalettePreset("Королевский Бархат", [
    "#FBF5F3", "#EAD2C8", "#C89D8B", "#85584A",
    "#1A0F1E", "#C9184A", "#FFB703", "#5A189A",
    "#3C096C", "#FF758F", "#7209B7", "#F8F4F9",
    "#E0AAFF", "#9D4EDD", "#F48C06", "#800F2F", "#240046"
  ]),
  "pal-11": createPalettePreset("Клубничное Молоко", [
    "#FFF0F3", "#FFCCD5", "#FFA3B5", "#A65668",
    "#3B1C26", "#FF4D6D", "#FFD166", "#FF758F",
    "#C9184A", "#FF8FA3", "#A2D2FF", "#FFF9FA",
    "#BDE0FE", "#FFC8DD", "#FFAFCC", "#800F2F", "#590D22"
  ]),
  "pal-12": createPalettePreset("Кибер Матрица", [
    "#ECFDF5", "#D1FAE5", "#6EE7B7", "#047857",
    "#091512", "#10B981", "#FACC15", "#06B6D4",
    "#3B82F6", "#34D399", "#22D3EE", "#F0FDF4",
    "#A7F3D0", "#818CF8", "#F43F5E", "#065F46", "#115E59"
  ]),
  "pal-13": createPalettePreset("Пустыня Дюна", [
    "#FDF6EC", "#F3DEC2", "#D8A977", "#8C5832",
    "#261811", "#CB481E", "#EBA83A", "#4A6B5D",
    "#2B5B6C", "#E07A5F", "#81B29A", "#FAF3E8",
    "#F2CC8F", "#B56576", "#D97706", "#78290F", "#583101"
  ]),
  "pal-14": createPalettePreset("Океанская Бездна", [
    "#E0F2FE", "#BAE6FD", "#7DD3FC", "#0369A1",
    "#081C2E", "#FF5964", "#FFE74C", "#00A896",
    "#028090", "#FF7F51", "#38BDF8", "#F0F9FF",
    "#90E0EF", "#48CAE4", "#F4A261", "#05668D", "#0077B6"
  ]),
  "pal-15": createPalettePreset("Карамельный Латте", [
    "#FAF3EB", "#EDD8C4", "#C99E7A", "#7D5236",
    "#231710", "#D45D3A", "#F0B454", "#6B8E78",
    "#4A6670", "#E28E79", "#8AB0AB", "#FDFBF7",
    "#D8C3A5", "#A27B5C", "#E07A3E", "#6F4E37", "#3F2E21"
  ]),
  "pal-16": createPalettePreset("Фуксия и Полночь", [
    "#FDF2F8", "#FCE7F3", "#F49AC2", "#8D4667",
    "#130D26", "#F72585", "#FEE440", "#4CC9F0",
    "#4361EE", "#FF70A6", "#3A0CA3", "#FAF5FF",
    "#72EFDD", "#B5179E", "#FF9770", "#7209B7", "#240046"
  ]),
  "pal-17": createPalettePreset("Скандинавский Уют", [
    "#F7F5F0", "#E6DFD3", "#C2B29B", "#7C6E5A",
    "#222629", "#D96B52", "#E2B458", "#5C7A72",
    "#3E5C76", "#D88C8C", "#8EA8B2", "#FCFAF7",
    "#B8C9C3", "#9C8998", "#E08E6D", "#584B53", "#415A77"
  ]),
  "pal-18": createPalettePreset("Тропический Манго", [
    "#FFF8EB", "#FFE1B8", "#F4B06C", "#9A5B25",
    "#1E241E", "#FF5400", "#FFBD00", "#00A878",
    "#007EA7", "#FF6B6B", "#4ECDC4", "#FFFDF9",
    "#A8E6CF", "#FF8B94", "#FF9F1C", "#D62828", "#2EC4B6"
  ]),
  "pal-19": createPalettePreset("Лунный Фарфор", [
    "#F8FAFC", "#E2E8F0", "#CBD5E1", "#64748B",
    "#0F172A", "#E11D48", "#F59E0B", "#3B82F6",
    "#4F46E5", "#F43F5E", "#60A5FA", "#FFFFFF",
    "#93C5FD", "#A5B4FC", "#FB7185", "#1E3A8A", "#334155"
  ]),
  "pal-20": createPalettePreset("Золотой Дракон", [
    "#FFF5EB", "#F5D5B8", "#CC9568", "#7A4824",
    "#1C1012", "#D92B2B", "#F5B700", "#1F7A68",
    "#8C1D40", "#F26444", "#4BA3C3", "#FDF8F2",
    "#80C2AF", "#B84A62", "#F29F05", "#731717", "#3D1E24"
  ])
};
// Обратная совместимость ключей A / B / C
PALETTES.A = PALETTES["pal-01"];
PALETTES.B = PALETTES["pal-02"];
PALETTES.C = PALETTES["pal-03"];

const UNIVERSAL_PALETTE = PALETTES["pal-01"].swatches;

// 10 пресетов движения рук (с амплитудой 5% от холста)
const HAND_ANIM_PRESETS = [
  { id: "floatSync", label: "Синхронное парение" },
  { id: "floatAlt", label: "Качели в противофазе" },
  { id: "waveHello", label: "Приветственный взмах" },
  { id: "pulseBeat", label: "Ритмичный пульс" },
  { id: "orbitCircle", label: "Круговая орбита" },
  { id: "clapBounce", label: "Сближение ладошек" },
  { id: "shiverExcite", label: "Радостный трепет" },
  { id: "zenSway", label: "Дзен-маятник" },
  { id: "figureEight", label: "Восьмёрка" },
  { id: "magicCast", label: "Магический каст" }
];

// 8 пресетов анимации наклона головы и всех наследующих её элементов (±7° в каждую сторону от 0° на севере)
const HEAD_ANIM_PRESETS = [
  { id: "pendulumSmooth", label: "Маятник (±7°)" },
  { id: "curiousTilt", label: "Любопытный наклон" },
  { id: "happyBob", label: "Весёлый ритм" },
  { id: "shyPeek", label: "Застенчивый взгляд" },
  { id: "musicGroove", label: "Музыкальный грув" },
  { id: "dreamyFloat", label: "Сонная волна" },
  { id: "sassySnap", label: "Бодрый акцент" },
  { id: "zenBreath", label: "Дзен-дыхание" }
];

// Вспомогательная функция осветления/затемнения любого HEX-цвета для построения мягких градиентов и теней
function adjustHexColor(hex, amount) {
  const clean = String(hex || "#232126").replace(/^#/, "").trim();
  const num = parseInt(clean.length === 6 ? clean : "232126", 16);
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
  const r = clamp(((num >> 16) & 255) + amount);
  const g = clamp(((num >> 8) & 255) + amount);
  const b = clamp((num & 255) + amount);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Получение производных оттенков (база, чистая насыщенная тень со сдвигом оттенка, блик) из любого выбранного HEX-цвета
function buildShades(hex) {
  const base = String(hex || "#232126").toUpperCase();
  return {
    base,
    shadow: shiftColorCleanly(base, -12, 0.1, -0.09),
    deep: shiftColorCleanly(base, -20, 0.16, -0.17),
    hi: adjustHexColor(base, 32),
    soft: adjustHexColor(base, 64)
  };
}

// 3 варианта текстуры шума из Ава Генератора (#sf-noise, #sf-noise-2, #sf-noise-3 с наложением mix-blend-mode: overlay)
const NOISE_MODES = [
  { id: "mix", label: "Микс 3 шумов (Рандом)" },
  { id: "v1", label: "1. Бархатный (sf-noise)" },
  { id: "v2", label: "2. Крупный (sf-noise-2)" },
  { id: "v3", label: "3. Плотный (sf-noise-3)" }
];

// Типы крупного геометрического паттерна, вычитающего шум (16 режимов)
const GEO_CUTOUT_MODES = [
  { id: "random", label: "Гео-вычитание: Рандом" },
  { id: "stripes", label: "Крупные диагонали" },
  { id: "circles", label: "Круги Баухауса" },
  { id: "triangles", label: "Мягкие призмы" },
  { id: "blocks", label: "Квадраты-блоки" },
  { id: "waves", label: "Волны Сэйгайха" },
  { id: "zigzags", label: "Зигзаг молнии" },
  { id: "stars", label: "Звёздные вспышки" },
  { id: "hearts", label: "Сердца-силуэты" },
  { id: "diamonds", label: "Ромбы Аргайл" },
  { id: "rings", label: "Кольца-орбиты" },
  { id: "crosses", label: "Плюсы и кресты" },
  { id: "crescents", label: "Лунные серпы" },
  { id: "hexagons", label: "Соты-гексагоны" },
  { id: "spirals", label: "Вихревые лепестки" },
  { id: "none", label: "Без вычитания" }
];

// 22 фона с мягким градиентным пятном-аурой в центре (linear -base + radial -core)
const BACKGROUNDS = [
  { id: "grad-01", label: "1. Розовый пион (SoMe #1)", top: "FFF1F2", mid: "FFD4E0", core: "FF69A1", bottom: "FFADC9" },
  { id: "grad-02", label: "2. Солнечный янтарь (SoMe #2)", top: "FFF800", mid: "FFE600", core: "FFB903", bottom: "FED600" },
  { id: "grad-03", label: "3. Мятный матча (SoMe #3)", top: "EAF9E6", mid: "B7EAC9", core: "54B565", bottom: "98D5A0" },
  { id: "grad-04", label: "4. Океан циан (SoMe #4)", top: "99F9F8", mid: "78E6EC", core: "36A0C3", bottom: "6BCBDA" },
  { id: "grad-05", label: "5. Лаванда индиго (SoMe #5)", top: "ECDDFE", mid: "C1BEFC", core: "5E49F4", bottom: "A393F8" },
  { id: "grad-06", label: "6. Персиковый закат", top: "FFF5EB", mid: "FFD1B3", core: "FF6B4A", bottom: "FFA07A" },
  { id: "grad-07", label: "7. Сакура и небо", top: "E0F2FE", mid: "F5D0FE", core: "F472B6", bottom: "BAE6FD" },
  { id: "grad-08", label: "8. Ночной неон", top: "1E1B4B", mid: "312E81", core: "6366F1", bottom: "0F172A" },
  { id: "grad-09", label: "9. Рассвет Киото", top: "FFDDD2", mid: "F7CAD0", core: "E29578", bottom: "EDF6F9" },
  { id: "grad-10", label: "10. Спелая хурма", top: "FFF1E6", mid: "FDE2E4", core: "F4A261", bottom: "E9C46A" },
  { id: "grad-11", label: "11. Хоккайдо Лёд", top: "EDF2FB", mid: "D7E3FC", core: "749BC2", bottom: "CCDBFD" },
  { id: "grad-12", label: "12. Песок Дзен", top: "F6F4F0", mid: "EFECE6", core: "C8B6A6", bottom: "DFD9CE" },
  { id: "grad-13", label: "13. Юдзу и Лайм", top: "FDF8E1", mid: "F4F1BB", core: "9BC1BC", bottom: "E6EBE0" },
  { id: "grad-14", label: "14. Аргоновый Бриз", top: "D8F3DC", mid: "B7E4C7", core: "40916C", bottom: "A9DEF9" },
  { id: "grad-15", label: "15. Тушь и Жемчуг", top: "ECEFF1", mid: "CFD8DC", core: "607D8B", bottom: "B0BEC5" },
  { id: "grad-16", label: "16. Аметистовый туман", top: "F5F3FF", mid: "DDD6FE", core: "8B5CF6", bottom: "C4B5FD" },
  { id: "grad-17", label: "17. Коралловый риф", top: "FFF1F2", mid: "FECDD3", core: "F43F5E", bottom: "FDA4AF" },
  { id: "grad-18", label: "18. Изумрудный лес", top: "ECFDF5", mid: "A7F3D0", core: "10B981", bottom: "6EE7B7" },
  { id: "grad-19", label: "19. Северное сияние", top: "E0E7FF", mid: "A5F3FC", core: "06B6D4", bottom: "C084FC" },
  { id: "grad-20", label: "20. Карамельный латте", top: "FEF3C7", mid: "FDE68A", core: "D97706", bottom: "FCD34D" },
  { id: "grad-21", label: "21. Кибер-пурпур", top: "FDF4FF", mid: "F5D0FE", core: "D946EF", bottom: "F0ABFC" },
  { id: "grad-22", label: "22. Глубокий космос", top: "0F172A", mid: "1E293B", core: "38BDF8", bottom: "312E81" }
];

// Кэш сгенерированных PNG-текстур зернистого шума по формуле Ава Генератора
const noiseUriCache = {};

// Генерация текстуры шума для mix-blend-mode: overlay, которая затемняет и насыщает любой цвет без серой грязи и муара
function getNoiseDataUri(intensityMode) {
  const mode = intensityMode || "normal";
  if (noiseUriCache[mode]) return noiseUriCache[mode];

  let alphaVal = 155;
  // Размер 240x240 для viewBox 400x400 даёт то же мягкое соотношение масштаба (1.67x), что 528x528 для 881x905 в Ава Генераторе (без муара)
  let size = 240;
  if (mode === "none") {
    alphaVal = 0;
    size = 16;
  } else if (mode === "soft") {
    alphaVal = 110;
  } else if (mode === "strong") {
    alphaVal = 195;
  }

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const imgData = ctx.createImageData(size, size);
  const d = imgData.data;

  // Детерминированный PRNG xorshift32: прозрачные промежутки (alpha=0) не дают серого налёта при билинейной фильтрации,
  // а глубокие частицы в режиме mix-blend-mode: overlay затемняют и повышают насыщенность и синего, и кораллового, и кожи
  let seed = 2463534242;
  for (let i = 0; i < d.length; i += 4) {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    const isLight = (seed >>> 0) % 100 < 52;
    d[i] = 18;
    d[i + 1] = 10;
    d[i + 2] = 28;
    d[i + 3] = isLight ? 0 : alphaVal;
  }
  ctx.putImageData(imgData, 0, 0);
  const uri = canvas.toDataURL("image/png");
  noiseUriCache[mode] = uri;
  return uri;
}

// Библиотека форм (расширенные коллекции лиц с пухлыми щёчками, ушей, серёжек, глаз, кудрявых/волнистых волос, одежды и моноклей)
const OPTIONS = {
  face: [
    { id: "mochi", label: "1. Моти-щёчки" },
    { id: "pebble", label: "2. Капсула" },
    { id: "jaw", label: "3. Гео-челюсть" },
    { id: "onigiri", label: "4. Онигири" },
    { id: "sphere", label: "5. Шар Кокэси" },
    { id: "daruma", label: "6. Дарума" },
    { id: "pear", label: "7. Груша-пухляш" },
    { id: "diamond", label: "8. Мягкие скулы" },
    { id: "heart", label: "9. Сердечко" },
    { id: "hexagon", label: "10. Гекса-овал" },
    { id: "chubbySq", label: "11. Тост-щёчки" },
    { id: "kitsune", label: "12. Острый подбородок" },
    { id: "cloudFace", label: "13. Нежный овал" },
    { id: "shield", label: "14. Арка-щит" },
    { id: "dumpling", label: "15. Гёдза-пельмешек" },
    { id: "baobao", label: "16. Булочка Бао" },
    { id: "hamster", label: "17. Пухлый хомячок" },
    { id: "marshmallow", label: "18. Зефирные щёчки" },
    { id: "totoroCheeks", label: "19. Супер-пухляш" },
    { id: "daifuku", label: "20. Рисовый дайфуку" },
    { id: "pudding", label: "21. Мягкий пудинг" },
    { id: "chubbyPear", label: "22. Толстые щёчки" }
  ],
  ears: [
    { id: "round", label: "1. Круглые" },
    { id: "oval", label: "2. Аккуратные" },
    { id: "elfShort", label: "3. Полу-эльф" },
    { id: "elfLong", label: "4. Лесной эльф" },
    { id: "elfHorizontal", label: "5. Эльф (горизонтальные)" },
    { id: "droopy", label: "6. Опущенные" },
    { id: "chubby", label: "7. Пухлые мочки" },
    { id: "tiny", label: "8. Мини-ушки" },
    { id: "big", label: "9. Лопоухие" },
    { id: "pixie", label: "10. Фея-пикси" },
    { id: "fin", label: "11. Плавники сирены" },
    { id: "cyberEar", label: "12. Кибер-сенсоры" },
    { id: "pierced", label: "13. С каффами" },
    { id: "furTuft", label: "14. С кисточками" },
    { id: "heartEar", label: "15. Лепестки" },
    { id: "none", label: "16. Скрыты" }
  ],
  earrings: [
    { id: "none", label: "1. Без серёжек" },
    { id: "studsSmall", label: "2. Мелкие пусеты" },
    { id: "studsBig", label: "3. Крупные сферы" },
    { id: "hoopsThin", label: "4. Тонкие кольца" },
    { id: "hoopsThick", label: "5. Крупные кольца-конго" },
    { id: "oneCross", label: "6. Один крестик" },
    { id: "doubleCross", label: "7. Парные крестики" },
    { id: "longDrops", label: "8. Длинные капли" },
    { id: "doublePearls", label: "9. Двойной жемчуг" },
    { id: "tassels", label: "10. Шёлковые кисти" },
    { id: "starsEar", label: "11. Звёздочки" },
    { id: "heartsEar", label: "12. Сердечки" },
    { id: "diamondsEar", label: "13. Гео-ромбы" },
    { id: "chains", label: "14. Длинные цепочки" },
    { id: "moonSun", label: "15. Полумесяц и сфера" }
  ],
  eyes: [
    { id: "dots", label: "1. Бусинки" },
    { id: "happy", label: "2. Улыбки-дуги" },
    { id: "calm", label: "3. Дзен-плашки" },
    { id: "sparkle", label: "4. Звёздочки" },
    { id: "wink", label: "5. Подмигивание" },
    { id: "sleepy", label: "6. Полукруги" },
    { id: "wide", label: "7. Двойные сферы" },
    { id: "anime", label: "8. Капсулы с бликом" },
    { id: "cross", label: "9. Крестики" },
    { id: "chevrons", label: "10. Уголки > <" },
    { id: "vertical", label: "11. Кодекс-штрихи" },
    { id: "catSlit", label: "12. Лисьи лепестки" },
    { id: "hearts", label: "13. Сердечки" },
    { id: "diamonds", label: "14. Ромбы" },
    { id: "cyclops", label: "15. Три ока Аргона" },
    { id: "lashOval", label: "16. С ресничками" },
    { id: "sleepyArc", label: "17. Сонные дуги" },
    { id: "swirlEyes", label: "18. Завитки-спирали" },
    { id: "catPupil", label: "19. Кошачьи зрачки" },
    { id: "halfLids", label: "20. Полуприкрытые" },
    { id: "starburst", label: "21. Лучистые искры" },
    { id: "teardropEyes", label: "22. Нежные капли" },
    { id: "ringEyes", label: "23. Кольца-линзы" },
    { id: "cyberEyes", label: "24. Неоновые плашки" },
    { id: "slySquint", label: "25. Хитрый прищур" },
    { id: "doubleSparkle", label: "26. Двойные блики" },
    { id: "crescentUp", label: "27. Полумесяцы вверх" },
    { id: "crescentDown", label: "28. Полумесяцы вниз" },
    { id: "softDiamonds", label: "29. Мягкие кристаллы" },
    { id: "sleepyDots", label: "30. Сонные точки" },
    { id: "wideOval", label: "31. Большие овалы" },
    { id: "cuteLashes", label: "32. Кукольные ресницы" },
    { id: "animeStar", label: "33. Звёздные зрачки" },
    { id: "angryBrows", label: "34. Сердитый взгляд" },
    { id: "sadDroop", label: "35. Грустные уголки" },
    { id: "heartPupil", label: "36. Блик-сердечко" },
    { id: "yinYang", label: "37. Двухцветные сферы" },
    { id: "pixelEyes", label: "38. Скруглённые квадраты" },
    { id: "buttonStitch", label: "39. Пуговки" },
    { id: "moonEyes", label: "40. Лунные серпы" },
    { id: "doubleRing", label: "41. Гипно-кольца" },
    { id: "foxSlant", label: "42. Миндалевидные" },
    { id: "glossyOrbs", label: "43. Росинки" },
    { id: "zenLines", label: "44. Двойной штрих" },
    { id: "argonPulse", label: "45. Сияние Аргона" },
    { id: "pleadingCat", label: "46. Котёнок с бликами" },
    { id: "raisedBrow", label: "47. Вскинутая бровь" },
    { id: "sadTears1", label: "48. Грустные со слезинками" },
    { id: "sadTears2", label: "49. Плачущие ручьём" },
    { id: "sadTears3", label: "50. Дрожащие слёзки" },
    { id: "sadTears4", label: "51. Тихая грусть (слеза)" },
    { id: "angryFury", label: "52. Яростный прищур" },
    { id: "angryFire", label: "53. Пылающий гнев" },
    { id: "angryDemon", label: "54. Демонический взор" },
    { id: "angryVein", label: "55. С жилкой гнева" },
    { id: "angrySlit", label: "56. Хищные вертикали" },
    { id: "angryShadow", label: "57. Тень исподлобья" },
    { id: "angryCross", label: "58. Боевой крест-взгляд" },
    { id: "angryGlowing", label: "59. Сверкающие гневом" },
    { id: "angryTwitch", label: "60. Нервный прищур" },
    { id: "angryLaser", label: "61. Заряженный взгляд" }
  ],
  nose: [
    { id: "button", label: "1. Кнопочка" },
    { id: "triangle", label: "2. Призма вверх" },
    { id: "invTriangle", label: "3. Призма вниз" },
    { id: "capsule", label: "4. Капсула" },
    { id: "oval", label: "5. Горизонтальный" },
    { id: "diamondNose", label: "6. Ромбик" },
    { id: "drop", label: "7. Капелька" },
    { id: "bridge", label: "8. Переносица-брус" },
    { id: "nostrils", label: "9. Две точки" },
    { id: "archNose", label: "10. Купол" },
    { id: "squareNose", label: "11. Пиксель-куб" },
    { id: "heartNose", label: "12. Носик-сердце" },
    { id: "wedge", label: "13. Клин-тень" },
    { id: "starNose", label: "14. Искра" },
    { id: "none", label: "15. Без носа" }
  ],
  mouth: [
    { id: "smile", label: "1. Мягкая дуга" },
    { id: "flat", label: "2. Спокойная плашка" },
    { id: "cat", label: "3. Котик :3" },
    { id: "whistle", label: "4. О-ротик" },
    { id: "smileWide", label: "5. Полукруг радости" },
    { id: "tongue", label: "6. Язычок" },
    { id: "smirk", label: "7. Асимметрия" },
    { id: "fang", label: "8. Микро-клык" },
    { id: "pout", label: "9. Грустинка" },
    { id: "dotMouth", label: "10. Точка-дзен" },
    { id: "triangleMouth", label: "11. Гео-призма" },
    { id: "rabbit", label: "12. Две пластинки" },
    { id: "diamondMouth", label: "13. Ромб-удивление" },
    { id: "beardMini", label: "14. Улыбка с точкой" },
    { id: "mustache", label: "15. Волнистая улыбка" }
  ],
  hairBack: [
    { id: "none", label: "1. Без задних" },
    { id: "bob", label: "2. Классическое каре" },
    { id: "frenchBob", label: "3. Французское каре" },
    { id: "aLineBob", label: "4. Каре А-силуэт" },
    { id: "curledBob", label: "5. Каре с подкруткой" },
    { id: "longBob", label: "6. Удлинённое каре" },
    { id: "puffyBob", label: "7. Пышное каре-моти" },
    { id: "miniBob", label: "8. Мини-каре до ушей" },
    { id: "asymBob", label: "9. Асимметричное каре" },
    { id: "layeredBob", label: "10. Каскадное каре" },
    { id: "bellBob", label: "11. Каре-колокольчик" },
    { id: "hime", label: "12. Длинный Химэ" },
    { id: "cloud", label: "13. Облачный ореол" },
    { id: "afro", label: "14. Мега-сфера" },
    { id: "pigtails", label: "15. Два хвостика" },
    { id: "lowBuns", label: "16. Нижние пучки" },
    { id: "cone", label: "17. Мягкая трапеция" },
    { id: "curls", label: "18. Каскад колец" },
    { id: "longWave", label: "19. Волна до пояса" },
    { id: "spikyBack", label: "20. Мягкие лучи" },
    { id: "wings", label: "21. Крылышки по бокам" },
    { id: "braids", label: "22. Две гео-косы" },
    { id: "shortRound", label: "23. Короткая шапка" },
    { id: "cloakHair", label: "24. Шлейф Аргона" },
    { id: "twinLoops", label: "25. Кольца-петельки" },
    { id: "jellyfish", label: "26. Медуза-силуэт" },
    { id: "wolfCut", label: "27. Вулф-кат ярусы" },
    { id: "bubblePony", label: "28. Пузырьковые хвосты" },
    { id: "fanHair", label: "29. Веер Киото" },
    { id: "ribbonLocks", label: "30. Длинные ленты" },
    { id: "curlyCloud", label: "31. Кудрявое облако" },
    { id: "spiralLocks", label: "32. Длинные спирали" },
    { id: "oceanWaves", label: "33. Морские волны" },
    { id: "sheepCurls", label: "34. Кудряшки барашка" },
    { id: "vintageWaves", label: "35. Ретро-волны" },
    { id: "ringletsTwin", label: "36. Два локона-буравчика" },
    { id: "fluffyCurlyBob", label: "37. Кудрявое каре" },
    { id: "wavyLob", label: "38. Волнистый лоб" },
    { id: "coilyHalo", label: "39. Афро-завитки" },
    { id: "mermaidWaves", label: "40. Волны русалки" },
    { id: "springPigtails", label: "41. Хвосты-пружинки" },
    { id: "cherubCurls", label: "42. Завитки купидона" },
    { id: "cascadingCurls", label: "43. Кудрявый водопад" },
    { id: "waveFlip", label: "44. Волна наружу" },
    { id: "doubleCloudCurls", label: "45. Двойные кудри" },
    { id: "gypsyCurls", label: "46. Пышные кудри до плеч" },
    { id: "softSiren", label: "47. Мягкий S-изгиб" },
    { id: "ringletCrownBack", label: "48. Венок из локонов" },
    { id: "twistBraids", label: "49. Витые жгуты" },
    { id: "velvetWaves", label: "50. Бархатные волны" }
  ],
  hairBangs: [
    { id: "none", label: "1. Открытый лоб" },
    { id: "straight", label: "2. Каре с прядями" },
    { id: "curtain", label: "3. Шторки-дуги" },
    { id: "cloudBangs", label: "4. Три облачка" },
    { id: "himeBangs", label: "5. Ровный блок Химэ" },
    { id: "spikyBangs", label: "6. Мягкие зубцы" },
    { id: "sideSweep", label: "7. Косая волна" },
    { id: "bowlBangs", label: "8. Купол-горшок" },
    { id: "vBang", label: "9. Мягкий мысик" },
    { id: "micro", label: "10. Ультра-короткая" },
    { id: "splitLocks", label: "11. Две длинные пряди" },
    { id: "roundPuffs", label: "12. Четыре сферы" },
    { id: "asymBlock", label: "13. Гео-ступенька" },
    { id: "oneEye", label: "14. На один глаз" },
    { id: "centerLock", label: "15. Прядь по центру" },
    { id: "bobBangs", label: "16. Густая чёлка-каре" },
    { id: "frenchBangs", label: "17. Рваное мини-каре" },
    { id: "archBangs", label: "18. Выгнутая арка" },
    { id: "twinWaves", label: "19. Двойная волна" },
    { id: "choppy", label: "20. Клавиши-прядки" },
    { id: "wispy", label: "21. Три лёгких пера" },
    { id: "framedBob", label: "22. Каре-обрамление" },
    { id: "curvedIn", label: "23. Завитки к щекам" },
    { id: "diagonalCut", label: "24. Мягкая диагональ" },
    { id: "heartPart", label: "25. Пробор сердечком" },
    { id: "bluntWide", label: "26. Широкий монолит" },
    { id: "templeDrops", label: "27. Капли у висков" },
    { id: "zigBangs", label: "28. Ступенчатый ритм" },
    { id: "petalBangs", label: "29. Лепестки сакуры" },
    { id: "miniCurtain", label: "30. Мини-шторки" },
    { id: "curlyFringe", label: "31. Кудрявая чёлка" },
    { id: "spiralForelock", label: "32. Завиток на лбу" },
    { id: "wavyCurtain", label: "33. Волнистые шторки" },
    { id: "ringletsSide", label: "34. Височные буравчики" },
    { id: "retroWaveBang", label: "35. Голливудская волна" },
    { id: "cherubFringe", label: "36. Колечки у лба" },
    { id: "sWaveLocks", label: "37. S-волны вдоль лица" },
    { id: "fluffyCoils", label: "38. Пушистые завитки" },
    { id: "twinSpirals", label: "39. Две спирали" },
    { id: "seafoamBangs", label: "40. Морская пена" },
    { id: "cloudArchBangs", label: "41. Облачная арка" },
    { id: "lotusCenterBangs", label: "42. Лепесток по центру" },
    { id: "twinDropletsBangs", label: "43. Две капли на лбу" },
    { id: "softZigzagBangs", label: "44. Мягкая ступенька" },
    { id: "kimonoSweepBangs", label: "45. Шёлковый зачёс" },
    { id: "doubleCurtainLong", label: "46. Длинные шторки" },
    { id: "bubbleFringeBangs", label: "47. Пузырьковый ряд" },
    { id: "kitsuneLocksBangs", label: "48. Пряди Кицунэ" },
    { id: "crescentSweepBangs", label: "49. Полумесяц набок" },
    { id: "royalPartBangs", label: "50. Королевский пробор" }
  ],
  hairTop: [
    { id: "none", label: "1. Гладкий верх" },
    { id: "doubleBuns", label: "2. Два пучка Оданго" },
    { id: "topknot", label: "3. Самурай-узел" },
    { id: "ahoge", label: "4. Хохолок-капля" },
    { id: "mohawk", label: "5. Гребень дракона" },
    { id: "twinCones", label: "6. Мягкие конусы" },
    { id: "pompadour", label: "7. Ролл-валик" },
    { id: "tripleSpheres", label: "8. Корона из сфер" },
    { id: "highPony", label: "9. Высокий хвост" },
    { id: "boltAhoge", label: "10. Мягкая молния" },
    { id: "heartBun", label: "11. Пучок-сердце" },
    { id: "ringBun", label: "12. Кольцо-бублик" },
    { id: "feather", label: "13. Два пера" },
    { id: "cubeBun", label: "14. Скруглённый куб" },
    { id: "starTop", label: "15. Мягкая звезда" },
    { id: "bobCrown", label: "16. Объёмная макушка" },
    { id: "twinLoopsTop", label: "17. Два банта-петли" },
    { id: "braidCrown", label: "18. Коса-ободок" },
    { id: "miniHornsHair", label: "19. Пряди-ушки" },
    { id: "cloudPuffTop", label: "20. Зефирное облако" },
    { id: "doubleAhoge", label: "21. Двойная антенна" },
    { id: "sideBun", label: "22. Асимметричный пучок" },
    { id: "fanTop", label: "23. Веерный пучок" },
    { id: "StackedBuns", label: "24. Пирамида сфер" },
    { id: "curlCrest", label: "25. Волна-гребень" },
    { id: "twinTailsHigh", label: "26. Высокие каскады" },
    { id: "haloRingHair", label: "27. Кольцо-нимб" },
    { id: "cloverBun", label: "28. Трилистник" },
    { id: "dropCrest", label: "29. Три капли вверх" },
    { id: "croissantBun", label: "30. Рогалик-пучок" },
    { id: "curlyPuffBun", label: "31. Кудрявый пучок" },
    { id: "twinCurlyPuffs", label: "32. Два афро-пучка" },
    { id: "spiralAhoge", label: "33. Завиток-пружинка" },
    { id: "wavePompadour", label: "34. Волнистый кок" },
    { id: "ringletCascadeTop", label: "35. Фонтан локонов" },
    { id: "cloudCurlsTop", label: "36. Шапка кудрей" },
    { id: "twistedHornsTop", label: "37. Витые рожки-жгуты" },
    { id: "roseBun", label: "38. Пучок-розочка" },
    { id: "wavyRibbonTop", label: "39. Волнистый гребень" },
    { id: "doubleSpiralTop", label: "40. Двойной завиток" },
    { id: "lotusBudTop", label: "41. Бутон лотоса" },
    { id: "tripleOdangoTop", label: "42. Три пучка Оданго" },
    { id: "phoenixCrestTop", label: "43. Хохолок феникса" },
    { id: "ribbonBowBunTop", label: "44. Бант из волос" },
    { id: "twinStarBunsTop", label: "45. Пучки-звёздочки" },
    { id: "crescentAhogeTop", label: "46. Лунный завиток" },
    { id: "pagodaBunTop", label: "47. Ярусная пагода" },
    { id: "bunnyEarsHairTop", label: "48. Заячьи пряди" },
    { id: "zenKnotTop", label: "49. Узел мастера" },
    { id: "royalCrownBraidTop", label: "50. Высокий венец" }
  ],
  hairShort: [
    { id: "none", label: "1. Нет (Обычная)" },
    { id: "sidePartLeft", label: "2. Зачёс налево" },
    { id: "sidePartRight", label: "3. Зачёс направо" },
    { id: "undercutUp", label: "4. Андеркат наверх" },
    { id: "templeQuiff", label: "5. Квифф от висков" },
    { id: "fadeWaveLeft", label: "6. Фейд-волна налево" },
    { id: "frenchCrop", label: "7. Цезарь / Кроп" },
    { id: "fauxHawk", label: "8. Фохок от висков" },
    { id: "slickBack", label: "9. Слик-бэк назад" },
    { id: "ivyLeague", label: "10. Айви-лиг пробор" },
    { id: "buzzCut", label: "11. Ёжик / Базз-кат" },
    { id: "curlyFadeTop", label: "12. Кудрявый топ от висков" },
    { id: "commaHair", label: "13. Пробор 70/30" },
    { id: "spikyUpShort", label: "14. Иглы от висков" },
    { id: "wavySideLeft", label: "15. Волнистый зачёс налево" },
    { id: "shortPompadour", label: "16. Мужской помпадур" },
    { id: "flatTop", label: "17. Площадка от висков" },
    { id: "boxForelock", label: "18. Полубокс с чубом" },
    { id: "sideUndercut", label: "19. Косой андеркат" },
    { id: "velvetPart", label: "20. Мягкая классика" },
    { id: "centerCurtainShort", label: "21. Мужские шторки" },
    { id: "messyTexturedShort", label: "22. Текстурный беспорядок" },
    { id: "samuraiShort", label: "23. Короткий самурай" },
    { id: "afroFadeShort", label: "24. Афро-фейд" },
    { id: "silverFoxSweep", label: "25. Благородная волна" },
    { id: "kpopHeartShort", label: "26. K-pop сердечко" },
    { id: "spikyForwardShort", label: "27. Перья вперёд" },
    { id: "gentlemanSlickRight", label: "28. Гладкий пробор справа" },
    { id: "curlyDropShort", label: "29. Кудри на лоб" },
    { id: "cyberRazorShort", label: "30. Кибер-фейд с полоской" },
    { id: "monkTonsureShort", label: "31. Дзен-ободок" },
    { id: "windblownShort", label: "32. Порыв ветра" },
    { id: "doubleQuiffShort", label: "33. Двойная волна вверх" },
    { id: "softBowlShort", label: "34. Мягкая шапочка" },
    { id: "animeHeroShort", label: "35. Герой с вихрами" },
    { id: "retroGreaserShort", label: "36. Рокабилли-кок" },
    { id: "fluffyCloudShort", label: "37. Облачный кроп" },
    { id: "sharpFadeRight", label: "38. Высокий фейд направо" },
    { id: "surferWaveShort", label: "39. Волна сёрфера" },
    { id: "militaryHighTight", label: "40. Ультра-бокс" },
    { id: "twistedLocksShort", label: "41. Короткие жгуты" },
    { id: "nobleArchShort", label: "42. Аристократичный свод" },
    { id: "layeredFeatherShort", label: "43. Каскадные перья" },
    { id: "miniMulletShort", label: "44. Мягкий мини-маллет" },
    { id: "combOverClassic", label: "45. Классический комб-овер" },
    { id: "starburstShort", label: "46. Лучистая макушка" },
    { id: "wavyCenterShort", label: "47. Волнистый пробор" },
    { id: "tokyoDriftShort", label: "48. Токийский стиль" },
    { id: "zenPebbleShort", label: "49. Гладкий камень" },
    { id: "imperialCrestShort", label: "50. Имперский зачёс" }
  ],
  bodyShape: [
    { id: "dome", label: "1. Мягкий купол" },
    { id: "wide", label: "2. Оверсайз-капсула" },
    { id: "trapezoid", label: "3. Трапеция" },
    { id: "poncho", label: "4. Конус-пончо" },
    { id: "shoulders", label: "5. Плечи-атлант" },
    { id: "pufferBody", label: "6. Три яруса-дутика" },
    { id: "slim", label: "7. Узкий силуэт" },
    { id: "bell", label: "8. Колокольчик" },
    { id: "hexagonBody", label: "9. Гео-кристалл" },
    { id: "cloudBody", label: "10. Облачный торс" },
    { id: "armorBody", label: "11. Наплечники-щиты" },
    { id: "kimonoSleeve", label: "12. Широкие рукава" },
    { id: "dropBody", label: "13. Капля-моти" },
    { id: "squareBody", label: "14. Монолит-блок" },
    { id: "capeBody", label: "15. Мантия до краёв" },
    { id: "cocoonBody", label: "16. Худи-кокон" },
    { id: "puffSleeves", label: "17. Пышные рукава" },
    { id: "robeBody", label: "18. Мантия магистра" },
    { id: "asymBody", label: "19. Асимметричное плечо" },
    { id: "cyberTorso", label: "20. Кибер-жилет" },
    { id: "oversizeTrap", label: "21. Оверсайз-трапеция" },
    { id: "tulipBody", label: "22. Бутон тюльпана" },
    { id: "diamondBody", label: "23. Мягкий ромб" },
    { id: "royalMantle", label: "24. Королевская накидка" },
    { id: "roundPuffBody", label: "25. Шар-пуховик" },
    { id: "origamiCrane", label: "26. Оригами-крылья" },
    { id: "lotusPetalBody", label: "27. Лепесток лотоса" },
    { id: "hourglassSoft", label: "28. Мягкие часы" },
    { id: "pagodaShoulders", label: "29. Плечи-пагода" },
    { id: "eggPod", label: "30. Капсула-яйцо" },
    { id: "highCollarCape", label: "31. Плащ с воротом" },
    { id: "samuraiShoulders", label: "32. Крылья самурая" },
    { id: "balloonCoat", label: "33. Пальто-баллон" },
    { id: "starTorso", label: "34. Звёздный плечевой" },
    { id: "waveShoulders", label: "35. Волнистые плечи" },
    { id: "monkRobe", label: "36. Дзен-ряса" },
    { id: "heartTorso", label: "37. Силуэт-сердце" },
    { id: "mechaShoulders", label: "38. Меха-корпус" },
    { id: "peplumBody", label: "39. Талия с баской" },
    { id: "pyramidBody", label: "40. Мягкая пирамида" },
    { id: "batwingBody", label: "41. Рукава летучая мышь" },
    { id: "cloakHoodBody", label: "42. Дорожный плащ" },
    { id: "cushionBody", label: "43. Мягкая подушка" },
    { id: "archwayBody", label: "44. Высокая арка" },
    { id: "emperorRobe", label: "45. Императорский силуэт" },
    { id: "lanternBody", label: "46. Бумажный фонарик" },
    { id: "featherCapeBody", label: "47. Перьевая накидка" },
    { id: "chibiBell", label: "48. Мини-колокольчик" },
    { id: "crystalPrismBody", label: "49. Призма кристалла" },
    { id: "sumoCloudBody", label: "50. Богатырский торс" },
    { id: "origamiFanBody", label: "51. Веер Оригами" },
    { id: "sailorCapeBody", label: "52. Пелерина-матроска" },
    { id: "cozyBlanketBody", label: "53. Уютный плед-кокон" },
    { id: "cyberPauldrons", label: "54. Нео-наплечники" },
    { id: "bambooShootBody", label: "55. Росток бамбука" },
    { id: "velvetCorsetBody", label: "56. Приталенный жилет" },
    { id: "cloudPonchoBody", label: "57. Воздушное пончо" },
    { id: "gothicArchBody", label: "58. Стрельчатый плащ" },
    { id: "mochiStackBody", label: "59. Двойной моти" },
    { id: "astroPodBody", label: "60. Астро-капсула" },
    { id: "foxTailCoatBody", label: "61. Лисий камзол" },
    { id: "zenStoneBody", label: "62. Галька Дзен" },
    { id: "wingedShouldersBody", label: "63. Плечи-крылья" },
    { id: "teaCupBody", label: "64. Пиала чая" },
    { id: "shogunMantleBody", label: "65. Мантия Сёгуна" }
  ],
  clothDetail: [
    { id: "none", label: "1. Чистый минимал" },
    { id: "kimonoWrap", label: "2. Запах кимоно" },
    { id: "sailor", label: "3. Матросский ворот" },
    { id: "turtleneck", label: "4. Высокий ворот" },
    { id: "hoodieCords", label: "5. Капюшон и шнурки" },
    { id: "overalls", label: "6. Лямки с пуговками" },
    { id: "tie", label: "7. Рубашка и галстук" },
    { id: "scarf", label: "8. Объёмный шарф" },
    { id: "sunCircle", label: "9. Круг солнца" },
    { id: "vNeck", label: "10. V-вырез кардигана" },
    { id: "apron", label: "11. Фартук с карманом" },
    { id: "cyberCore", label: "12. Ядро Аргона" },
    { id: "Stripes", label: "13. Полоски-тельняшка" },
    { id: "bowtie", label: "14. Бабочка и манишка" },
    { id: "necklace", label: "15. Ожерелье из сфер" },
    { id: "haoriCoat", label: "16. Накидка Хаори" },
    { id: "cableSweater", label: "17. Свитер с узором" },
    { id: "academyVest", label: "18. Жилетка академии" },
    { id: "samuraiArmor", label: "19. Доспех самурая" },
    { id: "folkPoncho", label: "20. Узорное пончо" },
    { id: "claspCloak", label: "21. Плащ с фибулой" },
    { id: "spaceSuit", label: "22. Космо-скафандр" },
    { id: "suspenders", label: "23. Подтяжки и кармашек" },
    { id: "bikerJacket", label: "24. Косуха на молнии" },
    { id: "varsityJacket", label: "25. Бомбер с лампасами" },
    { id: "trenchCoat", label: "26. Тренч с лацканами" },
    { id: "royalJabot", label: "27. Королевское жабо" },
    { id: "qipaoCollar", label: "28. Ворот Ципао" },
    { id: "duffleCoat", label: "29. Дафлкот с клевантами" },
    { id: "mageRunes", label: "30. Мантия звездочёта" },
    { id: "chevalierCross", label: "31. Рыцарский табард" },
    { id: "shrineMaiden", label: "32. Облачение Мико" },
    { id: "cyberHarness", label: "33. Тактические стропы" },
    { id: "pufferZip", label: "34. Стеганый жилет" },
    { id: "peterPanCollar", label: "35. Круглый воротничок" },
    { id: "bandanaBib", label: "36. Шейный платок" },
    { id: "corsetLace", label: "37. Жилет со шнуровкой" },
    { id: "monkSash", label: "38. Перевязь монаха" },
    { id: "admiralEpaulets", label: "39. Мундир с эполетами" },
    { id: "cardiganButtons", label: "40. Уютный кардиган" },
    { id: "ninjaMesh", label: "41. Сетка синоби" },
    { id: "floralShawl", label: "42. Праздничная шаль" },
    { id: "pilotShearling", label: "43. Куртка пилота" },
    { id: "argyleVest", label: "44. Ромбы Аргайл" },
    { id: "emperorMedallion", label: "45. Орден Аргона" },
    { id: "chefDouble", label: "46. Китель шефа" },
    { id: "gothicChoker", label: "47. Бархатный чокер" },
    { id: "ponchoFringe", label: "48. Пончо с бахромой" },
    { id: "labCoat", label: "49. Халат учёного" },
    { id: "festivalHappi", label: "50. Фестивальное Хаппи" }
  ],
  glasses: [
    { id: "none", label: "1. Без очков" },
    { id: "roundSolid", label: "2. Круги-монолит" },
    { id: "visorSolid", label: "3. Кибер-визор" },
    { id: "squareSolid", label: "4. Блоки-кубы" },
    { id: "catSolid", label: "5. Лисьи силуэты" },
    { id: "tinyOval", label: "6. Узкие капсулы" },
    { id: "heartSolid", label: "7. Сердца-монолит" },
    { id: "starSolid", label: "8. Звёзды-монолит" },
    { id: "diamondSolid", label: "9. Ромбы-щитки" },
    { id: "semiRound", label: "10. Полумесяцы" },
    { id: "gogglesUp", label: "11. Гогглы на лбу" },
    { id: "pixelSolid", label: "12. Пиксель-блок" },
    { id: "monoPatch", label: "13. Повязка на глаз" },
    { id: "hexagonSolid", label: "14. Гекса-линзы" },
    { id: "butterfly", label: "15. Крылья бабочки" },
    { id: "monocleRight", label: "16. Монокль с цепочкой" },
    { id: "monocleLeft", label: "17. Монокль слева" },
    { id: "monocleSquare", label: "18. Квадратный монокль" },
    { id: "cyberMonocle", label: "19. Кибер-сканер" }
  ],
  horns: [
    { id: "none", label: "1. Без рогов" },
    { id: "impMini", label: "2. Рожки Они (малые)" },
    { id: "curvedDemon", label: "3. Изогнутые демонические" },
    { id: "ramSpiral", label: "4. Витые бараньи" },
    { id: "deerAntlers", label: "5. Оленьи ветвистые" },
    { id: "dragonHorns", label: "6. Драконьи гребни" },
    { id: "unicorn", label: "7. Рог единорога" },
    { id: "oniDouble", label: "8. Двойные рога Они" },
    { id: "bullWide", label: "9. Бычьи широкие" },
    { id: "gazelleTall", label: "10. Высокие серны" },
    { id: "crystalHorns", label: "11. Кристальные друзы" },
    { id: "cyberAntenna", label: "12. Кибер-сенсоры" },
    { id: "crownHorns", label: "13. Корона из 4 рогов" },
    { id: "brokenBattle", label: "14. Боевой обломанный" },
    { id: "coralSpirit", label: "15. Дух леса (коралл)" }
  ],
  hat: [
    { id: "none", label: "1. Без шапки" },
    { id: "beret", label: "2. Берет художника" },
    { id: "beanie", label: "3. Мини-бини" },
    { id: "halo", label: "4. Светящийся нимб" },
    { id: "straw", label: "5. Большая соломенная" },
    { id: "catEars", label: "6. Неко-ушки (дугой)" },
    { id: "visorCap", label: "7. Кепка с козырьком" },
    { id: "crown", label: "8. Мини-корона" },
    { id: "sprout", label: "9. Росток жизни" },
    { id: "bucket", label: "10. Панама" },
    { id: "headband", label: "11. Повязка ниндзя" },
    { id: "headphones", label: "12. Наушники S (по лицу)" },
    { id: "bow", label: "13. Круглый бант" },
    { id: "bamboo", label: "14. Конус странника" },
    { id: "lotusHat", label: "15. Цветок лотоса" },
    { id: "headphonesBig", label: "16. Наушники M (по лицу)" },
    { id: "headphonesMax", label: "17. Наушники L (по лицу)" },
    { id: "headphonesFluffy", label: "18. Пушистые наушники" },
    { id: "bambooXL", label: "19. Конус странника XL (+20%)" },
    { id: "witchHat", label: "20. Шляпа чародея" },
    { id: "wizardStarsHat", label: "21. Колпак звездочёта" },
    { id: "topHat", label: "22. Джентльменский цилиндр" },
    { id: "bowlerHat", label: "23. Английский котелок" },
    { id: "chefToque", label: "24. Колпак шеф-повара" },
    { id: "sailorCap", label: "25. Бескозырка моряка" },
    { id: "captainCap", label: "26. Фуражка капитана" },
    { id: "vikingHelmet", label: "27. Шлем северянина" },
    { id: "samuraiKabuto", label: "28. Шлем самурая Кабуто" },
    { id: "astroHelmet", label: "29. Купол астронавта" },
    { id: "aviatorHat", label: "30. Шапка пилота с очками" },
    { id: "ushanka", label: "31. Тёплая шапка-ушанка" },
    { id: "cowboyHat", label: "32. Ковбойская шляпа" },
    { id: "sombrero", label: "33. Праздничное сомбреро" },
    { id: "fezHat", label: "34. Восточная феска" },
    { id: "royalTurban", label: "35. Тюрбан султана" },
    { id: "laurelWreath", label: "36. Лавровый венец" },
    { id: "flowerCrown", label: "37. Цветочный венок" },
    { id: "gradMortarboard", label: "38. Академическая шапочка" },
    { id: "detectiveDeer", label: "39. Шляпа сыщика" },
    { id: "pirateTricorne", label: "40. Треуголка пирата" },
    { id: "jesterHat", label: "41. Колпак с бубенцами" },
    { id: "nurseCap", label: "42. Шапочка целителя" },
    { id: "bunnyHood", label: "43. Заячьи ушки" },
    { id: "bearEars", label: "44. Медвежьи ушки" },
    { id: "frogHat", label: "45. Шапка-лягушонок" },
    { id: "mushroomCap", label: "46. Шляпка мухомора" },
    { id: "kitsuneMaskSide", label: "47. Маска Кицунэ сбоку" },
    { id: "royalTiara", label: "48. Диадема с кристаллом" },
    { id: "cyberVisorHat", label: "49. Кибер-ободок с антеннами" },
    { id: "sunburstCrown", label: "50. Солнечная корона Аргона" },
    { id: "headphonesFluffyCat", label: "51. Пушистые наушники с ушками" },
    { id: "headphonesFluffyCloud", label: "52. Пушистые облачные наушники XL" },
    { id: "headphonesGamingCat", label: "53. Геймерские неко-наушники" },
    { id: "headphonesGamingPro", label: "54. Кибер-геймерская гарнитура" }
  ],
  facialHair: [
    { id: "none", label: "1. Без бороды" },
    { id: "stubble", label: "2. Лёгкая щетина" },
    { id: "mustacheThin", label: "3. Усики-штрихи" },
    { id: "handlebar", label: "4. Гусарские усы" },
    { id: "walrus", label: "5. Пышные усы" },
    { id: "goatee", label: "6. Эспаньолка" },
    { id: "chinPuff", label: "7. Бородка-моти" },
    { id: "shortBeard", label: "8. Аккуратная борода" },
    { id: "fullBeard", label: "9. Окладистая" },
    { id: "sensei", label: "10. Сэнсэй Киото" },
    { id: "soulPatch", label: "11. Мушка под губой" },
    { id: "muttonChops", label: "12. Бакенбарды" },
    { id: "braidBeard", label: "13. Косичка дварфа" },
    { id: "boxBeard", label: "14. Гео-шкиперская" },
    { id: "cloudBeard", label: "15. Облако мудреца" },
    { id: "anchorBeard", label: "16. Бородка-якорь" },
    { id: "pencilMustache", label: "17. Тонкая стрелка" },
    { id: "chevronMustache", label: "18. Густой шеврон" },
    { id: "vanDykeBeard", label: "19. Ван Дейк" },
    { id: "vikingForkBeard", label: "20. Раздвоенная борода" },
    { id: "chinCurtainBeard", label: "21. Шкиперский контур" },
    { id: "imperialMustache", label: "22. Имперские усы" },
    { id: "wizardLongBeard", label: "23. Борода звездочёта" },
    { id: "twinBraidsBeard", label: "24. Две косы викинга" },
    { id: "daliMustache", label: "25. Усы Сальвадора" },
    { id: "frenchForkBeard", label: "26. Французский клин" },
    { id: "circleBeard", label: "27. Круговая бородка" },
    { id: "fluffySantaBeard", label: "28. Пышная борода" },
    { id: "samuraiGoatee", label: "29. Бородка даймё" },
    { id: "zenWispBeard", label: "30. Три пряди мудреца" }
  ],
  acc: [
    { id: "blush", label: "1. Румянец-круги" },
    { id: "plaster", label: "2. Пластырь на щеке" },
    { id: "nosePlaster", label: "3. Пластырь на носу" },
    { id: "mark", label: "4. Точка мудрости" },
    { id: "freckles", label: "5. Веснушки" },
    { id: "whiskers", label: "6. Полоски Кицунэ" },
    { id: "tear", label: "7. Хрустальная капля" },
    { id: "starCheek", label: "8. Звезда на щеке" },
    { id: "mask", label: "9. Тканевая маска" },
    { id: "beautySpot", label: "10. Родинка" },
    { id: "heartCheek", label: "11. Сердечки на щеках" },
    { id: "leaf", label: "12. Листик на соломинке" },
    { id: "paint", label: "13. Боевой акцент" },
    { id: "stickers", label: "14. Гео-стикеры" },
    { id: "neonBand", label: "15. Неоновая полоска" }
  ],
  particles: [
    { id: "none", label: "1. Без частиц" },
    { id: "sparkles", label: "2. Искры вокруг" },
    { id: "stardust", label: "3. Звёздная пыль" },
    { id: "floatingHearts", label: "4. Парящие сердечки" },
    { id: "sakuraPetals", label: "5. Лепестки сакуры" },
    { id: "argonGeo", label: "6. Геометрия Аргона" },
    { id: "fireflies", label: "7. Огненные светлячки" },
    { id: "snowflakes", label: "8. Снежинки" },
    { id: "musicNotes", label: "9. Музыкальные ноты" },
    { id: "magicRunes", label: "10. Магические кристаллы" },
    { id: "bubbles", label: "11. Воздушные пузырьки" },
    { id: "lightningSparks", label: "12. Разряды молний" },
    { id: "saturnRings", label: "13. Орбитальные кольца" },
    { id: "feathersAura", label: "14. Парящие пёрышки" },
    { id: "sunbeams", label: "15. Лучи сияния" },
    { id: "bambooLeaves", label: "16. Листья бамбука" },
    { id: "mapleLeaves", label: "17. Осенний клён Момидзи" },
    { id: "butterflies", label: "18. Порхающие бабочки" },
    { id: "spiritFlames", label: "19. Огоньки Кицунэ-би" },
    { id: "waterDrops", label: "20. Капли росы" },
    { id: "crystalShards", label: "21. Осколки кристаллов" },
    { id: "cyberPixels", label: "22. Кибер-пиксели" },
    { id: "binaryMatrix", label: "23. Цифровой поток" },
    { id: "crescentMoons", label: "24. Полумесяцы и звёзды" },
    { id: "goldenHalos", label: "25. Священные кольца" },
    { id: "origamiCranes", label: "26. Бумажные журавлики" },
    { id: "lotusPetalsAura", label: "27. Вихрь лотоса" },
    { id: "dandelionSeeds", label: "28. Пушинки одуванчика" },
    { id: "miniClouds", label: "29. Облачка кинтоун" },
    { id: "rainbowDrops", label: "30. Конфетти радости" },
    { id: "floatingRunes", label: "31. Древние глифы" },
    { id: "plasmaOrbs", label: "32. Сферы плазмы" },
    { id: "cometTails", label: "33. Кометы вокруг" },
    { id: "cloverLeaves", label: "34. Четырёхлистный клевер" },
    { id: "rosePetals", label: "35. Лепестки роз" },
    { id: "diamondDust", label: "36. Алмазная крошка" },
    { id: "holyCrosses", label: "37. Сияющие крестики" },
    { id: "batSwarm", label: "38. Ночные мышки" },
    { id: "ghostWisps", label: "39. Духи-призраки" },
    { id: "cherryBlossomStorm", label: "40. Вихрь сакуры" },
    { id: "neonTriangles", label: "41. Неоновые треугольники" },
    { id: "celestialSunMoon", label: "42. Солнце и Луна" },
    { id: "zenStonesAura", label: "43. Парящие камни Дзен" },
    { id: "goldenCrownSparks", label: "44. Королевское сияние" },
    { id: "musicalWaves", label: "45. Звуковые волны" },
    { id: "candyStars", label: "46. Конфеты Компэйто" },
    { id: "paperLanterns", label: "47. Небесные фонарики" },
    { id: "dragonScalesAura", label: "48. Драконьи искры" },
    { id: "auroraRibbons", label: "49. Северное сияние" },
    { id: "argonConstellation", label: "50. Созвездие Аргона" }
  ],
  handLeft: [
    { id: "wave", label: "Привет (Ладошка)" },
    { id: "peace", label: "Победа (V-жест)" },
    { id: "thumbsUp", label: "Класс (Лайк)" },
    { id: "heartHalf", label: "Половинка сердца" },
    { id: "fistPump", label: "Боевой кулачок" },
    { id: "pointUp", label: "Идея (Палец вверх)" },
    { id: "rockOn", label: "Рок-коза" },
    { id: "okSign", label: "Жест Окей" },
    { id: "catPaw", label: "Лапка-моти" },
    { id: "fingerHeart", label: "Корейское сердечко" },
    { id: "clap", label: "Аплодисменты" },
    { id: "pointSide", label: "Указатель в центр" },
    { id: "thumbsDown", label: "Дизлайк" },
    { id: "shaka", label: "Шака (Алоха)" },
    { id: "vulcan", label: "Вулканский салют" },
    { id: "crossedFingers", label: "Пальцы на удачу" },
    { id: "pinch", label: "Щепотка (Белиссимо)" },
    { id: "callMe", label: "Позвони мне" },
    { id: "salute", label: "Козырёк к виску" },
    { id: "prayHalf", label: "Сложенная ладонь" },
    { id: "holdOrb", label: "Магическая сфера" },
    { id: "holdCup", label: "Пиала с чаем" },
    { id: "holdStar", label: "Звезда в ладони" },
    { id: "peaceDown", label: "Два пальца вниз" },
    { id: "claw", label: "Тигриная лапка" },
    { id: "gunPose", label: "Пистолетик Бэнг" },
    { id: "pinkyPromise", label: "Клятва мизинцем" },
    { id: "openCup", label: "Ладошка-лодочка" },
    { id: "holdFan", label: "Японский веер" },
    { id: "thumbsSide", label: "Вот этот!" }
  ],
  handRight: [
    { id: "wave", label: "Привет (Ладошка)" },
    { id: "peace", label: "Победа (V-жест)" },
    { id: "thumbsUp", label: "Класс (Лайк)" },
    { id: "heartHalf", label: "Половинка сердца" },
    { id: "fistPump", label: "Боевой кулачок" },
    { id: "pointUp", label: "Идея (Палец вверх)" },
    { id: "rockOn", label: "Рок-коза" },
    { id: "okSign", label: "Жест Окей" },
    { id: "catPaw", label: "Лапка-моти" },
    { id: "fingerHeart", label: "Корейское сердечко" },
    { id: "clap", label: "Аплодисменты" },
    { id: "pointSide", label: "Указатель в центр" },
    { id: "thumbsDown", label: "Дизлайк" },
    { id: "shaka", label: "Шака (Алоха)" },
    { id: "vulcan", label: "Вулканский салют" },
    { id: "crossedFingers", label: "Пальцы на удачу" },
    { id: "pinch", label: "Щепотка (Белиссимо)" },
    { id: "callMe", label: "Позвони мне" },
    { id: "salute", label: "Козырёк к виску" },
    { id: "prayHalf", label: "Сложенная ладонь" },
    { id: "holdOrb", label: "Магическая сфера" },
    { id: "holdCup", label: "Пиала с чаем" },
    { id: "holdStar", label: "Звезда в ладони" },
    { id: "peaceDown", label: "Два пальца вниз" },
    { id: "claw", label: "Тигриная лапка" },
    { id: "gunPose", label: "Пистолетик Бэнг" },
    { id: "pinkyPromise", label: "Клятва мизинцем" },
    { id: "openCup", label: "Ладошка-лодочка" },
    { id: "holdFan", label: "Японский веер" },
    { id: "thumbsSide", label: "Вот этот!" }
  ]
};

const LAYER_KEYS = [
  "bg",
  "skin",
  "ears",
  "earrings",
  "bodyShape",
  "clothDetail",
  "hands",
  "hairShort",
  "hairBack",
  "hairBangs",
  "hairTop",
  "facialHair",
  "horns",
  "hat",
  "particles"
];

const MESH_KEYS = [
  "bg",
  "skin",
  "ears",
  "earrings",
  "bodyShape",
  "clothDetail",
  "hands",
  "hairShort",
  "hairBack",
  "hairBangs",
  "hairTop",
  "facialHair",
  "horns",
  "hat",
  "particles",
  "eyes",
  "nose",
  "mouth",
  "acc",
  "glasses"
];

// Текущее состояние Аргонёнка с сидом (seed), индивидуальной цветонастройкой, активной палитрой (20 пресетов), режимами цвета, анимацией и сдвигами
const state = {
  seed: "ARGON-01",
  activePalette: "pal-01",
  contrastMode: false,
  threeColorMode: false,
  gradientMode: true,
  triadColors: ["#2F3E46", "#FBE5D8", "#E05A47"],
  partOffsets: {},
  faceTopBoostPct: 0,
  animEnabled: true,
  animNoise: true,
  animParticles: true,
  animBlink: true,
  animEars: true,
  animHead: true,
  animGlare: true,
  animHands: true,
  headAnimPreset: "pendulumSmooth",
  handAnimPreset: "floatSync",
  glareTargets: {
    glasses: true,
    earrings: true,
    horns: true,
    hat: true,
    clothDetail: false,
    particles: true
  },
  bg: "grad-01",
  useCustomBg: false,
  face: "mochi",
  ears: "round",
  earrings: "none",
  eyes: "dots",
  nose: "button",
  mouth: "smile",
  facialHair: "none",
  hairShort: "none",
  hairBack: "bob",
  hairBangs: "straight",
  hairTop: "doubleBuns",
  bodyShape: "dome",
  clothDetail: "kimonoWrap",
  handsEnabled: true,
  handsOffset: { leftX: 0, leftY: 0, rightX: 0, rightY: 0 },
  handLeft: "wave",
  handRight: "peace",
  glasses: "none",
  horns: "none",
  hat: "beret",
  acc: "blush",
  particles: "sparkles",
  noiseMode: "mix",
  geoCutout: "none",
  locks: {},
  colorLocks: {},
  colors: {
    bg: "#FF69A1",
    skin: "#FBE5D8",
    ears: "#FBE5D8",
    earrings: "#F2C14E",
    eyes: "#232126",
    nose: "#D99B78",
    mouth: "#232126",
    facialHair: "#232126",
    hairShort: "#232126",
    hairBack: "#232126",
    hairBangs: "#232126",
    hairTop: "#232126",
    bodyShape: "#2F3E46",
    clothDetail: "#E05A47",
    clothPocket: "#F2C14E",
    hands: "#FBE5D8",
    glasses: "#232126",
    horns: "#F2C14E",
    hat: "#E05A47",
    acc: "#F472B6",
    particles: "#F2C14E"
  },
  grain: {
    bg: true,
    skin: true,
    ears: true,
    earrings: true,
    bodyShape: true,
    clothDetail: true,
    hands: true,
    hairShort: true,
    hairBack: true,
    hairBangs: true,
    hairTop: true,
    facialHair: true,
    horns: true,
    hat: true,
    particles: true
  },
  mesh: {
    bg: true,
    skin: true,
    ears: true,
    earrings: true,
    bodyShape: true,
    clothDetail: true,
    hands: true,
    hairShort: true,
    hairBack: true,
    hairBangs: true,
    hairTop: true,
    facialHair: true,
    horns: true,
    hat: true,
    particles: true,
    eyes: true,
    nose: true,
    mouth: true,
    acc: true,
    glasses: true
  },
  layerNoiseVariant: {},
  layerGeoPattern: {},
  layerMeshConfig: {}
};

// Детерминированный генератор псевдослучайных чисел (PRNG Mulberry32 + FNV-1a хэш строки сида)
let activeRng = null;
function createSeededRng(seedStr) {
  const str = String(seedStr || "ARGON-01").trim() || "ARGON-01";
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let a = (h ^ 0x85ebca6b) >>> 0;
  if (a === 0) a = 0x6d2b79f5;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Возвращает число [0, 1) из активного сидированного генератора либо Math.random()
function rand() {
  return activeRng ? activeRng() : Math.random();
}

// Генерация нового читаемого кода сида
function generateRandomSeedCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "ARG-";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// Генерация случайных параметров шума и крупного гео-вычитания для каждой детали отдельно
function randomizeNoiseAndGeoPerDetail(randomizeToggles = true) {
  const geoTypes = [
    "stripes",
    "circles",
    "triangles",
    "blocks",
    "waves",
    "zigzags",
    "stars",
    "hearts",
    "diamonds",
    "rings",
    "crosses",
    "crescents",
    "hexagons",
    "spirals"
  ];
  LAYER_KEYS.forEach((key) => {
    if (randomizeToggles) {
      state.grain[key] = rand() > 0.22;
    }
    state.layerNoiseVariant[key] = Math.floor(rand() * 3) + 1;
    state.layerGeoPattern[key] = {
      type: geoTypes[Math.floor(rand() * geoTypes.length)],
      angle: Math.floor(rand() * 120) - 60,
      offsetX: Math.floor(rand() * 140) - 70,
      offsetY: Math.floor(rand() * 140) - 70,
      scale: 0.85 + rand() * 0.45
    };
  });
}

// Генерация случайных узлов и распределения сетчатого градиента (Mesh Gradient) по отдельным частям тела
function randomizeMeshPerDetail(randomizeToggles = true) {
  if (!state.mesh) state.mesh = {};
  if (!state.layerMeshConfig) state.layerMeshConfig = {};
  MESH_KEYS.forEach((key) => {
    if (randomizeToggles) {
      state.mesh[key] = rand() > 0.2;
    }
    state.layerMeshConfig[key] = {
      h1: -14 - Math.floor(rand() * 20),
      h2: 14 + Math.floor(rand() * 22),
      h3: -10 - Math.floor(rand() * 18),
      h4: 12 + Math.floor(rand() * 18),
      cx1: 16 + Math.floor(rand() * 32),
      cy1: 16 + Math.floor(rand() * 32),
      cx2: 56 + Math.floor(rand() * 30),
      cy2: 16 + Math.floor(rand() * 32),
      cx3: 18 + Math.floor(rand() * 32),
      cy3: 56 + Math.floor(rand() * 30),
      cx4: 54 + Math.floor(rand() * 32),
      cy4: 54 + Math.floor(rand() * 30)
    };
  });
}

// Построение крупной геометрической маски вычитания шума (без stroke, 16 вариантов)
function buildGeoSubtractionMask(layerKey) {
  const mode = state.geoCutout;
  if (mode === "none") {
    return `<mask id="geoMask-${layerKey}"><rect width="400" height="400" fill="#FFFFFF" /></mask>`;
  }

  const cfg = state.layerGeoPattern[layerKey] || { type: "stripes", angle: -30, offsetX: 0, offsetY: 0 };
  const patternType = mode === "random" ? cfg.type : mode;
  const cx = 200 + cfg.offsetX;
  const cy = 200 + cfg.offsetY;
  const rot = cfg.angle;

  let blackCutouts = "";
  switch (patternType) {
    case "stripes":
      blackCutouts = `
        <g transform="rotate(${rot} 200 200)" fill="#000000">
          <rect x="-60" y="${80 + cfg.offsetY * 0.4}" width="520" height="46" rx="12" />
          <rect x="-60" y="${195 + cfg.offsetY * 0.4}" width="520" height="58" rx="12" />
          <rect x="-60" y="${310 + cfg.offsetY * 0.4}" width="520" height="42" rx="12" />
        </g>
      `;
      break;
    case "circles":
      blackCutouts = `
        <g fill="#000000">
          <circle cx="${cx - 45}" cy="${cy - 30}" r="68" />
          <circle cx="${cx + 65}" cy="${cy + 55}" r="54" />
          <circle cx="${200 - cfg.offsetX * 0.6}" cy="${130 + cfg.offsetY * 0.5}" r="42" />
        </g>
      `;
      break;
    case "triangles":
      blackCutouts = `
        <g transform="rotate(${rot * 0.6} 200 200)" fill="#000000">
          <polygon points="${cx - 110},${cy - 90} ${cx + 40},${cy - 20} ${cx - 60},${cy + 80}" />
          <polygon points="${cx + 20},${cy + 10} ${cx + 140},${cy - 70} ${cx + 110},${cy + 120}" />
        </g>
      `;
      break;
    case "waves":
      blackCutouts = `
        <g transform="rotate(${rot * 0.45} 200 200)" fill="none" stroke="#000000" stroke-width="40" stroke-linecap="round">
          <path d="M-40 ${cy - 70} Q 80 ${cy - 135}, 200 ${cy - 70} T 440 ${cy - 70}" />
          <path d="M-40 ${cy + 20} Q 80 ${cy - 45}, 200 ${cy + 20} T 440 ${cy + 20}" />
          <path d="M-40 ${cy + 110} Q 80 ${cy + 45}, 200 ${cy + 110} T 440 ${cy + 110}" />
        </g>
      `;
      break;
    case "zigzags":
      blackCutouts = `
        <g transform="rotate(${rot * 0.5} 200 200)" fill="none" stroke="#000000" stroke-width="38" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="-30,${cy - 55} 85,${cy - 115} 200,${cy - 45} 315,${cy - 115} 430,${cy - 55}" />
          <polyline points="-30,${cy + 65} 85,${cy + 5} 200,${cy + 75} 315,${cy + 5} 430,${cy + 65}" />
        </g>
      `;
      break;
    case "stars":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot * 0.4})" fill="#000000">
          <path d="M-55 -115 C-45 -65, -40 -60, 10 -50 C-40 -40, -45 -35, -55 15 C-65 -35, -70 -40, -120 -50 C-70 -60, -65 -65, -55 -115 Z" />
          <path d="M60 -15 C70 35, 75 40, 125 50 C75 60, 70 65, 60 115 C50 65, 45 60, -5 50 C45 40, 50 35, 60 -15 Z" />
          <path d="M-30 25 C-23 60, -20 63, 15 70 C-20 77, -23 80, -30 115 C-37 80, -40 77, -75 70 C-40 63, -37 60, -30 25 Z" />
        </g>
      `;
      break;
    case "hearts":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot * 0.35})" fill="#000000">
          <path d="M-45 -20 C-45 -58, -105 -58, -105 -15 C-105 22, -45 48, -45 72 C-45 48, 15 22, 15 -15 C15 -58, -45 -58, -45 -20 Z" />
          <path d="M65 -55 C65 -85, 20 -85, 20 -50 C20 -20, 65 2, 65 22 C65 2, 110 -20, 110 -50 C110 -85, 65 -85, 65 -55 Z" />
        </g>
      `;
      break;
    case "diamonds":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot * 0.4})" fill="#000000">
          <polygon points="-55,-115 5,-35 -55,45 -115,-35" />
          <polygon points="60,-40 120,40 60,120 0,40" />
          <polygon points="20,-125 65,-65 20,-5 -25,-65" />
        </g>
      `;
      break;
    case "rings":
      blackCutouts = `
        <g fill="none" stroke="#000000">
          <circle cx="${cx - 35}" cy="${cy - 20}" r="52" stroke-width="24" />
          <circle cx="${cx - 35}" cy="${cy - 20}" r="96" stroke-width="18" />
          <circle cx="${cx + 70}" cy="${cy + 55}" r="48" stroke-width="22" />
        </g>
      `;
      break;
    case "crosses":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot * 0.5})" fill="#000000">
          <rect x="-95" y="-62" width="110" height="36" rx="10" />
          <rect x="-58" y="-99" width="36" height="110" rx="10" />
          <rect x="10" y="22" width="104" height="34" rx="10" />
          <rect x="45" y="-13" width="34" height="104" rx="10" />
        </g>
      `;
      break;
    case "crescents":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot * 0.45})" fill="#000000">
          <path d="M-20 -95 A 72 72 0 1 0 55 25 A 56 56 0 1 1 -20 -95 Z" />
          <path d="M40 -85 A 54 54 0 1 0 95 -5 A 42 42 0 1 1 40 -85 Z" />
        </g>
      `;
      break;
    case "hexagons":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot * 0.35})" fill="#000000">
          <polygon points="-50,-95 5,-63 5,1 -50,33 -105,1 -105,-63" />
          <polygon points="55,-30 110,2 110,66 55,98 0,66 0,2" />
          <polygon points="-35,45 10,71 10,123 -35,149 -80,123 -80,71" />
        </g>
      `;
      break;
    case "spirals":
      blackCutouts = `
        <g transform="translate(${cx}, ${cy}) rotate(${rot})" fill="#000000">
          <ellipse cx="0" cy="-68" rx="28" ry="56" transform="rotate(25 0 -68)" />
          <ellipse cx="68" cy="0" rx="56" ry="28" transform="rotate(25 68 0)" />
          <ellipse cx="0" cy="68" rx="28" ry="56" transform="rotate(25 0 68)" />
          <ellipse cx="-68" cy="0" rx="56" ry="28" transform="rotate(25 -68 0)" />
        </g>
      `;
      break;
    case "blocks":
    default:
      blackCutouts = `
        <g transform="rotate(${rot * 0.4} 200 200)" fill="#000000">
          <rect x="${cx - 95}" y="${cy - 85}" width="92" height="92" rx="14" />
          <rect x="${cx + 10}" y="${cy + 5}" width="110" height="84" rx="14" />
          <rect x="${cx - 80}" y="${cy + 35}" width="64" height="90" rx="14" />
        </g>
      `;
      break;
  }

  return `
    <mask id="geoMask-${layerKey}">
      <rect width="400" height="400" fill="#FFFFFF" />
      ${blackCutouts}
    </mask>
  `;
}

// Центры трансформации (точки спавна) и русские названия для каждого самостоятельного подэлемента (отдельно левое/правое ухо, левая/правая рука, левый/правый глаз, рог, серьга и т.д.)
const SUBPART_PIVOTS = {
  handLeft: { px: 96, py: 288, label: "Левая кисть руки", part: "hands" },
  handRight: { px: 304, py: 288, label: "Правая кисть руки", part: "hands" },
  "ears:L": { px: 138, py: 200, label: "Левое ушко", part: "ears" },
  "ears:R": { px: 262, py: 200, label: "Правое ушко", part: "ears" },
  ears: { px: 200, py: 200, label: "Ушки", part: "ears" },
  "earrings:L": { px: 138, py: 222, label: "Левая серьга", part: "earrings" },
  "earrings:R": { px: 262, py: 222, label: "Правая серьга", part: "earrings" },
  earrings: { px: 200, py: 222, label: "Серьги", part: "earrings" },
  "eyes:L": { px: 174, py: 196, label: "Левый глаз", part: "eyes" },
  "eyes:R": { px: 226, py: 196, label: "Правый глаз", part: "eyes" },
  "eyes:C": { px: 200, py: 173, label: "Третий глаз", part: "eyes" },
  eyes: { px: 200, py: 196, label: "Глаза", part: "eyes" },
  "horns:L": { px: 154, py: 112, label: "Левый рог / антенна", part: "horns" },
  "horns:R": { px: 246, py: 112, label: "Правый рог / антенна", part: "horns" },
  "horns:C": { px: 200, py: 102, label: "Рог / нимб", part: "horns" },
  horns: { px: 200, py: 110, label: "Рога и антенны", part: "horns" },
  "acc:L": { px: 158, py: 210, label: "Аксессуар (левая щека)", part: "acc" },
  "acc:R": { px: 242, py: 210, label: "Аксессуар (правая щека)", part: "acc" },
  acc: { px: 200, py: 208, label: "Аксессуар лица", part: "acc" },
  nose: { px: 200, py: 204, label: "Нос", part: "nose" },
  mouth: { px: 200, py: 224, label: "Рот", part: "mouth" },
  facialHair: { px: 200, py: 232, label: "Борода и усы", part: "facialHair" },
  face: { px: 200, py: 200, label: "Овал лица", part: "face" },
  hairShort: { px: 200, py: 152, label: "Короткая стрижка", part: "hairShort" },
  hairBack: { px: 200, py: 210, label: "Задний силуэт волос", part: "hairBack" },
  hairBangs: { px: 200, py: 156, label: "Чёлка", part: "hairBangs" },
  hairTop: { px: 200, py: 106, label: "Верх прически", part: "hairTop" },
  bodyShape: { px: 200, py: 320, label: "Силуэт тела", part: "bodyShape" },
  clothDetail: { px: 200, py: 304, label: "Элемент одежды", part: "clothDetail" },
  glasses: { px: 200, py: 195, label: "Очки / монокль", part: "glasses" },
  hat: { px: 200, py: 118, label: "Головной убор", part: "hat" },
  "particles:L": { px: 82, py: 145, label: "Частицы (слева)", part: "particles" },
  "particles:R": { px: 318, py: 145, label: "Частицы (справа)", part: "particles" },
  particles: { px: 200, py: 160, label: "Частицы и аура", part: "particles" }
};

// Вычисление строки SVG transform для сдвига (±10%) и масштаба (±20%) относительно собственного центра элемента
function buildSubpartTransformValue(subpartKey) {
  if (!subpartKey || subpartKey === "bg") return "";
  const t = state.partOffsets && state.partOffsets[subpartKey];
  if (!t) return "";
  const dx = Number(t.dx) || 0;
  const dy = Number(t.dy) || 0;
  const scalePct = Number(t.scalePct) || 0;
  if (dx === 0 && dy === 0 && scalePct === 0) return "";

  const piv = SUBPART_PIVOTS[subpartKey] || { px: 200, py: 200 };
  const s = +(1 + scalePct / 100).toFixed(3);
  if (scalePct === 0) {
    return `translate(${dx}, ${dy})`;
  }
  if (dx === 0 && dy === 0) {
    return `translate(${piv.px}, ${piv.py}) scale(${s}) translate(${-piv.px}, ${-piv.py})`;
  }
  return `translate(${dx}, ${dy}) translate(${piv.px}, ${piv.py}) scale(${s}) translate(${-piv.px}, ${-piv.py})`;
}

// Формирование атрибута transform="..." для самостоятельного элемента
function getPartOffsetAttr(subpartKey) {
  const val = buildSubpartTransformValue(subpartKey);
  return val ? ` transform="${val}"` : "";
}

// Определение первой X-координаты тега примитива для разделения левых (x < 200) и правых (x >= 200) самостоятельных частей
function extractTagPrimaryX(tag) {
  const cx = tag.match(/\bcx="([\d.]+)"/);
  if (cx) return parseFloat(cx[1]);
  const x = tag.match(/\bx="([\d.]+)"/);
  const w = tag.match(/\bwidth="([\d.]+)"/);
  if (x) return parseFloat(x[1]) + (w ? parseFloat(w[1]) / 2 : 0);
  const d = tag.match(/\bd="M\s*([\d.]+)/i);
  if (d) return parseFloat(d[1]);
  const pts = tag.match(/\bpoints="\s*([\d.]+)/);
  if (pts) return parseFloat(pts[1]);
  return 200;
}

// Определение первой Y-координаты тега примитива для выделения верхнего левого мотива частиц
function extractTagPrimaryY(tag) {
  const cy = tag.match(/\bcy="([\d.]+)"/);
  if (cy) return parseFloat(cy[1]);
  const y = tag.match(/\by="([\d.]+)"/);
  const h = tag.match(/\bheight="([\d.]+)"/);
  if (y) return parseFloat(y[1]) + (h ? parseFloat(h[1]) / 2 : 0);
  const d = tag.match(/\bd="M\s*[\d.]+\s*[, ]\s*([\d.]+)/i);
  if (d) return parseFloat(d[1]);
  const pts = tag.match(/\bpoints="\s*[\d.]+\s*[, ]\s*([\d.]+)/);
  if (pts) return parseFloat(pts[1]);
  return 200;
}

// Текущая временная метка кадра (в секундах 0..2.4) при рендере анимированного GIF 512×512 (null при обычной отрисовке на сцене)
let currentGifTimeSec = null;

function isAnimationActiveNow() {
  return typeof currentGifTimeSec === "number" ? true : Boolean(state.animEnabled);
}

function getGifProgressNow() {
  if (typeof currentGifTimeSec !== "number") return null;
  return (((currentGifTimeSec / 2.4) % 1) + 1) % 1;
}

// Вычисление точного угла наклона головы (в диапазоне ±7° от 0° на севере) для 8 пресетов при покадровом экспорте GIF
function computeHeadTiltGifTransform(presetId, p) {
  const rad = p * Math.PI * 2;
  let deg = 0;
  let dy = 0;
  switch (presetId) {
    case "curiousTilt":
      deg = +(7 * Math.tanh(2.2 * Math.sin(rad))).toFixed(2);
      dy = +(-1.5 * Math.abs(Math.sin(rad))).toFixed(2);
      break;
    case "happyBob":
      deg = +(7 * Math.sin(rad)).toFixed(2);
      dy = +(-4 * Math.abs(Math.sin(rad * 2))).toFixed(2);
      break;
    case "shyPeek":
      deg = +(p < 0.55 ? -7 * Math.sin((p / 0.55) * Math.PI) : 7 * Math.sin(((p - 0.55) / 0.45) * Math.PI)).toFixed(2);
      dy = +(2 * Math.abs(Math.sin(rad))).toFixed(2);
      break;
    case "musicGroove":
      deg = +(7 * Math.sin(rad) * (0.75 + 0.25 * Math.cos(rad * 2))).toFixed(2);
      dy = +(-3.5 * Math.abs(Math.cos(rad * 2))).toFixed(2);
      break;
    case "dreamyFloat":
      deg = +(7 * Math.sin(rad)).toFixed(2);
      dy = +(-3 * Math.cos(rad)).toFixed(2);
      break;
    case "sassySnap":
      deg = +(7 * Math.sin(rad) * Math.pow(Math.sin(rad), 2)).toFixed(2);
      dy = +(-2 * Math.abs(Math.sin(rad))).toFixed(2);
      break;
    case "zenBreath":
      deg = +(7 * Math.sin(rad) * Math.cos(rad * 0.5)).toFixed(2);
      dy = +(-2.5 * Math.sin(rad)).toFixed(2);
      break;
    case "pendulumSmooth":
    default:
      deg = +(7 * Math.sin(rad)).toFixed(2);
      dy = 0;
      break;
  }
  return ` transform="translate(0, ${dy}) translate(200, 256) rotate(${deg}) translate(-200, -256)"`;
}

// Вычисление точной трансформации кистей рук (5% от холста) для 10 пресетов при покадровом экспорте GIF
function computeHandGifTransform(presetId, side, p, hx, hy) {
  const rad = p * Math.PI * 2;
  const s = side === "L" ? 1 : -1;
  let dx = 0;
  let dy = 0;
  let rot = 0;
  let sc = 1;
  switch (presetId) {
    case "floatAlt":
      dy = +(16 * s * Math.sin(rad)).toFixed(2);
      break;
    case "waveHello":
      dx = +(-13 * s * Math.sin(rad)).toFixed(2);
      dy = +(-12 * Math.abs(Math.sin(rad))).toFixed(2);
      rot = +(-8 * s * Math.sin(rad)).toFixed(2);
      break;
    case "pulseBeat":
      dy = +(-14 * Math.abs(Math.sin(rad))).toFixed(2);
      sc = +(1 + 0.06 * Math.abs(Math.sin(rad))).toFixed(3);
      break;
    case "orbitCircle":
      dx = +(15 * s * Math.sin(rad)).toFixed(2);
      dy = +(-15 * Math.cos(rad)).toFixed(2);
      break;
    case "clapBounce":
      dx = +(19 * s * Math.abs(Math.sin(rad))).toFixed(2);
      dy = +(-8 * Math.abs(Math.sin(rad))).toFixed(2);
      break;
    case "shiverExcite":
      dx = +(10 * s * Math.sin(rad * 3)).toFixed(2);
      dy = +(-12 * Math.abs(Math.cos(rad * 2))).toFixed(2);
      break;
    case "zenSway":
      dx = +(17 * Math.sin(rad)).toFixed(2);
      dy = -4;
      break;
    case "figureEight":
      dx = +(15 * s * Math.sin(rad)).toFixed(2);
      dy = +(-12 * Math.sin(rad * 2)).toFixed(2);
      break;
    case "magicCast":
      dx = +(11 * s * Math.sin(rad)).toFixed(2);
      dy = +(-18 * Math.abs(Math.sin(rad))).toFixed(2);
      rot = +(6 * s * Math.sin(rad)).toFixed(2);
      break;
    case "floatSync":
    default:
      dy = +(-19 * Math.abs(Math.sin(rad * 0.5))).toFixed(2);
      break;
  }
  if (rot !== 0 || sc !== 1) {
    return ` transform="translate(${dx}, ${dy}) translate(${hx}, ${hy}) rotate(${rot}) scale(${sc}) translate(${-hx}, ${-hy})"`;
  }
  return ` transform="translate(${dx}, ${dy})"`;
}

// Разбиение парных категорий (ушки, серьги, глаза, рога, щёчки) на независимые подгруппы с собственным сдвигом, масштабом и анимацией (ушки, глаза, частицы)
function splitMarkupIntoIndependentSubparts(partKey, contentMarkup) {
  if (!contentMarkup || !contentMarkup.trim()) return "";
  if (partKey === "bg") return contentMarkup;
  // Кисти рук уже содержат внутри себя независимые группы data-subpart="handLeft" и data-subpart="handRight"
  if (partKey === "hands") return contentMarkup;

  const animOn = isAnimationActiveNow();
  const gifP = getGifProgressNow();

  const isSingleHorn = partKey === "horns" && ["unicorn", "oniSingle", "rhino", "haloRing"].includes(state.horns);
  const isPairedAcc = partKey === "acc" && ["blush", "starCheek", "heartCheek", "whiskers", "tears", "freckles", "tribalMarks", "cyberLines"].includes(state.acc);
  const isBilateral =
    partKey === "ears" ||
    partKey === "earrings" ||
    partKey === "eyes" ||
    (partKey === "horns" && !isSingleHorn) ||
    isPairedAcc;

  if (!isBilateral) {
    const subKey = isSingleHorn ? "horns:C" : partKey;
    if (partKey === "particles" && animOn && state.animParticles) {
      const floatVectors = [
        [3.5, -7.5],
        [-4.5, -6.5],
        [-3.5, 5.5],
        [4.5, 5.5],
        [-4.5, -7.0],
        [-3.0, 6.5]
      ];
      // Группируем близко расположенные примитивы (листочек + черешок, одуванчик + ножка, доли клевера/клёна, нота + штиль) в единый кластер,
      // чтобы составные частицы летали и масштабировались строго как единое целое
      const rootFillMatch = contentMarkup.match(/<g\b[^>]*\bfill="([^"]+)"/);
      const defaultFill = rootFillMatch ? rootFillMatch[1] : "url(#particlesGrad)";
      const hasEvenOdd = /fill-rule="evenodd"/.test(contentMarkup);
      const itemRegex = /<g\b([^>]*)>([\s\S]*?)<\/g>|<(path|circle|rect|ellipse|polygon)\b[^>]*\/?>/g;
      const rawItems = [];
      let m;
      while ((m = itemRegex.exec(contentMarkup)) !== null) {
        if (m[3]) {
          rawItems.push({ tag: m[0], groupFill: null });
        } else {
          const gAttrs = m[1] || "";
          const gBody = m[2] || "";
          const gFillM = gAttrs.match(/\bfill="([^"]+)"/);
          const gFill = gFillM ? gFillM[1] : null;
          const innerTags = gBody.match(/<(path|circle|rect|ellipse|polygon)\b[^>]*\/?>/g) || [];
          innerTags.forEach((t) => rawItems.push({ tag: t, groupFill: gFill }));
        }
      }

      const clusters = [];
      rawItems.forEach((itemObj) => {
        let tagStr = itemObj.tag;
        if (itemObj.groupFill && !/\bfill="/.test(tagStr)) {
          tagStr = tagStr.replace(/\s*\/?>$/, ` fill="${itemObj.groupFill}" />`);
        }
        const px = extractTagPrimaryX(tagStr);
        const py = extractTagPrimaryY(tagStr);
        let foundCluster = null;
        for (let cIdx = 0; cIdx < clusters.length; cIdx++) {
          const cl = clusters[cIdx];
          if (Math.hypot(px - cl.cx, py - cl.cy) <= 36) {
            foundCluster = cl;
            break;
          }
        }
        if (foundCluster) {
          foundCluster.tags.push(tagStr);
          const n = foundCluster.tags.length;
          foundCluster.cx = (foundCluster.cx * (n - 1) + px) / n;
          foundCluster.cy = (foundCluster.cy * (n - 1) + py) / n;
        } else {
          clusters.push({ cx: px, cy: py, tags: [tagStr] });
        }
      });

      const clusterGroups = clusters.map((cl, idx) => {
        const unitIdx = idx % 6;
        const inner = cl.tags.join("");
        if (gifP !== null) {
          const ph = gifP * Math.PI * 2 + unitIdx * 1.05;
          const wave = Math.sin(ph);
          const [vx, vy] = floatVectors[unitIdx];
          const pdx = +(wave * vx).toFixed(2);
          const pdy = +(wave * vy).toFixed(2);
          const psc = +(1 + 0.05 * wave).toFixed(3);
          const cx = +cl.cx.toFixed(1);
          const cy = +cl.cy.toFixed(1);
          return `<g transform="translate(${pdx}, ${pdy}) translate(${cx}, ${cy}) scale(${psc}) translate(${-cx}, ${-cy})">${inner}</g>`;
        }
        const cls = `particle-unit particle-unit-${unitIdx}`;
        return `<g class="${cls}">${inner}</g>`;
      });

      const animatedParticles = `<g fill="${defaultFill}"${hasEvenOdd ? ' fill-rule="evenodd"' : ""} stroke-linejoin="round" stroke-linecap="round">${clusterGroups.join("")}</g>`;
      return `<g class="svg-part" data-part="${partKey}" data-subpart="${subKey}"${getPartOffsetAttr(subKey)}>${animatedParticles}</g>`;
    }
    return `<g class="svg-part" data-part="${partKey}" data-subpart="${subKey}"${getPartOffsetAttr(subKey)}>${contentMarkup}</g>`;
  }

  const tags = contentMarkup.match(/<(path|circle|rect|ellipse|polygon)\b[^>]*\/?>/g);
  if (!tags || tags.length === 0) {
    return `<g class="svg-part" data-part="${partKey}" data-subpart="${partKey}"${getPartOffsetAttr(partKey)}>${contentMarkup}</g>`;
  }

  const leftTags = [];
  const rightTags = [];
  const centerTags = [];

  tags.forEach((tag) => {
    const px = extractTagPrimaryX(tag);
    if (partKey === "eyes" && ["triclops", "cyclops"].includes(state.eyes) && px >= 190 && px <= 210) {
      centerTags.push(tag);
    } else if (px < 200) {
      leftTags.push(tag);
    } else {
      rightTags.push(tag);
    }
  });

  const isEyesBlinking = partKey === "eyes" && animOn && state.animBlink;
  const isEarsMoving = (partKey === "ears" || partKey === "earrings") && animOn && state.animEars;

  const wrapSubpartAnim = (sideTags, side) => {
    if (partKey === "eyes" && isEyesBlinking) {
      const browTags = [];
      const eyeBallTags = [];
      sideTags.forEach((t) => {
        if (/\bdata-brow="1"/.test(t)) {
          browTags.push(t);
        } else {
          eyeBallTags.push(t);
        }
      });

      let eyePart = eyeBallTags.join("\n");
      if (eyeBallTags.length > 0) {
        if (gifP !== null) {
          const isClosed = (gifP >= 0.42 && gifP <= 0.50) || (gifP >= 0.90 && gifP <= 0.96);
          if (isClosed) {
            const ecx = side === "L" ? 174 : side === "R" ? 226 : 200;
            const ecy = side === "C" ? 180 : 196;
            eyePart = `<g transform="translate(${ecx}, ${ecy}) scale(1.06, 0.08) translate(${-ecx}, ${-ecy})">${eyePart}</g>`;
          }
        } else {
          eyePart = `<g class="eye-blink-unit">${eyePart}</g>`;
        }
      }

      let browPart = browTags.join("\n");
      if (browTags.length > 0) {
        if (gifP !== null) {
          // Брови плавно приподнимаются немного вверх (-2.8px) и опускаются обратно без сплющивания моргания
          const browLift = +(-2.8 * (0.5 - 0.5 * Math.cos(gifP * Math.PI * 2))).toFixed(2);
          browPart = `<g transform="translate(0, ${browLift})">${browPart}</g>`;
        } else {
          browPart = `<g class="eye-brow-unit">${browPart}</g>`;
        }
      }

      return `${browPart}${eyePart}`;
    }

    let res = sideTags.join("\n");
    if (isEarsMoving && (side === "L" || side === "R")) {
      if (gifP !== null) {
        const rad = gifP * Math.PI * 2;
        const earAng = +(Math.sin(rad) * 5.5).toFixed(2);
        const earDy = +(-1.8 * Math.abs(Math.sin(rad))).toFixed(2);
        const pivX = side === "L" ? 152 : 248;
        const signedAng = side === "L" ? earAng : -earAng;
        res = `<g transform="translate(0, ${earDy}) translate(${pivX}, 200) rotate(${signedAng}) translate(${-pivX}, -200)">${res}</g>`;
      } else {
        res = `<g class="ear-anim-${side}">${res}</g>`;
      }
    }
    return res;
  };

  let out = "";
  if (leftTags.length > 0) {
    const lKey = `${partKey}:L`;
    out += `<g class="svg-part" data-part="${partKey}" data-subpart="${lKey}"${getPartOffsetAttr(lKey)}>${wrapSubpartAnim(leftTags, "L")}</g>`;
  }
  if (rightTags.length > 0) {
    const rKey = `${partKey}:R`;
    out += `<g class="svg-part" data-part="${partKey}" data-subpart="${rKey}"${getPartOffsetAttr(rKey)}>${wrapSubpartAnim(rightTags, "R")}</g>`;
  }
  if (centerTags.length > 0) {
    const cKey = `${partKey}:C`;
    out += `<g class="svg-part" data-part="${partKey}" data-subpart="${cKey}"${getPartOffsetAttr(cKey)}>${wrapSubpartAnim(centerTags, "C")}</g>`;
  }
  return out;
}

// Наложение диагонального блика-полоски под углом 45° с возможностью отключения блика под конкретный элемент (state.glareTargets)
function appendGlareStripe45(glareKey, splitContentMarkup, delayVariant = 0, showStaticWhenOff = false) {
  if (!splitContentMarkup || !splitContentMarkup.trim()) return "";
  const targetKey = glareKey === "hatAstro" ? "hat" : glareKey;
  if (!state.glareTargets || !state.glareTargets[targetKey]) {
    return splitContentMarkup;
  }
  const animOn = isAnimationActiveNow();
  const isAnimGlare = Boolean(animOn && state.animGlare);
  if (!isAnimGlare && !showStaticWhenOff) {
    return splitContentMarkup;
  }
  const gifP = getGifProgressNow();
  let glareGroupOpen = `<g class="${isAnimGlare ? `glare-sweep-${delayVariant}` : "glare-static-pos"}">`;
  if (gifP !== null) {
    if (isAnimGlare) {
      const gp = (gifP + delayVariant * 0.18) % 1;
      const gx = +(-210 + gp * 420).toFixed(1);
      const gy = +(-30 + gp * 60).toFixed(1);
      glareGroupOpen = `<g transform="translate(${gx}, ${gy})">`;
    } else {
      glareGroupOpen = `<g transform="translate(-12, 0)">`;
    }
  }
  return `
    ${splitContentMarkup}
    <mask id="glareMask-${glareKey}" class="mask-alpha" maskUnits="userSpaceOnUse">
      ${splitContentMarkup}
    </mask>
    <g mask="url(#glareMask-${glareKey})" pointer-events="none">
      ${glareGroupOpen}
        <g transform="rotate(-45 200 200)">
          <rect x="184" y="-140" width="18" height="680" rx="9" fill="#FFFFFF" opacity="0.72" class="blend-overlay" />
          <rect x="189" y="-140" width="8" height="680" rx="4" fill="#FFFFFF" opacity="0.45" class="blend-screen" />
          <rect x="208" y="-140" width="6" height="680" rx="3" fill="#FFFFFF" opacity="0.52" class="blend-overlay" />
        </g>
      </g>
    </g>
  `;
}

// Чистый сдвиг оттенка (hue), насыщенности и глубины для узлов сетчатого градиента без грязного потемнения
function shiftColorCleanly(hex, hueShiftDeg, satDelta, lightDelta) {
  const { h, s, l } = analyzeHexColor(hex);
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const nh = ((h + hueShiftDeg) % 360 + 360) % 360;
  // Сохраняем высокую чистоту и насыщенность цвета, чтобы при смешивании не появлялся грязно-серый оттенок
  const ns = clamp(s < 0.14 ? 0.36 : s + satDelta, 0.28, 0.96);
  const nl = clamp(l + lightDelta, 0.16, 0.78);
  const c = (1 - Math.abs(2 * nl - 1)) * ns;
  const x = c * (1 - Math.abs(((nh / 60) % 2) - 1));
  const m = nl - c / 2;
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (nh < 60) {
    r1 = c; g1 = x; b1 = 0;
  } else if (nh < 120) {
    r1 = x; g1 = c; b1 = 0;
  } else if (nh < 180) {
    r1 = 0; g1 = c; b1 = x;
  } else if (nh < 240) {
    r1 = 0; g1 = x; b1 = c;
  } else if (nh < 300) {
    r1 = x; g1 = 0; b1 = c;
  } else {
    r1 = c; g1 = 0; b1 = x;
  }
  const r = Math.round((r1 + m) * 255);
  const g = Math.round((g1 + m) * 255);
  const b = Math.round((b1 + m) * 255);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Получение 4 чистых близких оттенков (сдвиг по тону и глубине без грязи) для сетчатого градиента каждого объекта
function getMeshNodesForKey(layerKey, baseHex) {
  let hash = 0;
  const s = String(layerKey || "skin");
  for (let i = 0; i < s.length; i++) {
    hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  }
  const baseColor = String(baseHex || state.colors[layerKey] || "#E05A47").toUpperCase();
  const shades = buildShades(baseColor);
  const cfg = state.layerMeshConfig && state.layerMeshConfig[layerKey];
  // Узлы строятся от собственного цвета элемента со сдвигом оттенка (аналоговая гармония) и мягким уходом в глубину без противоположных грязных цветов
  const c1 = shiftColorCleanly(baseColor, cfg ? cfg.h1 : -24, 0.14, -0.09);
  const c2 = shiftColorCleanly(baseColor, cfg ? cfg.h2 : 26, 0.16, -0.13);
  const c3 = shiftColorCleanly(baseColor, cfg ? cfg.h3 : -14, 0.18, -0.17);
  const c4 = shiftColorCleanly(baseColor, cfg ? cfg.h4 : 18, 0.12, -0.07);
  return {
    base: shades.base,
    hi: shades.hi,
    deep: shades.deep,
    n1: c1,
    n2: c2,
    n3: c3,
    n4: c4,
    cx1: cfg ? cfg.cx1 : 22 + (hash % 24),
    cy1: cfg ? cfg.cy1 : 20 + ((hash >> 2) % 24),
    cx2: cfg ? cfg.cx2 : 78 - ((hash >> 3) % 24),
    cy2: cfg ? cfg.cy2 : 24 + ((hash >> 4) % 24),
    cx3: cfg ? cfg.cx3 : 26 + ((hash >> 5) % 24),
    cy3: cfg ? cfg.cy3 : 78 - ((hash >> 6) % 22),
    cx4: cfg ? cfg.cx4 : 74 - ((hash >> 7) % 24),
    cy4: cfg ? cfg.cy4 : 76 - ((hash >> 8) % 22)
  };
}

// Генерация SVG-определений 4-узловых радиальных пятен чистого сетчатого градиента (Mesh Gradient) для всех слоёв и деталей
function buildMeshGradientDefs() {
  if (!state.gradientMode) return "";
  return MESH_KEYS
    .map((key) => {
      const m = getMeshNodesForKey(key, state.colors[key]);
      return `
        <radialGradient id="meshNode1-${key}" cx="${m.cx1}%" cy="${m.cy1}%" r="68%">
          <stop offset="0%" stop-color="${m.n1}" stop-opacity="0.82" />
          <stop offset="55%" stop-color="${m.n1}" stop-opacity="0.38" />
          <stop offset="100%" stop-color="${m.n1}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="meshNode2-${key}" cx="${m.cx2}%" cy="${m.cy2}%" r="64%">
          <stop offset="0%" stop-color="${m.n2}" stop-opacity="0.78" />
          <stop offset="52%" stop-color="${m.n2}" stop-opacity="0.34" />
          <stop offset="100%" stop-color="${m.n2}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="meshNode3-${key}" cx="${m.cx3}%" cy="${m.cy3}%" r="68%">
          <stop offset="0%" stop-color="${m.n3}" stop-opacity="0.8" />
          <stop offset="55%" stop-color="${m.n3}" stop-opacity="0.36" />
          <stop offset="100%" stop-color="${m.n3}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="meshNode4-${key}" cx="${m.cx4}%" cy="${m.cy4}%" r="62%">
          <stop offset="0%" stop-color="${m.n4}" stop-opacity="0.74" />
          <stop offset="50%" stop-color="${m.n4}" stop-opacity="0.3" />
          <stop offset="100%" stop-color="${m.n4}" stop-opacity="0" />
        </radialGradient>
      `;
    })
    .join("\n");
}

// Разметка 4 пересекающихся узлов сетчатого градиента внутри маски элемента
function buildMeshSpotsRects(meshKey) {
  return `
    <rect x="0" y="0" width="400" height="400" fill="url(#meshNode1-${meshKey})" />
    <rect x="0" y="0" width="400" height="400" fill="url(#meshNode2-${meshKey})" />
    <rect x="0" y="0" width="400" height="400" fill="url(#meshNode3-${meshKey})" />
    <rect x="0" y="0" width="400" height="400" fill="url(#meshNode4-${meshKey})" />
  `;
}

// Наложение чистого сетчатого градиента (Mesh Gradient без грязного multiply) на самостоятельные детали (глаза, нос, рот, аксессуары, очки)
function wrapSubpartWithMesh(partKey, markup, suffix = "") {
  if (!markup || !markup.trim()) return "";
  const splitMarkup = splitMarkupIntoIndependentSubparts(partKey, markup);
  const hasMesh = Boolean(state.gradientMode && (!state.mesh || state.mesh[partKey] !== false));
  if (!hasMesh) return splitMarkup;
  const maskId = `meshSubMask-${partKey}${suffix}`;
  return `
    <g>
      ${splitMarkup}
      <mask id="${maskId}" class="mask-alpha" maskUnits="userSpaceOnUse">
        ${splitMarkup}
      </mask>
      <g mask="url(#${maskId})" pointer-events="none" opacity="0.88">
        ${buildMeshSpotsRects(partKey)}
      </g>
    </g>
  `;
}

// Наложение оригинального шума из Ава Генератора (mix-blend-mode: overlay) и чистого сетчатого градиента (Mesh Gradient)
function wrapLayerWithNoise(layerKey, contentMarkup, partTarget) {
  if (!contentMarkup || !contentMarkup.trim()) return "";
  const partKey = partTarget || (layerKey === "skin" ? "face" : layerKey);
  const transformedContent = splitMarkupIntoIndependentSubparts(partKey, contentMarkup);
  const animOn = isAnimationActiveNow();
  const isNoiseMoving = Boolean(animOn && state.animNoise);
  const noiseRectBounds = isNoiseMoving ? `x="-60" y="-60" width="520" height="520"` : `x="0" y="0" width="400" height="400"`;
  const gifP = getGifProgressNow();
  let noiseInnerClass = "";
  if (isNoiseMoving) {
    if (gifP !== null) {
      const noiseSteps = [
        [0, 0],
        [-27, 19],
        [23, -31],
        [-35, -17],
        [31, 25],
        [-19, 33],
        [29, -21],
        [-23, -29]
      ];
      const [nx, ny] = noiseSteps[Math.floor(gifP * 16) % noiseSteps.length];
      noiseInnerClass = ` transform="translate(${nx}, ${ny})"`;
    } else {
      noiseInnerClass = ` class="anim-noise-layer"`;
    }
  }

  const hasGrain = Boolean(state.grain[layerKey]);
  const hasMesh = Boolean(state.gradientMode && (!state.mesh || state.mesh[layerKey] !== false));

  if (!hasGrain && !hasMesh) {
    return partKey === "bg" ? `<g class="svg-part" data-part="bg">${transformedContent}</g>` : transformedContent;
  }

  let variantNum = state.layerNoiseVariant[layerKey] || 1;
  if (state.noiseMode === "v1") variantNum = 1;
  if (state.noiseMode === "v2") variantNum = 2;
  if (state.noiseMode === "v3") variantNum = 3;

  const patternId = variantNum === 1 ? "sf-noise" : variantNum === 2 ? "sf-noise-2" : "sf-noise-3";
  const opacityVal = layerKey === "bg" ? "0.52" : "0.58";

  if (layerKey === "bg" && state.geoCutout === "none") {
    return `
      <g class="svg-part" data-part="${partKey}">
        ${transformedContent}
        ${hasMesh ? `<g clip-path="url(#stageBoundsClip)" pointer-events="none" opacity="0.78">${buildMeshSpotsRects("bg")}</g>` : ""}
        ${hasGrain ? `<g clip-path="url(#stageBoundsClip)" class="blend-overlay" pointer-events="none"><rect ${noiseRectBounds} fill="url(#${patternId})" opacity="${opacityVal}"${noiseInnerClass} /></g>` : ""}
      </g>
    `;
  }

  const innerMaskContent =
    state.geoCutout === "none"
      ? transformedContent
      : `<g mask="url(#geoMask-${layerKey})">${transformedContent}</g>`;

  const meshMaskMarkup = hasMesh
    ? `
      <mask id="meshAlphaMask-${layerKey}" class="mask-alpha" maskUnits="userSpaceOnUse">
        ${transformedContent}
      </mask>
      <g mask="url(#meshAlphaMask-${layerKey})" pointer-events="none" opacity="0.88">
        ${buildMeshSpotsRects(layerKey)}
      </g>
    `
    : "";

  const grainMaskMarkup = hasGrain
    ? `
      <mask id="alphaMask-${layerKey}" class="mask-alpha" maskUnits="userSpaceOnUse">
        ${innerMaskContent}
      </mask>
      <g mask="url(#alphaMask-${layerKey})" class="blend-overlay" pointer-events="none">
        <rect ${noiseRectBounds} fill="url(#${patternId})" opacity="${opacityVal}"${noiseInnerClass} />
      </g>
    `
    : "";

  return `
    <g>
      ${transformedContent}
      ${meshMaskMarkup}
      ${grainMaskMarkup}
    </g>
  `;
}

// Построение контура обрезки верха головы (#headHairClip) строго по верхнему краю активных волос (чёлки или короткой стрижки),
// а при включённом увеличении верха головы (faceTopBoostPct > 0) — с подъёмом контура вверх для закрытия дырок под прической/шапкой
function buildHeadHairClipMarkup() {
  const hasBangs = state.hairBangs && state.hairBangs !== "none";
  const hasShort = state.hairShort && state.hairShort !== "none";
  const boostPct = Math.max(0, Math.min(60, Number(state.faceTopBoostPct) || 0));

  if ((!hasBangs && !hasShort) || boostPct > 0) {
    return `<rect x="0" y="0" width="400" height="400" />`;
  }

  // Чёлки с глубоким пробором по центру (шторки, сердечко, волны): линия обрезки опускается в центре до y=152, чтобы макушка не торчала в вырезе пробора
  const centerDipBangs = ["curtain", "twinWaves", "heartPart", "wavyCurtain", "miniCurtain", "doubleCurtainLong", "royalPartBangs"];
  if (hasBangs && centerDipBangs.includes(state.hairBangs)) {
    return `<path d="M0 168 L142 152 C158 142, 184 146, 200 153 C216 146, 242 142, 258 152 L400 168 L400 400 L0 400 Z" />`;
  }

  // Чёлки только из боковых прядей у висков
  const openCenterBangs = ["splitLocks", "templeDrops", "ringletsSide", "sWaveLocks", "twinSpirals", "kitsuneLocksBangs"];
  if (hasBangs && openCenterBangs.includes(state.hairBangs)) {
    return `<path d="M0 168 L144 152 C158 138, 242 138, 256 152 L400 168 L400 400 L0 400 Z" />`;
  }

  if (hasBangs) {
    // Для всех остальных чёлок верх головы обрезается строго ниже верхнего контура чёлки (y=148..152)
    return `<path d="M0 168 L142 150 C158 146, 242 146, 258 150 L400 168 L400 400 L0 400 Z" />`;
  }

  // Для коротких стрижек от висков верх головы обрезается ниже купола стрижки
  return `<path d="M0 164 L144 148 C156 140, 244 140, 256 148 L400 164 L400 400 L0 400 Z" />`;
}

// 1А. Генерация овала лица и черепа (с поддержкой увеличения верха головы на n% для закрытия зазоров под волосами и шапками)
function renderFaceGeometry(faceId) {
  const hasUpperHair = state.hairShort !== "none" || state.hairBangs !== "none";
  const boostPct = Math.max(0, Math.min(60, Number(state.faceTopBoostPct) || 0));
  const boostPx = Math.round(130 * (boostPct / 100));
  const topY = (hasUpperHair ? 128 : 135) - boostPx;
  const ctrlX = Math.min(264, (hasUpperHair ? 248 : 234) + Math.round(boostPct * 0.28));
  const ctrlXL = 400 - ctrlX;
  const templeY = (hasUpperHair ? 142 : 156) - Math.round(boostPx * 0.85);

  switch (faceId) {
    case "mochi":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 250 192 C253 234, 236 260, 200 260 C164 260, 147 234, 150 192 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "pebble":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 250 190 L250 210 C250 238, 228 260, 200 260 C172 260, 150 238, 150 210 L150 190 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "jaw":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 250 190 L250 222 C250 244, 234 260, 200 260 C166 260, 150 244, 150 222 L150 190 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "onigiri":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 252 186, 248 232 C244 256, 156 256, 152 232 C148 186, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "sphere":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 255 ${templeY}, 255 200 C255 232, 232 256, 200 256 C168 256, 145 232, 145 200 C145 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "daruma":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 253 ${templeY}, 253 204 C253 242, 232 260, 200 260 C168 260, 147 242, 147 204 C147 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "pear":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 248 ${templeY}, 248 194 C253 232, 236 260, 200 260 C164 260, 147 232, 152 194 C152 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "diamond":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 250 196 C250 224, 226 260, 200 260 C174 260, 150 224, 150 196 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "heart":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 249 194 C248 226, 222 261, 200 261 C178 261, 152 226, 151 194 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "hexagon":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 249 ${templeY}, 249 182 L249 214 C249 236, 228 259, 208 259 L192 259 C172 259, 151 236, 151 214 L151 182 C151 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "chubbySq":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 249 ${templeY}, 250 198 C251 238, 238 259, 200 259 C162 259, 149 238, 150 198 C151 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "kitsune":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 248 190 C246 224, 220 262, 200 262 C180 262, 154 224, 152 190 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "cloudFace":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 252 ${templeY}, 252 200 C252 234, 230 259, 200 259 C170 259, 148 234, 148 200 C148 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "shield":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 249 ${templeY}, 249 184 L249 206 C249 238, 218 260, 200 260 C182 260, 151 238, 151 206 L151 184 C151 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "dumpling":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 254 ${templeY}, 254 204 C254 238, 232 259, 200 259 C168 259, 146 238, 146 204 C146 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "baobao":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 248 ${templeY}, 249 186 C252 214, 260 228, 256 244 C252 257, 232 262, 200 262 C168 262, 148 257, 144 244 C140 228, 148 214, 151 186 C152 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "hamster":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 247 ${templeY}, 247 182 C250 206, 262 222, 258 242 C254 258, 230 263, 200 262 C170 263, 146 258, 142 242 C138 222, 150 206, 153 182 C153 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "marshmallow":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 250 ${templeY}, 252 190 C256 232, 248 260, 200 261 C152 260, 144 232, 148 190 C150 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "totoroCheeks":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 254 ${templeY}, 257 198 C260 236, 242 262, 200 262 C158 262, 140 236, 143 198 C146 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "daifuku":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 248 ${templeY}, 251 196 C256 232, 244 260, 200 260 C156 260, 144 232, 149 196 C152 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "pudding":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 246 ${templeY}, 246 188 C250 218, 258 248, 232 259 C218 263, 182 263, 168 259 C142 248, 150 218, 154 188 C154 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    case "chubbyPear":
      return `<path d="M200 ${topY} C${ctrlX} ${topY}, 245 ${templeY}, 245 186 C249 212, 259 232, 246 250 C236 261, 164 261, 154 250 C141 232, 151 212, 155 186 C155 ${templeY}, ${ctrlXL} ${topY}, 200 ${topY} Z" fill="url(#skinGrad)" />`;
    default:
      return `<circle cx="200" cy="200" r="54" fill="url(#skinGrad)" />`;
  }
}

function renderFace(faceId) {
  return `<g clip-path="url(#headHairClip)">${renderFaceGeometry(faceId)}</g>`;
}

// 1Б. Генерация форм ушек (16 форм, без обводки, со скруглёнными кончиками)
function renderEars(earsId, earShades) {
  const inner = earShades.deep;
  switch (earsId) {
    case "none":
      return "";
    case "round":
      return `
        <circle cx="144" cy="202" r="14" fill="url(#earsGrad)" />
        <circle cx="256" cy="202" r="14" fill="url(#earsGrad)" />
        <circle cx="145" cy="202" r="6" fill="${earShades.shadow}" />
        <circle cx="255" cy="202" r="6" fill="${earShades.shadow}" />
      `;
    case "oval":
      return `
        <ellipse cx="145" cy="202" rx="10" ry="16" fill="url(#earsGrad)" />
        <ellipse cx="255" cy="202" rx="10" ry="16" fill="url(#earsGrad)" />
      `;
    case "elfShort":
      return `
        <path d="M154 188 C136 180, 124 180, 120 176 C118 174, 118 182, 120 188 C124 202, 134 214, 154 214 Z" fill="url(#earsGrad)" />
        <path d="M246 188 C264 180, 276 180, 280 176 C282 174, 282 182, 280 188 C276 202, 266 214, 246 214 Z" fill="url(#earsGrad)" />
      `;
    case "elfLong":
      return `
        <path d="M154 188 C130 174, 112 170, 104 162 C100 158, 101 166, 105 174 C112 196, 128 214, 154 215 Z" fill="url(#earsGrad)" />
        <path d="M246 188 C270 174, 288 170, 296 162 C300 158, 299 166, 295 174 C288 196, 272 214, 246 215 Z" fill="url(#earsGrad)" />
      `;
    case "elfHorizontal":
      // 5. Горизонтальные треугольные эльфийские уши: сглаженный кончик и без прозрачностей
      return `
        <path d="M154 186 L82 186 Q72 186 79 193 L154 218 Z" fill="url(#earsGrad)" />
        <path d="M246 186 L318 186 Q328 186 321 193 L246 218 Z" fill="url(#earsGrad)" />
        <path d="M146 192 L100 192 Q94 192 99 196 L146 210 Z" fill="${earShades.shadow}" />
        <path d="M254 192 L300 192 Q306 192 301 196 L254 210 Z" fill="${earShades.shadow}" />
      `;
    case "droopy":
      return `
        <path d="M154 190 C132 190, 114 200, 110 212 C108 218, 116 222, 124 220 C136 218, 144 215, 154 212 Z" fill="url(#earsGrad)" />
        <path d="M246 190 C268 190, 286 200, 290 212 C292 218, 284 222, 276 220 C264 218, 256 215, 246 212 Z" fill="url(#earsGrad)" />
      `;
    case "chubby":
      return `
        <circle cx="144" cy="198" r="12" fill="url(#earsGrad)" />
        <circle cx="143" cy="210" r="11" fill="url(#earsGrad)" />
        <circle cx="256" cy="198" r="12" fill="url(#earsGrad)" />
        <circle cx="257" cy="210" r="11" fill="url(#earsGrad)" />
      `;
    case "tiny":
      return `
        <circle cx="147" cy="202" r="9" fill="url(#earsGrad)" />
        <circle cx="253" cy="202" r="9" fill="url(#earsGrad)" />
      `;
    case "big":
      return `
        <circle cx="138" cy="202" r="19" fill="url(#earsGrad)" />
        <circle cx="262" cy="202" r="19" fill="url(#earsGrad)" />
        <circle cx="140" cy="202" r="9" fill="${earShades.shadow}" />
        <circle cx="260" cy="202" r="9" fill="${earShades.shadow}" />
      `;
    case "pixie":
      return `
        <path d="M154 186 L124 178 Q115 175 119 184 L133 209 Q136 214 142 214 L154 214 Z" fill="url(#earsGrad)" />
        <path d="M246 186 L276 178 Q285 175 281 184 L267 209 Q264 214 258 214 L246 214 Z" fill="url(#earsGrad)" />
      `;
    case "fin":
      return `
        <path d="M154 186 L122 176 Q114 174 118 182 L124 194 Q126 197 122 200 L117 204 Q112 208 119 211 L132 215 L154 215 Z" fill="url(#earsGrad)" />
        <path d="M246 186 L278 176 Q286 174 282 182 L276 194 Q274 197 278 200 L283 204 Q288 208 281 211 L268 215 L246 215 Z" fill="url(#earsGrad)" />
      `;
    case "cyberEar":
      return `
        <rect x="132" y="186" width="18" height="32" rx="7" fill="url(#earsGrad)" />
        <rect x="250" y="186" width="18" height="32" rx="7" fill="url(#earsGrad)" />
        <circle cx="139" cy="202" r="4" fill="#7EBCE6" />
        <circle cx="261" cy="202" r="4" fill="#7EBCE6" />
      `;
    case "pierced":
      return `
        <circle cx="144" cy="202" r="14" fill="url(#earsGrad)" />
        <circle cx="256" cy="202" r="14" fill="url(#earsGrad)" />
        <rect x="127" y="193" width="8" height="4" rx="2" fill="#F2C14E" />
        <rect x="127" y="201" width="8" height="4" rx="2" fill="#F2C14E" />
        <rect x="265" y="193" width="8" height="4" rx="2" fill="#F2C14E" />
        <rect x="265" y="201" width="8" height="4" rx="2" fill="#F2C14E" />
      `;
    case "furTuft":
      return `
        <path d="M154 188 C134 178, 122 178, 118 172 C120 196, 134 214, 154 214 Z" fill="url(#earsGrad)" />
        <path d="M246 188 C266 178, 278 178, 282 172 C280 196, 266 214, 246 214 Z" fill="url(#earsGrad)" />
        <circle cx="116" cy="170" r="5.5" fill="${earShades.hi}" />
        <circle cx="284" cy="170" r="5.5" fill="${earShades.hi}" />
      `;
    case "heartEar":
      return `
        <circle cx="141" cy="196" r="10" fill="url(#earsGrad)" />
        <circle cx="143" cy="207" r="9" fill="url(#earsGrad)" />
        <circle cx="259" cy="196" r="10" fill="url(#earsGrad)" />
        <circle cx="257" cy="207" r="9" fill="url(#earsGrad)" />
      `;
    default:
      return `
        <circle cx="144" cy="202" r="14" fill="url(#earsGrad)" />
        <circle cx="256" cy="202" r="14" fill="url(#earsGrad)" />
      `;
  }
}

// 1В. Генерация серёжек отдельной категорией (15 видов, без обводки, чисто заливкой)
function renderEarrings(earringsId, earringShades) {
  const c = earringShades.base;
  const hi = earringShades.hi;
  const deep = earringShades.deep;
  switch (earringsId) {
    case "none":
      return "";
    case "studsSmall":
      return `
        <circle cx="138" cy="212" r="4.5" fill="${c}" />
        <circle cx="262" cy="212" r="4.5" fill="${c}" />
      `;
    case "studsBig":
      return `
        <circle cx="136" cy="214" r="9" fill="url(#earringsGrad)" />
        <circle cx="264" cy="214" r="9" fill="url(#earringsGrad)" />
      `;
    case "hoopsThin":
      // Тонкие кольца через fill-rule="evenodd" без stroke
      return `
        <path fill-rule="evenodd" d="M136 206 A12 12 0 1 0 136 230 A12 12 0 1 0 136 206 Z M136 209.5 A8.5 8.5 0 1 0 136 226.5 A8.5 8.5 0 1 0 136 209.5 Z" fill="${c}" />
        <path fill-rule="evenodd" d="M264 206 A12 12 0 1 0 264 230 A12 12 0 1 0 264 206 Z M264 209.5 A8.5 8.5 0 1 0 264 226.5 A8.5 8.5 0 1 0 264 209.5 Z" fill="${c}" />
      `;
    case "hoopsThick":
      // Крупные кольца-конго через fill-rule="evenodd" без stroke
      return `
        <path fill-rule="evenodd" d="M134 205 A17 17 0 1 0 134 239 A17 17 0 1 0 134 205 Z M134 211 A11 11 0 1 0 134 233 A11 11 0 1 0 134 211 Z" fill="url(#earringsGrad)" />
        <path fill-rule="evenodd" d="M266 205 A17 17 0 1 0 266 239 A17 17 0 1 0 266 205 Z M266 211 A11 11 0 1 0 266 233 A11 11 0 1 0 266 211 Z" fill="url(#earringsGrad)" />
      `;
    case "oneCross":
      return `
        <circle cx="138" cy="211" r="3.5" fill="${hi}" />
        <rect x="136" y="214" width="4" height="22" rx="2" fill="url(#earringsGrad)" />
        <rect x="130" y="220" width="16" height="4" rx="2" fill="url(#earringsGrad)" />
      `;
    case "doubleCross":
      return `
        <rect x="136" y="214" width="4" height="22" rx="2" fill="url(#earringsGrad)" />
        <rect x="130" y="220" width="16" height="4" rx="2" fill="url(#earringsGrad)" />
        <rect x="260" y="214" width="4" height="22" rx="2" fill="url(#earringsGrad)" />
        <rect x="254" y="220" width="16" height="4" rx="2" fill="url(#earringsGrad)" />
      `;
    case "longDrops":
      return `
        <path d="M138 212 C144 226, 144 236, 138 236 C132 236, 132 226, 138 212 Z" fill="url(#earringsGrad)" />
        <path d="M262 212 C268 226, 268 236, 262 236 C256 236, 256 226, 262 212 Z" fill="url(#earringsGrad)" />
      `;
    case "doublePearls":
      return `
        <circle cx="138" cy="212" r="4.5" fill="${hi}" />
        <circle cx="138" cy="224" r="7.5" fill="url(#earringsGrad)" />
        <circle cx="262" cy="212" r="4.5" fill="${hi}" />
        <circle cx="262" cy="224" r="7.5" fill="url(#earringsGrad)" />
      `;
    case "tassels":
      return `
        <circle cx="138" cy="212" r="4" fill="${hi}" />
        <path d="M138 214 C142 214, 148 238, 146 243 C144 246, 132 246, 130 243 C128 238, 134 214, 138 214 Z" fill="url(#earringsGrad)" />
        <circle cx="262" cy="212" r="4" fill="${hi}" />
        <path d="M262 214 C266 214, 272 238, 270 243 C268 246, 256 246, 254 243 C252 238, 258 214, 262 214 Z" fill="url(#earringsGrad)" />
      `;
    case "starsEar":
      return `
        <path d="M138 211 Q139 211 141 217 L147 219 Q149 220 147 222 L143 225 L144 231 Q145 233 143 232 L138 229 L133 232 Q131 233 132 231 L133 225 L129 222 Q127 220 129 219 L135 217 Q137 211 138 211 Z" fill="url(#earringsGrad)" />
        <path d="M262 211 Q263 211 265 217 L271 219 Q273 220 271 222 L267 225 L268 231 Q269 233 267 232 L262 229 L257 232 Q255 233 256 231 L257 225 L253 222 Q251 220 253 219 L259 217 Q261 211 262 211 Z" fill="url(#earringsGrad)" />
      `;
    case "heartsEar":
      return `
        <path d="M136.5 232 Q138 233.5 139.5 232 L147 222 A5 5 0 0 0 138 215 A5 5 0 0 0 129 222 Z" fill="url(#earringsGrad)" />
        <path d="M260.5 232 Q262 233.5 263.5 232 L271 222 A5 5 0 0 0 262 215 A5 5 0 0 0 253 222 Z" fill="url(#earringsGrad)" />
      `;
    case "diamondsEar":
      return `
        <path d="M136.5 212 Q138 210 139.5 212 L147 222 Q148.5 224 147 226 L139.5 236 Q138 238 136.5 236 L129 226 Q127.5 224 129 222 Z" fill="url(#earringsGrad)" />
        <path d="M260.5 212 Q262 210 263.5 212 L271 222 Q272.5 224 271 226 L263.5 236 Q262 238 260.5 236 L253 226 Q251.5 224 253 222 Z" fill="url(#earringsGrad)" />
      `;
    case "chains":
      return `
        <rect x="136" y="210" width="4" height="10" rx="2" fill="${c}" />
        <rect x="136" y="222" width="4" height="10" rx="2" fill="${hi}" />
        <rect x="136" y="234" width="4" height="10" rx="2" fill="${deep}" />
        <rect x="260" y="210" width="4" height="10" rx="2" fill="${c}" />
        <rect x="260" y="222" width="4" height="10" rx="2" fill="${hi}" />
        <rect x="260" y="234" width="4" height="10" rx="2" fill="${deep}" />
      `;
    case "moonSun":
      return `
        <path d="M142 211 A10 10 0 1 0 142 231 A7.5 7.5 0 1 1 142 211 Z" fill="url(#earringsGrad)" />
        <circle cx="262" cy="221" r="7.5" fill="url(#earringsGrad)" />
        <circle cx="262" cy="221" r="3" fill="${hi}" />
      `;
    default:
      return "";
  }
}

// 2. Генерация глаз из примитивов (51 форма, без stroke, с эмоцией вскинутой брови и 4 вариантами грустных глаз со слёзками)
function renderEyes(eyesId) {
  const color = state.colors.eyes || "#232126";
  switch (eyesId) {
    case "dots":
      return `
        <circle cx="174" cy="196" r="6.5" fill="${color}" />
        <circle cx="226" cy="196" r="6.5" fill="${color}" />
        <circle cx="172" cy="194" r="2" fill="#FFFFFF" />
        <circle cx="224" cy="194" r="2" fill="#FFFFFF" />
      `;
    case "happy":
      return `
        <path d="M161 198 C165 184, 183 184, 187 198 C186 201, 182 201, 181 198 C178 190, 170 190, 167 198 C166 201, 162 201, 161 198 Z" fill="${color}" />
        <path d="M213 198 C217 184, 235 184, 239 198 C238 201, 234 201, 233 198 C230 190, 222 190, 219 198 C218 201, 214 201, 213 198 Z" fill="${color}" />
      `;
    case "calm":
      return `
        <rect x="164" y="194" width="18" height="5" rx="2.5" fill="${color}" />
        <rect x="218" y="194" width="18" height="5" rx="2.5" fill="${color}" />
      `;
    case "sparkle":
      return `
        <circle cx="174" cy="196" r="8" fill="${color}" />
        <circle cx="226" cy="196" r="8" fill="${color}" />
        <path d="M173.4 189.8 Q174 188.6 174.6 189.8 L176 194 L180.2 195.4 Q181.4 196 180.2 196.6 L176 198 L174.6 202.2 Q174 203.4 173.4 202.2 L172 198 L167.8 196.6 Q166.6 196 167.8 195.4 L172 194 Z" fill="#FFFFFF" />
        <path d="M225.4 189.8 Q226 188.6 226.6 189.8 L228 194 L232.2 195.4 Q233.4 196 232.2 196.6 L228 198 L226.6 202.2 Q226 203.4 225.4 202.2 L224 198 L219.8 196.6 Q218.6 196 219.8 195.4 L224 194 Z" fill="#FFFFFF" />
      `;
    case "wink":
      return `
        <rect x="163" y="191.5" width="19" height="4.5" rx="2.25" transform="rotate(-16 172.5 193.75)" fill="${color}" />
        <rect x="163" y="196" width="19" height="4.5" rx="2.25" transform="rotate(16 172.5 198.25)" fill="${color}" />
        <circle cx="226" cy="196" r="6.5" fill="${color}" />
        <circle cx="224" cy="194" r="2" fill="#FFFFFF" />
      `;
    case "sleepy":
      // 6. Полукруги: пухлые и мягко скруглённые по углам без обводки
      return `
        <path d="M161 190 C161 188, 187 188, 187 190 A13 13 0 0 1 161 190 Z" fill="${color}" />
        <path d="M213 190 C213 188, 239 188, 239 190 A13 13 0 0 1 213 190 Z" fill="${color}" />
      `;
    case "wide":
      return `
        <circle cx="174" cy="196" r="9.5" fill="#FFFFFF" />
        <circle cx="226" cy="196" r="9.5" fill="#FFFFFF" />
        <circle cx="174" cy="196" r="5" fill="${color}" />
        <circle cx="226" cy="196" r="5" fill="${color}" />
      `;
    case "anime":
      return `
        <rect x="165" y="186" width="18" height="20" rx="8" fill="${color}" />
        <rect x="217" y="186" width="18" height="20" rx="8" fill="${color}" />
        <circle cx="171" cy="192" r="3.5" fill="#FFFFFF" />
        <circle cx="223" cy="192" r="3.5" fill="#FFFFFF" />
      `;
    case "cross":
      return `
        <rect x="164" y="193.75" width="20" height="4.5" rx="2.25" transform="rotate(45 174 196)" fill="${color}" />
        <rect x="164" y="193.75" width="20" height="4.5" rx="2.25" transform="rotate(-45 174 196)" fill="${color}" />
        <rect x="216" y="193.75" width="20" height="4.5" rx="2.25" transform="rotate(45 226 196)" fill="${color}" />
        <rect x="216" y="193.75" width="20" height="4.5" rx="2.25" transform="rotate(-45 226 196)" fill="${color}" />
      `;
    case "chevrons":
      return `
        <rect x="164" y="191" width="17" height="4.5" rx="2.25" transform="rotate(22 172.5 193.25)" fill="${color}" />
        <rect x="164" y="196.5" width="17" height="4.5" rx="2.25" transform="rotate(-22 172.5 198.75)" fill="${color}" />
        <rect x="219" y="191" width="17" height="4.5" rx="2.25" transform="rotate(-22 227.5 193.25)" fill="${color}" />
        <rect x="219" y="196.5" width="17" height="4.5" rx="2.25" transform="rotate(22 227.5 198.75)" fill="${color}" />
      `;
    case "vertical":
      return `
        <rect x="171" y="186" width="6" height="18" rx="3" fill="${color}" />
        <rect x="223" y="186" width="6" height="18" rx="3" fill="${color}" />
      `;
    case "catSlit":
      return `
        <path d="M162.2 197.8 Q174 187.5 185.8 194.2 Q187.8 195.2 185.8 196.3 Q174 202.5 162.2 199.6 Q160.2 199 162.2 197.8 Z" fill="${color}" />
        <path d="M237.8 197.8 Q226 187.5 214.2 194.2 Q212.2 195.2 214.2 196.3 Q226 202.5 237.8 199.6 Q239.8 199 237.8 197.8 Z" fill="${color}" />
      `;
    case "hearts":
      return `
        <path d="M172.8 203 Q174 204.4 175.2 203 L183 195 A5.5 5.5 0 0 0 174 188.5 A5.5 5.5 0 0 0 165 195 Z" fill="${color}" />
        <path d="M224.8 203 Q226 204.4 227.2 203 L235 195 A5.5 5.5 0 0 0 226 188.5 A5.5 5.5 0 0 0 217 195 Z" fill="${color}" />
      `;
    case "diamonds":
      return `
        <rect x="167.5" y="189.5" width="13" height="13" rx="3" transform="rotate(45 174 196)" fill="${color}" />
        <rect x="219.5" y="189.5" width="13" height="13" rx="3" transform="rotate(45 226 196)" fill="${color}" />
      `;
    case "cyclops":
      return `
        <circle cx="174" cy="198" r="5.5" fill="${color}" />
        <circle cx="226" cy="198" r="5.5" fill="${color}" />
        <circle cx="200" cy="180" r="7.5" fill="${color}" />
        <circle cx="200" cy="180" r="2.5" fill="#FFFFFF" />
      `;
    case "lashOval":
      return `
        <ellipse cx="174" cy="196" rx="6.5" ry="8" fill="${color}" />
        <ellipse cx="226" cy="196" rx="6.5" ry="8" fill="${color}" />
        <rect x="160" y="187.5" width="8" height="3" rx="1.5" transform="rotate(32 164 189)" fill="${color}" />
        <rect x="164" y="184.5" width="7" height="3" rx="1.5" transform="rotate(50 167.5 186)" fill="${color}" />
        <rect x="232" y="187.5" width="8" height="3" rx="1.5" transform="rotate(-32 236 189)" fill="${color}" />
        <rect x="229" y="184.5" width="7" height="3" rx="1.5" transform="rotate(-50 232.5 186)" fill="${color}" />
        <circle cx="172" cy="193" r="2.2" fill="#FFFFFF" />
        <circle cx="224" cy="193" r="2.2" fill="#FFFFFF" />
      `;
    case "sleepyArc":
      return `
        <path d="M161 194 C165 207, 183 207, 187 194 C186 191, 182 191, 181 194 C178 201, 170 201, 167 194 C166 191, 162 191, 161 194 Z" fill="${color}" />
        <path d="M213 194 C217 207, 235 207, 239 194 C238 191, 234 191, 233 194 C230 201, 222 201, 219 194 C218 191, 214 191, 213 194 Z" fill="${color}" />
      `;
    case "swirlEyes":
      return `
        <path d="M174 186 A10 10 0 1 0 174 206 A10 10 0 1 0 174 186 Z M174 189 A7 7 0 1 1 174 203 A7 7 0 1 1 174 189 Z" fill="${color}" fill-rule="evenodd" />
        <circle cx="174" cy="196" r="3.5" fill="${color}" />
        <path d="M226 186 A10 10 0 1 0 226 206 A10 10 0 1 0 226 186 Z M226 189 A7 7 0 1 1 226 203 A7 7 0 1 1 226 189 Z" fill="${color}" fill-rule="evenodd" />
        <circle cx="226" cy="196" r="3.5" fill="${color}" />
      `;
    case "catPupil":
      return `
        <ellipse cx="174" cy="196" rx="9" ry="7" fill="#FFFFFF" />
        <ellipse cx="226" cy="196" rx="9" ry="7" fill="#FFFFFF" />
        <ellipse cx="174" cy="196" rx="2.8" ry="6.5" fill="${color}" />
        <ellipse cx="226" cy="196" rx="2.8" ry="6.5" fill="${color}" />
      `;
    case "halfLids":
      return `
        <circle cx="174" cy="197" r="7" fill="${color}" />
        <circle cx="226" cy="197" r="7" fill="${color}" />
        <rect x="164" y="188" width="20" height="7" rx="3.5" fill="#FFFFFF" />
        <rect x="216" y="188" width="20" height="7" rx="3.5" fill="#FFFFFF" />
        <rect x="164" y="193" width="20" height="3.5" rx="1.75" fill="${color}" />
        <rect x="216" y="193" width="20" height="3.5" rx="1.75" fill="${color}" />
      `;
    case "starburst":
      return `
        <path d="M173 185.5 Q174 183.5 175 185.5 L177.5 192.5 L184.5 195 Q186.5 196 184.5 197 L177.5 199.5 L175 206.5 Q174 208.5 173 206.5 L170.5 199.5 L163.5 197 Q161.5 196 163.5 195 L170.5 192.5 Z" fill="${color}" />
        <path d="M225 185.5 Q226 183.5 227 185.5 L229.5 192.5 L236.5 195 Q238.5 196 236.5 197 L229.5 199.5 L227 206.5 Q226 208.5 225 206.5 L222.5 199.5 L215.5 197 Q213.5 196 215.5 195 L222.5 192.5 Z" fill="${color}" />
      `;
    case "teardropEyes":
      return `
        <circle cx="174" cy="195" r="7.5" fill="${color}" />
        <circle cx="226" cy="195" r="7.5" fill="${color}" />
        <circle cx="171" cy="192" r="2.8" fill="#FFFFFF" />
        <circle cx="223" cy="192" r="2.8" fill="#FFFFFF" />
        <circle cx="177" cy="200" r="2.2" fill="#7EBCE6" />
        <circle cx="229" cy="200" r="2.2" fill="#7EBCE6" />
      `;
    case "ringEyes":
      return `
        <path d="M174 186.5 A9.5 9.5 0 1 0 174 205.5 A9.5 9.5 0 1 0 174 186.5 Z M174 190.5 A5.5 5.5 0 1 1 174 201.5 A5.5 5.5 0 1 1 174 190.5 Z" fill="${color}" fill-rule="evenodd" />
        <path d="M226 186.5 A9.5 9.5 0 1 0 226 205.5 A9.5 9.5 0 1 0 226 186.5 Z M226 190.5 A5.5 5.5 0 1 1 226 201.5 A5.5 5.5 0 1 1 226 190.5 Z" fill="${color}" fill-rule="evenodd" />
      `;
    case "cyberEyes":
      return `
        <rect x="163" y="190" width="22" height="11" rx="4" fill="${color}" />
        <rect x="215" y="190" width="22" height="11" rx="4" fill="${color}" />
        <rect x="167" y="193" width="14" height="3" rx="1.5" fill="#7EBCE6" />
        <rect x="219" y="193" width="14" height="3" rx="1.5" fill="#7EBCE6" />
      `;
    case "slySquint":
      return `
        <rect data-brow="1" x="163" y="193" width="22" height="4.5" rx="2.25" transform="rotate(-14 174 195.25)" fill="${color}" />
        <rect data-brow="1" x="215" y="193" width="22" height="4.5" rx="2.25" transform="rotate(14 226 195.25)" fill="${color}" />
        <circle cx="175" cy="198" r="4" fill="${color}" />
        <circle cx="225" cy="198" r="4" fill="${color}" />
      `;
    case "doubleSparkle":
      return `
        <circle cx="174" cy="196" r="8.5" fill="${color}" />
        <circle cx="226" cy="196" r="8.5" fill="${color}" />
        <circle cx="171" cy="193" r="3" fill="#FFFFFF" />
        <circle cx="177" cy="199" r="1.5" fill="#FFFFFF" />
        <circle cx="223" cy="193" r="3" fill="#FFFFFF" />
        <circle cx="229" cy="199" r="1.5" fill="#FFFFFF" />
      `;
    case "crescentUp":
      // 27. Полумесяцы вверх: пухлые и со скруглёнными уголками без обводки
      return `
        <path d="M161 199 C164 184, 184 184, 187 199 C185 202, 181 200, 178 197 C175 194, 173 194, 170 197 C167 200, 163 202, 161 199 Z" fill="${color}" />
        <path d="M213 199 C216 184, 236 184, 239 199 C237 202, 233 200, 230 197 C227 194, 225 194, 222 197 C219 200, 215 202, 213 199 Z" fill="${color}" />
      `;
    case "crescentDown":
      // 28. Полумесяцы вниз: пухлые и со скруглёнными уголками без обводки
      return `
        <path d="M161 193 C164 208, 184 208, 187 193 C185 190, 181 192, 178 195 C175 198, 173 198, 170 195 C167 192, 163 190, 161 193 Z" fill="${color}" />
        <path d="M213 193 C216 208, 236 208, 239 193 C237 190, 233 192, 230 195 C227 198, 225 198, 222 195 C219 192, 215 190, 213 193 Z" fill="${color}" />
      `;
    case "softDiamonds":
      return `
        <rect x="167" y="189" width="14" height="14" rx="3.5" transform="rotate(45 174 196)" fill="${color}" />
        <rect x="219" y="189" width="14" height="14" rx="3.5" transform="rotate(45 226 196)" fill="${color}" />
        <circle cx="174" cy="194" r="2" fill="#FFFFFF" />
        <circle cx="226" cy="194" r="2" fill="#FFFFFF" />
      `;
    case "sleepyDots":
      return `
        <rect data-brow="1" x="163" y="189.25" width="22" height="3.5" rx="1.75" fill="${color}" />
        <rect data-brow="1" x="215" y="189.25" width="22" height="3.5" rx="1.75" fill="${color}" />
        <circle cx="174" cy="198" r="5" fill="${color}" />
        <circle cx="226" cy="198" r="5" fill="${color}" />
      `;
    case "wideOval":
      return `
        <ellipse cx="174" cy="196" rx="9" ry="6.5" fill="${color}" />
        <ellipse cx="226" cy="196" rx="9" ry="6.5" fill="${color}" />
        <circle cx="171" cy="194" r="2.5" fill="#FFFFFF" />
        <circle cx="223" cy="194" r="2.5" fill="#FFFFFF" />
      `;
    case "cuteLashes":
      return `
        <circle cx="174" cy="196" r="7.5" fill="${color}" />
        <circle cx="226" cy="196" r="7.5" fill="${color}" />
        <rect x="158" y="188.5" width="7" height="2.8" rx="1.4" transform="rotate(35 161.5 190)" fill="${color}" />
        <rect x="163" y="184" width="6.5" height="2.8" rx="1.4" transform="rotate(55 166 185.5)" fill="${color}" />
        <rect x="178.5" y="184" width="6.5" height="2.8" rx="1.4" transform="rotate(-55 182 185.5)" fill="${color}" />
        <rect x="235" y="188.5" width="7" height="2.8" rx="1.4" transform="rotate(-35 238.5 190)" fill="${color}" />
        <rect x="230.5" y="184" width="6.5" height="2.8" rx="1.4" transform="rotate(-55 234 185.5)" fill="${color}" />
        <rect x="215" y="184" width="6.5" height="2.8" rx="1.4" transform="rotate(55 218 185.5)" fill="${color}" />
        <circle cx="172" cy="194" r="2.5" fill="#FFFFFF" />
        <circle cx="224" cy="194" r="2.5" fill="#FFFFFF" />
      `;
    case "animeStar":
      return `
        <rect x="164" y="185" width="20" height="22" rx="9" fill="${color}" />
        <rect x="216" y="185" width="20" height="22" rx="9" fill="${color}" />
        <path d="M173.4 190.8 Q174 189.6 174.6 190.8 L176 194 L179.2 195.4 Q180.4 196 179.2 196.6 L176 198 L174.6 201.2 Q174 202.4 173.4 201.2 L172 198 L168.8 196.6 Q167.6 196 168.8 195.4 L172 194 Z" fill="#F2C14E" />
        <path d="M225.4 190.8 Q226 189.6 226.6 190.8 L228 194 L231.2 195.4 Q232.4 196 231.2 196.6 L228 198 L226.6 201.2 Q226 202.4 225.4 201.2 L224 198 L220.8 196.6 Q219.6 196 220.8 195.4 L224 194 Z" fill="#F2C14E" />
      `;
    case "angryBrows":
      return `
        <rect data-brow="1" x="163" y="188" width="22" height="4" rx="2" transform="rotate(16 174 190)" fill="${color}" />
        <rect data-brow="1" x="215" y="188" width="22" height="4" rx="2" transform="rotate(-16 226 190)" fill="${color}" />
        <circle cx="174" cy="198" r="6" fill="${color}" />
        <circle cx="226" cy="198" r="6" fill="${color}" />
      `;
    case "sadDroop":
      return `
        <rect data-brow="1" x="163" y="188.5" width="22" height="3.8" rx="1.9" transform="rotate(-14 174 190.4)" fill="${color}" />
        <rect data-brow="1" x="215" y="188.5" width="22" height="3.8" rx="1.9" transform="rotate(14 226 190.4)" fill="${color}" />
        <circle cx="174" cy="198" r="6" fill="${color}" />
        <circle cx="226" cy="198" r="6" fill="${color}" />
        <circle cx="172" cy="196" r="2" fill="#FFFFFF" />
        <circle cx="224" cy="196" r="2" fill="#FFFFFF" />
      `;
    case "heartPupil":
      return `
        <circle cx="174" cy="196" r="8.5" fill="${color}" />
        <circle cx="226" cy="196" r="8.5" fill="${color}" />
        <path d="M173.3 199.3 Q174 200.2 174.7 199.3 L178 195 A2.5 2.5 0 0 0 174 192 A2.5 2.5 0 0 0 170 195 Z" fill="#F472B6" />
        <path d="M225.3 199.3 Q226 200.2 226.7 199.3 L230 195 A2.5 2.5 0 0 0 226 192 A2.5 2.5 0 0 0 222 195 Z" fill="#F472B6" />
      `;
    case "yinYang":
      return `
        <circle cx="174" cy="196" r="7.5" fill="${color}" />
        <circle cx="226" cy="196" r="7.5" fill="#7EBCE6" />
        <circle cx="174" cy="196" r="3" fill="#FFFFFF" />
        <circle cx="226" cy="196" r="3" fill="${color}" />
      `;
    case "pixelEyes":
      // 38. Квадратные глаза с мягким скруглением углов (rx="3.5")
      return `
        <rect x="167" y="189" width="14" height="14" rx="3.5" fill="${color}" />
        <rect x="219" y="189" width="14" height="14" rx="3.5" fill="${color}" />
        <rect x="169" y="191" width="5" height="5" rx="1.5" fill="#FFFFFF" />
        <rect x="221" y="191" width="5" height="5" rx="1.5" fill="#FFFFFF" />
      `;
    case "buttonStitch":
      return `
        <circle cx="174" cy="196" r="8.5" fill="${color}" />
        <circle cx="226" cy="196" r="8.5" fill="${color}" />
        <rect x="169.5" y="194.9" width="9" height="2.2" rx="1.1" transform="rotate(45 174 196)" fill="#FFFFFF" />
        <rect x="169.5" y="194.9" width="9" height="2.2" rx="1.1" transform="rotate(-45 174 196)" fill="#FFFFFF" />
        <rect x="221.5" y="194.9" width="9" height="2.2" rx="1.1" transform="rotate(45 226 196)" fill="#FFFFFF" />
        <rect x="221.5" y="194.9" width="9" height="2.2" rx="1.1" transform="rotate(-45 226 196)" fill="#FFFFFF" />
      `;
    case "moonEyes":
      return `
        <path d="M177.2 187.2 Q178.6 186.5 177.6 188 A7 7 0 1 0 177.6 204 Q178.6 205.5 177.2 204.8 A9.5 9.5 0 1 1 177.2 187.2 Z" fill="${color}" />
        <path d="M229.2 187.2 Q230.6 186.5 229.6 188 A7 7 0 1 0 229.6 204 Q230.6 205.5 229.2 204.8 A9.5 9.5 0 1 1 229.2 187.2 Z" fill="${color}" />
      `;
    case "doubleRing":
      return `
        <path d="M174 186 A10 10 0 1 0 174 206 A10 10 0 1 0 174 186 Z M174 188.5 A7.5 7.5 0 1 1 174 203.5 A7.5 7.5 0 1 1 174 188.5 Z" fill="${color}" fill-rule="evenodd" />
        <circle cx="174" cy="196" r="4.5" fill="${color}" />
        <path d="M226 186 A10 10 0 1 0 226 206 A10 10 0 1 0 226 186 Z M226 188.5 A7.5 7.5 0 1 1 226 203.5 A7.5 7.5 0 1 1 226 188.5 Z" fill="${color}" fill-rule="evenodd" />
        <circle cx="226" cy="196" r="4.5" fill="${color}" />
      `;
    case "foxSlant":
      return `
        <path d="M161 198 Q174 184 187 194 C186 197, 183 197, 181 195 Q174 190 165 199 C163 200, 161 199, 161 198 Z" fill="${color}" />
        <path d="M239 198 Q226 184 213 194 C214 197, 217 197, 219 195 Q226 190 235 199 C237 200, 239 199, 239 198 Z" fill="${color}" />
        <circle cx="175" cy="195" r="3.5" fill="${color}" />
        <circle cx="225" cy="195" r="3.5" fill="${color}" />
      `;
    case "glossyOrbs":
      return `
        <circle cx="174" cy="196" r="9" fill="${color}" />
        <circle cx="226" cy="196" r="9" fill="${color}" />
        <ellipse cx="171" cy="192" rx="3.5" ry="2.2" transform="rotate(-25 171 192)" fill="#FFFFFF" />
        <ellipse cx="223" cy="192" rx="3.5" ry="2.2" transform="rotate(-25 223 192)" fill="#FFFFFF" />
        <circle cx="177" cy="200" r="1.8" fill="#FFFFFF" opacity="0.8" />
        <circle cx="229" cy="200" r="1.8" fill="#FFFFFF" opacity="0.8" />
      `;
    case "zenLines":
      return `
        <rect x="164" y="191" width="18" height="3.5" rx="1.75" fill="${color}" />
        <rect x="167" y="197" width="12" height="3.5" rx="1.75" fill="${color}" opacity="0.6" />
        <rect x="218" y="191" width="18" height="3.5" rx="1.75" fill="${color}" />
        <rect x="221" y="197" width="12" height="3.5" rx="1.75" fill="${color}" opacity="0.6" />
      `;
    case "argonPulse":
      return `
        <circle cx="174" cy="196" r="8" fill="${color}" />
        <circle cx="226" cy="196" r="8" fill="${color}" />
        <circle cx="174" cy="196" r="4" fill="#7EBCE6" />
        <circle cx="226" cy="196" r="4" fill="#7EBCE6" />
      `;
    case "pleadingCat":
      // 46. Милые глазки просящегося котика с крупными сияющими бликами
      return `
        <circle cx="173" cy="195" r="12.5" fill="${color}" />
        <circle cx="227" cy="195" r="12.5" fill="${color}" />
        <circle cx="169" cy="190" r="5" fill="#FFFFFF" />
        <circle cx="223" cy="190" r="5" fill="#FFFFFF" />
        <circle cx="177" cy="200" r="2.8" fill="#FFFFFF" />
        <circle cx="231" cy="200" r="2.8" fill="#FFFFFF" />
        <circle cx="178" cy="190" r="1.5" fill="#FFFFFF" />
        <circle cx="232" cy="190" r="1.5" fill="#FFFFFF" />
      `;
    case "raisedBrow":
      // 47. Эмоция вскинутой брови (одна бровь опущена нахмуренно, другая высоко изогнута дугой)
      return `
        <rect data-brow="1" x="163" y="187" width="21" height="4" rx="2" transform="rotate(8 173.5 189)" fill="${color}" />
        <path data-brow="1" d="M214 185 C220 175, 233 175, 239 184 C238 187, 235 187, 233 184 C229 180, 222 180, 218 185 C216 187, 214 187, 214 185 Z" fill="${color}" />
        <ellipse cx="174" cy="197" rx="6.5" ry="5" fill="${color}" />
        <circle cx="226" cy="196" r="7.5" fill="${color}" />
        <circle cx="172" cy="195" r="1.8" fill="#FFFFFF" />
        <circle cx="224" cy="193" r="2.5" fill="#FFFFFF" />
      `;
    case "sadTears1":
      // 48. Грустные со слёзками I (крупные капли в уголках глаз и домиком брови)
      return `
        <rect data-brow="1" x="162" y="184" width="20" height="3.8" rx="1.9" transform="rotate(-16 172 186)" fill="${color}" />
        <rect data-brow="1" x="218" y="184" width="20" height="3.8" rx="1.9" transform="rotate(16 228 186)" fill="${color}" />
        <circle cx="174" cy="196" r="8.5" fill="${color}" />
        <circle cx="226" cy="196" r="8.5" fill="${color}" />
        <circle cx="171" cy="193" r="3" fill="#FFFFFF" />
        <circle cx="223" cy="193" r="3" fill="#FFFFFF" />
        <path d="M163.5 201.5 Q164 200.4 164.6 201.5 C169 206, 170 212, 165 212 C160 212, 160 206, 163.5 201.5 Z" fill="#7EBCE6" />
        <path d="M236.5 201.5 Q236 200.4 235.4 201.5 C231 206, 230 212, 235 212 C240 212, 240 206, 236.5 201.5 Z" fill="#7EBCE6" />
      `;
    case "sadTears2":
      // 49. Грустные со слёзками II (блестящие стеклянные глаза с дрожащей голубой влагой внизу)
      return `
        <rect data-brow="1" x="162" y="183" width="21" height="3.6" rx="1.8" transform="rotate(-14 172.5 185)" fill="${color}" />
        <rect data-brow="1" x="217" y="183" width="21" height="3.6" rx="1.8" transform="rotate(14 227.5 185)" fill="${color}" />
        <circle cx="174" cy="196" r="10.5" fill="${color}" />
        <circle cx="226" cy="196" r="10.5" fill="${color}" />
        <path d="M164 198 C168 205, 180 205, 184 198 C184 204, 180 207, 174 207 C168 207, 164 204, 164 198 Z" fill="#7EBCE6" />
        <path d="M216 198 C220 205, 232 205, 236 198 C236 204, 232 207, 226 207 C220 207, 216 204, 216 198 Z" fill="#7EBCE6" />
        <circle cx="170" cy="192" r="4" fill="#FFFFFF" />
        <circle cx="222" cy="192" r="4" fill="#FFFFFF" />
        <circle cx="178" cy="195" r="2" fill="#FFFFFF" />
        <circle cx="230" cy="195" r="2" fill="#FFFFFF" />
      `;
    case "sadTears3":
      // 50. Грустные со слёзками III (зажмуренные дуги с капельками по бокам)
      return `
        <rect data-brow="1" x="162" y="185" width="20" height="3.6" rx="1.8" transform="rotate(-15 172 187)" fill="${color}" />
        <rect data-brow="1" x="218" y="185" width="20" height="3.6" rx="1.8" transform="rotate(15 228 187)" fill="${color}" />
        <path d="M161 196 C165 206, 183 206, 187 196 C186 193, 182 193, 181 196 C178 201, 170 201, 167 196 C166 193, 162 193, 161 196 Z" fill="${color}" />
        <path d="M213 196 C217 206, 235 206, 239 196 C238 193, 234 193, 233 196 C230 201, 222 201, 219 196 C218 193, 214 193, 213 196 Z" fill="${color}" />
        <path d="M160.5 198.5 Q161 197.4 161.6 198.5 C166 204, 167 211, 162 211 C157 211, 156 204, 160.5 198.5 Z" fill="#7EBCE6" />
        <path d="M239.5 198.5 Q239 197.4 238.4 198.5 C234 204, 233 211, 238 211 C243 211, 244 204, 239.5 198.5 Z" fill="#7EBCE6" />
      `;
    case "sadTears4":
      // 51. Грустные со слёзками IV (ручьи слёз водопадом)
      return `
        <rect data-brow="1" x="162" y="184" width="20" height="3.8" rx="1.9" transform="rotate(-16 172 186)" fill="${color}" />
        <rect data-brow="1" x="218" y="184" width="20" height="3.8" rx="1.9" transform="rotate(16 228 186)" fill="${color}" />
        <rect x="169" y="199" width="10" height="24" rx="5" fill="#7EBCE6" opacity="0.85" />
        <rect x="221" y="199" width="10" height="24" rx="5" fill="#7EBCE6" opacity="0.85" />
        <circle cx="174" cy="196" r="8" fill="${color}" />
        <circle cx="226" cy="196" r="8" fill="${color}" />
        <circle cx="171" cy="193" r="3" fill="#FFFFFF" />
        <circle cx="223" cy="193" r="3" fill="#FFFFFF" />
      `;
    case "angryFury":
      // 52. Яростный прищур (крутые брови к центру и резкий прищур снизу со скруглёнными уголками)
      return `
        <rect data-brow="1" x="160" y="182" width="24" height="5" rx="2.5" transform="rotate(22 172 184.5)" fill="${color}" />
        <rect data-brow="1" x="216" y="182" width="24" height="5" rx="2.5" transform="rotate(-22 228 184.5)" fill="${color}" />
        <path d="M164.5 192.4 L183.8 195.6 Q186.2 196 185.8 198.2 C184.5 204, 163.5 203.2, 162.2 194.4 Q161.8 192 164.5 192.4 Z" fill="${color}" />
        <path d="M235.5 192.4 L216.2 195.6 Q213.8 196 214.2 198.2 C215.5 204, 236.5 203.2, 237.8 194.4 Q238.2 192 235.5 192.4 Z" fill="${color}" />
        <circle cx="176" cy="196" r="2.2" fill="#FFFFFF" />
        <circle cx="224" cy="196" r="2.2" fill="#FFFFFF" />
      `;
    case "angryFire":
      // 53. Пылающий гнев (грозные брови и огонёк ярости в зрачках)
      return `
        <path data-brow="1" d="M159.2 181.4 Q174 185.2 186.8 190.5 Q188.6 191.3 187.6 193.2 Q186.6 195.2 184.6 194.4 Q172 189.8 158.2 186.2 Q156.2 185.6 156.8 183.5 Q157.4 181 159.2 181.4 Z" fill="${color}" />
        <path data-brow="1" d="M240.8 181.4 Q226 185.2 213.2 190.5 Q211.4 191.3 212.4 193.2 Q213.4 195.2 215.4 194.4 Q228 189.8 241.8 186.2 Q243.8 185.6 243.2 183.5 Q242.6 181 240.8 181.4 Z" fill="${color}" />
        <circle cx="174" cy="198" r="8.5" fill="${color}" />
        <circle cx="226" cy="198" r="8.5" fill="${color}" />
        <path d="M173.2 192 C173.6 191, 174.4 191, 174.8 192 C177.2 195.5, 178 199, 174 202 C170 199, 170.8 195.5, 173.2 192 Z" fill="#FF5A36" />
        <path d="M225.2 192 C225.6 191, 226.4 191, 226.8 192 C229.2 195.5, 230 199, 226 202 C222 199, 222.8 195.5, 225.2 192 Z" fill="#FF5A36" />
        <circle cx="174" cy="198" r="2" fill="#FFD166" />
        <circle cx="226" cy="198" r="2" fill="#FFD166" />
      `;
    case "angryDemon":
      // 54. Демонический взор (скошенные клинья с чуть сглаженными уголками и вертикальным зрачком)
      return `
        <path d="M160.8 185.8 L185.6 192.4 Q188.2 193.1 187.4 195.6 C184.8 203.8, 165.2 203.5, 158.6 188.2 Q157.6 185 160.8 185.8 Z" fill="${color}" />
        <path d="M239.2 185.8 L214.4 192.4 Q211.8 193.1 212.6 195.6 C215.2 203.8, 234.8 203.5, 241.4 188.2 Q242.4 185 239.2 185.8 Z" fill="${color}" />
        <ellipse cx="174" cy="195" rx="2" ry="5" fill="#FF4D6D" />
        <ellipse cx="226" cy="195" rx="2" ry="5" fill="#FF4D6D" />
      `;
    case "angryVein":
      // 55. С жилкой гнева (напряжённые сердитые глаза и аниме-жилка раздражения у виска)
      return `
        <rect data-brow="1" x="160" y="182" width="23" height="4.5" rx="2.2" transform="rotate(19 171.5 184)" fill="${color}" />
        <rect data-brow="1" x="217" y="182" width="23" height="4.5" rx="2.2" transform="rotate(-19 228.5 184)" fill="${color}" />
        <circle cx="174" cy="197" r="7.5" fill="${color}" />
        <circle cx="226" cy="197" r="7.5" fill="${color}" />
        <circle cx="174" cy="197" r="2.5" fill="#FFFFFF" />
        <circle cx="226" cy="197" r="2.5" fill="#FFFFFF" />
        <path data-brow="1" d="M236 172 Q242 175 239 181 M247 174 Q241 177 244 183 M238 171 Q242 176 246 172" fill="none" stroke="#E05A47" stroke-width="2.4" stroke-linecap="round" />
      `;
    case "angrySlit":
      // 56. Хищные вертикали (узкий злой разрез со скруглёнными уголками и тонкие хищные зрачки)
      return `
        <rect data-brow="1" x="160" y="183" width="24" height="4.2" rx="2.1" transform="rotate(20 172 185)" fill="${color}" />
        <rect data-brow="1" x="216" y="183" width="24" height="4.2" rx="2.1" transform="rotate(-20 228 185)" fill="${color}" />
        <path d="M162.2 194.8 C167.5 190.2, 180.5 190.2, 185.8 194.8 Q187.4 196 185.8 197.2 C180.5 201.8, 167.5 201.8, 162.2 197.2 Q160.6 196 162.2 194.8 Z" fill="${color}" />
        <path d="M214.2 194.8 C219.5 190.2, 232.5 190.2, 237.8 194.8 Q239.4 196 237.8 197.2 C232.5 201.8, 219.5 201.8, 214.2 197.2 Q212.6 196 214.2 194.8 Z" fill="${color}" />
        <rect x="172.8" y="191.5" width="2.4" height="9" rx="1.2" fill="#FFFFFF" />
        <rect x="224.8" y="191.5" width="2.4" height="9" rx="1.2" fill="#FFFFFF" />
      `;
    case "angryShadow":
      // 57. Тень исподлобья (тяжёлые нависшие веки и маленькие пронзительные зрачки)
      return `
        <rect data-brow="1" x="159" y="185" width="27" height="7" rx="3.5" transform="rotate(14 172.5 188.5)" fill="${color}" />
        <rect data-brow="1" x="214" y="185" width="27" height="7" rx="3.5" transform="rotate(-14 227.5 188.5)" fill="${color}" />
        <circle cx="174" cy="198" r="4.5" fill="${color}" />
        <circle cx="226" cy="198" r="4.5" fill="${color}" />
        <circle cx="174" cy="198" r="1.6" fill="#FFFFFF" />
        <circle cx="226" cy="198" r="1.6" fill="#FFFFFF" />
      `;
    case "angryCross":
      // 58. Боевой крест-взгляд (суровые сдвинутые брови и крестообразные блики решимости со сглаженными лучами)
      return `
        <rect data-brow="1" x="160" y="182" width="24" height="4.8" rx="2.4" transform="rotate(21 172 184)" fill="${color}" />
        <rect data-brow="1" x="216" y="182" width="24" height="4.8" rx="2.4" transform="rotate(-21 228 184)" fill="${color}" />
        <circle cx="174" cy="197" r="8" fill="${color}" />
        <circle cx="226" cy="197" r="8" fill="${color}" />
        <path d="M173.4 191.8 Q174 190.6 174.6 191.8 L175.5 195.5 L179.2 196.4 Q180.4 197 179.2 197.6 L175.5 198.5 L174.6 202.2 Q174 203.4 173.4 202.2 L172.5 198.5 L168.8 197.6 Q167.6 197 168.8 196.4 L172.5 195.5 Z" fill="#FFFFFF" />
        <path d="M225.4 191.8 Q226 190.6 226.6 191.8 L227.5 195.5 L231.2 196.4 Q232.4 197 231.2 197.6 L227.5 198.5 L226.6 202.2 Q226 203.4 225.4 202.2 L224.5 198.5 L220.8 197.6 Q219.6 197 220.8 196.4 L224.5 195.5 Z" fill="#FFFFFF" />
      `;
    case "angryGlowing":
      // 59. Сверкающие гневом (геометричные глаза с чуть скруглёнными углами и светящимся ядром)
      return `
        <rect data-brow="1" x="158" y="186" width="29" height="4.6" rx="2.3" transform="rotate(18 172.5 188.3)" fill="${color}" />
        <rect data-brow="1" x="213" y="186" width="29" height="4.6" rx="2.3" transform="rotate(-18 227.5 188.3)" fill="${color}" />
        <path d="M164.2 193.3 L183.8 195.7 Q186 196 184.9 197.9 L182.9 201.4 Q182 203 180.1 202.8 L166.9 201.2 Q165 201 164.4 199.1 L162.6 195.1 Q162 193 164.2 193.3 Z" fill="${color}" />
        <path d="M235.8 193.3 L216.2 195.7 Q214 196 215.1 197.9 L217.1 201.4 Q218 203 219.9 202.8 L233.1 201.2 Q235 201 235.6 199.1 L237.4 195.1 Q238 193 235.8 193.3 Z" fill="${color}" />
        <circle cx="175" cy="197.5" r="3" fill="#FFD166" />
        <circle cx="225" cy="197.5" r="3" fill="#FFD166" />
      `;
    case "angryTwitch":
      // 60. Нервный прищур (асимметричный сердитый прищур с дёргающимся веком и мягкими углами)
      return `
        <rect data-brow="1" x="160" y="182" width="24" height="4.8" rx="2.4" transform="rotate(22 172 184)" fill="${color}" />
        <rect data-brow="1" x="216" y="180" width="24" height="4.8" rx="2.4" transform="rotate(-14 228 182)" fill="${color}" />
        <rect x="162" y="196" width="24" height="5.4" rx="2.6" transform="rotate(6 174 198.7)" fill="${color}" />
        <circle cx="226" cy="196" r="8.5" fill="${color}" />
        <circle cx="226" cy="196" r="2.8" fill="#FFFFFF" />
        <rect x="164" y="204" width="14" height="2.6" rx="1.3" transform="rotate(-8 171 205)" fill="${color}" />
      `;
    case "angryLaser":
      // 61. Заряженный взгляд (сверхконцентрированный грозный взор с кольцевым прицелом)
      return `
        <rect data-brow="1" x="156" y="185.5" width="33" height="5.2" rx="2.6" transform="rotate(19.5 172.5 188)" fill="${color}" />
        <rect data-brow="1" x="211" y="185.5" width="33" height="5.2" rx="2.6" transform="rotate(-19.5 227.5 188)" fill="${color}" />
        <circle cx="174" cy="198" r="8.5" fill="${color}" />
        <circle cx="226" cy="198" r="8.5" fill="${color}" />
        <circle cx="174" cy="198" r="5" fill="#FF4D6D" />
        <circle cx="226" cy="198" r="5" fill="#FF4D6D" />
        <circle cx="174" cy="198" r="2" fill="#FFFFFF" />
        <circle cx="226" cy="198" r="2" fill="#FFFFFF" />
      `;
    default:
      return "";
  }
}

// 3А. Генерация минималистичного носа (15 форм без обводки, настраиваемый цвет state.colors.nose)
function renderNose(noseId) {
  const nCol = state.colors.nose || "#D99B78";
  switch (noseId) {
    case "button":
      return `<circle cx="200" cy="206" r="4.5" fill="${nCol}" />`;
    case "triangle":
      return `<path d="M200 198 C202 198, 207 207, 206 209 C205 211, 195 211, 194 209 C193 207, 198 198, 200 198 Z" fill="${nCol}" />`;
    case "invTriangle":
      return `<path d="M194 202 C195 200, 205 200, 206 202 C207 204, 202 211, 200 211 C198 211, 193 204, 194 202 Z" fill="${nCol}" />`;
    case "capsule":
      return `<rect x="197" y="196" width="6" height="14" rx="3" fill="${nCol}" />`;
    case "oval":
      return `<ellipse cx="200" cy="206" rx="6" ry="3.5" fill="${nCol}" />`;
    case "diamondNose":
      return `<rect x="195" y="200" width="10" height="10" rx="2.5" transform="rotate(45 200 205)" fill="${nCol}" />`;
    case "drop":
      return `<path d="M200 196 C205 204, 205 210, 200 210 C195 210, 195 204, 200 196 Z" fill="${nCol}" />`;
    case "bridge":
      return `<rect x="196" y="188" width="8" height="20" rx="3.5" fill="${nCol}" />`;
    case "nostrils":
      return `
        <circle cx="197" cy="207" r="2.2" fill="${nCol}" />
        <circle cx="203" cy="207" r="2.2" fill="${nCol}" />
      `;
    case "archNose":
      return `<path d="M193 209 A7 7 0 0 1 207 209 C207 210.5, 193 210.5, 193 209 Z" fill="${nCol}" />`;
    case "squareNose":
      return `<rect x="196" y="202" width="8" height="8" rx="2.5" fill="${nCol}" />`;
    case "heartNose":
      return `<path d="M200 211.5 L194.5 205 A3.6 3.6 0 0 1 200 200.5 A3.6 3.6 0 0 1 205.5 205 Z" fill="${nCol}" />`;
    case "wedge":
      return `<path d="M200 195 C201.5 195, 201.5 208, 200 209 C198 210, 193 210, 193 208 C193 206, 198.5 195, 200 195 Z" fill="${nCol}" />`;
    case "starNose":
      return `<path d="M199 199.5 Q200 197.5 201 199.5 L202.5 203.5 L206.5 204.5 Q208.5 205.2 206.5 206 L202.5 207.5 L201 211.5 Q200 213.5 199 211.5 L197.5 207.5 L193.5 206 Q191.5 205.2 193.5 204.5 L197.5 203.5 Z" fill="${nCol}" />`;
    case "none":
    default:
      return "";
  }
}

// 3Б. Генерация геометрии рта (15 форм без обводки, настраиваемый цвет state.colors.mouth, углы скруглены)
function renderMouth(mouthId) {
  const color = state.colors.mouth || "#232126";
  switch (mouthId) {
    case "smile":
      return `<path d="M191 222 C195 228, 205 228, 209 222 C210 220, 212 222, 211 224 C206 232, 194 232, 189 224 C188 222, 190 220, 191 222 Z" fill="${color}" />`;
    case "flat":
      return `<rect x="193" y="223" width="14" height="4" rx="2" fill="${color}" />`;
    case "cat":
      return `<path d="M188 222 C189 220, 191 221, 192 223 C194 226, 197 226, 199 222 C200 220, 200 220, 201 222 C203 226, 206 226, 208 223 C209 221, 211 220, 212 222 C213 224, 211 227, 209 228 C205 230, 202 228, 200 225 C198 228, 195 230, 191 228 C189 227, 187 224, 188 222 Z" fill="${color}" />`;
    case "whistle":
      return `<circle cx="200" cy="225" r="5.5" fill="${color}" />`;
    case "smileWide":
      return `<path d="M187 220 C187 218.5, 213 218.5, 213 220 A13 13 0 0 1 187 220 Z" fill="${color}" />`;
    case "tongue":
      return `
        <rect x="190" y="221" width="20" height="4" rx="2" fill="${color}" />
        <path d="M195 223 L195 230 A5 5 0 0 0 205 230 L205 223 Z" fill="#F28482" />
      `;
    case "smirk":
      return `<path d="M191 224 C199 225, 205 222, 209 218 C210 217, 212 218, 211 220 C206 226, 199 228, 191 227 C189 227, 189 224, 191 224 Z" fill="${color}" />`;
    case "fang":
      return `
        <rect x="190" y="221" width="20" height="4" rx="2" fill="${color}" />
        <path d="M202 224 L210 224 L207 231.5 Q206 233.5 205 231.5 Z" fill="#FFFFFF" />
      `;
    case "pout":
      return `<path d="M189 227 C194 219, 206 219, 211 227 C212 229, 210 230, 209 228 C205 223, 195 223, 191 228 C190 230, 188 229, 189 227 Z" fill="${color}" />`;
    case "dotMouth":
      return `<circle cx="200" cy="225" r="3.2" fill="${color}" />`;
    case "triangleMouth":
      return `<path d="M200 219 C202 219, 208 227, 207 229 C206 230, 194 230, 193 229 C192 227, 198 219, 200 219 Z" fill="${color}" />`;
    case "rabbit":
      return `
        <rect x="195" y="221" width="10" height="8" rx="2" fill="#FFFFFF" />
        <rect x="191" y="220" width="18" height="3.5" rx="1.75" fill="${color}" />
      `;
    case "diamondMouth":
      return `<rect x="195" y="220" width="10" height="10" rx="2.5" transform="rotate(45 200 225)" fill="${color}" />`;
    case "beardMini":
      return `
        <rect x="193" y="222" width="14" height="3.5" rx="1.75" fill="${color}" />
        <circle cx="200" cy="229" r="2.2" fill="${color}" />
      `;
    case "mustache":
      return `
        <path d="M189 224 C192 218, 197 218, 200 222 C203 218, 208 218, 211 224 C212 226, 209 227, 208 225 C206 222, 203 222, 200 225 C197 222, 194 222, 192 225 C191 227, 188 226, 189 224 Z" fill="${color}" />
      `;
    default:
      return "";
  }
}

// 3В. Генерация бороды и усов (30 видов, без stroke и без opacity, мягкие углы, объёмные бороды адаптируются под широкие щёки)
function renderFacialHair(beardId) {
  const bShades = buildShades(state.colors.facialHair || "#2E2B36");
  const hw = getFaceHalfWidth(state.face);
  const bLx = 200 - hw - 3;
  const bRx = 200 + hw + 3;
  switch (beardId) {
    case "none":
      return "";
    case "stubble":
      // 2. Лёгкая щетина: строго по контуру любого выбранного овала лица (#faceOnlyClip), плотный мягкий тон без прозрачности
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M124 210 C138 238, 168 248, 200 248 C232 248, 262 238, 276 210 L276 274 L124 274 Z" fill="${bShades.soft}" />
        </g>
      `;
    case "mustacheThin":
      return `
        <rect x="178" y="214" width="19" height="6" rx="3" transform="rotate(-8 187 217)" fill="url(#beardGrad)" />
        <rect x="203" y="214" width="19" height="6" rx="3" transform="rotate(8 212 217)" fill="url(#beardGrad)" />
      `;
    case "handlebar":
      return `
        <path d="M200 214 C188 209, 176 220, 168 213 C165 210, 169 206, 172 209 C174 211, 171 215, 169 213 C166 210, 162 213, 165 218 C172 226, 188 218, 200 220 C212 218, 228 226, 235 218 C238 213, 234 210, 231 213 C229 215, 226 211, 228 209 C231 206, 235 210, 232 213 C224 220, 212 209, 200 214 Z" fill="url(#beardGrad)" />
      `;
    case "walrus":
      return `
        <rect x="172" y="212" width="56" height="16" rx="8" fill="url(#beardGrad)" />
        <circle cx="178" cy="222" r="8" fill="url(#beardGrad)" />
        <circle cx="222" cy="222" r="8" fill="url(#beardGrad)" />
      `;
    case "goatee":
      // 6. Эспаньолка: нижняя часть аккуратно обрезается по подбородку (#faceOnlyClip)
      return `
        <g clip-path="url(#faceOnlyClip)">
          <rect x="180" y="214" width="17" height="5" rx="2.5" transform="rotate(-6 188 216)" fill="url(#beardGrad)" />
          <rect x="203" y="214" width="17" height="5" rx="2.5" transform="rotate(6 211 216)" fill="url(#beardGrad)" />
          <path d="M182 242 Q200 248 218 242 L222 270 L178 270 Z" fill="url(#beardGrad)" />
        </g>
      `;
    case "chinPuff":
      return `
        <circle cx="200" cy="256" r="14" fill="url(#beardGrad)" />
        <circle cx="190" cy="254" r="10" fill="url(#beardGrad)" />
        <circle cx="210" cy="254" r="10" fill="url(#beardGrad)" />
      `;
    case "shortBeard":
      // 8. Аккуратная борода: идеально повторяет и обрезается по краям овала лица (#faceOnlyClip)
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M124 200 C140 236, 170 246, 200 246 C230 246, 260 236, 276 200 L276 274 L124 274 Z" fill="url(#beardGrad)" />
          <rect x="178" y="213" width="44" height="7" rx="3.5" fill="url(#beardGrad)" />
        </g>
      `;
    case "fullBeard":
      // 9. Объёмная окладистая борода (адаптируется под широкие щёчки без просветов по краям)
      return `
        <path d="M${bLx} 204 C${bLx - 2} 258, 166 286, 200 286 C234 286, ${bRx + 2} 258, ${bRx} 204 C${bRx - 10} 232, 224 240, 200 240 C176 240, ${bLx + 10} 232, ${bLx} 204 Z" fill="url(#beardGrad)" />
        <rect x="176" y="213" width="48" height="10" rx="5" fill="url(#beardGrad)" />
      `;
    case "sensei":
      return `
        <path d="M196 213 C172 213, 162 234, 161 254 C161 257, 167 257, 167 254 C168 236, 176 219, 196 219 Z" fill="url(#beardGrad)" />
        <path d="M204 213 C228 213, 238 234, 239 254 C239 257, 233 257, 233 254 C232 236, 224 219, 204 219 Z" fill="url(#beardGrad)" />
        <path d="M188 248 L212 248 L202 282 Q200 286 198 282 Z" fill="url(#beardGrad)" />
      `;
    case "soulPatch":
      return `<path d="M194 233 Q200 232 206 233 L201.5 243.5 Q200 246 198.5 243.5 Z" fill="url(#beardGrad)" />`;
    case "muttonChops":
      // 12. Бакенбарды: прилегают строго по боковым граням овала лица (#faceOnlyClip)
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M124 182 L164 190 C166 218, 175 234, 180 250 L124 250 Z" fill="url(#beardGrad)" />
          <path d="M276 182 L236 190 C234 218, 225 234, 220 250 L276 250 Z" fill="url(#beardGrad)" />
        </g>
      `;
    case "braidBeard":
      return `
        <path d="M${bLx} 210 C${bLx - 1} 254, 170 271, 200 271 C230 271, ${bRx + 1} 254, ${bRx} 210 C${bRx - 10} 238, 222 246, 200 246 C178 246, ${bLx + 10} 238, ${bLx} 210 Z" fill="url(#beardGrad)" />
        <circle cx="200" cy="274" r="11" fill="url(#beardGrad)" />
        <circle cx="200" cy="290" r="9" fill="url(#beardGrad)" />
        <rect x="191" y="280" width="18" height="5" rx="2.5" fill="#F2C14E" />
      `;
    case "boxBeard":
      // 14. Гео-шкиперская борода со скруглёнными гранями: обрезается по краям овала лица (#faceOnlyClip)
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M124 202 L160 234 Q164 238 170 240 L182 245 Q186 246 190 246 L210 246 Q214 246 218 245 L230 240 Q236 238 240 234 L276 202 L276 274 L124 274 Z" fill="url(#beardGrad)" />
          <rect x="178" y="213" width="44" height="8" rx="4" fill="url(#beardGrad)" />
        </g>
      `;
    case "cloudBeard":
      return `
        <circle cx="164" cy="238" r="18" fill="url(#beardGrad)" />
        <circle cx="236" cy="238" r="18" fill="url(#beardGrad)" />
        <circle cx="180" cy="256" r="22" fill="url(#beardGrad)" />
        <circle cx="220" cy="256" r="22" fill="url(#beardGrad)" />
        <circle cx="200" cy="266" r="24" fill="url(#beardGrad)" />
        <rect x="174" y="213" width="52" height="12" rx="6" fill="url(#beardGrad)" />
      `;
    case "anchorBeard":
      // 16. Якорь (Бальбо)
      return `
        <g clip-path="url(#faceOnlyClip)">
          <rect x="178" y="213" width="20" height="6" rx="3" transform="rotate(-8 188 216)" fill="url(#beardGrad)" />
          <rect x="202" y="213" width="20" height="6" rx="3" transform="rotate(8 212 216)" fill="url(#beardGrad)" />
          <rect x="196" y="232" width="8" height="26" rx="4" fill="url(#beardGrad)" />
          <path d="M166 244 C178 254, 222 254, 234 244 L238 268 L162 268 Z" fill="url(#beardGrad)" />
        </g>
      `;
    case "pencilMustache":
      // 17. Усы-карандаш
      return `
        <rect x="175" y="215" width="22" height="3.5" rx="1.75" transform="rotate(-5 186 217)" fill="url(#beardGrad)" />
        <rect x="203" y="215" width="22" height="3.5" rx="1.75" transform="rotate(5 214 217)" fill="url(#beardGrad)" />
      `;
    case "chevronMustache":
      // 18. Густой шеврон
      return `
        <path d="M172 222 C172 214, 186 210, 200 212 C214 210, 228 214, 228 222 C228 225, 222 226, 218 224 C210 220, 190 220, 182 224 C178 226, 172 225, 172 222 Z" fill="url(#beardGrad)" />
      `;
    case "vanDykeBeard":
      // 19. Ван Дейк
      return `
        <path d="M172 216 C180 210, 192 212, 200 216 C208 212, 220 210, 228 216 C230 218, 227 221, 224 219 C216 215, 208 218, 200 220 C192 218, 184 215, 176 219 C173 221, 170 218, 172 216 Z" fill="url(#beardGrad)" />
        <path d="M186 240 Q200 245 214 240 L203 268 Q200 273 197 268 Z" fill="url(#beardGrad)" />
      `;
    case "vikingForkBeard":
      // 20. Раздвоенная борода викинга (адаптируется под широкие щёчки)
      return `
        <path d="M${bLx} 208 C${bLx - 2} 250, 164 274, 184 288 Q188 291 190 286 L200 264 L210 286 Q212 291 216 288 C236 274, ${bRx + 2} 250, ${bRx} 208 C${bRx - 10} 236, 222 244, 200 244 C178 244, ${bLx + 10} 236, ${bLx} 208 Z" fill="url(#beardGrad)" />
        <rect x="175" y="213" width="50" height="9" rx="4.5" fill="url(#beardGrad)" />
      `;
    case "chinCurtainBeard":
      // 21. Шкиперская дуга без усов
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M124 194 C144 234, 172 246, 200 246 C228 246, 256 234, 276 194 L276 274 L124 274 Z" fill="url(#beardGrad)" />
        </g>
      `;
    case "imperialMustache":
      // 22. Императорские пышные усы
      return `
        <path d="M200 215 C186 210, 170 222, 158 210 C155 207, 159 203, 163 206 C172 213, 186 204, 200 211 C214 204, 228 213, 237 206 C241 203, 245 207, 242 210 C230 222, 214 210, 200 215 Z" fill="url(#beardGrad)" />
      `;
    case "wizardLongBeard":
      // 23. Длинная борода звездочёта/мудреца (полностью закрывает широкие щёки по бокам без просветов)
      return `
        <path d="M${bLx} 202 C${bLx - 4} 258, 166 296, 196 312 Q200 315 204 312 C234 296, ${bRx + 4} 258, ${bRx} 202 C${bRx - 10} 234, 222 242, 200 242 C178 242, ${bLx + 10} 234, ${bLx} 202 Z" fill="url(#beardGrad)" />
        <path d="M172 214 C184 208, 216 208, 228 214 C236 220, 232 230, 224 226 C212 220, 188 220, 176 226 C168 230, 164 220, 172 214 Z" fill="url(#beardGrad)" />
      `;
    case "twinBraidsBeard":
      // 24. Две косы гнома (адаптируется под широкие щёчки)
      return `
        <path d="M${bLx} 208 C${bLx - 2} 252, 170 266, 200 266 C230 266, ${bRx + 2} 252, ${bRx} 208 C${bRx - 10} 236, 222 244, 200 244 C178 244, ${bLx + 10} 236, ${bLx} 208 Z" fill="url(#beardGrad)" />
        <circle cx="182" cy="272" r="10" fill="url(#beardGrad)" />
        <circle cx="178" cy="288" r="8.5" fill="url(#beardGrad)" />
        <rect x="171" y="278" width="16" height="4.5" rx="2.2" fill="#F2C14E" />
        <circle cx="218" cy="272" r="10" fill="url(#beardGrad)" />
        <circle cx="222" cy="288" r="8.5" fill="url(#beardGrad)" />
        <rect x="213" y="278" width="16" height="4.5" rx="2.2" fill="#F2C14E" />
      `;
    case "daliMustache":
      // 25. Сюрреалистичные усы Дали
      return `
        <path d="M200 217 C184 219, 166 210, 156 194 C155 191, 159 190, 161 193 C170 207, 184 213, 200 214 C216 213, 230 207, 239 193 C241 190, 245 191, 244 194 C234 210, 216 219, 200 217 Z" fill="url(#beardGrad)" />
      `;
    case "frenchForkBeard":
      // 26. Французская вилка
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M124 204 C146 236, 174 244, 200 244 C226 244, 254 236, 276 204 L276 272 L124 272 Z" fill="url(#beardGrad)" />
        </g>
        <path d="M180 250 L186 274 Q188 279 192 275 L200 262 L208 275 Q212 279 214 274 L220 250 Z" fill="url(#beardGrad)" />
        <rect x="178" y="213" width="44" height="7" rx="3.5" fill="url(#beardGrad)" />
      `;
    case "circleBeard":
      // 27. Круглая бородка вокруг рта
      return `
        <path fill-rule="evenodd" d="M200 211 C216 211, 224 220, 224 233 C224 246, 216 256, 200 256 C184 256, 176 246, 176 233 C176 220, 184 211, 200 211 Z M200 218 C189 218, 184 224, 184 232 C184 240, 189 245, 200 245 C211 245, 216 240, 216 232 C216 224, 211 218, 200 218 Z" fill="url(#beardGrad)" />
      `;
    case "fluffySantaBeard":
      // 28. Пышная кучерявая борода
      return `
        <circle cx="158" cy="232" r="16" fill="url(#beardGrad)" />
        <circle cx="242" cy="232" r="16" fill="url(#beardGrad)" />
        <circle cx="168" cy="254" r="20" fill="url(#beardGrad)" />
        <circle cx="232" cy="254" r="20" fill="url(#beardGrad)" />
        <circle cx="184" cy="272" r="22" fill="url(#beardGrad)" />
        <circle cx="216" cy="272" r="22" fill="url(#beardGrad)" />
        <circle cx="200" cy="282" r="24" fill="url(#beardGrad)" />
        <path d="M170 214 C182 208, 218 208, 230 214 C236 218, 232 226, 224 224 C212 220, 188 220, 176 224 C168 226, 164 218, 170 214 Z" fill="${bShades.hi}" />
      `;
    case "samuraiGoatee":
      // 29. Самурайская острая бородка со скруглёнными кончиками
      return `
        <path d="M170 214 Q185 210 198 216 C199 217, 197 220, 195 219 Q184 215 168 224 Q165 225 166 221 Z" fill="url(#beardGrad)" />
        <path d="M230 214 Q215 210 202 216 C201 217, 203 220, 205 219 Q216 215 232 224 Q235 225 234 221 Z" fill="url(#beardGrad)" />
        <path d="M190 244 Q200 247 210 244 L202 276 Q200 280 198 276 Z" fill="url(#beardGrad)" />
      `;
    case "zenWispBeard":
      // 30. Три струящиеся пряди дзен
      return `
        <path d="M186 246 C184 264, 180 278, 182 290 C183 293, 187 293, 187 289 C187 278, 190 264, 192 246 Z" fill="url(#beardGrad)" />
        <path d="M197 248 C197 268, 197 284, 198 298 C199 301, 201 301, 202 298 C203 284, 203 268, 203 248 Z" fill="url(#beardGrad)" />
        <path d="M214 246 C216 264, 220 278, 218 290 C217 293, 213 293, 213 289 C213 278, 210 264, 208 246 Z" fill="url(#beardGrad)" />
      `;
    default:
      return "";
  }
}

// 4. Прическа: Короткая (50 мужских и коротких стрижек от висков наверх, цельные силуэты без обводки и без зазоров)
function renderHairShort(shortId) {
  switch (shortId) {
    case "none":
      return "";
    case "sidePartLeft":
      // 2. Зачёс налево от правого виска
      return `
        <path d="M148 192 L144 154 C138 116, 178 104, 224 116 C246 110, 256 130, 254 156 L252 192 L244 192 L242 156 C240 142, 232 136, 224 136 C196 152, 166 156, 156 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "sidePartRight":
      // 3. Зачёс направо от левого виска
      return `
        <path d="M252 192 L256 154 C262 116, 222 104, 176 116 C154 110, 144 130, 146 156 L148 192 L156 192 L158 156 C160 142, 168 136, 176 136 C204 152, 234 156, 244 154 L244 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "undercutUp":
      // 4. Андеркат наверх (цельная форма с тонкими висками)
      return `
        <path d="M148 190 L146 148 C148 112, 176 98, 204 102 C232 104, 252 118, 254 148 L252 190 L245 190 L244 148 C222 138, 178 138, 156 148 L155 190 Z" fill="url(#hairShortGrad)" />
      `;
    case "templeQuiff":
      // 5. Квифф от висков с высокой передней волной
      return `
        <path d="M148 192 L145 152 C144 120, 168 96, 208 100 C238 102, 256 122, 254 152 L252 192 L244 192 L242 154 C236 138, 164 138, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "fadeWaveLeft":
      // 6. Фейд с мягкой волной налево (единый контур без швов)
      return `
        <path d="M148 190 L144 152 C134 120, 174 100, 218 110 C244 116, 255 132, 254 152 L252 190 L245 190 L244 150 C216 136, 174 160, 156 152 L155 190 Z" fill="url(#hairShortGrad)" />
      `;
    case "frenchCrop":
      // 7. Цезарь / Французский кроп с ровной короткой линией
      return `
        <path d="M148 192 L145 150 C145 114, 255 114, 255 150 L252 192 L244 192 L244 150 L156 150 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "fauxHawk":
      // 8. Фохок от висков к центральному гребню
      return `
        <path d="M148 192 L146 152 C152 124, 184 108, 198 96 Q200 94 202 96 C216 108, 248 124, 254 152 L252 192 L244 192 L242 154 C228 140, 172 140, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "slickBack":
      // 9. Слик-бэк (гладкий зачёс назад от висков)
      return `
        <path d="M147 192 L144 150 C144 108, 256 108, 256 150 L253 192 L244 192 L244 154 C240 134, 160 134, 156 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "ivyLeague":
      // 10. Айви-лиг (университетский пробор)
      return `
        <path d="M148 192 L146 152 C146 116, 186 106, 218 114 L224 126 L230 116 C246 120, 254 134, 254 152 L252 192 L244 192 L242 154 C234 140, 166 142, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "buzzCut":
      // 11. Ёжик / Базз-кат по форме головы и висков без обводки
      return `
        <path d="M145 192 L143 152 C143 112, 257 112, 257 152 L255 192 L243 192 L243 156 C240 134, 160 134, 157 156 L157 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "curlyFadeTop":
      // 12. Кудрявый топ от висков (единый контур без швов)
      return `
        <path d="M148 190 L146 146 C144 128, 156 118, 170 120 C176 104, 198 100, 200 106 C202 100, 224 104, 230 120 C244 118, 256 128, 254 146 L252 190 L245 190 L244 150 C228 144, 214 146, 200 144 C186 146, 172 144, 156 150 L155 190 Z" fill="url(#hairShortGrad)" />
      `;
    case "commaHair":
      // 13. Мужской пробор 70/30 с изогнутой прядью от висков
      return `
        <path d="M148 192 L145 150 C145 112, 255 112, 255 150 L252 192 L244 192 L242 152 C236 140, 224 138, 214 136 C210 154, 198 166, 184 164 C194 152, 196 140, 190 136 C172 140, 160 148, 156 158 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "spikyUpShort":
      // 14. Короткие текстурные иглы наверх от висков со сглаженными вершинами
      return `
        <path d="M148 192 L145 148 L161 116 Q164 110 168 116 L178 128 L197 104 Q200 99 203 104 L222 128 L232 116 Q236 110 239 116 L255 148 L252 192 L244 192 L242 152 C230 138, 170 138, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "wavySideLeft":
      // 15. Волнистый мужской зачёс налево от висков
      return `
        <path d="M148 192 L144 150 C136 118, 168 100, 200 110 C226 102, 256 118, 254 152 L252 192 L244 192 L242 154 C230 138, 206 152, 182 144 C168 140, 158 146, 156 156 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "shortPompadour":
      // 16. Мужской помпадур от висков (единый контур без швов)
      return `
        <path d="M148 192 L145 146 C144 112, 160 100, 200 100 C240 100, 256 112, 255 146 L252 192 L244 192 L242 148 C228 142, 172 142, 158 148 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "flatTop":
      // 17. Площадка / Флэт-топ от висков с мягкими углами
      return `
        <path d="M148 192 L144 120 Q144 112 152 112 L248 112 Q256 112 256 120 L252 192 L244 192 L242 150 C234 138, 166 138, 158 150 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "boxForelock":
      // 18. Полубокс с мягким чубом (единый контур)
      return `
        <path d="M148 192 L146 150 C146 118, 254 118, 254 150 L252 192 L244 192 L242 152 C234 142, 224 148, 204 154 C184 158, 168 144, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "sideUndercut":
      // 19. Косой андеркат с длинным зачёсом набок
      return `
        <path d="M252 192 L254 148 C252 114, 182 102, 140 142 C134 160, 142 184, 154 188 C156 160, 194 142, 244 146 L245 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "velvetPart":
      // 20. Мягкая джентльменская классика от висков
      return `
        <path d="M148 192 L145 150 C145 112, 192 106, 218 116 C242 112, 255 128, 255 150 L252 192 L244 192 L242 154 C236 140, 224 136, 216 140 C194 150, 166 148, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "centerCurtainShort":
      // 21. Короткие шторки по центру
      return `
        <path d="M148 192 L145 148 C145 110, 255 110, 255 148 L252 192 L244 192 L242 158 C232 156, 214 146, 200 132 C186 146, 168 156, 158 158 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "messyTexturedShort":
      // 22. Взъерошенный текстурный кроп
      return `
        <path d="M148 192 L145 148 C145 114, 174 102, 200 104 C226 102, 255 114, 255 148 L252 192 L244 192 L242 154 C234 148, 226 156, 218 148 C210 142, 204 156, 196 148 C188 140, 180 156, 172 148 C164 142, 160 150, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "samuraiShort":
      // 23. Самурайский короткий узел
      return `
        <path d="M148 192 L146 150 C146 116, 254 116, 254 150 L252 192 L244 192 L242 154 C232 138, 168 138, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
        <rect x="190" y="94" width="20" height="24" rx="10" fill="url(#hairShortGrad)" />
      `;
    case "afroFadeShort":
      // 24. Короткий афро-фейд
      return `
        <path d="M148 192 L146 144 C142 102, 258 102, 254 144 L252 192 L244 192 L242 150 C234 140, 166 140, 158 150 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "silverFoxSweep":
      // 25. Благородная волна назад
      return `
        <path d="M148 192 L144 148 C140 108, 182 96, 216 106 C244 112, 256 128, 255 150 L252 192 L244 192 L242 152 C230 134, 170 134, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "kpopHeartShort":
      // 26. Корейский пробор сердечком
      return `
        <path d="M148 192 L145 148 C145 108, 186 102, 200 116 C214 102, 255 108, 255 148 L252 192 L244 192 L242 156 C230 156, 212 142, 200 130 C188 142, 170 156, 158 156 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "spikyForwardShort":
      // 27. Короткие пряди вперёд
      return `
        <path d="M148 192 L145 148 C145 112, 255 112, 255 148 L252 192 L244 192 L242 154 L230 162 Q226 164 224 158 L214 148 L202 162 Q200 165 198 162 L186 148 L176 158 Q174 164 170 162 L158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "gentlemanSlickRight":
      // 28. Гладкий пробор направо
      return `
        <path d="M148 192 L145 150 C145 120, 162 108, 178 114 L182 124 L188 112 C222 104, 256 116, 255 150 L252 192 L244 192 L242 154 C232 142, 198 148, 182 138 C170 138, 160 144, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "curlyDropShort":
      // 29. Кудри на лоб с фейдом
      return `
        <path d="M148 192 L146 148 C146 112, 254 112, 254 148 L252 192 L244 192 L242 154 C232 162, 220 154, 212 160 C204 166, 196 166, 188 160 C180 154, 168 162, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "cyberRazorShort":
      // 30. Кибер-выбритый висок
      return `
        <path d="M148 192 L146 166 L160 162 L146 156 L146 144 C148 110, 252 110, 254 148 L252 192 L244 192 L242 152 C230 138, 170 138, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "monkTonsureShort":
      // 31. Монашеский ободок
      return `
        <path d="M146 192 L144 148 C144 136, 256 136, 256 148 L254 192 L244 192 L242 154 C230 148, 170 148, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "windblownShort":
      // 32. Ветреный мужской зачёс
      return `
        <path d="M148 192 L144 150 C138 116, 166 98, 206 102 C238 104, 262 118, 258 146 L252 192 L244 192 L242 152 C228 138, 172 142, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "doubleQuiffShort":
      // 33. Двойная волна наверх
      return `
        <path d="M148 192 L145 148 C145 114, 170 98, 192 104 C200 108, 208 96, 224 102 C246 108, 255 124, 255 148 L252 192 L244 192 L242 152 C230 138, 170 138, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "softBowlShort":
      // 34. Мягкая аккуратная шапочка
      return `
        <path d="M144 190 C140 156, 144 112, 200 112 C256 112, 260 156, 256 190 L244 190 L244 158 C230 154, 170 154, 156 158 L156 190 Z" fill="url(#hairShortGrad)" />
      `;
    case "animeHeroShort":
      // 35. Геройский короткий ёжик со сглаженными пиками
      return `
        <path d="M148 192 L142 150 L154 122 Q156 116 162 122 L170 130 L182 106 Q186 100 190 106 L200 120 L210 106 Q214 100 218 106 L230 130 L238 122 Q244 116 246 122 L258 150 L252 192 L244 192 L242 154 C228 140, 172 140, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "retroGreaserShort":
      // 36. Ретро-рокабилли кок
      return `
        <path d="M148 192 L144 148 C142 110, 172 92, 204 96 C236 100, 256 116, 255 148 L252 192 L244 192 L242 154 C232 140, 214 142, 202 156 C192 166, 184 152, 188 142 C172 140, 162 146, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "fluffyCloudShort":
      // 37. Пушистое облачко от висков
      return `
        <path d="M148 192 L145 148 C140 126, 156 110, 174 114 C184 98, 216 98, 226 114 C244 110, 260 126, 255 148 L252 192 L244 192 L242 154 C230 142, 170 142, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "sharpFadeRight":
      // 38. Чёткий фейд с диагональю
      return `
        <path d="M148 192 L146 150 C146 114, 194 102, 248 118 Q256 120 255 130 L252 192 L244 192 L242 152 C226 138, 172 142, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "surferWaveShort":
      // 39. Короткая сёрферская волна
      return `
        <path d="M146 192 L142 150 C138 114, 178 102, 214 108 C246 114, 260 132, 256 154 L252 192 L242 192 L240 156 C226 142, 198 158, 176 148 C164 142, 158 148, 156 158 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "militaryHighTight":
      // 40. Армейский хай-энд-тайт
      return `
        <path d="M150 184 L148 146 C152 112, 248 112, 252 146 L250 184 L244 184 L242 148 C230 138, 170 138, 158 148 L156 184 Z" fill="url(#hairShortGrad)" />
      `;
    case "twistedLocksShort":
      // 41. Короткие кручёные локоны
      return `
        <path d="M148 192 L145 148 C145 112, 255 112, 255 148 L252 192 L244 192 L242 154 L232 164 Q228 168 224 162 L218 150 L210 164 Q206 168 202 162 L198 150 L190 164 Q186 168 182 162 L176 150 L168 164 Q164 168 160 162 L158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "nobleArchShort":
      // 42. Аристократическая арка
      return `
        <path d="M148 192 L144 148 C144 106, 256 106, 256 148 L252 192 L244 192 L242 156 C236 134, 218 128, 200 134 C182 128, 164 134, 158 156 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "layeredFeatherShort":
      // 43. Перьевой каскад от висков
      return `
        <path d="M146 192 L142 148 C142 112, 258 112, 258 148 L254 192 L244 192 L242 154 C232 142, 168 142, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "miniMulletShort":
      // 44. Современный мини-маллет
      return `
        <path d="M144 204 L142 148 C142 112, 258 112, 258 148 L256 204 L244 196 L242 152 C230 140, 170 140, 158 152 L156 196 Z" fill="url(#hairShortGrad)" />
      `;
    case "combOverClassic":
      // 45. Классический гранд-пробор
      return `
        <path d="M148 192 L145 148 C145 110, 186 100, 228 112 C248 118, 255 132, 255 150 L252 192 L244 192 L242 154 C234 140, 218 136, 198 142 C178 148, 164 146, 158 154 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "starburstShort":
      // 46. Лучистый короткий кроп
      return `
        <path d="M148 192 L144 148 C144 114, 172 100, 200 100 C228 100, 256 114, 256 148 L252 192 L244 192 L242 152 C228 138, 172 138, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "wavyCenterShort":
      // 47. Волнистый центральный пробор
      return `
        <path d="M148 192 L144 148 C144 110, 184 104, 200 116 C216 104, 256 110, 256 148 L252 192 L244 192 L242 158 C228 162, 214 146, 200 134 C186 146, 172 162, 158 158 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    case "tokyoDriftShort":
      // 48. Токийский текстурный андеркат
      return `
        <path d="M148 190 L145 146 C145 108, 255 108, 255 146 L252 190 L244 190 L242 152 C230 146, 216 158, 204 144 C192 158, 174 144, 158 152 L156 190 Z" fill="url(#hairShortGrad)" />
      `;
    case "zenPebbleShort":
      // 49. Гладкий дзен-контур
      return `
        <path d="M146 190 L144 150 C144 114, 256 114, 256 150 L254 190 L244 190 L242 154 C232 136, 168 136, 158 154 L156 190 Z" fill="url(#hairShortGrad)" />
      `;
    case "imperialCrestShort":
      // 50. Имперский гребень от висков
      return `
        <path d="M148 192 L145 148 C145 118, 174 106, 196 94 Q200 91 204 94 C226 106, 255 118, 255 148 L252 192 L244 192 L242 152 C228 138, 172 138, 158 152 L156 192 Z" fill="url(#hairShortGrad)" />
      `;
    default:
      return "";
  }
}

// 4А. Прическа: Задний силуэт (50 форм, без обводки, все углы мягко скруглены)
function renderHairBack(backId) {
  switch (backId) {
    case "none":
      return "";
    case "bob":
      return `<rect x="128" y="118" width="144" height="142" rx="54" fill="url(#hairGrad)" />`;
    case "frenchBob":
      return `
        <rect x="126" y="120" width="148" height="122" rx="58" fill="url(#hairGrad)" />
        <circle cx="136" cy="212" r="26" fill="url(#hairGrad)" />
        <circle cx="264" cy="212" r="26" fill="url(#hairGrad)" />
      `;
    case "aLineBob":
      return `<path d="M148 120 Q200 116 252 120 L278 248 Q280 258 268 258 L132 258 Q120 258 122 248 Z" fill="url(#hairGrad)" />`;
    case "curledBob":
      return `
        <rect x="132" y="120" width="136" height="132" rx="48" fill="url(#hairGrad)" />
        <circle cx="130" cy="238" r="22" fill="url(#hairGrad)" />
        <circle cx="270" cy="238" r="22" fill="url(#hairGrad)" />
      `;
    case "longBob":
      return `<rect x="130" y="118" width="140" height="172" rx="44" fill="url(#hairGrad)" />`;
    case "puffyBob":
      return `
        <rect x="124" y="118" width="152" height="138" rx="64" fill="url(#hairGrad)" />
        <ellipse cx="200" cy="222" rx="82" ry="42" fill="url(#hairGrad)" />
      `;
    case "miniBob":
      return `<rect x="132" y="118" width="136" height="104" rx="48" fill="url(#hairGrad)" />`;
    case "asymBob":
      return `<path d="M138 118 L262 118 Q272 118 274 128 L274 264 Q274 274 262 270 L132 238 Q124 236 126 226 Z" fill="url(#hairGrad)" />`;
    case "layeredBob":
      return `
        <rect x="126" y="120" width="148" height="102" rx="48" fill="url(#hairGrad)" />
        <rect x="134" y="168" width="132" height="92" rx="38" fill="url(#hairGrad)" />
      `;
    case "bellBob":
      return `
        <path d="M144 122 C144 190, 110 218, 116 254 C118 260, 282 260, 284 254 C290 218, 256 190, 256 122 Z" fill="url(#hairGrad)" />
      `;
    case "hime":
      return `<rect x="132" y="118" width="136" height="215" rx="54" fill="url(#hairGrad)" />`;
    case "cloud":
      return `
        <circle cx="142" cy="168" r="38" fill="url(#hairGrad)" />
        <circle cx="258" cy="168" r="38" fill="url(#hairGrad)" />
        <circle cx="200" cy="138" r="48" fill="url(#hairGrad)" />
      `;
    case "afro":
      return `<circle cx="200" cy="172" r="84" fill="url(#hairGrad)" />`;
    case "pigtails":
      return `
        <rect x="106" y="188" width="34" height="96" rx="17" transform="rotate(14 123 236)" fill="url(#hairGrad)" />
        <rect x="260" y="188" width="34" height="96" rx="17" transform="rotate(-14 277 236)" fill="url(#hairGrad)" />
        <circle cx="200" cy="176" r="62" fill="url(#hairGrad)" />
      `;
    case "lowBuns":
      return `
        <circle cx="132" cy="236" r="28" fill="url(#hairGrad)" />
        <circle cx="268" cy="236" r="28" fill="url(#hairGrad)" />
        <circle cx="200" cy="176" r="62" fill="url(#hairGrad)" />
      `;
    case "cone":
      return `<path d="M200 112 Q206 112 210 120 L284 274 Q288 284 276 284 L124 284 Q112 284 116 274 L190 120 Q194 112 200 112 Z" fill="url(#hairGrad)" />`;
    case "curls":
      return `
        <circle cx="136" cy="156" r="25" fill="url(#hairGrad)" />
        <circle cx="264" cy="156" r="25" fill="url(#hairGrad)" />
        <circle cx="130" cy="198" r="27" fill="url(#hairGrad)" />
        <circle cx="270" cy="198" r="27" fill="url(#hairGrad)" />
        <circle cx="138" cy="240" r="24" fill="url(#hairGrad)" />
        <circle cx="262" cy="240" r="24" fill="url(#hairGrad)" />
      `;
    case "longWave":
      return `<path d="M132 136 C106 210, 112 295, 134 348 L266 348 C288 295, 294 210, 268 136 Z" fill="url(#hairGrad)" />`;
    case "spikyBack":
      return `
        <g fill="url(#hairGrad)">
          <path d="M110 162 Q104 160 112 156 L154 144 L144 198 Z" />
          <path d="M290 162 Q296 160 288 156 L246 144 L256 198 Z" />
          <path d="M112 218 Q106 216 114 210 L150 186 L148 244 Z" />
          <path d="M288 218 Q294 216 286 210 L250 186 L252 244 Z" />
          <circle cx="200" cy="176" r="60" />
        </g>
      `;
    case "wings":
      return `
        <g fill="url(#hairGrad)">
          <path d="M140 160 L102 212 Q98 218 106 220 L150 230 Z" />
          <path d="M260 160 L298 212 Q302 218 294 220 L250 230 Z" />
          <circle cx="200" cy="176" r="60" />
        </g>
      `;
    case "braids":
      return `
        <circle cx="134" cy="215" r="16" fill="url(#hairGrad)" />
        <circle cx="134" cy="242" r="15" fill="url(#hairGrad)" />
        <circle cx="134" cy="268" r="13" fill="url(#hairGrad)" />
        <circle cx="266" cy="215" r="16" fill="url(#hairGrad)" />
        <circle cx="266" cy="242" r="15" fill="url(#hairGrad)" />
        <circle cx="266" cy="268" r="13" fill="url(#hairGrad)" />
        <circle cx="200" cy="176" r="60" fill="url(#hairGrad)" />
      `;
    case "shortRound":
      return `<circle cx="200" cy="172" r="63" fill="url(#hairGrad)" />`;
    case "cloakHair":
      return `<path d="M142 124 L258 124 L302 356 Q304 364 294 364 L106 364 Q96 364 98 356 Z" fill="url(#hairGrad)" />`;
    case "twinLoops":
      return `
        <path fill-rule="evenodd" d="M122 180 A36 36 0 1 0 122 252 A36 36 0 1 0 122 180 Z M122 196 A20 20 0 1 0 122 236 A20 20 0 1 0 122 196 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M278 180 A36 36 0 1 0 278 252 A36 36 0 1 0 278 180 Z M278 196 A20 20 0 1 0 278 236 A20 20 0 1 0 278 196 Z" fill="url(#hairGrad)" />
        <circle cx="200" cy="176" r="60" fill="url(#hairGrad)" />
      `;
    case "jellyfish":
      return `
        <rect x="126" y="118" width="148" height="114" rx="54" fill="url(#hairGrad)" />
        <rect x="142" y="210" width="26" height="128" rx="13" fill="url(#hairGrad)" />
        <rect x="232" y="210" width="26" height="128" rx="13" fill="url(#hairGrad)" />
      `;
    case "wolfCut":
      return `
        <circle cx="200" cy="168" r="64" fill="url(#hairGrad)" />
        <ellipse cx="132" cy="212" rx="26" ry="16" transform="rotate(-20 132 212)" fill="url(#hairGrad)" />
        <ellipse cx="268" cy="212" rx="26" ry="16" transform="rotate(20 268 212)" fill="url(#hairGrad)" />
        <ellipse cx="136" cy="248" rx="28" ry="16" transform="rotate(-15 136 248)" fill="url(#hairGrad)" />
        <ellipse cx="264" cy="248" rx="28" ry="16" transform="rotate(15 264 248)" fill="url(#hairGrad)" />
      `;
    case "bubblePony":
      return `
        <circle cx="200" cy="172" r="60" fill="url(#hairGrad)" />
        <circle cx="118" cy="186" r="22" fill="url(#hairGrad)" />
        <circle cx="112" cy="224" r="19" fill="url(#hairGrad)" />
        <circle cx="108" cy="258" r="15" fill="url(#hairGrad)" />
        <circle cx="282" cy="186" r="22" fill="url(#hairGrad)" />
        <circle cx="288" cy="224" r="19" fill="url(#hairGrad)" />
        <circle cx="292" cy="258" r="15" fill="url(#hairGrad)" />
      `;
    case "fanHair":
      return `
        <path d="M96 158 C118 86, 282 86, 304 158 L258 246 L142 246 Z" fill="url(#hairGrad)" />
      `;
    case "ribbonLocks":
      return `
        <circle cx="200" cy="172" r="60" fill="url(#hairGrad)" />
        <rect x="118" y="164" width="28" height="176" rx="14" fill="url(#hairGrad)" />
        <rect x="254" y="164" width="28" height="176" rx="14" fill="url(#hairGrad)" />
      `;
    case "curlyCloud":
      return `
        <circle cx="200" cy="166" r="62" fill="url(#hairGrad)" />
        <circle cx="136" cy="158" r="28" fill="url(#hairGrad)" />
        <circle cx="264" cy="158" r="28" fill="url(#hairGrad)" />
        <circle cx="126" cy="202" r="32" fill="url(#hairGrad)" />
        <circle cx="274" cy="202" r="32" fill="url(#hairGrad)" />
        <circle cx="138" cy="248" r="28" fill="url(#hairGrad)" />
        <circle cx="262" cy="248" r="28" fill="url(#hairGrad)" />
      `;
    case "spiralLocks":
      return `
        <circle cx="200" cy="170" r="60" fill="url(#hairGrad)" />
        <path d="M122 166 C100 190, 136 214, 114 238 C96 262, 132 286, 114 310 L138 310 C156 286, 120 262, 138 238 C160 214, 124 190, 146 166 Z" fill="url(#hairGrad)" />
        <path d="M278 166 C300 190, 264 214, 286 238 C304 262, 268 286, 286 310 L262 310 C244 286, 280 262, 262 238 C240 214, 276 190, 254 166 Z" fill="url(#hairGrad)" />
      `;
    case "oceanWaves":
      return `
        <path d="M134 134 C104 174, 148 212, 112 252 C90 284, 134 318, 116 354 L284 354 C266 318, 310 284, 288 252 C252 212, 296 174, 266 134 Z" fill="url(#hairGrad)" />
      `;
    case "sheepCurls":
      return `
        <circle cx="200" cy="172" r="62" fill="url(#hairGrad)" />
        <circle cx="144" cy="136" r="24" fill="url(#hairGrad)" />
        <circle cx="256" cy="136" r="24" fill="url(#hairGrad)" />
        <circle cx="126" cy="174" r="26" fill="url(#hairGrad)" />
        <circle cx="274" cy="174" r="26" fill="url(#hairGrad)" />
        <circle cx="130" cy="216" r="26" fill="url(#hairGrad)" />
        <circle cx="270" cy="216" r="26" fill="url(#hairGrad)" />
        <circle cx="148" cy="248" r="22" fill="url(#hairGrad)" />
        <circle cx="252" cy="248" r="22" fill="url(#hairGrad)" />
      `;
    case "vintageWaves":
      return `
        <path d="M136 124 C110 156, 144 188, 118 218 C102 240, 136 268, 152 268 L248 268 C264 268, 298 240, 282 218 C256 188, 290 156, 264 124 Z" fill="url(#hairGrad)" />
      `;
    case "ringletsTwin":
      return `
        <circle cx="200" cy="170" r="60" fill="url(#hairGrad)" />
        <circle cx="124" cy="194" r="20" fill="url(#hairGrad)" />
        <circle cx="128" cy="224" r="19" fill="url(#hairGrad)" />
        <circle cx="122" cy="254" r="18" fill="url(#hairGrad)" />
        <circle cx="128" cy="282" r="15" fill="url(#hairGrad)" />
        <circle cx="276" cy="194" r="20" fill="url(#hairGrad)" />
        <circle cx="272" cy="224" r="19" fill="url(#hairGrad)" />
        <circle cx="278" cy="254" r="18" fill="url(#hairGrad)" />
        <circle cx="272" cy="282" r="15" fill="url(#hairGrad)" />
      `;
    case "fluffyCurlyBob":
      return `
        <rect x="128" y="122" width="144" height="126" rx="52" fill="url(#hairGrad)" />
        <circle cx="126" cy="186" r="24" fill="url(#hairGrad)" />
        <circle cx="274" cy="186" r="24" fill="url(#hairGrad)" />
        <circle cx="122" cy="226" r="28" fill="url(#hairGrad)" />
        <circle cx="278" cy="226" r="28" fill="url(#hairGrad)" />
        <circle cx="148" cy="248" r="24" fill="url(#hairGrad)" />
        <circle cx="252" cy="248" r="24" fill="url(#hairGrad)" />
      `;
    case "wavyLob":
      return `
        <path d="M136 122 C112 166, 142 206, 116 248 C106 268, 132 290, 154 286 L246 286 C268 290, 294 268, 284 248 C258 206, 288 166, 264 122 Z" fill="url(#hairGrad)" />
      `;
    case "coilyHalo":
      return `
        <circle cx="200" cy="174" r="78" fill="url(#hairGrad)" />
        <circle cx="200" cy="100" r="24" fill="url(#hairGrad)" />
        <circle cx="146" cy="116" r="24" fill="url(#hairGrad)" />
        <circle cx="254" cy="116" r="24" fill="url(#hairGrad)" />
        <circle cx="118" cy="160" r="24" fill="url(#hairGrad)" />
        <circle cx="282" cy="160" r="24" fill="url(#hairGrad)" />
        <circle cx="122" cy="212" r="24" fill="url(#hairGrad)" />
        <circle cx="278" cy="212" r="24" fill="url(#hairGrad)" />
      `;
    case "mermaidWaves":
      return `
        <path d="M136 128 C98 180, 146 230, 106 282 C86 312, 122 348, 104 378 L296 378 C278 348, 314 312, 294 282 C254 230, 302 180, 264 128 Z" fill="url(#hairGrad)" />
      `;
    case "springPigtails":
      return `
        <circle cx="200" cy="172" r="60" fill="url(#hairGrad)" />
        <path d="M116 174 Q88 192 120 210 Q88 228 120 246 Q88 264 116 286 L136 286 Q108 264 140 246 Q108 228 140 210 Q108 192 136 174 Z" fill="url(#hairGrad)" />
        <path d="M284 174 Q312 192 280 210 Q312 228 280 246 Q312 264 284 286 L264 286 Q292 264 260 246 Q292 228 260 210 Q292 192 264 174 Z" fill="url(#hairGrad)" />
      `;
    case "cherubCurls":
      return `
        <circle cx="200" cy="168" r="62" fill="url(#hairGrad)" />
        <circle cx="130" cy="168" r="22" fill="url(#hairGrad)" />
        <circle cx="270" cy="168" r="22" fill="url(#hairGrad)" />
        <circle cx="122" cy="204" r="22" fill="url(#hairGrad)" />
        <circle cx="278" cy="204" r="22" fill="url(#hairGrad)" />
        <circle cx="136" cy="236" r="20" fill="url(#hairGrad)" />
        <circle cx="264" cy="236" r="20" fill="url(#hairGrad)" />
      `;
    case "cascadingCurls":
      return `
        <circle cx="200" cy="168" r="62" fill="url(#hairGrad)" />
        <circle cx="132" cy="196" r="24" fill="url(#hairGrad)" />
        <circle cx="268" cy="196" r="24" fill="url(#hairGrad)" />
        <circle cx="122" cy="236" r="26" fill="url(#hairGrad)" />
        <circle cx="278" cy="236" r="26" fill="url(#hairGrad)" />
        <circle cx="116" cy="280" r="28" fill="url(#hairGrad)" />
        <circle cx="284" cy="280" r="28" fill="url(#hairGrad)" />
        <circle cx="128" cy="322" r="24" fill="url(#hairGrad)" />
        <circle cx="272" cy="322" r="24" fill="url(#hairGrad)" />
      `;
    case "waveFlip":
      return `
        <path d="M138 122 L262 122 C266 192, 260 226, 296 242 C278 268, 244 264, 224 256 L176 256 C156 264, 122 268, 104 242 C140 226, 134 192, 138 122 Z" fill="url(#hairGrad)" />
      `;
    case "doubleCloudCurls":
      return `
        <circle cx="200" cy="168" r="60" fill="url(#hairGrad)" />
        <circle cx="120" cy="186" r="34" fill="url(#hairGrad)" />
        <circle cx="280" cy="186" r="34" fill="url(#hairGrad)" />
        <circle cx="114" cy="242" r="38" fill="url(#hairGrad)" />
        <circle cx="286" cy="242" r="38" fill="url(#hairGrad)" />
      `;
    case "gypsyCurls":
      return `
        <circle cx="200" cy="166" r="64" fill="url(#hairGrad)" />
        <circle cx="122" cy="164" r="26" fill="url(#hairGrad)" />
        <circle cx="278" cy="164" r="26" fill="url(#hairGrad)" />
        <circle cx="108" cy="208" r="30" fill="url(#hairGrad)" />
        <circle cx="292" cy="208" r="30" fill="url(#hairGrad)" />
        <circle cx="116" cy="256" r="30" fill="url(#hairGrad)" />
        <circle cx="284" cy="256" r="30" fill="url(#hairGrad)" />
        <circle cx="136" cy="296" r="26" fill="url(#hairGrad)" />
        <circle cx="264" cy="296" r="26" fill="url(#hairGrad)" />
      `;
    case "softSiren":
      return `
        <path d="M134 126 C106 168, 136 210, 112 254 C94 290, 130 330, 146 348 L254 348 C270 330, 306 290, 288 254 C264 210, 294 168, 266 126 Z" fill="url(#hairGrad)" />
      `;
    case "ringletCrownBack":
      return `
        <circle cx="200" cy="172" r="62" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M124 150 A26 26 0 1 0 124 202 A26 26 0 1 0 124 150 Z M124 162 A14 14 0 1 0 124 190 A14 14 0 1 0 124 162 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M276 150 A26 26 0 1 0 276 202 A26 26 0 1 0 276 150 Z M276 162 A14 14 0 1 0 276 190 A14 14 0 1 0 276 162 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M120 190 A28 28 0 1 0 120 246 A28 28 0 1 0 120 190 Z M120 202 A16 16 0 1 0 120 234 A16 16 0 1 0 120 202 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M280 190 A28 28 0 1 0 280 246 A28 28 0 1 0 280 190 Z M280 202 A16 16 0 1 0 280 234 A16 16 0 1 0 280 202 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M132 232 A24 24 0 1 0 132 280 A24 24 0 1 0 132 232 Z M132 244 A12 12 0 1 0 132 268 A12 12 0 1 0 132 244 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M268 232 A24 24 0 1 0 268 280 A24 24 0 1 0 268 232 Z M268 244 A12 12 0 1 0 268 268 A12 12 0 1 0 268 244 Z" fill="url(#hairGrad)" />
      `;
    case "twistBraids":
      return `
        <circle cx="200" cy="172" r="60" fill="url(#hairGrad)" />
        <ellipse cx="130" cy="198" rx="16" ry="22" transform="rotate(18 130 198)" fill="url(#hairGrad)" />
        <ellipse cx="128" cy="232" rx="16" ry="22" transform="rotate(-18 128 232)" fill="url(#hairGrad)" />
        <ellipse cx="130" cy="266" rx="15" ry="20" transform="rotate(18 130 266)" fill="url(#hairGrad)" />
        <ellipse cx="128" cy="298" rx="13" ry="18" transform="rotate(-18 128 298)" fill="url(#hairGrad)" />
        <ellipse cx="270" cy="198" rx="16" ry="22" transform="rotate(-18 270 198)" fill="url(#hairGrad)" />
        <ellipse cx="272" cy="232" rx="16" ry="22" transform="rotate(18 272 232)" fill="url(#hairGrad)" />
        <ellipse cx="270" cy="266" rx="15" ry="20" transform="rotate(-18 270 266)" fill="url(#hairGrad)" />
        <ellipse cx="272" cy="298" rx="13" ry="18" transform="rotate(18 272 298)" fill="url(#hairGrad)" />
      `;
    case "velvetWaves":
      return `
        <rect x="128" y="120" width="144" height="196" rx="56" fill="url(#hairGrad)" />
        <circle cx="124" cy="184" r="24" fill="url(#hairGrad)" />
        <circle cx="276" cy="184" r="24" fill="url(#hairGrad)" />
        <circle cx="122" cy="240" r="26" fill="url(#hairGrad)" />
        <circle cx="278" cy="240" r="26" fill="url(#hairGrad)" />
        <circle cx="128" cy="294" r="24" fill="url(#hairGrad)" />
        <circle cx="272" cy="294" r="24" fill="url(#hairGrad)" />
      `;
    default:
      return "";
  }
}

// 4Б. Прическа: Чёлка (40 форм, без обводки, включая кудрявые завитки и волны)
function renderHairBangs(bangsId) {
  switch (bangsId) {
    case "none":
      return "";
    case "straight":
      return `
        <path d="M142 168 C142 120, 258 120, 258 168 Z" fill="url(#hairGrad)" />
        <rect x="134" y="156" width="22" height="78" rx="11" fill="url(#hairGrad)" />
        <rect x="244" y="156" width="22" height="78" rx="11" fill="url(#hairGrad)" />
      `;
    case "curtain":
      return `
        <path d="M142 176 C144 122, 200 124, 200 152 C200 124, 256 122, 258 176 Q226 164 200 144 Q174 164 142 176 Z" fill="url(#hairGrad)" />
      `;
    case "cloudBangs":
      return `
        <circle cx="168" cy="144" r="24" fill="url(#hairGrad)" />
        <circle cx="202" cy="138" r="26" fill="url(#hairGrad)" />
        <circle cx="234" cy="144" r="22" fill="url(#hairGrad)" />
      `;
    case "himeBangs":
      return `
        <rect x="144" y="126" width="112" height="42" rx="14" fill="url(#hairGrad)" />
        <rect x="134" y="148" width="24" height="98" rx="12" fill="url(#hairGrad)" />
        <rect x="242" y="148" width="24" height="98" rx="12" fill="url(#hairGrad)" />
      `;
    case "spikyBangs":
      return `
        <g fill="url(#hairGrad)">
          <path d="M146 130 L188 134 L170 174 Q168 178 164 174 Z" />
          <path d="M180 128 L220 128 L202 176 Q200 180 198 176 Z" />
          <path d="M212 134 L254 130 L236 174 Q232 178 230 174 Z" />
        </g>
      `;
    case "sideSweep":
      return `<path d="M142 174 C142 120, 244 120, 258 164 C220 166, 185 138, 142 174 Z" fill="url(#hairGrad)" />`;
    case "bowlBangs":
      return `<path d="M136 174 C136 114, 264 114, 264 174 Z" fill="url(#hairGrad)" />`;
    case "vBang":
      return `<path d="M144 132 Q200 122 256 132 L204 178 Q200 182 196 178 Z" fill="url(#hairGrad)" />`;
    case "micro":
      return `<path d="M148 152 C152 120, 248 120, 252 152 Z" fill="url(#hairGrad)" />`;
    case "splitLocks":
      return `
        <rect x="136" y="142" width="20" height="106" rx="10" fill="url(#hairGrad)" />
        <rect x="244" y="142" width="20" height="106" rx="10" fill="url(#hairGrad)" />
      `;
    case "roundPuffs":
      return `
        <circle cx="158" cy="146" r="18" fill="url(#hairGrad)" />
        <circle cx="186" cy="142" r="19" fill="url(#hairGrad)" />
        <circle cx="214" cy="142" r="19" fill="url(#hairGrad)" />
        <circle cx="242" cy="146" r="18" fill="url(#hairGrad)" />
      `;
    case "asymBlock":
      return `
        <rect x="144" y="128" width="60" height="44" rx="14" fill="url(#hairGrad)" />
        <rect x="196" y="128" width="60" height="28" rx="12" fill="url(#hairGrad)" />
      `;
    case "oneEye":
      return `<path d="M144 130 L256 130 L256 164 L196 212 Q190 216 184 212 L144 202 Z" fill="url(#hairGrad)" />`;
    case "centerLock":
      return `
        <path d="M146 158 C152 122, 248 122, 254 158 Z" fill="url(#hairGrad)" />
        <rect x="191" y="132" width="18" height="54" rx="9" fill="url(#hairGrad)" />
      `;
    case "bobBangs":
      return `<rect x="138" y="124" width="124" height="46" rx="22" fill="url(#hairGrad)" />`;
    case "frenchBangs":
      return `
        <rect x="150" y="124" width="100" height="30" rx="15" fill="url(#hairGrad)" />
        <rect x="136" y="140" width="18" height="58" rx="9" fill="url(#hairGrad)" />
        <rect x="246" y="140" width="18" height="58" rx="9" fill="url(#hairGrad)" />
      `;
    case "archBangs":
      return `<path d="M138 174 C154 148, 246 148, 262 174 C258 118, 142 118, 138 174 Z" fill="url(#hairGrad)" />`;
    case "twinWaves":
      return `
        <ellipse cx="172" cy="146" rx="34" ry="20" transform="rotate(-12 172 146)" fill="url(#hairGrad)" />
        <ellipse cx="228" cy="146" rx="34" ry="20" transform="rotate(12 228 146)" fill="url(#hairGrad)" />
      `;
    case "choppy":
      return `
        <rect x="144" y="126" width="24" height="42" rx="10" fill="url(#hairGrad)" />
        <rect x="172" y="126" width="24" height="34" rx="10" fill="url(#hairGrad)" />
        <rect x="200" y="126" width="24" height="44" rx="10" fill="url(#hairGrad)" />
        <rect x="228" y="126" width="24" height="36" rx="10" fill="url(#hairGrad)" />
      `;
    case "wispy":
      return `
        <rect x="160" y="126" width="16" height="46" rx="8" transform="rotate(8 168 149)" fill="url(#hairGrad)" />
        <rect x="192" y="124" width="16" height="50" rx="8" fill="url(#hairGrad)" />
        <rect x="224" y="126" width="16" height="46" rx="8" transform="rotate(-8 232 149)" fill="url(#hairGrad)" />
      `;
    case "framedBob":
      return `
        <rect x="142" y="124" width="116" height="38" rx="18" fill="url(#hairGrad)" />
        <rect x="130" y="142" width="24" height="106" rx="12" fill="url(#hairGrad)" />
        <rect x="246" y="142" width="24" height="106" rx="12" fill="url(#hairGrad)" />
      `;
    case "curvedIn":
      return `
        <path d="M140 154 C146 118, 254 118, 260 154 Z" fill="url(#hairGrad)" />
        <circle cx="144" cy="226" r="18" fill="url(#hairGrad)" />
        <circle cx="256" cy="226" r="18" fill="url(#hairGrad)" />
        <rect x="132" y="150" width="20" height="78" rx="10" fill="url(#hairGrad)" />
        <rect x="248" y="150" width="20" height="78" rx="10" fill="url(#hairGrad)" />
      `;
    case "diagonalCut":
      return `<path d="M142 128 L258 128 L258 178 Q258 182 252 180 L142 150 Z" fill="url(#hairGrad)" />`;
    case "heartPart":
      return `
        <circle cx="174" cy="148" r="26" fill="url(#hairGrad)" />
        <circle cx="226" cy="148" r="26" fill="url(#hairGrad)" />
      `;
    case "bluntWide":
      return `<rect x="132" y="122" width="136" height="52" rx="20" fill="url(#hairGrad)" />`;
    case "templeDrops":
      return `
        <ellipse cx="146" cy="176" rx="14" ry="38" transform="rotate(10 146 176)" fill="url(#hairGrad)" />
        <ellipse cx="254" cy="176" rx="14" ry="38" transform="rotate(-10 254 176)" fill="url(#hairGrad)" />
      `;
    case "zigBangs":
      return `
        <rect x="142" y="126" width="40" height="32" rx="10" fill="url(#hairGrad)" />
        <rect x="178" y="126" width="44" height="44" rx="12" fill="url(#hairGrad)" />
        <rect x="218" y="126" width="40" height="56" rx="12" fill="url(#hairGrad)" />
      `;
    case "petalBangs":
      return `
        <ellipse cx="164" cy="146" rx="24" ry="14" transform="rotate(-24 164 146)" fill="url(#hairGrad)" />
        <ellipse cx="200" cy="142" rx="24" ry="14" fill="url(#hairGrad)" />
        <ellipse cx="236" cy="146" rx="24" ry="14" transform="rotate(24 236 146)" fill="url(#hairGrad)" />
      `;
    case "miniCurtain":
      return `
        <ellipse cx="162" cy="142" rx="22" ry="12" transform="rotate(-18 162 142)" fill="url(#hairGrad)" />
        <ellipse cx="238" cy="142" rx="22" ry="12" transform="rotate(18 238 142)" fill="url(#hairGrad)" />
      `;
    case "curlyFringe":
      return `
        <circle cx="154" cy="148" r="18" fill="url(#hairGrad)" />
        <circle cx="176" cy="154" r="16" fill="url(#hairGrad)" />
        <circle cx="200" cy="150" r="18" fill="url(#hairGrad)" />
        <circle cx="224" cy="154" r="16" fill="url(#hairGrad)" />
        <circle cx="246" cy="148" r="18" fill="url(#hairGrad)" />
      `;
    case "spiralForelock":
      return `
        <path fill-rule="evenodd" d="M200 132 A22 22 0 1 0 200 176 A22 22 0 1 0 200 132 Z M200 143 A11 11 0 1 0 200 165 A11 11 0 1 0 200 143 Z" fill="url(#hairGrad)" />
        <circle cx="160" cy="144" r="16" fill="url(#hairGrad)" />
        <circle cx="240" cy="144" r="16" fill="url(#hairGrad)" />
      `;
    case "wavyCurtain":
      return `
        <path d="M200 124 C166 124, 134 148, 130 184 C136 210, 120 228, 134 250 L150 242 C138 226, 152 208, 146 184 C150 156, 174 140, 200 140 Z" fill="url(#hairGrad)" />
        <path d="M200 124 C234 124, 266 148, 270 184 C264 210, 280 228, 266 250 L250 242 C262 226, 248 208, 254 184 C250 156, 226 140, 200 140 Z" fill="url(#hairGrad)" />
      `;
    case "ringletsSide":
      return `
        <circle cx="142" cy="160" r="14" fill="url(#hairGrad)" />
        <circle cx="140" cy="184" r="13" fill="url(#hairGrad)" />
        <circle cx="142" cy="208" r="12" fill="url(#hairGrad)" />
        <circle cx="140" cy="230" r="10" fill="url(#hairGrad)" />
        <circle cx="258" cy="160" r="14" fill="url(#hairGrad)" />
        <circle cx="260" cy="184" r="13" fill="url(#hairGrad)" />
        <circle cx="258" cy="208" r="12" fill="url(#hairGrad)" />
        <circle cx="260" cy="230" r="10" fill="url(#hairGrad)" />
      `;
    case "retroWaveBang":
      return `
        <path d="M140 164 C150 118, 198 120, 214 152 C226 174, 248 174, 260 156 C254 122, 150 116, 140 164 Z" fill="url(#hairGrad)" />
      `;
    case "cherubFringe":
      return `
        <path fill-rule="evenodd" d="M152 125 A19 19 0 1 0 152 163 A19 19 0 1 0 152 125 Z M152 134 A10 10 0 1 0 152 154 A10 10 0 1 0 152 134 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M176 121 A19 19 0 1 0 176 159 A19 19 0 1 0 176 121 Z M176 130 A10 10 0 1 0 176 150 A10 10 0 1 0 176 130 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M200 119 A19 19 0 1 0 200 157 A19 19 0 1 0 200 119 Z M200 128 A10 10 0 1 0 200 148 A10 10 0 1 0 200 128 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M224 121 A19 19 0 1 0 224 159 A19 19 0 1 0 224 121 Z M224 130 A10 10 0 1 0 224 150 A10 10 0 1 0 224 130 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M248 125 A19 19 0 1 0 248 163 A19 19 0 1 0 248 125 Z M248 134 A10 10 0 1 0 248 154 A10 10 0 1 0 248 134 Z" fill="url(#hairGrad)" />
      `;
    case "sWaveLocks":
      return `
        <path d="M150 132 C130 154, 154 174, 134 198 L150 202 C170 176, 146 156, 166 134 Z" fill="url(#hairGrad)" />
        <path d="M250 132 C270 154, 246 174, 266 198 L250 202 C230 176, 254 156, 234 134 Z" fill="url(#hairGrad)" />
      `;
    case "fluffyCoils":
      return `
        <circle cx="152" cy="140" r="20" fill="url(#hairGrad)" />
        <circle cx="176" cy="134" r="22" fill="url(#hairGrad)" />
        <circle cx="200" cy="132" r="24" fill="url(#hairGrad)" />
        <circle cx="224" cy="134" r="22" fill="url(#hairGrad)" />
        <circle cx="248" cy="140" r="20" fill="url(#hairGrad)" />
      `;
    case "twinSpirals":
      return `
        <path d="M182 130 C162 144, 178 164, 162 176 L176 182 C194 166, 178 146, 196 132 Z" fill="url(#hairGrad)" />
        <path d="M218 130 C238 144, 222 164, 238 176 L224 182 C206 166, 222 146, 204 132 Z" fill="url(#hairGrad)" />
      `;
    case "seafoamBangs":
      return `
        <path d="M140 130 L260 130 L260 160 Q243 176 228 160 Q214 144 200 160 Q186 176 172 160 Q157 144 140 160 Z" fill="url(#hairGrad)" />
      `;
    case "cloudArchBangs":
      // 41. Облачная арка
      return `
        <path d="M138 176 C142 122, 258 122, 262 176 C248 164, 232 152, 216 156 C206 160, 194 160, 184 156 C168 152, 152 164, 138 176 Z" fill="url(#hairGrad)" />
      `;
    case "lotusCenterBangs":
      // 42. Лепесток лотоса по центру
      return `
        <path d="M142 166 C146 122, 254 122, 258 166 C238 156, 220 144, 200 134 C180 144, 162 156, 142 166 Z" fill="url(#hairGrad)" />
        <path d="M200 126 C214 144, 214 168, 200 178 C186 168, 186 144, 200 126 Z" fill="url(#hairGrad)" />
      `;
    case "twinDropletsBangs":
      // 43. Двойная капля на лоб
      return `
        <path d="M142 162 C148 120, 252 120, 258 162 Z" fill="url(#hairGrad)" />
        <ellipse cx="182" cy="158" rx="14" ry="22" transform="rotate(8 182 158)" fill="url(#hairGrad)" />
        <ellipse cx="218" cy="158" rx="14" ry="22" transform="rotate(-8 218 158)" fill="url(#hairGrad)" />
      `;
    case "softZigzagBangs":
      // 44. Мягкий зигзаг со скруглёнными зубчиками
      return `
        <path d="M140 130 L260 130 L256 166 Q254 172 248 166 L236 154 L222 170 Q218 174 214 170 L200 154 L186 170 Q182 174 178 170 L164 154 L152 166 Q146 172 144 166 Z" fill="url(#hairGrad)" />
      `;
    case "kimonoSweepBangs":
      // 45. Шёлковый кимоно-пробор
      return `
        <path d="M138 178 C140 120, 216 116, 232 146 C244 124, 258 134, 262 174 C244 162, 230 152, 224 142 C196 158, 166 168, 138 178 Z" fill="url(#hairGrad)" />
      `;
    case "doubleCurtainLong":
      // 46. Длинные двойные шторки
      return `
        <path d="M200 124 C162 124, 136 150, 134 216 C134 224, 148 224, 150 214 C154 174, 174 152, 200 140 Z" fill="url(#hairGrad)" />
        <path d="M200 124 C238 124, 264 150, 266 216 C266 224, 252 224, 250 214 C246 174, 226 152, 200 140 Z" fill="url(#hairGrad)" />
      `;
    case "bubbleFringeBangs":
      // 47. Пузырьковая чёлка
      return `
        <circle cx="148" cy="148" r="16" fill="url(#hairGrad)" />
        <circle cx="168" cy="144" r="18" fill="url(#hairGrad)" />
        <circle cx="190" cy="140" r="19" fill="url(#hairGrad)" />
        <circle cx="212" cy="140" r="19" fill="url(#hairGrad)" />
        <circle cx="234" cy="144" r="18" fill="url(#hairGrad)" />
        <circle cx="252" cy="148" r="16" fill="url(#hairGrad)" />
      `;
    case "kitsuneLocksBangs":
      // 48. Лисьи височные пряди
      return `
        <path d="M144 160 C150 120, 250 120, 256 160 Q200 146 144 160 Z" fill="url(#hairGrad)" />
        <path d="M136 146 C128 184, 134 224, 148 242 C152 246, 158 242, 156 236 C148 214, 148 182, 154 152 Z" fill="url(#hairGrad)" />
        <path d="M264 146 C272 184, 266 224, 252 242 C248 246, 242 242, 244 236 C252 214, 252 182, 246 152 Z" fill="url(#hairGrad)" />
      `;
    case "crescentSweepBangs":
      // 49. Лунный полумесяц набок
      return `
        <path d="M138 176 C142 118, 254 114, 262 168 C236 174, 184 144, 138 176 Z" fill="url(#hairGrad)" />
      `;
    case "royalPartBangs":
      // 50. Королевский купол-пробор
      return `
        <path d="M136 182 C136 122, 192 118, 200 138 C208 118, 264 122, 264 182 C244 168, 216 158, 200 144 C184 158, 156 168, 136 182 Z" fill="url(#hairGrad)" />
      `;
    default:
      return "";
  }
}

// 4В. Прическа: Верх / макушка (50 форм, без обводки и без прозрачностей, с мягкими углами)
function renderHairTop(topId) {
  const topShades = buildShades(state.colors.hairTop || state.colors.hair || "#2E2B36");
  switch (topId) {
    case "none":
      return "";
    case "doubleBuns":
      return `
        <circle cx="142" cy="122" r="26" fill="url(#hairGrad)" />
        <circle cx="258" cy="122" r="26" fill="url(#hairGrad)" />
      `;
    case "topknot":
      return `
        <circle cx="200" cy="100" r="24" fill="url(#hairGrad)" />
        <rect x="184" y="116" width="32" height="10" rx="5" fill="#E05A47" />
      `;
    case "ahoge":
      return `<path d="M196 134 C210 86, 240 94, 242 104 C224 114, 210 124, 206 136 Z" fill="url(#hairGrad)" />`;
    case "mohawk":
      return `<rect x="184" y="84" width="32" height="58" rx="16" fill="url(#hairGrad)" />`;
    case "twinCones":
      return `
        <g fill="url(#hairGrad)">
          <path d="M142 136 L156 90 Q158 84 162 90 L178 132 Z" />
          <path d="M258 136 L244 90 Q242 84 238 90 L222 132 Z" />
        </g>
      `;
    case "pompadour":
      return `<rect x="152" y="96" width="102" height="46" rx="23" fill="url(#hairGrad)" />`;
    case "tripleSpheres":
      return `
        <circle cx="166" cy="116" r="18" fill="url(#hairGrad)" />
        <circle cx="200" cy="106" r="22" fill="url(#hairGrad)" />
        <circle cx="234" cy="116" r="18" fill="url(#hairGrad)" />
      `;
    case "highPony":
      return `
        <path d="M200 110 C238 82, 276 110, 264 156 C244 136, 224 126, 200 124 Z" fill="url(#hairGrad)" />
        <circle cx="200" cy="116" r="12" fill="#E05A47" />
      `;
    case "boltAhoge":
      return `<path d="M192 134 L204 105 Q205 102 201 102 L198 102 Q195 102 197 99 L210 78 Q212 75 215 77 L220 80 Q223 82 221 85 L211 105 Q210 108 214 108 L218 108 Q221 108 219 111 L204 136 Z" fill="url(#hairGrad)" />`;
    case "heartBun":
      return `
        <circle cx="190" cy="102" r="16" fill="url(#hairGrad)" />
        <circle cx="210" cy="102" r="16" fill="url(#hairGrad)" />
        <path d="M176 106 L224 106 L203 132 Q200 135 197 132 Z" fill="url(#hairGrad)" />
      `;
    case "ringBun":
      return `
        <path fill-rule="evenodd" d="M200 76 A24 24 0 1 0 200 124 A24 24 0 1 0 200 76 Z M200 91 A9 9 0 1 0 200 109 A9 9 0 1 0 200 91 Z" fill="url(#hairGrad)" />
      `;
    case "feather":
      return `
        <ellipse cx="192" cy="102" rx="9" ry="26" transform="rotate(-18 192 102)" fill="url(#hairGrad)" />
        <ellipse cx="210" cy="104" rx="9" ry="24" transform="rotate(16 210 104)" fill="url(#hairGrad)" />
      `;
    case "cubeBun":
      return `<rect x="178" y="88" width="44" height="40" rx="12" fill="url(#hairGrad)" />`;
    case "starTop":
      return `<path d="M198 82 Q200 78 202 82 L208 98 L225 100 Q229 101 226 104 L212 113 L215 130 Q216 134 212 131 L200 121 L188 131 Q184 134 185 130 L188 113 L174 104 Q171 101 175 100 L192 98 Z" fill="url(#hairGrad)" />`;
    case "bobCrown":
      return `<ellipse cx="200" cy="122" rx="62" ry="24" fill="url(#hairGrad)" />`;
    case "twinLoopsTop":
      return `
        <ellipse cx="176" cy="108" rx="22" ry="12" transform="rotate(-20 176 108)" fill="url(#hairGrad)" />
        <ellipse cx="224" cy="108" rx="22" ry="12" transform="rotate(20 224 108)" fill="url(#hairGrad)" />
        <circle cx="200" cy="114" r="10" fill="#E05A47" />
      `;
    case "braidCrown":
      return `
        <circle cx="152" cy="128" r="12" fill="url(#hairGrad)" />
        <circle cx="170" cy="122" r="13" fill="url(#hairGrad)" />
        <circle cx="190" cy="119" r="13" fill="url(#hairGrad)" />
        <circle cx="210" cy="119" r="13" fill="url(#hairGrad)" />
        <circle cx="230" cy="122" r="13" fill="url(#hairGrad)" />
        <circle cx="248" cy="128" r="12" fill="url(#hairGrad)" />
      `;
    case "miniHornsHair":
      return `
        <rect x="148" y="98" width="22" height="36" rx="11" transform="rotate(-18 159 116)" fill="url(#hairGrad)" />
        <rect x="230" y="98" width="22" height="36" rx="11" transform="rotate(18 241 116)" fill="url(#hairGrad)" />
      `;
    case "cloudPuffTop":
      return `
        <circle cx="182" cy="106" r="20" fill="url(#hairGrad)" />
        <circle cx="218" cy="106" r="20" fill="url(#hairGrad)" />
        <circle cx="200" cy="96" r="22" fill="url(#hairGrad)" />
      `;
    case "doubleAhoge":
      return `
        <path d="M196 130 C174 84, 150 94, 150 104 C168 104, 182 114, 190 132 Z" fill="url(#hairGrad)" />
        <path d="M204 130 C226 84, 250 94, 250 104 C232 104, 218 114, 210 132 Z" fill="url(#hairGrad)" />
      `;
    case "sideBun":
      return `
        <circle cx="248" cy="112" r="30" fill="url(#hairGrad)" />
        <circle cx="236" cy="122" r="10" fill="#E05A47" />
      `;
    case "fanTop":
      return `<path d="M162 94 Q200 86 238 94 Q242 96 239 102 L218 132 L182 132 L161 102 Q158 96 162 94 Z" fill="url(#hairGrad)" />`;
    case "StackedBuns":
      return `
        <circle cx="200" cy="116" r="20" fill="url(#hairGrad)" />
        <circle cx="200" cy="92" r="15" fill="url(#hairGrad)" />
        <circle cx="200" cy="74" r="10" fill="url(#hairGrad)" />
      `;
    case "curlCrest":
      return `
        <circle cx="200" cy="102" r="24" fill="url(#hairGrad)" />
        <circle cx="212" cy="102" r="9" fill="${topShades.hi}" />
      `;
    case "twinTailsHigh":
      return `
        <ellipse cx="130" cy="134" rx="18" ry="38" transform="rotate(25 130 134)" fill="url(#hairGrad)" />
        <ellipse cx="270" cy="134" rx="18" ry="38" transform="rotate(-25 270 134)" fill="url(#hairGrad)" />
      `;
    case "haloRingHair":
      return `<path fill-rule="evenodd" d="M150 96 A50 18 0 1 0 250 96 A50 18 0 1 0 150 96 Z M162 96 A38 8 0 1 0 238 96 A38 8 0 1 0 162 96 Z" fill="url(#hairGrad)" />`;
    case "cloverBun":
      return `
        <circle cx="186" cy="108" r="15" fill="url(#hairGrad)" />
        <circle cx="214" cy="108" r="15" fill="url(#hairGrad)" />
        <circle cx="200" cy="92" r="15" fill="url(#hairGrad)" />
      `;
    case "dropCrest":
      return `
        <rect x="193" y="82" width="14" height="42" rx="7" fill="url(#hairGrad)" />
        <rect x="175" y="90" width="14" height="36" rx="7" transform="rotate(-18 182 108)" fill="url(#hairGrad)" />
        <rect x="211" y="90" width="14" height="36" rx="7" transform="rotate(18 218 108)" fill="url(#hairGrad)" />
      `;
    case "croissantBun":
      return `<path d="M158 120 C166 80, 234 80, 242 120 C222 106, 178 106, 158 120 Z" fill="url(#hairGrad)" />`;
    case "curlyPuffBun":
      return `
        <circle cx="200" cy="98" r="24" fill="url(#hairGrad)" />
        <circle cx="182" cy="104" r="18" fill="url(#hairGrad)" />
        <circle cx="218" cy="104" r="18" fill="url(#hairGrad)" />
        <circle cx="190" cy="86" r="16" fill="url(#hairGrad)" />
        <circle cx="210" cy="86" r="16" fill="url(#hairGrad)" />
      `;
    case "twinCurlyPuffs":
      return `
        <circle cx="142" cy="118" r="22" fill="url(#hairGrad)" />
        <circle cx="130" cy="110" r="15" fill="url(#hairGrad)" />
        <circle cx="152" cy="104" r="15" fill="url(#hairGrad)" />
        <circle cx="258" cy="118" r="22" fill="url(#hairGrad)" />
        <circle cx="270" cy="110" r="15" fill="url(#hairGrad)" />
        <circle cx="248" cy="104" r="15" fill="url(#hairGrad)" />
      `;
    case "spiralAhoge":
      return `
        <path fill-rule="evenodd" d="M210 88 A20 20 0 1 0 210 128 A20 20 0 1 0 210 88 Z M210 98 A10 10 0 1 0 210 118 A10 10 0 1 0 210 98 Z" fill="url(#hairGrad)" />
      `;
    case "wavePompadour":
      return `
        <path d="M148 130 C142 88, 186 80, 206 94 C226 106, 248 82, 258 110 C260 130, 232 136, 148 130 Z" fill="url(#hairGrad)" />
      `;
    case "ringletCascadeTop":
      return `
        <circle cx="200" cy="98" r="20" fill="url(#hairGrad)" />
        <circle cx="228" cy="106" r="14" fill="url(#hairGrad)" />
        <circle cx="248" cy="122" r="12" fill="url(#hairGrad)" />
        <circle cx="264" cy="142" r="10" fill="url(#hairGrad)" />
      `;
    case "cloudCurlsTop":
      return `
        <circle cx="160" cy="118" r="18" fill="url(#hairGrad)" />
        <circle cx="180" cy="108" r="20" fill="url(#hairGrad)" />
        <circle cx="200" cy="102" r="22" fill="url(#hairGrad)" />
        <circle cx="220" cy="108" r="20" fill="url(#hairGrad)" />
        <circle cx="240" cy="118" r="18" fill="url(#hairGrad)" />
      `;
    case "twistedHornsTop":
      return `
        <circle cx="158" cy="118" r="16" fill="url(#hairGrad)" />
        <circle cx="152" cy="102" r="12" fill="url(#hairGrad)" />
        <circle cx="146" cy="90" r="8" fill="url(#hairGrad)" />
        <circle cx="242" cy="118" r="16" fill="url(#hairGrad)" />
        <circle cx="248" cy="102" r="12" fill="url(#hairGrad)" />
        <circle cx="254" cy="90" r="8" fill="url(#hairGrad)" />
      `;
    case "roseBun":
      return `
        <circle cx="200" cy="100" r="25" fill="url(#hairGrad)" />
        <circle cx="200" cy="98" r="11" fill="${topShades.hi}" />
      `;
    case "wavyRibbonTop":
      return `
        <path d="M200 124 C174 82, 140 92, 152 126 C164 114, 182 110, 200 124 Z" fill="url(#hairGrad)" />
        <path d="M200 124 C226 82, 260 92, 248 126 C236 114, 218 110, 200 124 Z" fill="url(#hairGrad)" />
      `;
    case "doubleSpiralTop":
      return `
        <path fill-rule="evenodd" d="M176 85 A21 21 0 1 0 176 127 A21 21 0 1 0 176 85 Z M176 95 A11 11 0 1 0 176 117 A11 11 0 1 0 176 95 Z" fill="url(#hairGrad)" />
        <path fill-rule="evenodd" d="M224 85 A21 21 0 1 0 224 127 A21 21 0 1 0 224 85 Z M224 95 A11 11 0 1 0 224 117 A11 11 0 1 0 224 95 Z" fill="url(#hairGrad)" />
      `;
    case "lotusBudTop":
      // 41. Бутон лотоса
      return `
        <ellipse cx="182" cy="108" rx="14" ry="22" transform="rotate(-22 182 108)" fill="url(#hairGrad)" />
        <ellipse cx="218" cy="108" rx="14" ry="22" transform="rotate(22 218 108)" fill="url(#hairGrad)" />
        <ellipse cx="200" cy="100" rx="14" ry="26" fill="url(#hairGrad)" />
      `;
    case "tripleOdangoTop":
      // 42. Три оданго в ряд
      return `
        <circle cx="148" cy="118" r="20" fill="url(#hairGrad)" />
        <circle cx="200" cy="102" r="22" fill="url(#hairGrad)" />
        <circle cx="252" cy="118" r="20" fill="url(#hairGrad)" />
      `;
    case "phoenixCrestTop":
      // 43. Гребень феникса
      return `
        <path d="M180 128 C176 94, 192 74, 200 68 C208 74, 224 94, 220 128 Z" fill="url(#hairGrad)" />
        <path d="M164 130 C156 104, 168 88, 178 84 C178 100, 182 114, 186 128 Z" fill="url(#hairGrad)" />
        <path d="M236 130 C244 104, 232 88, 222 84 C222 100, 218 114, 214 128 Z" fill="url(#hairGrad)" />
      `;
    case "ribbonBowBunTop":
      // 44. Бант из волос
      return `
        <path d="M200 108 C172 80, 146 88, 152 114 C156 132, 180 126, 200 112 Z" fill="url(#hairGrad)" />
        <path d="M200 108 C228 80, 254 88, 248 114 C244 132, 220 126, 200 112 Z" fill="url(#hairGrad)" />
        <circle cx="200" cy="110" r="11" fill="${topShades.hi}" />
      `;
    case "twinStarBunsTop":
      // 45. Звёздные пучки со скруглёнными лучами
      return `
        <circle cx="146" cy="118" r="22" fill="url(#hairGrad)" />
        <circle cx="254" cy="118" r="22" fill="url(#hairGrad)" />
        <circle cx="146" cy="118" r="8" fill="#F2C14E" />
        <circle cx="254" cy="118" r="8" fill="#F2C14E" />
      `;
    case "crescentAhogeTop":
      // 46. Лунный хохолок
      return `
        <path d="M196 132 C178 102, 198 72, 228 80 C210 88, 204 108, 210 130 Z" fill="url(#hairGrad)" />
      `;
    case "pagodaBunTop":
      // 47. Пагода-пучок
      return `
        <rect x="172" y="108" width="56" height="16" rx="8" fill="url(#hairGrad)" />
        <rect x="180" y="92" width="40" height="16" rx="8" fill="url(#hairGrad)" />
        <circle cx="200" cy="82" r="10" fill="url(#hairGrad)" />
      `;
    case "bunnyEarsHairTop":
      // 48. Заячьи ушки из волос
      return `
        <ellipse cx="176" cy="96" rx="13" ry="32" transform="rotate(-14 176 96)" fill="url(#hairGrad)" />
        <ellipse cx="224" cy="96" rx="13" ry="32" transform="rotate(14 224 96)" fill="url(#hairGrad)" />
      `;
    case "zenKnotTop":
      // 49. Дзен-узел со шпилькой
      return `
        <rect x="164" y="100" width="72" height="6" rx="3" fill="#F2C14E" />
        <circle cx="200" cy="102" r="22" fill="url(#hairGrad)" />
        <rect x="186" y="116" width="28" height="8" rx="4" fill="${topShades.deep}" />
      `;
    case "royalCrownBraidTop":
      // 50. Корона-коса
      return `
        <rect x="148" y="108" width="104" height="22" rx="11" fill="url(#hairGrad)" />
        <circle cx="164" cy="106" r="12" fill="url(#hairGrad)" />
        <circle cx="188" cy="102" r="13" fill="url(#hairGrad)" />
        <circle cx="212" cy="102" r="13" fill="url(#hairGrad)" />
        <circle cx="236" cy="106" r="12" fill="url(#hairGrad)" />
      `;
    default:
      return "";
  }
}

// 5А. Чистая геометрия корпуса без шеи (65 форм, каждая — единый монолитный векторный контур без обводки и без внутренних швов от шума)
function renderBodyOnlyGeometry(bodyId) {
  switch (bodyId) {
    case "dome":
      return `<path d="M106 400 C110 306, 146 270, 200 270 C254 270, 290 306, 294 400 Z" fill="url(#clothGrad)" />`;
    case "wide":
      return `<rect x="104" y="270" width="192" height="142" rx="68" fill="url(#clothGrad)" />`;
    case "trapezoid":
      return `<path d="M112 400 L148 274 Q152 268 160 268 L240 268 Q248 268 252 274 L288 400 Z" fill="url(#clothGrad)" />`;
    case "poncho":
      return `<path d="M78 400 L152 272 Q156 266 164 266 L236 266 Q244 266 248 272 L322 400 Z" fill="url(#clothGrad)" />`;
    case "shoulders":
      return `<path d="M96 292 C96 272, 120 268, 200 268 C280 268, 304 272, 304 292 L286 400 L114 400 Z" fill="url(#clothGrad)" />`;
    case "pufferBody":
      // 6. Три яруса-дутика единой цельной формой без внутренних линий
      return `<path d="M98 400 C84 388, 84 360, 100 350 C88 338, 90 314, 106 306 C96 292, 108 268, 142 268 L258 268 C292 268, 304 292, 294 306 C310 314, 312 338, 300 350 C316 360, 316 388, 302 400 Z" fill="url(#clothGrad)" />`;
    case "slim":
      return `<rect x="142" y="270" width="116" height="138" rx="48" fill="url(#clothGrad)" />`;
    case "bell":
      return `<path d="M148 268 L252 268 C266 330, 298 365, 308 400 L92 400 C102 365, 134 330, 148 268 Z" fill="url(#clothGrad)" />`;
    case "hexagonBody":
      return `<path d="M150 268 L250 268 Q256 268 260 274 L298 332 Q302 338 298 344 L274 400 L126 400 L102 344 Q98 338 102 332 L140 274 Q144 268 150 268 Z" fill="url(#clothGrad)" />`;
    case "cloudBody":
      // 10. Облачный торс единой формой без внутренних стыков
      return `<path d="M100 400 C80 384, 82 352, 106 342 C92 324, 100 294, 126 286 C138 272, 162 268, 200 268 C238 268, 262 272, 274 286 C300 294, 308 324, 294 342 C318 352, 320 384, 300 400 Z" fill="url(#clothGrad)" />`;
    case "armorBody":
      // 11. Наплечники-щиты: строго одна цельная форма без обводки
      return `<path d="M108 400 L124 324 L98 316 Q92 314 93 306 L97 274 Q98 268 106 268 L294 268 Q302 268 303 274 L307 306 Q308 314 302 316 L276 324 L292 400 Z" fill="url(#clothGrad)" />`;
    case "kimonoSleeve":
      return `<path d="M82 364 L136 268 L264 268 L318 364 Q320 370 314 374 L280 390 Q274 392 271 384 L262 344 L262 400 L138 400 L138 344 L129 384 Q126 392 120 390 L86 374 Q80 370 82 364 Z" fill="url(#clothGrad)" />`;
    case "dropBody":
      return `<path d="M200 266 C256 266, 296 328, 296 400 L104 400 C104 328, 144 266, 200 266 Z" fill="url(#clothGrad)" />`;
    case "squareBody":
      return `<rect x="114" y="270" width="172" height="130" rx="22" fill="url(#clothGrad)" />`;
    case "capeBody":
      return `<path d="M68 400 C88 296, 140 268, 200 268 C260 268, 312 296, 332 400 Z" fill="url(#clothGrad)" />`;
    case "cocoonBody":
      return `<path d="M126 400 C92 344, 114 268, 200 268 C286 268, 308 344, 274 400 Z" fill="url(#clothGrad)" />`;
    case "puffSleeves":
      // 17. Рукава-фонарики единым контуром без внутренних швов
      return `<path d="M122 400 L124 348 C90 348, 78 318, 90 292 C100 272, 134 268, 200 268 C266 268, 300 272, 310 292 C322 318, 310 348, 276 348 L278 400 Z" fill="url(#clothGrad)" />`;
    case "robeBody":
      return `<path d="M62 400 L130 272 Q134 268 140 268 L260 268 Q266 268 270 272 L338 400 Z" fill="url(#clothGrad)" />`;
    case "asymBody":
      return `<path d="M90 400 C98 302, 136 268, 204 268 C262 268, 314 324, 320 400 Z" fill="url(#clothGrad)" />`;
    case "cyberTorso":
      return `<path d="M102 400 L90 320 Q89 314 94 310 L140 268 L260 268 L306 310 Q311 314 310 320 L298 400 Z" fill="url(#clothGrad)" />`;
    case "oversizeTrap":
      return `<path d="M74 400 L122 272 Q200 262 278 272 L326 400 Z" fill="url(#clothGrad)" />`;
    case "tulipBody":
      return `<path d="M132 400 C96 356, 102 286, 154 270 L246 270 C298 286, 304 356, 268 400 Z" fill="url(#clothGrad)" />`;
    case "diamondBody":
      return `<path d="M132 400 L86 338 Q82 332 88 326 L150 268 L250 268 L312 326 Q318 332 314 338 L268 400 Z" fill="url(#clothGrad)" />`;
    case "royalMantle":
      // 24. Королевская накидка единым контуром
      return `<path d="M72 400 C78 320, 104 294, 128 286 C122 272, 136 264, 200 264 C264 264, 278 272, 272 286 C296 294, 322 320, 328 400 Z" fill="url(#clothGrad)" />`;
    case "roundPuffBody":
      return `<ellipse cx="200" cy="346" rx="108" ry="80" fill="url(#clothGrad)" />`;
    case "origamiCrane":
      // 26. Оригами-крылья
      return `<path d="M116 400 L122 346 L74 316 Q68 312 75 306 L140 268 L260 268 L325 306 Q332 312 326 316 L278 346 L284 400 Z" fill="url(#clothGrad)" />`;
    case "lotusPetalBody":
      // 27. Лепесток лотоса
      return `<path d="M116 400 C88 354, 92 296, 134 274 C156 266, 244 266, 266 274 C308 296, 312 354, 284 400 Z" fill="url(#clothGrad)" />`;
    case "hourglassSoft":
      // 28. Мягкие песочные часы
      return `<path d="M104 400 C108 364, 138 352, 138 332 C138 312, 108 298, 118 276 C126 266, 274 266, 282 276 C292 298, 262 312, 262 332 C262 352, 292 364, 296 400 Z" fill="url(#clothGrad)" />`;
    case "pagodaShoulders":
      // 29. Плечи-пагода с изгибом вверх
      return `<path d="M112 400 L122 318 C96 316, 76 300, 70 274 C108 276, 144 266, 200 266 C256 266, 292 276, 330 274 C324 300, 304 316, 278 318 L288 400 Z" fill="url(#clothGrad)" />`;
    case "eggPod":
      // 30. Капсула-яйцо
      return `<path d="M132 400 C112 350, 128 266, 200 266 C272 266, 288 350, 268 400 Z" fill="url(#clothGrad)" />`;
    case "highCollarCape":
      // 31. Плащ с высоким воротом
      return `<path d="M76 400 C90 326, 120 292, 150 282 L142 254 Q200 262 258 254 L250 282 C280 292, 310 326, 324 400 Z" fill="url(#clothGrad)" />`;
    case "samuraiShoulders":
      // 32. Крылья самурая Камисимо
      return `<path d="M126 400 L130 336 L74 286 Q68 280 78 278 L144 266 L256 266 L322 278 Q332 280 326 286 L270 336 L274 400 Z" fill="url(#clothGrad)" />`;
    case "balloonCoat":
      // 33. Пальто-баллон
      return `<path d="M112 400 C66 362, 78 268, 200 268 C322 268, 334 362, 288 400 Z" fill="url(#clothGrad)" />`;
    case "starTorso":
      // 34. Звёздный плечевой силуэт со скруглёнными вершинами
      return `<path d="M114 400 L122 346 L84 330 Q78 327 83 322 L114 294 L102 270 Q99 264 106 265 L200 270 L294 265 Q301 264 298 270 L286 294 L317 322 Q322 327 316 330 L278 346 L286 400 Z" fill="url(#clothGrad)" />`;
    case "waveShoulders":
      // 35. Волнистые плечи
      return `<path d="M88 400 C88 366, 114 352, 104 326 C94 300, 128 268, 200 268 C272 268, 306 300, 296 326 C286 352, 312 366, 312 400 Z" fill="url(#clothGrad)" />`;
    case "monkRobe":
      // 36. Дзен-ряса со свободными складками
      return `<path d="M74 400 C74 338, 108 270, 166 268 L234 268 C292 270, 326 338, 326 400 Z" fill="url(#clothGrad)" />`;
    case "heartTorso":
      // 37. Силуэт-сердце
      return `<path d="M138 400 C102 356, 86 312, 108 282 C126 262, 174 266, 200 282 C226 266, 274 262, 292 282 C314 312, 298 356, 262 400 Z" fill="url(#clothGrad)" />`;
    case "mechaShoulders":
      // 38. Меха-корпус с высокими пилонами и скруглёнными углами
      return `<path d="M114 400 L114 328 L90 321 Q84 319 85 313 L92 262 Q93 255 100 258 L136 270 L264 270 L300 258 Q307 255 308 262 L315 313 Q316 319 310 321 L286 328 L286 400 Z" fill="url(#clothGrad)" />`;
    case "peplumBody":
      // 39. Талия с пышной баской
      return `<path d="M90 400 C96 366, 134 358, 142 338 C126 314, 132 270, 200 270 C268 270, 274 314, 258 338 C266 358, 304 366, 310 400 Z" fill="url(#clothGrad)" />`;
    case "pyramidBody":
      // 40. Мягкая ступенчатая пирамида
      return `<path d="M72 400 L94 356 Q96 352 102 352 L114 352 L130 312 Q132 308 138 308 L146 308 L158 272 Q160 268 166 268 L234 268 Q240 268 242 272 L254 308 L262 308 Q268 308 270 312 L286 352 L298 352 Q304 352 306 356 L328 400 Z" fill="url(#clothGrad)" />`;
    case "batwingBody":
      // 41. Рукава «летучая мышь»
      return `<path d="M136 400 C132 364, 88 358, 66 322 C92 282, 138 268, 200 268 C262 268, 308 282, 334 322 C312 358, 268 364, 264 400 Z" fill="url(#clothGrad)" />`;
    case "cloakHoodBody":
      // 42. Дорожный плащ с округлым верхом
      return `<path d="M82 400 C86 318, 118 288, 146 278 C146 258, 254 258, 254 278 C282 288, 314 318, 318 400 Z" fill="url(#clothGrad)" />`;
    case "cushionBody":
      // 43. Мягкая подушка со скруглёнными ушками плеч
      return `<path d="M104 400 L108 318 C92 304, 96 272, 122 268 C148 266, 252 266, 278 268 C304 272, 308 304, 292 318 L296 400 Z" fill="url(#clothGrad)" />`;
    case "archwayBody":
      // 44. Высокая монолитная арка
      return `<path d="M112 400 L112 316 C112 268, 288 268, 288 316 L288 400 Z" fill="url(#clothGrad)" />`;
    case "emperorRobe":
      // 45. Императорский парадный силуэт
      return `<path d="M60 400 L82 302 Q86 292 96 286 L134 266 L266 266 L304 286 Q314 292 318 302 L340 400 Z" fill="url(#clothGrad)" />`;
    case "lanternBody":
      // 46. Бумажный фонарик (ребристый округлый силуэт)
      return `<path d="M114 400 C92 382, 92 356, 110 342 C88 326, 92 296, 118 284 C132 268, 268 268, 282 284 C308 296, 312 326, 290 342 C308 356, 308 382, 286 400 Z" fill="url(#clothGrad)" />`;
    case "featherCapeBody":
      // 47. Перьевая накидка со скруглёнными крыльями
      return `<path d="M74 400 L94 358 L82 348 Q77 344 82 338 L104 310 L95 299 Q91 294 97 290 C120 272, 154 266, 200 266 C246 266, 280 272, 303 290 Q309 294 305 299 L296 310 L318 338 Q323 344 318 348 L306 358 L326 400 Z" fill="url(#clothGrad)" />`;
    case "chibiBell":
      // 48. Мини-колокольчик
      return `<path d="M136 400 C128 348, 146 268, 200 268 C254 268, 272 348, 264 400 Z" fill="url(#clothGrad)" />`;
    case "crystalPrismBody":
      // 49. Призма кристалла со скруглёнными гранями
      return `<path d="M124 400 L98 352 Q95 346 98 340 L116 296 Q119 290 125 286 L152 269 Q157 266 164 266 L236 266 Q243 266 248 269 L275 286 Q281 290 284 296 L302 340 Q305 346 302 352 L276 400 Z" fill="url(#clothGrad)" />`;
    case "sumoCloudBody":
      // 50. Богатырский широкий торс
      return `<path d="M64 400 C56 326, 102 266, 200 266 C298 266, 344 326, 336 400 Z" fill="url(#clothGrad)" />`;
    case "origamiFanBody":
      // 51. Веер Оригами с широким раскрытием плеч
      return `<path d="M128 400 L68 308 Q62 298 74 290 L138 266 L262 266 L326 290 Q338 298 332 308 L272 400 Z" fill="url(#clothGrad)" />`;
    case "sailorCapeBody":
      // 52. Пелерина-матроска с мягкими фалдами
      return `<path d="M106 400 L114 350 C86 346, 78 318, 96 292 C116 268, 152 266, 200 266 C248 266, 284 268, 304 292 C322 318, 314 346, 286 350 L294 400 Z" fill="url(#clothGrad)" />`;
    case "cozyBlanketBody":
      // 53. Уютный плед-кокон
      return `<path d="M88 400 C72 338, 96 264, 200 264 C304 264, 328 338, 312 400 Z" fill="url(#clothGrad)" />`;
    case "cyberPauldrons":
      // 54. Нео-наплечники с дугами вверх
      return `<path d="M118 400 L122 332 L82 312 C78 282, 106 258, 146 268 L254 268 C294 258, 322 282, 318 312 L278 332 L282 400 Z" fill="url(#clothGrad)" />`;
    case "bambooShootBody":
      // 55. Росток бамбука со сглаженными уступами
      return `<path d="M126 400 L134 348 L127 345 Q122 343 125 338 L140 298 L135 295 Q130 293 135 288 L150 269 Q153 266 158 266 L242 266 Q247 266 250 269 L265 288 Q270 293 265 295 L260 298 L275 338 Q278 343 273 345 L266 348 L274 400 Z" fill="url(#clothGrad)" />`;
    case "velvetCorsetBody":
      // 56. Приталенный жилет с пышными плечами
      return `<path d="M112 400 C118 366, 144 354, 146 332 C148 310, 110 302, 114 278 C118 264, 282 264, 286 278 C290 302, 252 310, 254 332 C256 354, 282 366, 288 400 Z" fill="url(#clothGrad)" />`;
    case "cloudPonchoBody":
      // 57. Воздушное волнистое пончо
      return `<path d="M78 400 C72 374, 96 356, 90 334 C84 312, 108 292, 128 280 C148 266, 252 266, 272 280 C292 292, 316 312, 310 334 C304 356, 328 374, 322 400 Z" fill="url(#clothGrad)" />`;
    case "gothicArchBody":
      // 58. Стрельчатый плащ с высокими плечами
      return `<path d="M84 400 C92 332, 110 256, 146 266 L254 266 C290 256, 308 332, 316 400 Z" fill="url(#clothGrad)" />`;
    case "mochiStackBody":
      // 59. Двойной пышный моти
      return `<path d="M92 400 C74 368, 96 334, 124 328 C98 314, 108 266, 200 266 C292 266, 302 314, 276 328 C304 334, 326 368, 308 400 Z" fill="url(#clothGrad)" />`;
    case "astroPodBody":
      // 60. Астро-капсула с купольными плечами
      return `<path d="M104 400 L104 322 C104 276, 140 262, 200 262 C260 262, 296 276, 296 322 L296 400 Z" fill="url(#clothGrad)" />`;
    case "foxTailCoatBody":
      // 61. Лисий камзол с расходящимися фалдами
      return `<path d="M76 400 C96 362, 126 340, 126 312 C126 284, 144 266, 200 266 C256 266, 274 284, 274 312 C274 340, 304 362, 324 400 Z" fill="url(#clothGrad)" />`;
    case "zenStoneBody":
      // 62. Галька Дзен (асимметричный мягкий валун)
      return `<path d="M100 400 C88 334, 126 266, 192 266 C264 266, 312 324, 300 400 Z" fill="url(#clothGrad)" />`;
    case "wingedShouldersBody":
      // 63. Плечи-крылья ангела Аргона
      return `<path d="M118 400 L124 342 C92 336, 66 306, 64 270 C104 268, 146 268, 200 268 C254 268, 296 268, 336 270 C334 306, 308 336, 276 342 L282 400 Z" fill="url(#clothGrad)" />`;
    case "teaCupBody":
      // 64. Пиала чая (расширяющаяся вверх форма)
      return `<path d="M128 400 C116 352, 88 308, 92 274 C94 264, 306 264, 308 274 C312 308, 284 352, 272 400 Z" fill="url(#clothGrad)" />`;
    case "shogunMantleBody":
      // 65. Мантия Сёгуна со скруглёнными каскадными плечами
      return `<path d="M58 400 L88 338 L74 332 Q68 329 72 323 L105 270 Q108 266 114 266 L286 266 Q292 266 295 270 L328 323 Q332 329 326 332 L312 338 L342 400 Z" fill="url(#clothGrad)" />`;
    default:
      return `<path d="M106 400 C110 306, 146 270, 200 270 C254 270, 290 306, 294 400 Z" fill="url(#clothGrad)" />`;
  }
}

// Генерация силуэта тела с расширенным основанием шеи, исключающим любые просветы у ворота
function renderBodyShape(bodyId, skin) {
  const neck = `<path d="M180 240 L220 240 L232 288 L168 288 Z" fill="${skin.shadow}" />`;
  return `
    ${neck}
    ${renderBodyOnlyGeometry(bodyId)}
  `;
}

// 5Б. Генерация элементов одежды поверх силуэта тела (50 форм, без обводки и без прозрачностей, с мягкими углами, строго обрезаются по #bodyOnlyClip)
function renderClothDetail(detailId, skin, detailShades, pocketShades) {
  const accent = detailShades.base;
  const hi = detailShades.hi;
  const soft = detailShades.soft;
  const deep = detailShades.deep;
  const pocket = pocketShades ? pocketShades.base : hi;
  const pocketHi = pocketShades ? pocketShades.hi : "#FFFFFF";

  switch (detailId) {
    case "none":
      return "";
    case "kimonoWrap":
      // 2. Запах кимоно без просветов, обрезается строго по контуру тела (#bodyOnlyClip)
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M146 250 L254 250 L203 358 Q200 364 197 358 Z" fill="${pocketHi}" />
          <path d="M132 250 L168 250 L222 400 L196 400 Z" fill="url(#clothAccent)" />
          <path d="M268 250 L232 250 L178 400 L204 400 Z" fill="url(#clothAccent)" />
        </g>
      `;
    case "sailor":
      // 3. Матросский ворот без обводки и без прозрачностей
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M130 250 L270 250 L204 339 Q200 344 196 339 Z" fill="url(#clothAccent)" />
          <path d="M162 250 L238 250 L203 301 Q200 305 197 301 Z" fill="${skin.shadow}" />
          <path d="M142 250 L148 250 L200 320 L252 250 L258 250 L203 326 Q200 330 197 326 Z" fill="#FFFFFF" />
          <circle cx="200" cy="338" r="10" fill="url(#pocketGrad)" />
        </g>
      `;
    case "turtleneck":
      return `<rect x="168" y="246" width="64" height="42" rx="14" fill="url(#clothAccent)" />`;
    case "hoodieCords":
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <ellipse cx="200" cy="272" rx="56" ry="22" fill="url(#clothAccent)" />
          <rect x="182" y="282" width="6" height="50" rx="3" fill="url(#pocketGrad)" />
          <rect x="212" y="282" width="6" height="50" rx="3" fill="url(#pocketGrad)" />
        </g>
      `;
    case "overalls":
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="154" y="314" width="92" height="86" rx="12" fill="url(#clothAccent)" />
          <rect x="158" y="250" width="16" height="72" fill="url(#clothAccent)" />
          <rect x="226" y="250" width="16" height="72" fill="url(#clothAccent)" />
          <rect x="176" y="340" width="48" height="32" rx="8" fill="url(#pocketGrad)" />
          <circle cx="166" cy="322" r="5.5" fill="${pocketHi}" />
          <circle cx="234" cy="322" r="5.5" fill="${pocketHi}" />
        </g>
      `;
    case "tie":
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M164 250 L236 250 L203 349 Q200 354 197 349 Z" fill="#FFFFFF" />
          <path d="M193 264 L207 264 L211 340 Q211 343 209 346 L202 356 Q200 359 198 356 L191 346 Q189 343 189 340 Z" fill="url(#clothAccent)" />
        </g>
      `;
    case "scarf":
      return `
        <rect x="146" y="256" width="108" height="36" rx="18" fill="url(#clothAccent)" />
        <rect x="206" y="274" width="32" height="76" rx="14" fill="url(#clothAccent)" />
      `;
    case "sunCircle":
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <circle cx="200" cy="340" r="28" fill="url(#clothAccent)" />
          <circle cx="200" cy="340" r="14" fill="url(#pocketGrad)" />
        </g>
      `;
    case "vNeck":
      // 10. V-вырез кардигана со скруглённым уголком
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M150 250 L250 250 L203 341 Q200 346 197 341 Z" fill="${skin.shadow}" />
          <path d="M134 250 L166 250 L200 328 L234 250 L266 250 L204 355 Q200 360 196 355 Z" fill="url(#clothAccent)" />
          <circle cx="200" cy="368" r="5" fill="url(#pocketGrad)" />
          <circle cx="200" cy="386" r="5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "apron":
      // 11. Фартук с лямками через плечи без обводки
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="158" y="250" width="16" height="58" fill="url(#clothAccent)" />
          <rect x="226" y="250" width="16" height="58" fill="url(#clothAccent)" />
          <path d="M146 296 L254 296 L264 400 L136 400 Z" fill="url(#clothAccent)" />
          <circle cx="166" cy="308" r="5" fill="${pocketHi}" />
          <circle cx="234" cy="308" r="5" fill="${pocketHi}" />
          <rect x="170" y="332" width="60" height="38" rx="10" fill="url(#pocketGrad)" />
        </g>
      `;
    case "cyberCore":
      // 12. Светящееся Ядро Аргона БЕЗ обводки и без прозрачности
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M196 295 Q200 290 204 295 L229 330 Q233 334 229 338 L204 373 Q200 378 196 373 L171 338 Q167 334 171 330 Z" fill="${deep}" />
          <circle cx="200" cy="334" r="20" fill="${soft}" />
          <circle cx="200" cy="334" r="14" fill="${accent}" />
          <circle cx="200" cy="334" r="9" fill="${hi}" />
          <circle cx="200" cy="334" r="4.5" fill="#FFFFFF" />
        </g>
      `;
    case "Stripes":
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="60" y="304" width="280" height="12" rx="6" fill="url(#clothAccent)" />
          <rect x="60" y="334" width="280" height="12" rx="6" fill="url(#pocketGrad)" />
          <rect x="60" y="364" width="280" height="12" rx="6" fill="url(#clothAccent)" />
        </g>
      `;
    case "bowtie":
      // 14. Бабочка и манишка
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M164 250 L236 250 L228 354 C226 374, 174 374, 172 354 Z" fill="#FFFFFF" />
          <circle cx="200" cy="322" r="3.5" fill="${deep}" />
          <circle cx="200" cy="342" r="3.5" fill="${deep}" />
          <path d="M200 288 C188 270, 170 272, 172 288 C170 304, 188 306, 200 288 Z" fill="url(#clothAccent)" />
          <path d="M200 288 C212 270, 230 272, 228 288 C230 304, 212 306, 200 288 Z" fill="url(#clothAccent)" />
          <rect x="194" y="281" width="12" height="14" rx="5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "necklace":
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <circle cx="168" cy="284" r="7" fill="${accent}" />
          <circle cx="183" cy="293" r="8" fill="${accent}" />
          <circle cx="200" cy="296" r="9.5" fill="${pocket}" />
          <circle cx="217" cy="293" r="8" fill="${accent}" />
          <circle cx="232" cy="284" r="7" fill="${accent}" />
        </g>
      `;
    case "haoriCoat":
      // 16. Японское хаори с открытым центром и завязками
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="50" y="250" width="118" height="150" fill="url(#clothAccent)" />
          <rect x="232" y="250" width="118" height="150" fill="url(#clothAccent)" />
          <rect x="156" y="250" width="14" height="150" fill="${deep}" />
          <rect x="230" y="250" width="14" height="150" fill="${deep}" />
          <rect x="170" y="330" width="60" height="8" rx="4" fill="url(#pocketGrad)" />
          <circle cx="200" cy="334" r="8" fill="${pocketHi}" />
        </g>
      `;
    case "cableSweater":
      // 17. Вязаный свитер с фактурным воротом и мягкими ромбами без прозрачности
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <ellipse cx="200" cy="268" rx="48" ry="22" fill="url(#clothAccent)" />
          <rect x="186" y="282" width="28" height="118" rx="8" fill="url(#clothAccent)" />
          <rect x="191" y="301" width="18" height="18" rx="4" transform="rotate(45 200 310)" fill="url(#pocketGrad)" />
          <rect x="191" y="333" width="18" height="18" rx="4" transform="rotate(45 200 342)" fill="url(#pocketGrad)" />
          <rect x="191" y="365" width="18" height="18" rx="4" transform="rotate(45 200 374)" fill="url(#pocketGrad)" />
        </g>
      `;
    case "academyVest":
      // 18. Жилет академии с рубашкой и эмблемой со скруглёнными углами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M156 250 L244 250 L203 333 Q200 338 197 333 Z" fill="#FFFFFF" />
          <path d="M192 266 L208 266 L210 322 L202 334 Q200 337 198 334 L190 322 Z" fill="url(#pocketGrad)" />
          <path d="M136 250 L165 250 L200 332 L235 250 L264 250 L204 353 Q200 358 196 353 Z" fill="url(#clothAccent)" />
          <circle cx="232" cy="336" r="11" fill="url(#pocketGrad)" />
        </g>
      `;
    case "samuraiArmor":
      // 19. Доспех самурая со скруглёнными пластинами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M56 250 L344 250 L258 400 L142 400 Z" fill="url(#clothAccent)" />
          <path d="M156 250 L244 250 L204 290 Q200 294 196 290 Z" fill="${deep}" />
          <rect x="144" y="302" width="112" height="12" rx="6" fill="url(#pocketGrad)" />
          <rect x="150" y="330" width="100" height="12" rx="6" fill="url(#pocketGrad)" />
          <rect x="156" y="358" width="88" height="12" rx="6" fill="url(#pocketGrad)" />
        </g>
      `;
    case "folkPoncho":
      // 20. Узорное пончо со скруглёнными вершинами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M66 250 L334 250 L205 373 Q200 378 195 373 Z" fill="url(#clothAccent)" />
          <path d="M116 250 L284 250 L204 335 Q200 340 196 335 Z" fill="url(#pocketGrad)" />
          <path d="M158 250 L242 250 L204 297 Q200 302 196 297 Z" fill="${deep}" />
        </g>
      `;
    case "claspCloak":
      // 21. Плащ с фибулой со скруглённым ромбом
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M50 250 L350 250 L330 344 Q200 374 70 344 Z" fill="url(#clothAccent)" />
          <rect x="186" y="292" width="28" height="28" rx="6" transform="rotate(45 200 306)" fill="url(#pocketGrad)" />
          <circle cx="200" cy="306" r="6" fill="${pocketHi}" />
        </g>
      `;
    case "spaceSuit":
      // 22. Космо-скафандр с кольцом шлема и панелью без зазоров
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <ellipse cx="200" cy="268" rx="64" ry="24" fill="url(#clothAccent)" />
          <rect x="162" y="316" width="76" height="52" rx="14" fill="url(#clothAccent)" />
          <rect x="172" y="326" width="34" height="32" rx="6" fill="url(#pocketGrad)" />
          <circle cx="222" cy="334" r="6" fill="${pocket}" />
          <circle cx="222" cy="352" r="6" fill="#FFFFFF" />
        </g>
      `;
    case "suspenders":
      // 23. Подтяжки с бабочкой
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="156" y="250" width="14" height="150" fill="url(#clothAccent)" />
          <rect x="230" y="250" width="14" height="150" fill="url(#clothAccent)" />
          <circle cx="163" cy="336" r="5" fill="${pocketHi}" />
          <circle cx="237" cy="336" r="5" fill="${pocketHi}" />
          <path d="M200 288 C190 274, 176 276, 178 288 C176 300, 190 302, 200 288 Z" fill="url(#pocketGrad)" />
          <path d="M200 288 C210 274, 224 276, 222 288 C224 300, 210 302, 200 288 Z" fill="url(#pocketGrad)" />
          <circle cx="200" cy="288" r="6" fill="${accent}" />
        </g>
      `;
    case "bikerJacket":
      // 24. Косуха: без прозрачности, со скруглёнными лацканами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M200 250 L350 250 L350 400 L186 400 Z" fill="${deep}" />
          <path d="M140 250 L198 346 Q200 350 194 349 L136 337 Q131 336 132 331 Z" fill="url(#clothAccent)" />
          <path d="M260 250 L202 346 Q200 350 206 349 L264 337 Q269 336 268 331 Z" fill="url(#clothAccent)" />
          <circle cx="154" cy="318" r="4.5" fill="${pocketHi}" />
          <circle cx="246" cy="318" r="4.5" fill="${pocketHi}" />
        </g>
      `;
    case "varsityJacket":
      // 25. Бомбер с планкой на кнопках и шевроном
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <ellipse cx="200" cy="268" rx="48" ry="20" fill="url(#clothAccent)" />
          <rect x="190" y="274" width="20" height="126" fill="url(#clothAccent)" />
          <circle cx="200" cy="304" r="4.5" fill="#FFFFFF" />
          <circle cx="200" cy="334" r="4.5" fill="#FFFFFF" />
          <circle cx="200" cy="364" r="4.5" fill="#FFFFFF" />
          <rect x="224" y="320" width="28" height="28" rx="8" fill="url(#pocketGrad)" />
        </g>
      `;
    case "trenchCoat":
      // 26. Тренч-детектив с лацканами и двубортными пуговицами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M156 250 L244 250 L203 330 Q200 335 197 330 Z" fill="${deep}" />
          <path d="M134 250 L166 250 L200 334 L148 348 Q142 350 140 344 Z" fill="url(#clothAccent)" />
          <path d="M266 250 L234 250 L200 334 L252 348 Q258 350 260 344 Z" fill="url(#clothAccent)" />
          <circle cx="176" cy="356" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="224" cy="356" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="176" cy="382" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="224" cy="382" r="5.5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "royalJabot":
      // 27. Королевское жабо с брошью
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <ellipse cx="200" cy="272" rx="46" ry="18" fill="url(#clothAccent)" />
          <circle cx="200" cy="340" r="24" fill="#FFFFFF" />
          <circle cx="200" cy="316" r="26" fill="#FFFFFF" />
          <circle cx="200" cy="294" r="22" fill="#FFFFFF" />
          <rect x="190" y="280" width="20" height="20" rx="6" transform="rotate(45 200 290)" fill="url(#pocketGrad)" />
          <circle cx="200" cy="290" r="5" fill="${pocketHi}" />
        </g>
      `;
    case "qipaoCollar":
      // 28. Ворот ципао с узелками
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="164" y="250" width="72" height="32" rx="12" fill="url(#clothAccent)" />
          <path d="M200 278 C224 282, 244 304, 248 344 L236 344 C232 310, 216 292, 200 288 Z" fill="url(#clothAccent)" />
          <rect x="196" y="284" width="22" height="7" rx="3.5" fill="url(#pocketGrad)" />
          <rect x="218" y="306" width="22" height="7" rx="3.5" fill="url(#pocketGrad)" />
          <rect x="228" y="328" width="22" height="7" rx="3.5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "duffleCoat":
      // 29. Дафлкот с клевантами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="194" y="250" width="12" height="150" fill="url(#clothAccent)" />
          <rect x="172" y="302" width="56" height="8" rx="4" fill="url(#clothAccent)" />
          <rect x="172" y="336" width="56" height="8" rx="4" fill="url(#clothAccent)" />
          <rect x="172" y="370" width="56" height="8" rx="4" fill="url(#clothAccent)" />
          <rect x="166" y="298" width="12" height="16" rx="5" fill="url(#pocketGrad)" />
          <rect x="222" y="298" width="12" height="16" rx="5" fill="url(#pocketGrad)" />
          <rect x="166" y="332" width="12" height="16" rx="5" fill="url(#pocketGrad)" />
          <rect x="222" y="332" width="12" height="16" rx="5" fill="url(#pocketGrad)" />
          <rect x="166" y="366" width="12" height="16" rx="5" fill="url(#pocketGrad)" />
          <rect x="222" y="366" width="12" height="16" rx="5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "mageRunes":
      // 30. Мантия мага с рунами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M138 250 L174 250 L192 400 L152 400 Z" fill="url(#clothAccent)" />
          <path d="M262 250 L226 250 L208 400 L248 400 Z" fill="url(#clothAccent)" />
          <rect x="162" y="304" width="14" height="14" rx="3.5" transform="rotate(45 169 311)" fill="url(#pocketGrad)" />
          <rect x="224" y="304" width="14" height="14" rx="3.5" transform="rotate(45 231 311)" fill="url(#pocketGrad)" />
          <rect x="168" y="346" width="14" height="14" rx="3.5" transform="rotate(45 175 353)" fill="url(#pocketGrad)" />
          <rect x="218" y="346" width="14" height="14" rx="3.5" transform="rotate(45 225 353)" fill="url(#pocketGrad)" />
        </g>
      `;
    case "chevalierCross":
      // 31. Орденский крест шевалье
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M140 250 L260 250 L204 316 Q200 320 196 316 Z" fill="url(#clothAccent)" />
          <rect x="190" y="312" width="20" height="64" rx="6" fill="url(#pocketGrad)" />
          <rect x="168" y="334" width="64" height="20" rx="6" fill="url(#pocketGrad)" />
          <circle cx="200" cy="344" r="8" fill="#FFFFFF" />
        </g>
      `;
    case "shrineMaiden":
      // 32. Наряд жрицы Мико
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M146 250 L254 250 L200 342 Z" fill="#FFFFFF" />
          <path d="M128 250 L166 250 L214 360 L182 360 Z" fill="#FFFFFF" />
          <path d="M272 250 L234 250 L186 360 L218 360 Z" fill="#FFFFFF" />
          <rect x="60" y="346" width="280" height="54" fill="url(#clothAccent)" />
          <rect x="166" y="338" width="68" height="16" rx="8" fill="url(#pocketGrad)" />
        </g>
      `;
    case "cyberHarness":
      // 33. Кибер-разгрузка со скруглённым центром
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M124 250 L146 250 L266 400 L244 400 Z" fill="url(#clothAccent)" />
          <path d="M276 250 L254 250 L134 400 L156 400 Z" fill="url(#clothAccent)" />
          <rect x="176" y="312" width="48" height="36" rx="10" fill="${deep}" />
          <rect x="184" y="320" width="32" height="20" rx="6" fill="url(#pocketGrad)" />
        </g>
      `;
    case "pufferZip":
      // 34. Жилет-дутик на молнии
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="196" y="250" width="8" height="150" fill="${deep}" />
          <rect x="192" y="294" width="16" height="22" rx="6" fill="url(#pocketGrad)" />
          <rect x="90" y="308" width="220" height="8" rx="4" fill="url(#clothAccent)" />
          <rect x="90" y="352" width="220" height="8" rx="4" fill="url(#clothAccent)" />
        </g>
      `;
    case "peterPanCollar":
      // 35. Круглый воротничок Питер Пэн
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <ellipse cx="174" cy="278" rx="28" ry="18" transform="rotate(20 174 278)" fill="url(#clothAccent)" />
          <ellipse cx="226" cy="278" rx="28" ry="18" transform="rotate(-20 226 278)" fill="url(#clothAccent)" />
          <circle cx="200" cy="306" r="6" fill="url(#pocketGrad)" />
          <circle cx="200" cy="334" r="6" fill="url(#pocketGrad)" />
          <circle cx="200" cy="362" r="6" fill="url(#pocketGrad)" />
        </g>
      `;
    case "bandanaBib":
      // 36. Ковбойская бандана на шее со скруглённым уголком
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M134 254 L266 254 L205 358 Q200 366 195 358 Z" fill="url(#clothAccent)" />
          <path d="M154 264 L246 264 L204 336 Q200 342 196 336 Z" fill="url(#pocketGrad)" />
          <circle cx="200" cy="312" r="7" fill="#FFFFFF" />
        </g>
      `;
    case "corsetLace":
      // 37. Корсетная шнуровка
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M156 250 L174 250 L184 400 L146 400 Z" fill="url(#clothAccent)" />
          <path d="M244 250 L226 250 L216 400 L254 400 Z" fill="url(#clothAccent)" />
          <rect x="174" y="300" width="52" height="6" rx="3" transform="rotate(18 200 303)" fill="url(#pocketGrad)" />
          <rect x="174" y="300" width="52" height="6" rx="3" transform="rotate(-18 200 303)" fill="url(#pocketGrad)" />
          <rect x="174" y="334" width="52" height="6" rx="3" transform="rotate(18 200 337)" fill="url(#pocketGrad)" />
          <rect x="174" y="334" width="52" height="6" rx="3" transform="rotate(-18 200 337)" fill="url(#pocketGrad)" />
          <rect x="174" y="368" width="52" height="6" rx="3" transform="rotate(18 200 371)" fill="url(#pocketGrad)" />
          <rect x="174" y="368" width="52" height="6" rx="3" transform="rotate(-18 200 371)" fill="url(#pocketGrad)" />
        </g>
      `;
    case "monkSash":
      // 38. Диагональная перевязь кеса
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M118 250 L176 250 L296 400 L234 400 Z" fill="url(#clothAccent)" />
          <path d="M156 250 L176 250 L296 400 L276 400 Z" fill="url(#pocketGrad)" />
        </g>
      `;
    case "admiralEpaulets":
      // 39. Мундир адмирала с эполетами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="96" y="266" width="52" height="22" rx="11" fill="url(#pocketGrad)" />
          <rect x="252" y="266" width="52" height="22" rx="11" fill="url(#pocketGrad)" />
          <rect x="166" y="250" width="68" height="32" rx="10" fill="url(#clothAccent)" />
          <rect x="164" y="300" width="72" height="8" rx="4" fill="url(#pocketGrad)" />
          <rect x="168" y="328" width="64" height="8" rx="4" fill="url(#pocketGrad)" />
          <rect x="172" y="356" width="56" height="8" rx="4" fill="url(#pocketGrad)" />
        </g>
      `;
    case "cardiganButtons":
      // 40. Уютный кардиган с карманами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M168 250 L232 250 L203 316 Q200 320 197 316 Z" fill="#FFFFFF" />
          <rect x="194" y="310" width="12" height="90" fill="url(#clothAccent)" />
          <rect x="136" y="346" width="42" height="38" rx="10" fill="url(#pocketGrad)" />
          <rect x="222" y="346" width="42" height="38" rx="10" fill="url(#pocketGrad)" />
          <circle cx="200" cy="332" r="4.5" fill="${pocketHi}" />
          <circle cx="200" cy="356" r="4.5" fill="${pocketHi}" />
          <circle cx="200" cy="380" r="4.5" fill="${pocketHi}" />
        </g>
      `;
    case "ninjaMesh":
      // 41. Сетчатый ворот синоби
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M146 250 L254 250 L204 342 Q200 348 196 342 Z" fill="${deep}" />
          <path d="M126 250 L158 250 L212 372 L188 372 Z" fill="url(#clothAccent)" />
          <path d="M274 250 L242 250 L188 372 L212 372 Z" fill="url(#clothAccent)" />
          <circle cx="200" cy="292" r="5" fill="url(#pocketGrad)" />
          <circle cx="188" cy="308" r="5" fill="url(#pocketGrad)" />
          <circle cx="212" cy="308" r="5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "floralShawl":
      // 42. Шаль с фестонами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <circle cx="144" cy="312" r="34" fill="url(#clothAccent)" />
          <circle cx="256" cy="312" r="34" fill="url(#clothAccent)" />
          <circle cx="172" cy="328" r="36" fill="url(#clothAccent)" />
          <circle cx="228" cy="328" r="36" fill="url(#clothAccent)" />
          <circle cx="200" cy="336" r="38" fill="url(#clothAccent)" />
          <ellipse cx="200" cy="276" rx="76" ry="34" fill="url(#clothAccent)" />
          <circle cx="200" cy="312" r="12" fill="url(#pocketGrad)" />
        </g>
      `;
    case "pilotShearling":
      // 43. Куртка пилота с овчиной
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <circle cx="156" cy="278" r="24" fill="#FFFFFF" />
          <circle cx="244" cy="278" r="24" fill="#FFFFFF" />
          <circle cx="176" cy="302" r="22" fill="#FFFFFF" />
          <circle cx="224" cy="302" r="22" fill="#FFFFFF" />
          <circle cx="200" cy="318" r="22" fill="#FFFFFF" />
          <path d="M168 250 L232 250 L200 314 Z" fill="url(#clothAccent)" />
          <rect x="196" y="314" width="8" height="86" fill="url(#pocketGrad)" />
        </g>
      `;
    case "argyleVest":
      // 44. Жилет аргайл с ромбами со скруглёнными углами
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M162 250 L238 250 L203 310 Q200 315 197 310 Z" fill="#FFFFFF" />
          <rect x="184" y="324" width="32" height="32" rx="6" transform="rotate(45 200 340)" fill="url(#clothAccent)" />
          <rect x="148" y="346" width="28" height="28" rx="6" transform="rotate(45 162 360)" fill="url(#pocketGrad)" />
          <rect x="224" y="346" width="28" height="28" rx="6" transform="rotate(45 238 360)" fill="url(#pocketGrad)" />
          <rect x="184" y="368" width="32" height="32" rx="6" transform="rotate(45 200 384)" fill="url(#pocketGrad)" />
        </g>
      `;
    case "emperorMedallion":
      // 45. Императорский медальон на цепи
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path fill-rule="evenodd" d="M140 250 A60 72 0 0 0 260 250 L246 250 A46 58 0 0 1 154 250 Z" fill="url(#clothAccent)" />
          <circle cx="200" cy="334" r="24" fill="url(#pocketGrad)" />
          <circle cx="200" cy="334" r="14" fill="url(#clothAccent)" />
          <circle cx="200" cy="334" r="6" fill="#FFFFFF" />
        </g>
      `;
    case "chefDouble":
      // 46. Китель шеф-повара
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="166" y="250" width="68" height="28" rx="10" fill="url(#clothAccent)" />
          <rect x="162" y="274" width="76" height="126" rx="12" fill="#FFFFFF" />
          <circle cx="178" cy="302" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="222" cy="302" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="178" cy="332" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="222" cy="332" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="178" cy="362" r="5.5" fill="url(#pocketGrad)" />
          <circle cx="222" cy="362" r="5.5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "gothicChoker":
      // 47. Готический чокер и ожерелье
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <rect x="168" y="258" width="64" height="14" rx="7" fill="url(#clothAccent)" />
          <path d="M140 296 C160 326, 240 326, 260 296 L270 400 L130 400 Z" fill="url(#clothAccent)" />
          <rect x="190" y="280" width="20" height="20" rx="5" transform="rotate(45 200 290)" fill="url(#pocketGrad)" />
          <circle cx="200" cy="290" r="5" fill="#FFFFFF" />
        </g>
      `;
    case "ponchoFringe":
      // 48. Пончо с бахромой
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M80 250 L320 250 L206 356 Q200 362 194 356 Z" fill="url(#clothAccent)" />
          <rect x="144" y="330" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
          <rect x="162" y="344" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
          <rect x="180" y="356" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
          <rect x="196" y="364" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
          <rect x="212" y="356" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
          <rect x="230" y="344" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
          <rect x="248" y="330" width="10" height="28" rx="5" fill="url(#pocketGrad)" />
        </g>
      `;
    case "labCoat":
      // 49. Лабораторный халат с бейджем
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M164 250 L236 250 L203 338 Q200 342 197 338 Z" fill="url(#pocketGrad)" />
          <path d="M138 250 L170 250 L200 342 L152 354 Q146 355 144 348 Z" fill="url(#clothAccent)" />
          <path d="M262 250 L230 250 L200 342 L248 354 Q254 355 256 348 Z" fill="url(#clothAccent)" />
          <rect x="222" y="330" width="32" height="22" rx="5" fill="#FFFFFF" />
          <rect x="228" y="336" width="20" height="6" rx="3" fill="url(#pocketGrad)" />
        </g>
      `;
    case "festivalHappi":
      // 50. Фестивальное хаппи с кантом
      return `
        <g clip-path="url(#bodyOnlyClip)">
          <path d="M126 250 L166 250 L226 400 L186 400 Z" fill="url(#clothAccent)" />
          <path d="M274 250 L234 250 L174 400 L214 400 Z" fill="url(#clothAccent)" />
          <rect x="148" y="294" width="16" height="16" rx="4" fill="#FFFFFF" />
          <rect x="236" y="294" width="16" height="16" rx="4" fill="#FFFFFF" />
          <rect x="164" y="334" width="16" height="16" rx="4" fill="url(#pocketGrad)" />
          <rect x="220" y="334" width="16" height="16" rx="4" fill="url(#pocketGrad)" />
        </g>
      `;
    default:
      return "";
  }
}

// 6. Генерация очков и моноклей: без прозрачностей, с мягкими углами, без обводки для очков и кибер-сканера
function renderGlasses(glassesId) {
  const mono = state.colors.glasses || "#232126";
  const visorShades = buildShades(state.colors.visor || "#7EBCE6");
  switch (glassesId) {
    case "none":
      return "";
    case "roundSolid":
      return `
        <g fill="${mono}">
          <circle cx="172" cy="196" r="20" />
          <circle cx="228" cy="196" r="20" />
          <rect x="188" y="191" width="24" height="8" rx="4" />
        </g>
      `;
    case "visorSolid":
      // 3. Сплошной визор с настраиваемым градиентом url(#visorGrad) и плотным бликом без прозрачности
      return `
        <g>
          <rect x="142" y="180" width="116" height="30" rx="15" fill="url(#visorGrad)" />
          <rect x="154" y="184" width="92" height="3.5" rx="1.75" fill="${visorShades.hi}" />
        </g>
      `;
    case "squareSolid":
      return `
        <g fill="${mono}">
          <rect x="150" y="180" width="42" height="32" rx="9" />
          <rect x="208" y="180" width="42" height="32" rx="9" />
          <rect x="188" y="190" width="24" height="8" rx="4" />
        </g>
      `;
    case "catSolid":
      return `
        <g fill="${mono}">
          <path d="M150 183 Q145 182 147 187 L153 203 Q154 206 158 206 L183 209 Q187 210 188 206 L191 191 Q192 188 188 187 Z" />
          <path d="M250 183 Q255 182 253 187 L247 203 Q246 206 242 206 L217 209 Q213 210 212 206 L209 191 Q208 188 212 187 Z" />
          <rect x="188" y="190" width="24" height="8" rx="3" />
        </g>
      `;
    case "tinyOval":
      return `
        <g fill="${mono}">
          <ellipse cx="172" cy="198" rx="20" ry="10" />
          <ellipse cx="228" cy="198" rx="20" ry="10" />
          <rect x="188" y="194" width="24" height="7" rx="3.5" />
        </g>
      `;
    case "heartSolid":
      return `
        <g fill="${mono}">
          <path d="M170 212.5 Q172 214.5 174 212.5 L192 194 A11 11 0 0 0 172 182 A11 11 0 0 0 152 194 Z" />
          <path d="M226 212.5 Q228 214.5 230 212.5 L248 194 A11 11 0 0 0 228 182 A11 11 0 0 0 208 194 Z" />
          <rect x="188" y="191" width="24" height="8" rx="3" />
        </g>
      `;
    case "starSolid":
      return `
        <g fill="${mono}">
          <path d="M170.5 178 Q172 175 173.5 178 L178 188 L189 189.5 Q192.5 190 190 192.5 L182 200 L183.5 211 Q184 214.5 181 212.5 L172 207 L163 212.5 Q160 214.5 160.5 211 L162 200 L154 192.5 Q151.5 190 155 189.5 L166 188 Z" />
          <path d="M226.5 178 Q228 175 229.5 178 L234 188 L245 189.5 Q248.5 190 246 192.5 L238 200 L239.5 211 Q240 214.5 237 212.5 L228 207 L219 212.5 Q216 214.5 216.5 211 L218 200 L210 192.5 Q207.5 190 211 189.5 L222 188 Z" />
          <rect x="186" y="191" width="28" height="8" rx="3" />
        </g>
      `;
    case "diamondSolid":
      return `
        <g fill="${mono}">
          <rect x="157" y="181" width="30" height="30" rx="6" transform="rotate(45 172 196)" />
          <rect x="213" y="181" width="30" height="30" rx="6" transform="rotate(45 228 196)" />
          <rect x="188" y="192" width="24" height="8" rx="3" />
        </g>
      `;
    case "semiRound":
      return `
        <g fill="${mono}">
          <path d="M150 188 L194 188 A22 22 0 0 1 150 188 Z" />
          <path d="M206 188 L250 188 A22 22 0 0 1 206 188 Z" />
          <rect x="148" y="185" width="104" height="8" rx="4" />
        </g>
      `;
    case "gogglesUp":
      return `
        <g fill="${mono}">
          <rect x="142" y="148" width="116" height="14" rx="7" />
          <circle cx="174" cy="155" r="18" />
          <circle cx="226" cy="155" r="18" />
        </g>
      `;
    case "pixelSolid":
      return `
        <g fill="${mono}">
          <rect x="148" y="184" width="44" height="12" rx="3" />
          <rect x="208" y="184" width="44" height="12" rx="3" />
          <rect x="190" y="184" width="20" height="8" rx="2.5" />
          <rect x="154" y="194" width="32" height="16" rx="3" />
          <rect x="214" y="194" width="32" height="16" rx="3" />
        </g>
      `;
    case "monoPatch":
      // 13. Повязка на один глаз: ремешок идёт по диагонали от лба к виску
      return `
        <g fill="${mono}">
          <path d="M180 132 L262 206 L256 213 L173 139 Z" />
          <circle cx="226" cy="196" r="21" />
        </g>
      `;
    case "hexagonSolid":
      return `
        <g fill="${mono}">
          <path d="M162 181 L182 181 Q185 181 187 184 L192 193 Q194 196 192 199 L187 208 Q185 211 182 211 L162 211 Q159 211 157 208 L152 199 Q150 196 152 193 L157 184 Q159 181 162 181 Z" />
          <path d="M218 181 L238 181 Q241 181 243 184 L248 193 Q250 196 248 199 L243 208 Q241 211 238 211 L218 211 Q215 211 213 208 L208 199 Q206 196 208 193 L213 184 Q215 181 218 181 Z" />
          <rect x="188" y="192" width="24" height="8" rx="3" />
        </g>
      `;
    case "butterfly":
      return `
        <g fill="${mono}">
          <path d="M148 177 Q143 176 144 181 L147 210 Q148 214 152 213 L191 205 Q195 204 195 200 L195 193 Q195 190 191 189 Z" />
          <path d="M252 177 Q257 176 256 181 L253 210 Q252 214 248 213 L209 205 Q205 204 205 200 L205 193 Q205 190 209 189 Z" />
          <rect x="190" y="191" width="20" height="10" rx="4" />
        </g>
      `;
    case "monocleRight":
      // 16. Монокль правый с цепочкой (без полупрозрачной заливки)
      return `
        <g fill="${mono}">
          <path fill-rule="evenodd" d="M226 176 A20 20 0 1 0 226 216 A20 20 0 1 0 226 176 Z M226 181 A15 15 0 1 0 226 211 A15 15 0 1 0 226 181 Z" />
          <circle cx="244" cy="204" r="2.2" />
          <circle cx="245" cy="214" r="2.2" />
          <circle cx="244" cy="224" r="2.2" />
          <circle cx="241" cy="234" r="2.2" />
          <circle cx="237" cy="244" r="2.2" />
        </g>
      `;
    case "monocleLeft":
      // 17. Монокль левый с цепочкой (без полупрозрачной заливки)
      return `
        <g fill="${mono}">
          <path fill-rule="evenodd" d="M174 176 A20 20 0 1 0 174 216 A20 20 0 1 0 174 176 Z M174 181 A15 15 0 1 0 174 211 A15 15 0 1 0 174 181 Z" />
          <circle cx="156" cy="204" r="2.2" />
          <circle cx="155" cy="214" r="2.2" />
          <circle cx="156" cy="224" r="2.2" />
          <circle cx="159" cy="234" r="2.2" />
          <circle cx="163" cy="244" r="2.2" />
        </g>
      `;
    case "monocleSquare":
      // 18. Монокль гранёный с подвеской (без полупрозрачности)
      return `
        <g fill="${mono}">
          <path fill-rule="evenodd" d="M214 176 L238 176 Q246 176 246 184 L246 208 Q246 216 238 216 L214 216 Q206 216 206 208 L206 184 Q206 176 214 176 Z M216 181 L236 181 Q241 181 241 186 L241 206 Q241 211 236 211 L216 211 Q211 211 211 206 L211 186 Q211 181 216 181 Z" />
          <rect x="242.5" y="208" width="3" height="36" rx="1.5" />
          <circle cx="244" cy="248" r="4" />
        </g>
      `;
    case "cyberMonocle":
      // 19. Кибер-монокль (сканер): чистый кружок без обводки и без прозрачности
      return `
        <g>
          <rect x="204" y="182" width="48" height="28" rx="9" fill="${mono}" />
          <rect x="246" y="188" width="12" height="16" rx="5" fill="${mono}" />
          <circle cx="226" cy="196" r="7" fill="#7EBCE6" />
        </g>
      `;
    default:
      return "";
  }
}

// 6Б. Генерация категории «Рога» (15 форм без обводки и без прозрачностей, со скруглёнными кончиками)
function renderHorns(hornsId, hornsShades) {
  const hi = hornsShades.hi;
  const shadow = hornsShades.deep;
  switch (hornsId) {
    case "none":
      return "";
    case "impMini":
      // 2. Чертенята мини
      return `
        <path d="M152 136 C150 112, 160 94, 172 90 C172 108, 176 124, 182 136 Z" fill="url(#hornsGrad)" />
        <path d="M248 136 C250 112, 240 94, 228 90 C228 108, 224 124, 218 136 Z" fill="url(#hornsGrad)" />
      `;
    case "curvedDemon":
      // 3. Изогнутые демонические
      return `
        <path d="M144 140 C122 110, 128 74, 158 64 C146 84, 152 112, 176 132 Z" fill="url(#hornsGrad)" />
        <path d="M256 140 C278 110, 272 74, 242 64 C254 84, 248 112, 224 132 Z" fill="url(#hornsGrad)" />
      `;
    case "ramSpiral":
      // 4. Витые бараньи рога по бокам головы
      return `
        <path d="M142 138 C104 114, 92 152, 114 176 C132 192, 154 178, 146 160 C138 148, 124 156, 128 166 C116 162, 116 136, 148 148 Z" fill="url(#hornsGrad)" />
        <path d="M258 138 C296 114, 308 152, 286 176 C268 192, 246 178, 254 160 C262 148, 276 156, 272 166 C284 162, 284 136, 252 148 Z" fill="url(#hornsGrad)" />
      `;
    case "deerAntlers":
      // 5. Оленьи ветвистые рога
      return `
        <g fill="url(#hornsGrad)">
          <path d="M154 136 C136 106, 126 78, 130 56 C136 56, 138 76, 148 94 C152 78, 160 66, 166 66 C168 72, 160 88, 154 102 C164 94, 174 88, 178 92 C176 100, 166 110, 164 134 Z" />
          <path d="M246 136 C264 106, 274 78, 270 56 C264 56, 262 76, 252 94 C248 78, 240 66, 234 66 C232 72, 240 88, 246 102 C236 94, 226 88, 222 92 C224 100, 234 110, 236 134 Z" />
        </g>
      `;
    case "dragonHorns":
      // 6. Драконьи гребни назад со скруглёнными вершинами
      return `
        <path d="M148 138 L115 73 Q111 66 118 71 L146 92 L138 64 Q136 56 142 63 L178 128 Z" fill="url(#hornsGrad)" />
        <path d="M252 138 L285 73 Q289 66 282 71 L254 92 L262 64 Q264 56 258 63 L222 128 Z" fill="url(#hornsGrad)" />
      `;
    case "unicorn":
      // 7. Рог единорога во лбу со скруглённым кончиком и без прозрачности
      return `
        <path d="M188 136 L198 60 Q200 52 202 60 L212 136 Z" fill="url(#hornsGrad)" />
        <path d="M191 120 L209 112 L207 102 L193 110 Z" fill="${hi}" />
        <path d="M195 94 L205 88 L203 78 L197 84 Z" fill="${hi}" />
      `;
    case "oniDouble":
      // 8. Двойные рога Они со скруглёнными вершинами
      return `
        <g fill="url(#hornsGrad)">
          <path d="M142 140 L129 93 Q127 86 133 92 L162 132 Z" />
          <path d="M166 132 L162 97 Q161 90 166 96 L184 128 Z" />
          <path d="M258 140 L271 93 Q273 86 267 92 L238 132 Z" />
          <path d="M234 132 L238 97 Q239 90 234 96 L216 128 Z" />
        </g>
      `;
    case "bullWide":
      // 9. Бычьи широкие в стороны
      return `
        <path d="M142 146 C104 144, 86 118, 96 86 C106 108, 122 122, 152 128 Z" fill="url(#hornsGrad)" />
        <path d="M258 146 C296 144, 314 118, 304 86 C294 108, 278 122, 248 128 Z" fill="url(#hornsGrad)" />
      `;
    case "gazelleTall":
      // 10. Высокие серны
      return `
        <path d="M158 134 C150 96, 154 68, 166 50 C172 72, 172 100, 178 132 Z" fill="url(#hornsGrad)" />
        <path d="M242 134 C250 96, 246 68, 234 50 C228 72, 228 100, 222 132 Z" fill="url(#hornsGrad)" />
      `;
    case "crystalHorns":
      // 11. Кристаллические гранёные рога без прозрачности и со сглаженными углами
      return `
        <path d="M148 138 L135 99 Q133 95 136 91 L149 73 Q152 69 155 73 L168 94 L176 132 Z" fill="url(#hornsGrad)" />
        <path d="M152 71 L168 94 L160 132 L148 138 Z" fill="${hi}" />
        <path d="M252 138 L265 99 Q267 95 264 91 L251 73 Q248 69 245 73 L232 94 L224 132 Z" fill="url(#hornsGrad)" />
        <path d="M248 71 L232 94 L240 132 L252 138 Z" fill="${hi}" />
      `;
    case "cyberAntenna":
      // 12. Кибер-рожки со светящимися кончиками
      return `
        <path d="M146 138 L132 76 L144 74 L168 132 Z" fill="${shadow}" />
        <path d="M254 138 L268 76 L256 74 L232 132 Z" fill="${shadow}" />
        <circle cx="138" cy="75" r="7" fill="${hi}" />
        <circle cx="262" cy="75" r="7" fill="${hi}" />
      `;
    case "crownHorns":
      // 13. Корона из 4 рогов со скруглёнными вершинами
      return `
        <g fill="url(#hornsGrad)">
          <path d="M138 142 L124 98 Q121 92 127 97 L156 132 Z" />
          <path d="M164 130 L160 80 Q159 74 164 80 L186 126 Z" />
          <path d="M236 130 L240 80 Q241 74 236 80 L214 126 Z" />
          <path d="M262 142 L276 98 Q279 92 273 97 L244 132 Z" />
        </g>
      `;
    case "brokenBattle":
      // 14. Боевой обломанный рог + целый рог
      return `
        <path d="M144 140 C128 118, 128 102, 134 94 L156 102 C154 112, 162 122, 174 132 Z" fill="url(#hornsGrad)" />
        <path d="M256 140 C278 110, 272 74, 242 64 C254 84, 248 112, 224 132 Z" fill="url(#hornsGrad)" />
      `;
    case "coralSpirit":
      // 15. Дух леса (плавные коралловые рожки)
      return `
        <g fill="url(#hornsGrad)">
          <path d="M150 136 C132 112, 128 82, 142 68 C150 68, 148 88, 154 98 C162 86, 172 78, 178 84 C182 92, 168 110, 168 132 Z" />
          <path d="M250 136 C268 112, 272 82, 258 68 C250 68, 252 88, 246 98 C238 86, 228 78, 222 84 C218 92, 232 110, 232 132 Z" />
        </g>
      `;
    default:
      return "";
  }
}

// Полуширина лица на уровне ушей/щёк для адаптивной посадки наушников
function getFaceHalfWidth(faceId) {
  if (["baobao", "hamster", "totoroCheeks"].includes(faceId)) return 58;
  if (["sphere", "daruma", "dumpling"].includes(faceId)) return 55;
  if (["onigiri", "cloudFace", "marshmallow", "daifuku", "pudding", "chubbyPear"].includes(faceId)) return 52;
  return 50;
}

// 7. Генерация головных уборов (50 форм без обводки и без прозрачностей, наушники адаптируются к ширине лица)
function renderHat(hatId, hatShades) {
  const base = hatShades.base;
  const shadow = hatShades.deep;
  const soft = hatShades.soft;
  const hi = hatShades.hi;
  const hw = getFaceHalfWidth(state.face);
  const lx = 200 - hw;
  const rx = 200 + hw;

  switch (hatId) {
    case "none":
      return "";
    case "beret":
      return `
        <ellipse cx="204" cy="118" rx="64" ry="24" transform="rotate(-8 204 118)" fill="url(#hatGrad)" />
        <rect x="198" y="88" width="8" height="14" rx="4" fill="${shadow}" />
      `;
    case "beanie":
      return `
        <path d="M146 142 C146 92, 254 92, 254 142 Z" fill="url(#hatGrad)" />
        <rect x="142" y="132" width="116" height="18" rx="9" fill="${shadow}" />
      `;
    case "halo":
      // 4. Светящийся нимб (кольцо через evenodd без прозрачности и без stroke)
      return `
        <path d="M200 68 A56 14 0 1 0 200 96 A56 14 0 1 0 200 68 Z M200 74 A46 8 0 1 1 200 90 A46 8 0 1 1 200 74 Z" fill="url(#hatGrad)" fill-rule="evenodd" />
      `;
    case "straw":
      // 5. Большая соломенная шляпа без прозрачности
      return `
        <ellipse cx="200" cy="134" rx="132" ry="23" fill="${hi}" />
        <ellipse cx="200" cy="136" rx="120" ry="16" fill="${soft}" />
        <path d="M130 132 C130 72, 270 72, 270 132 Z" fill="url(#hatGrad)" />
        <rect x="130" y="116" width="140" height="16" rx="8" fill="${shadow}" />
      `;
    case "catEars":
      // 6. Неко-ушки со скруглёнными кончиками
      return `
        <path d="M136 148 C130 116, 138 92, 154 88 L186 130 Z" fill="url(#hatGrad)" />
        <path d="M145 140 C141 118, 146 102, 155 99 L176 128 Z" fill="${hi}" />
        <path d="M264 148 C270 116, 262 92, 246 88 L214 130 Z" fill="url(#hatGrad)" />
        <path d="M255 140 C259 118, 254 102, 245 99 L224 128 Z" fill="${hi}" />
      `;
    case "visorCap":
      // 7. Кепка с козырьком
      return `
        <path d="M140 138 C140 88, 260 88, 260 138 Z" fill="url(#hatGrad)" />
        <path d="M134 132 C164 126, 244 126, 286 142 C254 150, 162 146, 134 138 Z" fill="${shadow}" />
      `;
    case "crown":
      // 8. Мини-корона со сглаженными зубцами
      return `
        <path d="M164 128 L164 92 Q164 86 169 91 L188 110 L197 86 Q200 80 203 86 L212 110 L231 91 Q236 86 236 92 L236 128 Z" fill="url(#hatGrad)" />
      `;
    case "sprout":
      return `
        <rect x="197" y="92" width="6" height="34" rx="3" fill="${shadow}" />
        <ellipse cx="185" cy="92" rx="15" ry="9" transform="rotate(-20 185 92)" fill="url(#hatGrad)" />
        <ellipse cx="215" cy="92" rx="15" ry="9" transform="rotate(20 215 92)" fill="url(#hatGrad)" />
      `;
    case "bucket":
      // 10. Панама
      return `
        <path d="M146 130 C148 88, 252 88, 254 130 Z" fill="url(#hatGrad)" />
        <rect x="144" y="120" width="112" height="10" rx="5" fill="${shadow}" />
        <path d="M112 148 C126 124, 164 124, 200 124 C236 124, 274 124, 288 148 C258 158, 142 158, 112 148 Z" fill="url(#hatGrad)" />
      `;
    case "headband":
      // 11. Повязка ниндзя
      return `
        <rect x="138" y="130" width="124" height="32" rx="8" fill="${shadow}" />
        <rect x="172" y="135" width="56" height="22" rx="5" fill="#EFECE6" />
        <circle cx="200" cy="146" r="4.5" fill="${base}" />
      `;
    case "headphones":
      // 12. Наушники S (адаптивные к ширине лица)
      return `
        <rect x="${lx - 20}" y="168" width="28" height="54" rx="14" fill="url(#hatGrad)" />
        <rect x="${rx - 8}" y="168" width="28" height="54" rx="14" fill="url(#hatGrad)" />
        <rect x="${lx - 14}" y="178" width="10" height="34" rx="5" fill="${hi}" />
        <rect x="${rx + 4}" y="178" width="10" height="34" rx="5" fill="${hi}" />
      `;
    case "headphonesBig":
      // 16. Наушники M (адаптивные к ширине лица)
      return `
        <path d="M${lx - 12} 182 C${lx - 12} 96, ${rx + 12} 96, ${rx + 12} 182 L${rx + 3} 182 C${rx + 3} 106, ${lx - 3} 106, ${lx - 3} 182 Z" fill="${shadow}" />
        <rect x="${lx - 26}" y="164" width="34" height="62" rx="17" fill="url(#hatGrad)" />
        <rect x="${rx - 8}" y="164" width="34" height="62" rx="17" fill="url(#hatGrad)" />
        <rect x="${lx - 18}" y="174" width="12" height="42" rx="6" fill="${hi}" />
        <rect x="${rx + 6}" y="174" width="12" height="42" rx="6" fill="${hi}" />
      `;
    case "headphonesMax":
      // 17. Наушники L (крупные студийные мониторы, адаптивные к ширине лица)
      return `
        <path d="M${lx - 16} 184 C${lx - 16} 90, ${rx + 16} 90, ${rx + 16} 184 L${rx + 5} 184 C${rx + 5} 102, ${lx - 5} 102, ${lx - 5} 184 Z" fill="${shadow}" />
        <rect x="${lx - 34}" y="158" width="42" height="72" rx="21" fill="url(#hatGrad)" />
        <rect x="${rx - 8}" y="158" width="42" height="72" rx="21" fill="url(#hatGrad)" />
        <circle cx="${lx - 13}" cy="194" r="11" fill="${hi}" />
        <circle cx="${rx + 13}" cy="194" r="11" fill="${hi}" />
      `;
    case "headphonesFluffy":
      // 18. Пушистые наушники (пышные меховые амбушюры + мягкое оголовье, адаптивные к ширине лица)
      return `
        <path d="M${lx - 14} 178 C${lx - 14} 90, ${rx + 14} 90, ${rx + 14} 178 L${rx + 4} 178 C${rx + 4} 104, ${lx - 4} 104, ${lx - 4} 178 Z" fill="${shadow}" />
        <g fill="${soft}">
          <circle cx="170" cy="116" r="9" />
          <circle cx="185" cy="112" r="10" />
          <circle cx="200" cy="110" r="11" />
          <circle cx="215" cy="112" r="10" />
          <circle cx="230" cy="116" r="9" />
        </g>
        <g fill="url(#hatGrad)">
          <circle cx="${lx - 12}" cy="172" r="17" />
          <circle cx="${lx - 24}" cy="186" r="18" />
          <circle cx="${lx - 24}" cy="204" r="18" />
          <circle cx="${lx - 10}" cy="216" r="17" />
          <circle cx="${lx + 2}" cy="202" r="16" />
          <circle cx="${lx + 2}" cy="184" r="16" />
          <circle cx="${lx - 11}" cy="194" r="20" />
          <circle cx="${rx + 12}" cy="172" r="17" />
          <circle cx="${rx + 24}" cy="186" r="18" />
          <circle cx="${rx + 24}" cy="204" r="18" />
          <circle cx="${rx + 10}" cy="216" r="17" />
          <circle cx="${rx - 2}" cy="202" r="16" />
          <circle cx="${rx - 2}" cy="184" r="16" />
          <circle cx="${rx + 11}" cy="194" r="20" />
        </g>
        <g fill="${hi}">
          <circle cx="${lx - 13}" cy="188" r="10" />
          <circle cx="${lx - 9}" cy="200" r="9" />
          <circle cx="${rx + 13}" cy="188" r="10" />
          <circle cx="${rx + 9}" cy="200" r="9" />
        </g>
      `;
    case "bow":
      // 13. Круглый пышный бант без прозрачностей
      return `
        <path d="M200 114 C182 82, 142 84, 144 114 C142 144, 182 146, 200 114 Z" fill="url(#hatGrad)" />
        <path d="M200 114 C218 82, 258 84, 256 114 C258 144, 218 146, 200 114 Z" fill="url(#hatGrad)" />
        <ellipse cx="168" cy="114" rx="10" ry="6" fill="${shadow}" />
        <ellipse cx="232" cy="114" rx="10" ry="6" fill="${shadow}" />
        <circle cx="200" cy="114" r="14" fill="${hi}" />
      `;
    case "bamboo":
      // 14. Конус странника стандартный со скруглёнными краями
      return `<path d="M104 140 Q96 140 103 135 L195 82 Q200 79 205 82 L297 135 Q304 140 296 140 Z" fill="url(#hatGrad)" />`;
    case "bambooXL":
      // 19. Конус странника XL со скруглёнными краями и без прозрачности
      return `
        <path d="M84 144 Q76 144 83 139 L195 74 Q200 71 205 74 L317 139 Q324 144 316 144 Z" fill="url(#hatGrad)" />
        <path d="M120 144 L196 94 Q200 91 204 94 L280 144 Z" fill="${soft}" />
      `;
    case "lotusHat":
      // 15. Цветок лотоса без прозрачности
      return `
        <ellipse cx="200" cy="120" rx="46" ry="12" fill="${shadow}" />
        <path d="M168 120 C158 92, 182 84, 200 116 Z" fill="url(#hatGrad)" />
        <path d="M232 120 C242 92, 218 84, 200 116 Z" fill="url(#hatGrad)" />
        <path d="M200 122 C182 82, 200 72, 200 72 C200 72, 218 82, 200 122 Z" fill="${hi}" />
      `;
    case "witchHat":
      // 20. Шляпа ведьмы
      return `
        <ellipse cx="200" cy="130" rx="108" ry="18" fill="url(#hatGrad)" />
        <path d="M148 128 C158 84, 178 52, 224 44 C232 43, 232 50, 224 54 C204 66, 224 94, 252 128 Z" fill="url(#hatGrad)" />
        <rect x="148" y="114" width="104" height="12" rx="6" fill="${shadow}" />
        <rect x="190" y="111" width="20" height="18" rx="5" fill="#F2C14E" />
      `;
    case "wizardStarsHat":
      // 21. Колпак звездочёта
      return `
        <ellipse cx="200" cy="132" rx="92" ry="16" fill="${shadow}" />
        <path d="M146 130 L195 44 Q200 36 205 44 L254 130 Z" fill="url(#hatGrad)" />
        <circle cx="192" cy="84" r="6" fill="#F2C14E" />
        <circle cx="212" cy="106" r="8" fill="#F2C14E" />
        <circle cx="180" cy="112" r="4.5" fill="#FFFFFF" />
      `;
    case "topHat":
      // 22. Джентльменский цилиндр
      return `
        <rect x="150" y="54" width="100" height="76" rx="12" fill="url(#hatGrad)" />
        <rect x="150" y="110" width="100" height="14" fill="${shadow}" />
        <rect x="122" y="122" width="156" height="14" rx="7" fill="url(#hatGrad)" />
      `;
    case "bowlerHat":
      // 23. Английский котелок
      return `
        <path d="M144 126 C144 68, 256 68, 256 126 Z" fill="url(#hatGrad)" />
        <rect x="144" y="114" width="112" height="10" rx="5" fill="${shadow}" />
        <rect x="122" y="122" width="156" height="14" rx="7" fill="url(#hatGrad)" />
      `;
    case "chefToque":
      // 24. Колпак шеф-повара
      return `
        <circle cx="168" cy="82" r="24" fill="url(#hatGrad)" />
        <circle cx="232" cy="82" r="24" fill="url(#hatGrad)" />
        <circle cx="200" cy="72" r="28" fill="${hi}" />
        <rect x="152" y="92" width="96" height="42" rx="10" fill="url(#hatGrad)" />
        <rect x="152" y="120" width="96" height="14" rx="6" fill="${shadow}" />
      `;
    case "sailorCap":
      // 25. Бескозырка моряка
      return `
        <ellipse cx="200" cy="104" rx="64" ry="22" fill="${hi}" />
        <rect x="148" y="110" width="104" height="22" rx="8" fill="${shadow}" />
        <circle cx="200" cy="96" r="8" fill="url(#hatGrad)" />
      `;
    case "captainCap":
      // 26. Фуражка капитана
      return `
        <ellipse cx="200" cy="98" rx="68" ry="24" fill="url(#hatGrad)" />
        <rect x="144" y="110" width="112" height="18" rx="6" fill="${shadow}" />
        <path d="M140 124 Q200 144 260 124 Z" fill="#232126" />
        <circle cx="200" cy="108" r="9" fill="#F2C14E" />
      `;
    case "vikingHelmet":
      // 27. Шлем викинга
      return `
        <path d="M138 134 C110 122, 102 88, 120 74 C124 94, 134 110, 152 116 Z" fill="#EFECE6" />
        <path d="M262 134 C290 122, 298 88, 280 74 C276 94, 266 110, 248 116 Z" fill="#EFECE6" />
        <path d="M142 136 C142 80, 258 80, 258 136 Z" fill="url(#hatGrad)" />
        <rect x="138" y="124" width="124" height="14" rx="7" fill="${shadow}" />
        <rect x="194" y="84" width="12" height="58" rx="6" fill="${shadow}" />
      `;
    case "samuraiKabuto":
      // 28. Шлем самурая Кабуто
      return `
        <path d="M116 146 L144 106 L256 106 L284 146 Q286 152 278 152 L122 152 Q114 152 116 146 Z" fill="${shadow}" />
        <path d="M142 132 C142 78, 258 78, 258 132 Z" fill="url(#hatGrad)" />
        <path d="M200 112 C164 106, 142 78, 152 60 C162 82, 180 96, 200 98 C220 96, 238 82, 248 60 C258 78, 236 106, 200 112 Z" fill="#F2C14E" />
      `;
    case "astroHelmet":
      // 29. Купол астронавта (отрисовывается сразу после фона как нимб-скафандр за головой)
      return `
        <circle cx="200" cy="184" r="76" fill="${soft}" />
        <path d="M144 152 C154 128, 178 118, 204 118 C184 124, 162 136, 152 158 C148 164, 142 160, 144 152 Z" fill="#FFFFFF" />
        <path fill-rule="evenodd" d="M200 94 A90 90 0 1 0 200 274 A90 90 0 1 0 200 94 Z M200 110 A74 74 0 1 0 200 258 A74 74 0 1 0 200 110 Z" fill="url(#hatGrad)" />
        <circle cx="110" cy="184" r="11" fill="${shadow}" />
        <circle cx="290" cy="184" r="11" fill="${shadow}" />
        <circle cx="110" cy="184" r="5" fill="${hi}" />
        <circle cx="290" cy="184" r="5" fill="${hi}" />
      `;
    case "aviatorHat":
      // 30. Шапка пилота с очками
      return `
        <path d="M136 148 C136 82, 264 82, 264 148 L268 188 Q268 196 258 196 L248 196 L248 140 L152 140 L152 196 L142 196 Q132 196 132 188 Z" fill="url(#hatGrad)" />
        <rect x="148" y="102" width="104" height="24" rx="12" fill="${shadow}" />
        <circle cx="174" cy="114" r="14" fill="${hi}" />
        <circle cx="226" cy="114" r="14" fill="${hi}" />
        <circle cx="174" cy="114" r="9" fill="#7EBCE6" />
        <circle cx="226" cy="114" r="9" fill="#7EBCE6" />
      `;
    case "ushanka":
      // 31. Тёплая шапка-ушанка
      return `
        <rect x="128" y="120" width="26" height="72" rx="13" fill="url(#hatGrad)" />
        <rect x="246" y="120" width="26" height="72" rx="13" fill="url(#hatGrad)" />
        <rect x="134" y="84" width="132" height="54" rx="22" fill="url(#hatGrad)" />
        <rect x="144" y="96" width="112" height="38" rx="14" fill="${hi}" />
      `;
    case "cowboyHat":
      // 32. Ковбойская шляпа
      return `
        <path d="M146 128 C148 76, 180 72, 200 84 C220 72, 252 76, 254 128 Z" fill="url(#hatGrad)" />
        <rect x="146" y="114" width="108" height="12" rx="6" fill="${shadow}" />
        <path d="M104 120 C136 142, 264 142, 296 120 C304 114, 308 124, 296 132 C258 152, 142 152, 104 132 C92 124, 96 114, 104 120 Z" fill="url(#hatGrad)" />
      `;
    case "sombrero":
      // 33. Праздничное сомбреро
      return `
        <path d="M156 126 C158 68, 242 68, 244 126 Z" fill="url(#hatGrad)" />
        <ellipse cx="200" cy="130" rx="126" ry="20" fill="url(#hatGrad)" />
        <ellipse cx="200" cy="130" rx="106" ry="12" fill="${shadow}" />
        <circle cx="120" cy="130" r="5" fill="#F2C14E" />
        <circle cx="160" cy="134" r="5" fill="#F2C14E" />
        <circle cx="200" cy="136" r="5" fill="#F2C14E" />
        <circle cx="240" cy="134" r="5" fill="#F2C14E" />
        <circle cx="280" cy="130" r="5" fill="#F2C14E" />
      `;
    case "fezHat":
      // 34. Восточная феска с кисточкой
      return `
        <path d="M158 130 L166 74 Q168 66 176 66 L224 66 Q232 66 234 74 L242 130 Z" fill="url(#hatGrad)" />
        <path d="M200 66 C224 66, 244 84, 248 112 L238 112 C234 90, 218 74, 200 72 Z" fill="#232126" />
      `;
    case "royalTurban":
      // 35. Тюрбан султана с пером
      return `
        <ellipse cx="182" cy="108" rx="48" ry="28" transform="rotate(-10 182 108)" fill="url(#hatGrad)" />
        <ellipse cx="218" cy="108" rx="48" ry="28" transform="rotate(10 218 108)" fill="url(#hatGrad)" />
        <ellipse cx="200" cy="96" rx="44" ry="24" fill="${soft}" />
        <ellipse cx="200" cy="70" rx="10" ry="24" fill="#FFFFFF" />
        <rect x="190" y="92" width="20" height="20" rx="6" transform="rotate(45 200 102)" fill="#F2C14E" />
      `;
    case "laurelWreath":
      // 36. Золотой лавровый венок
      return `
        <g fill="url(#hatGrad)">
          <ellipse cx="144" cy="136" rx="14" ry="7" transform="rotate(-35 144 136)" />
          <ellipse cx="158" cy="122" rx="14" ry="7" transform="rotate(-25 158 122)" />
          <ellipse cx="176" cy="114" rx="14" ry="7" transform="rotate(-12 176 114)" />
          <ellipse cx="256" cy="136" rx="14" ry="7" transform="rotate(35 256 136)" />
          <ellipse cx="242" cy="122" rx="14" ry="7" transform="rotate(25 242 122)" />
          <ellipse cx="224" cy="114" rx="14" ry="7" transform="rotate(12 224 114)" />
        </g>
      `;
    case "flowerCrown":
      // 37. Цветочный венок
      return `
        <rect x="140" y="116" width="120" height="12" rx="6" fill="${shadow}" />
        <circle cx="156" cy="122" r="14" fill="url(#hatGrad)" />
        <circle cx="200" cy="118" r="16" fill="${hi}" />
        <circle cx="244" cy="122" r="14" fill="url(#hatGrad)" />
        <circle cx="156" cy="122" r="5" fill="#F2C14E" />
        <circle cx="200" cy="118" r="6" fill="#F2C14E" />
        <circle cx="244" cy="122" r="5" fill="#F2C14E" />
      `;
    case "gradMortarboard":
      // 38. Шапочка выпускника
      return `
        <rect x="152" y="102" width="96" height="28" rx="8" fill="${shadow}" />
        <path d="M114 96 Q108 94 114 92 L196 68 Q200 66 204 68 L286 92 Q292 94 286 96 L204 120 Q200 122 196 120 Z" fill="url(#hatGrad)" />
        <rect x="266" y="96" width="6" height="36" rx="3" fill="#F2C14E" />
      `;
    case "detectiveDeer":
      // 39. Кепка Шерлока
      return `
        <path d="M142 132 C142 82, 258 82, 258 132 Z" fill="url(#hatGrad)" />
        <path d="M118 132 C136 120, 264 120, 282 132 C264 142, 136 142, 118 132 Z" fill="${shadow}" />
        <path d="M180 86 C192 68, 208 68, 220 86 Z" fill="${shadow}" />
      `;
    case "pirateTricorne":
      // 40. Пиратская треуголка
      return `
        <path d="M142 130 C142 84, 258 84, 258 130 Z" fill="${shadow}" />
        <path d="M106 132 C126 92, 174 74, 200 72 C226 74, 274 92, 294 132 C254 144, 146 144, 106 132 Z" fill="url(#hatGrad)" />
        <circle cx="200" cy="108" r="11" fill="#FFFFFF" />
      `;
    case "jesterHat":
      // 41. Колпак шута с бубенцами
      return `
        <path d="M146 132 C122 92, 92 84, 96 112 C112 108, 128 118, 146 132 Z" fill="url(#hatGrad)" />
        <path d="M254 132 C278 92, 308 84, 304 112 C288 108, 272 118, 254 132 Z" fill="${shadow}" />
        <path d="M146 132 C146 82, 254 82, 254 132 Z" fill="url(#hatGrad)" />
        <circle cx="94" cy="114" r="9" fill="#F2C14E" />
        <circle cx="306" cy="114" r="9" fill="#F2C14E" />
      `;
    case "nurseCap":
      // 42. Шапочка целителя
      return `
        <path d="M148 130 L138 88 Q136 80 144 80 L256 80 Q264 80 262 88 L252 130 Z" fill="url(#hatGrad)" />
        <rect x="195" y="88" width="10" height="28" rx="3" fill="${hi}" />
        <rect x="186" y="97" width="28" height="10" rx="3" fill="${hi}" />
      `;
    case "bunnyHood":
      // 43. Заячьи ушки
      return `
        <ellipse cx="166" cy="84" rx="16" ry="44" transform="rotate(-10 166 84)" fill="url(#hatGrad)" />
        <ellipse cx="234" cy="84" rx="16" ry="44" transform="rotate(10 234 84)" fill="url(#hatGrad)" />
        <ellipse cx="166" cy="86" rx="8" ry="28" transform="rotate(-10 166 86)" fill="${hi}" />
        <ellipse cx="234" cy="86" rx="8" ry="28" transform="rotate(10 234 86)" fill="${hi}" />
      `;
    case "bearEars":
      // 44. Медвежьи ушки
      return `
        <circle cx="144" cy="108" r="24" fill="url(#hatGrad)" />
        <circle cx="256" cy="108" r="24" fill="url(#hatGrad)" />
        <circle cx="144" cy="108" r="12" fill="${hi}" />
        <circle cx="256" cy="108" r="12" fill="${hi}" />
      `;
    case "frogHat":
      // 45. Шапка-лягушка
      return `
        <path d="M142 140 C142 90, 258 90, 258 140 Z" fill="url(#hatGrad)" />
        <circle cx="166" cy="94" r="20" fill="url(#hatGrad)" />
        <circle cx="234" cy="94" r="20" fill="url(#hatGrad)" />
        <circle cx="166" cy="92" r="12" fill="#FFFFFF" />
        <circle cx="234" cy="92" r="12" fill="#FFFFFF" />
        <circle cx="166" cy="92" r="6" fill="#232126" />
        <circle cx="234" cy="92" r="6" fill="#232126" />
      `;
    case "mushroomCap":
      // 46. Шляпка мухомора
      return `
        <path d="M108 136 C108 62, 292 62, 292 136 C252 146, 148 146, 108 136 Z" fill="url(#hatGrad)" />
        <circle cx="200" cy="92" r="14" fill="#FFFFFF" />
        <circle cx="152" cy="112" r="11" fill="#FFFFFF" />
        <circle cx="248" cy="112" r="11" fill="#FFFFFF" />
        <circle cx="176" cy="124" r="7" fill="#FFFFFF" />
        <circle cx="224" cy="124" r="7" fill="#FFFFFF" />
      `;
    case "kitsuneMaskSide":
      // 47. Маска Кицунэ сбоку
      return `
        <g transform="translate(248, 108) rotate(22)">
          <path d="M-24 -22 L-10 -38 Q-6 -42 -2 -36 L6 -22 L2 -22 L10 -36 Q14 -42 18 -38 L24 -22 C28 2, 16 22, 0 28 C-16 22, -28 2, -24 -22 Z" fill="#FFFFFF" />
          <path d="M-16 -20 L-8 -32 L0 -20 Z" fill="url(#hatGrad)" />
          <path d="M16 -20 L8 -32 L0 -20 Z" fill="url(#hatGrad)" />
          <ellipse cx="-10" cy="-4" rx="6" ry="3" transform="rotate(15 -10 -4)" fill="#232126" />
          <ellipse cx="10" cy="-4" rx="6" ry="3" transform="rotate(-15 10 -4)" fill="#232126" />
        </g>
      `;
    case "royalTiara":
      // 48. Диадема с кристаллом
      return `
        <path d="M144 134 C156 106, 184 94, 200 78 C216 94, 244 106, 256 134 C232 126, 168 126, 144 134 Z" fill="url(#hatGrad)" />
        <rect x="191" y="96" width="18" height="18" rx="4" transform="rotate(45 200 105)" fill="${hi}" />
      `;
    case "cyberVisorHat":
      // 49. Кибер-ободок с антеннами
      return `
        <rect x="136" y="114" width="128" height="18" rx="9" fill="url(#hatGrad)" />
        <rect x="146" y="76" width="10" height="44" rx="5" transform="rotate(-14 151 98)" fill="${shadow}" />
        <rect x="244" y="76" width="10" height="44" rx="5" transform="rotate(14 249 98)" fill="${shadow}" />
        <circle cx="200" cy="123" r="6" fill="#7EBCE6" />
      `;
    case "sunburstCrown":
      // 50. Солнечная корона Аргона со скруглёнными лучами
      return `
        <path d="M142 132 L134 96 Q132 88 139 94 L164 114 L168 80 Q170 72 174 80 L188 108 L197 68 Q200 60 203 68 L212 108 L226 80 Q230 72 232 80 L236 114 L261 94 Q268 88 266 96 L258 132 Z" fill="url(#hatGrad)" />
        <circle cx="200" cy="118" r="8" fill="${hi}" />
      `;
    case "headphonesFluffyCat":
      // 51. Пушистые наушники с неко-ушками на дужке
      return `
        <path d="M${lx - 14} 178 C${lx - 14} 90, ${rx + 14} 90, ${rx + 14} 178 L${rx + 4} 178 C${rx + 4} 104, ${lx - 4} 104, ${lx - 4} 178 Z" fill="${shadow}" />
        <path d="M146 124 L136 86 Q134 78 142 82 L172 106 Z" fill="url(#hatGrad)" />
        <path d="M254 124 L264 86 Q266 78 258 82 L228 106 Z" fill="url(#hatGrad)" />
        <path d="M149 118 L143 94 L164 108 Z" fill="${hi}" />
        <path d="M251 118 L257 94 L236 108 Z" fill="${hi}" />
        <g fill="url(#hatGrad)">
          <circle cx="${lx - 12}" cy="172" r="17" />
          <circle cx="${lx - 24}" cy="188" r="19" />
          <circle cx="${lx - 22}" cy="206" r="18" />
          <circle cx="${lx - 8}" cy="216" r="17" />
          <circle cx="${lx + 2}" cy="196" r="17" />
          <circle cx="${rx + 12}" cy="172" r="17" />
          <circle cx="${rx + 24}" cy="188" r="19" />
          <circle cx="${rx + 22}" cy="206" r="18" />
          <circle cx="${rx + 8}" cy="216" r="17" />
          <circle cx="${rx - 2}" cy="196" r="17" />
        </g>
        <g fill="${soft}">
          <circle cx="${lx - 12}" cy="194" r="11" />
          <circle cx="${rx + 12}" cy="194" r="11" />
        </g>
      `;
    case "headphonesFluffyCloud":
      // 52. Пушистые облачные наушники XL с меховой дужкой
      return `
        <path d="M${lx - 16} 180 C${lx - 16} 86, ${rx + 16} 86, ${rx + 16} 180 L${rx + 4} 180 C${rx + 4} 102, ${lx - 4} 102, ${lx - 4} 180 Z" fill="url(#hatGrad)" />
        <g fill="url(#hatGrad)">
          <circle cx="156" cy="122" r="12" />
          <circle cx="176" cy="112" r="13" />
          <circle cx="200" cy="108" r="14" />
          <circle cx="224" cy="112" r="13" />
          <circle cx="244" cy="122" r="12" />
          <circle cx="${lx - 14}" cy="166" r="20" />
          <circle cx="${lx - 28}" cy="182" r="21" />
          <circle cx="${lx - 28}" cy="204" r="21" />
          <circle cx="${lx - 12}" cy="220" r="20" />
          <circle cx="${lx + 4}" cy="204" r="18" />
          <circle cx="${lx + 4}" cy="182" r="18" />
          <circle cx="${rx + 14}" cy="166" r="20" />
          <circle cx="${rx + 28}" cy="182" r="21" />
          <circle cx="${rx + 28}" cy="204" r="21" />
          <circle cx="${rx + 12}" cy="220" r="20" />
          <circle cx="${rx - 4}" cy="204" r="18" />
          <circle cx="${rx - 4}" cy="182" r="18" />
        </g>
        <g fill="${hi}">
          <circle cx="${lx - 16}" cy="186" r="12" />
          <circle cx="${lx - 12}" cy="202" r="11" />
          <circle cx="${rx + 16}" cy="186" r="12" />
          <circle cx="${rx + 12}" cy="202" r="11" />
        </g>
      `;
    case "headphonesGamingCat":
      // 53. Геймерские неко-наушники с RGB-ушками, гранёными чашами и гибким микрофоном
      return `
        <path d="M${lx - 14} 178 C${lx - 14} 88, ${rx + 14} 88, ${rx + 14} 178 L${rx + 3} 178 C${rx + 3} 104, ${lx - 3} 104, ${lx - 3} 178 Z" fill="url(#hatGrad)" />
        <path d="M174 102 C188 97, 212 97, 226 102 L222 110 C210 106, 190 106, 178 110 Z" fill="${shadow}" />
        <path d="M142 122 L128 78 Q126 70 135 75 L170 102 Z" fill="url(#hatGrad)" />
        <path d="M258 122 L272 78 Q274 70 265 75 L230 102 Z" fill="url(#hatGrad)" />
        <path d="M145 114 L136 86 L160 103 Z" fill="#4CC9F0" />
        <path d="M255 114 L264 86 L240 103 Z" fill="#4CC9F0" />
        <rect x="${lx - 26}" y="160" width="28" height="62" rx="12" fill="url(#hatGrad)" />
        <rect x="${rx - 2}" y="160" width="28" height="62" rx="12" fill="url(#hatGrad)" />
        <rect x="${lx - 21}" y="168" width="18" height="46" rx="8" fill="${shadow}" />
        <rect x="${rx + 3}" y="168" width="18" height="46" rx="8" fill="${shadow}" />
        <circle cx="${lx - 12}" cy="191" r="6.5" fill="#4CC9F0" />
        <circle cx="${rx + 12}" cy="191" r="6.5" fill="#4CC9F0" />
        <path d="M${lx - 12} 214 C${lx - 8} 234, 166 238, 184 233 L184 227 C168 231, ${lx - 2} 228, ${lx - 5} 212 Z" fill="${shadow}" />
        <rect x="178" y="224" width="14" height="9" rx="4.5" fill="url(#hatGrad)" />
        <circle cx="188" cy="228.5" r="2.5" fill="#4CC9F0" />
      `;
    case "headphonesGamingPro":
      // 54. Кибер-геймерская гарнитура (массивные киберспортивные чаши с неоновым кольцом и микрофоном)
      return `
        <path d="M${lx - 16} 180 C${lx - 16} 84, ${rx + 16} 84, ${rx + 16} 180 L${rx + 3} 180 C${rx + 3} 102, ${lx - 3} 102, ${lx - 3} 180 Z" fill="${shadow}" />
        <path d="M${lx - 10} 152 C${lx - 6} 96, ${rx + 6} 96, ${rx + 10} 152 L${rx + 2} 152 C${rx - 2} 106, ${lx + 2} 106, ${lx - 2} 152 Z" fill="url(#hatGrad)" />
        <polygon points="${lx - 28},168 ${lx - 16},154 ${lx + 2},160 ${lx + 2},218 ${lx - 16},224 ${lx - 28},210" fill="url(#hatGrad)" />
        <polygon points="${rx + 28},168 ${rx + 16},154 ${rx - 2},160 ${rx - 2},218 ${rx + 16},224 ${rx + 28},210" fill="url(#hatGrad)" />
        <rect x="${lx - 22}" y="167" width="16" height="44" rx="7" fill="${shadow}" />
        <rect x="${rx + 6}" y="167" width="16" height="44" rx="7" fill="${shadow}" />
        <rect x="${lx - 17}" y="174" width="6" height="30" rx="3" fill="#06D6A0" />
        <rect x="${rx + 11}" y="174" width="6" height="30" rx="3" fill="#06D6A0" />
        <path d="M${lx - 14} 216 C${lx - 10} 236, 168 238, 186 232 L186 226 C170 231, ${lx - 4} 229, ${lx - 7} 214 Z" fill="${shadow}" />
        <rect x="179" y="223" width="16" height="10" rx="5" fill="#232126" />
        <circle cx="190" cy="228" r="3" fill="#06D6A0" />
      `;
    default:
      return "";
  }
}

// 8. Генерация аксессуаров и деталей лица (15 форм без обводки и без прозрачностей, с мягкими углами)
function renderAccessories(accId, accShades) {
  const c = accShades.base;
  const hi = accShades.hi;
  const shadow = accShades.deep;
  switch (accId) {
    case "blush":
      // 1. Непрозрачный румянец
      return `
        <circle cx="160" cy="214" r="11" fill="${c}" />
        <circle cx="240" cy="214" r="11" fill="${c}" />
      `;
    case "plaster":
      // 2. Пластырь на щеке + плотный непрозрачный румянец
      return `
        <circle cx="160" cy="214" r="10" fill="${c}" />
        <rect x="216" y="206" width="26" height="10" rx="4" transform="rotate(-12 229 211)" fill="#FFFFFF" />
        <rect x="225" y="206" width="8" height="10" rx="2" transform="rotate(-12 229 211)" fill="${c}" />
      `;
    case "nosePlaster":
      // 3. Пластырь на переносице (отрисовывается поверх носа)
      return `
        <rect x="184" y="195" width="32" height="10" rx="4" fill="#FFFFFF" />
        <rect x="195" y="195" width="10" height="10" rx="2" fill="${c}" />
      `;
    case "mark":
      // 4. Метка во лбу + непрозрачные румянцы
      return `
        <circle cx="200" cy="174" r="5" fill="${c}" />
        <circle cx="160" cy="214" r="10" fill="${c}" />
        <circle cx="240" cy="214" r="10" fill="${c}" />
      `;
    case "freckles":
      return `
        <g fill="${c}">
          <circle cx="160" cy="210" r="2.5" />
          <circle cx="168" cy="214" r="2.5" />
          <circle cx="156" cy="218" r="2.5" />
          <circle cx="240" cy="210" r="2.5" />
          <circle cx="232" cy="214" r="2.5" />
          <circle cx="244" cy="218" r="2.5" />
        </g>
      `;
    case "whiskers":
      return `
        <g fill="${c}">
          <rect x="150" y="209" width="16" height="4" rx="2" />
          <rect x="150" y="217" width="16" height="4" rx="2" />
          <rect x="234" y="209" width="16" height="4" rx="2" />
          <rect x="234" y="217" width="16" height="4" rx="2" />
        </g>
      `;
    case "tear":
      return `<path d="M234 206 C239 215, 239 222, 234 222 C229 222, 229 215, 234 206 Z" fill="${c}" />`;
    case "starCheek":
      // 8. Звезда на щеке со скруглёнными лучами и плотный румянец
      return `
        <path d="M161 205.5 Q162 203.5 163 205.5 L165 211 L171 211.8 Q173.5 212 171.5 213.8 L167 217 L168.5 223 Q169 225.5 166.8 224 L162 221 L157.2 224 Q155 225.5 155.5 223 L157 217 L152.5 213.8 Q150.5 212 153 211.8 L159 211 Z" fill="${c}" />
        <circle cx="238" cy="215" r="10" fill="${c}" />
      `;
    case "mask":
      // 9. Тканевая маска строго по форме овала лица (#faceOnlyClip) без обводки и без прозрачностей
      return `
        <g clip-path="url(#faceOnlyClip)">
          <path d="M126 212 Q165 212 200 198 Q235 212 274 212 L274 274 L126 274 Z" fill="${c}" />
          <path d="M200 198 Q235 212 274 212 L274 274 L200 274 Z" fill="${accShades.shadow}" />
        </g>
      `;
    case "beautySpot":
      // 10. Родинка + плотные румянцы
      return `
        <circle cx="160" cy="214" r="10" fill="${c}" />
        <circle cx="240" cy="214" r="10" fill="${c}" />
        <circle cx="222" cy="222" r="3.2" fill="${shadow}" />
      `;
    case "heartCheek":
      return `
        <path d="M160.5 222 Q162 223.5 163.5 222 L171 213 A5 5 0 0 0 162 206 A5 5 0 0 0 153 213 Z" fill="${c}" />
        <path d="M236.5 222 Q238 223.5 239.5 222 L247 213 A5 5 0 0 0 238 206 A5 5 0 0 0 229 213 Z" fill="${c}" />
      `;
    case "leaf":
      // 12. Листик у рта на соломинке без stroke
      return `
        <g>
          <path d="M204 222.5 Q218 226.5 235 233.5 L233.5 236.5 Q217 229.5 203 225.5 Z" fill="#E2B07E" />
          <path d="M221 229 C232 217, 249 220, 247 234 C236 244, 223 239, 221 229 Z" fill="${c}" />
          <path d="M224 229 Q234 229 243 232 L242 234 Q234 231 224 231 Z" fill="${hi}" />
        </g>
      `;
    case "paint":
      return `
        <rect x="154" y="209" width="22" height="7" rx="3.5" fill="${c}" />
        <rect x="224" y="209" width="22" height="7" rx="3.5" fill="${c}" />
      `;
    case "stickers":
      return `
        <path d="M160 207 Q162 204 164 207 L171 218 Q173 221 169 221 L155 221 Q151 221 153 218 Z" fill="${c}" />
        <rect x="232" y="209" width="12" height="12" rx="3.5" fill="${hi}" />
      `;
    case "neonBand":
      // 15. Неоновая полоска через переносицу и щёки без stroke
      return `
        <path d="M150 209 Q200 194 250 209 L248 216 Q200 202 152 216 Z" fill="${c}" />
        <path d="M160 210 Q200 198 240 210 L239 213 Q200 201 161 213 Z" fill="${hi}" />
      `;
    default:
      return "";
  }
}

// 8Б. Генерация парящих кистей рук (не соединены с телом, 10 поз с зеркальным отображением для правой руки)
function renderSingleHandPose(poseId, handsShades) {
  const hi = handsShades.hi;
  const shadow = handsShades.shadow;
  switch (poseId) {
    case "wave":
      // 1. Привет (Открытая ладошка)
      return `
        <g transform="rotate(-14 96 244)">
          <rect x="78" y="212" width="7.5" height="24" rx="3.75" transform="rotate(-14 82 228)" fill="url(#handsGrad)" />
          <rect x="86.5" y="207" width="8" height="27" rx="4" transform="rotate(-5 90 224)" fill="url(#handsGrad)" />
          <rect x="95.5" y="205" width="8" height="29" rx="4" transform="rotate(3 99 224)" fill="url(#handsGrad)" />
          <rect x="104.5" y="209" width="8" height="26" rx="4" transform="rotate(12 108 226)" fill="url(#handsGrad)" />
          <rect x="106" y="232" width="18" height="9" rx="4.5" transform="rotate(-28 112 236)" fill="url(#handsGrad)" />
          <rect x="80" y="228" width="32" height="28" rx="14" fill="url(#handsGrad)" />
          <ellipse cx="96" cy="244" rx="7" ry="5" fill="${shadow}" />
        </g>
      `;
    case "peace":
      // 2. Победа (V-жест)
      return `
        <g>
          <rect x="85" y="200" width="9" height="34" rx="4.5" transform="rotate(-14 90 228)" fill="url(#handsGrad)" />
          <rect x="98" y="200" width="9" height="34" rx="4.5" transform="rotate(14 102 228)" fill="url(#handsGrad)" />
          <rect x="80" y="226" width="32" height="28" rx="14" fill="url(#handsGrad)" />
          <rect x="79" y="228" width="8.5" height="15" rx="4.25" fill="${shadow}" />
          <rect x="86.5" y="227" width="8.5" height="16" rx="4.25" fill="${shadow}" />
          <rect x="90" y="233" width="18" height="8.5" rx="4.25" transform="rotate(-14 99 237)" fill="${hi}" />
        </g>
      `;
    case "thumbsUp":
      // 3. Класс (Лайк)
      return `
        <g>
          <rect x="98" y="206" width="10" height="24" rx="5" transform="rotate(8 103 218)" fill="url(#handsGrad)" />
          <rect x="80" y="226" width="30" height="28" rx="13" fill="url(#handsGrad)" />
          <rect x="76" y="226" width="16" height="7.5" rx="3.75" fill="${hi}" />
          <rect x="76" y="233" width="17" height="7.5" rx="3.75" fill="url(#handsGrad)" />
          <rect x="76" y="240" width="16" height="7.5" rx="3.75" fill="${hi}" />
          <rect x="78" y="247" width="14" height="7" rx="3.5" fill="${shadow}" />
        </g>
      `;
    case "heartHalf":
      // 4. Половинка сердца (при выпадении на обеих руках смыкается в центре x=200 в единое сердечко)
      return `
        <g>
          <path d="M124 232 C108 218, 84 226, 84 244 C84 258, 104 268, 124 266 C128 266, 128 256, 122 256 C108 256, 96 250, 96 244 C96 236, 108 232, 120 240 C125 243, 129 236, 124 232 Z" fill="url(#handsGrad)" />
          <path d="M124 224 Q125.5 226 127 224 L132.5 217 A4.5 4.5 0 0 0 125.5 211 A4.5 4.5 0 0 0 118.5 217 Z" fill="#F472B6" />
        </g>
      `;
    case "fistPump":
      // 5. Боевой кулачок
      return `
        <g>
          <rect x="78" y="224" width="34" height="28" rx="13" fill="url(#handsGrad)" />
          <circle cx="84" cy="226" r="5.5" fill="${hi}" />
          <circle cx="92" cy="224" r="6" fill="${hi}" />
          <circle cx="100" cy="224" r="6" fill="${hi}" />
          <circle cx="107" cy="226" r="5.5" fill="${hi}" />
          <rect x="84" y="234" width="22" height="9" rx="4.5" transform="rotate(-8 95 238)" fill="${shadow}" />
        </g>
      `;
    case "pointUp":
      // 6. Идея (Палец вверх)
      return `
        <g>
          <rect x="98" y="198" width="9.5" height="34" rx="4.75" fill="url(#handsGrad)" />
          <rect x="80" y="226" width="32" height="28" rx="14" fill="url(#handsGrad)" />
          <rect x="79" y="226" width="7.5" height="16" rx="3.75" fill="${shadow}" />
          <rect x="85.5" y="224" width="7.5" height="17" rx="3.75" fill="${shadow}" />
          <rect x="92" y="224" width="7.5" height="17" rx="3.75" fill="${shadow}" />
          <rect x="92" y="234" width="18" height="8.5" rx="4.25" transform="rotate(-12 101 238)" fill="${hi}" />
        </g>
      `;
    case "rockOn":
      // 7. Рок-коза
      return `
        <g>
          <rect x="78" y="204" width="8.5" height="30" rx="4.25" transform="rotate(-8 82 220)" fill="url(#handsGrad)" />
          <rect x="103" y="202" width="8.5" height="32" rx="4.25" transform="rotate(8 107 218)" fill="url(#handsGrad)" />
          <rect x="79" y="226" width="33" height="28" rx="14" fill="url(#handsGrad)" />
          <rect x="87" y="225" width="8" height="17" rx="4" fill="${shadow}" />
          <rect x="95" y="225" width="8" height="17" rx="4" fill="${shadow}" />
          <rect x="86" y="235" width="20" height="8.5" rx="4.25" fill="${hi}" />
        </g>
      `;
    case "okSign":
      // 8. Жест Окей
      return `
        <g>
          <rect x="76" y="206" width="8" height="26" rx="4" transform="rotate(-18 80 222)" fill="url(#handsGrad)" />
          <rect x="85" y="202" width="8" height="28" rx="4" transform="rotate(-6 89 220)" fill="url(#handsGrad)" />
          <rect x="94" y="202" width="8" height="28" rx="4" transform="rotate(6 98 220)" fill="url(#handsGrad)" />
          <path fill-rule="evenodd" d="M100 222 A15 15 0 1 0 100 252 A15 15 0 1 0 100 222 Z M102 230 A7 7 0 1 0 102 244 A7 7 0 1 0 102 230 Z" fill="url(#handsGrad)" />
        </g>
      `;
    case "catPaw":
      // 9. Лапка-моти
      return `
        <g>
          <path d="M76 238 C76 218, 116 218, 116 238 C116 254, 108 260, 96 260 C84 260, 76 254, 76 238 Z" fill="url(#handsGrad)" />
          <circle cx="82" cy="224" r="7" fill="url(#handsGrad)" />
          <circle cx="91" cy="220" r="7.5" fill="url(#handsGrad)" />
          <circle cx="101" cy="220" r="7.5" fill="url(#handsGrad)" />
          <circle cx="110" cy="224" r="7" fill="url(#handsGrad)" />
          <ellipse cx="96" cy="242" rx="10" ry="8" fill="#F472B6" />
          <circle cx="83" cy="227" r="3.5" fill="#F472B6" />
          <circle cx="91.5" cy="223" r="3.8" fill="#F472B6" />
          <circle cx="100.5" cy="223" r="3.8" fill="#F472B6" />
          <circle cx="109" cy="227" r="3.5" fill="#F472B6" />
        </g>
      `;
    case "fingerHeart":
      // 10. Корейское сердечко
      return `
        <g>
          <rect x="78" y="230" width="32" height="26" rx="13" fill="url(#handsGrad)" />
          <rect x="92" y="212" width="8.5" height="24" rx="4.25" transform="rotate(-18 96 224)" fill="url(#handsGrad)" />
          <rect x="96" y="212" width="8.5" height="24" rx="4.25" transform="rotate(22 100 224)" fill="${hi}" />
          <path d="M96.5 208 Q98 210 99.5 208 L107 199 A5.5 5.5 0 0 0 98 192 A5.5 5.5 0 0 0 89 199 Z" fill="#E05A47" />
        </g>
      `;
    case "clap":
      // 11. Аплодисменты
      return `
        <g transform="rotate(18 96 238)">
          <rect x="82" y="208" width="8" height="26" rx="4" transform="rotate(-8 86 221)" fill="url(#handsGrad)" />
          <rect x="90" y="204" width="8" height="28" rx="4" fill="url(#handsGrad)" />
          <rect x="98" y="206" width="8" height="26" rx="4" transform="rotate(8 102 219)" fill="url(#handsGrad)" />
          <rect x="80" y="224" width="30" height="28" rx="14" fill="url(#handsGrad)" />
          <rect x="102" y="226" width="16" height="8" rx="4" transform="rotate(-30 108 230)" fill="${hi}" />
          <path d="M70 212 Q64 224 70 236 L73 234 Q68 224 73 214 Z" fill="#F2C14E" />
          <path d="M118 206 Q126 218 120 230 L117 228 Q122 218 115 208 Z" fill="#F2C14E" />
        </g>
      `;
    case "pointSide":
      // 12. Указатель в центр
      return `
        <g>
          <rect x="96" y="224" width="32" height="9.5" rx="4.75" fill="url(#handsGrad)" />
          <rect x="76" y="222" width="28" height="30" rx="13" fill="url(#handsGrad)" />
          <rect x="86" y="214" width="16" height="8.5" rx="4.25" transform="rotate(16 94 218)" fill="${hi}" />
          <rect x="94" y="233" width="14" height="7.5" rx="3.75" fill="${shadow}" />
          <rect x="92" y="240" width="14" height="7.5" rx="3.75" fill="${shadow}" />
        </g>
      `;
    case "thumbsDown":
      // 13. Дизлайк
      return `
        <g>
          <rect x="98" y="242" width="10" height="24" rx="5" transform="rotate(-8 103 254)" fill="url(#handsGrad)" />
          <rect x="80" y="220" width="30" height="28" rx="13" fill="url(#handsGrad)" />
          <rect x="76" y="221" width="14" height="7" rx="3.5" fill="${shadow}" />
          <rect x="76" y="228" width="16" height="7.5" rx="3.75" fill="${hi}" />
          <rect x="76" y="235" width="17" height="7.5" rx="3.75" fill="url(#handsGrad)" />
          <rect x="76" y="242" width="16" height="7.5" rx="3.75" fill="${hi}" />
        </g>
      `;
    case "shaka":
      // 14. Шака (Алоха)
      return `
        <g transform="rotate(-12 96 238)">
          <rect x="70" y="218" width="20" height="8.5" rx="4.25" transform="rotate(-32 78 222)" fill="url(#handsGrad)" />
          <rect x="104" y="218" width="22" height="9" rx="4.5" transform="rotate(32 112 222)" fill="url(#handsGrad)" />
          <rect x="80" y="224" width="32" height="28" rx="13" fill="url(#handsGrad)" />
          <rect x="84" y="222" width="8" height="16" rx="4" fill="${shadow}" />
          <rect x="92" y="222" width="8" height="16" rx="4" fill="${shadow}" />
          <rect x="100" y="222" width="8" height="16" rx="4" fill="${shadow}" />
        </g>
      `;
    case "vulcan":
      // 15. Вулканский салют
      return `
        <g>
          <rect x="76" y="206" width="7.5" height="28" rx="3.75" transform="rotate(-18 80 224)" fill="url(#handsGrad)" />
          <rect x="83.5" y="204" width="8" height="30" rx="4" transform="rotate(-14 87 224)" fill="url(#handsGrad)" />
          <rect x="96.5" y="204" width="8" height="30" rx="4" transform="rotate(14 100 224)" fill="url(#handsGrad)" />
          <rect x="104" y="206" width="7.5" height="28" rx="3.75" transform="rotate(18 108 224)" fill="url(#handsGrad)" />
          <rect x="106" y="232" width="18" height="8.5" rx="4.25" transform="rotate(-28 112 236)" fill="${hi}" />
          <rect x="80" y="226" width="32" height="28" rx="14" fill="url(#handsGrad)" />
        </g>
      `;
    case "crossedFingers":
      // 16. Пальцы на удачу
      return `
        <g>
          <rect x="90" y="200" width="9" height="34" rx="4.5" transform="rotate(-10 94 224)" fill="url(#handsGrad)" />
          <rect x="94" y="200" width="9" height="34" rx="4.5" transform="rotate(14 98 224)" fill="${hi}" />
          <rect x="80" y="226" width="32" height="28" rx="14" fill="url(#handsGrad)" />
          <rect x="79" y="228" width="8" height="15" rx="4" fill="${shadow}" />
          <rect x="86" y="228" width="8" height="15" rx="4" fill="${shadow}" />
        </g>
      `;
    case "pinch":
      // 17. Щепотка (Белиссимо)
      return `
        <g>
          <path d="M84 236 C82 214, 90 202, 96 202 C102 202, 110 214, 108 236 Z" fill="url(#handsGrad)" />
          <ellipse cx="92" cy="212" rx="4.5" ry="10" transform="rotate(8 92 212)" fill="${hi}" />
          <ellipse cx="100" cy="212" rx="4.5" ry="10" transform="rotate(-8 100 212)" fill="${shadow}" />
          <rect x="80" y="228" width="32" height="26" rx="13" fill="url(#handsGrad)" />
        </g>
      `;
    case "callMe":
      // 18. Позвони мне
      return `
        <g transform="rotate(-24 96 238)">
          <rect x="96" y="204" width="9" height="22" rx="4.5" transform="rotate(20 100 216)" fill="url(#handsGrad)" />
          <rect x="74" y="238" width="9" height="22" rx="4.5" transform="rotate(-24 78 248)" fill="url(#handsGrad)" />
          <rect x="80" y="222" width="30" height="28" rx="13" fill="url(#handsGrad)" />
          <rect x="88" y="224" width="16" height="7" rx="3.5" fill="${shadow}" />
          <rect x="88" y="232" width="16" height="7" rx="3.5" fill="${shadow}" />
          <rect x="88" y="240" width="15" height="7" rx="3.5" fill="${shadow}" />
        </g>
      `;
    case "salute":
      // 19. Козырёк к виску
      return `
        <g transform="rotate(-38 96 236)">
          <rect x="78" y="220" width="42" height="22" rx="11" fill="url(#handsGrad)" />
          <rect x="92" y="220" width="28" height="7" rx="3.5" fill="${hi}" />
          <rect x="90" y="234" width="18" height="8" rx="4" fill="${shadow}" />
        </g>
      `;
    case "prayHalf":
      // 20. Сложенная ладонь (Намасте)
      return `
        <g transform="rotate(14 98 236)">
          <path d="M90 202 C90 196, 104 196, 104 202 L108 244 C108 254, 88 254, 88 244 Z" fill="url(#handsGrad)" />
          <path d="M96 202 L104 202 L106 244 L96 244 Z" fill="${hi}" />
        </g>
      `;
    case "holdOrb":
      // 21. Магическая сфера над ладонью
      return `
        <g>
          <circle cx="96" cy="214" r="14" fill="#7EBCE6" />
          <circle cx="92" cy="210" r="5" fill="#FFFFFF" />
          <path d="M74 238 C78 254, 114 254, 118 238 C120 232, 112 232, 108 238 C102 244, 90 244, 84 238 C80 232, 72 232, 74 238 Z" fill="url(#handsGrad)" />
        </g>
      `;
    case "holdCup":
      // 22. Пиала с горячим чаем
      return `
        <g>
          <path d="M92 204 Q88 196 94 190" fill="none" />
          <rect x="91" y="192" width="4" height="12" rx="2" fill="#FFFFFF" />
          <rect x="99" y="196" width="4" height="10" rx="2" fill="#FFFFFF" />
          <path d="M80 212 L112 212 L108 236 C106 244, 86 244, 84 236 Z" fill="#A8D5BA" />
          <rect x="80" y="212" width="32" height="5" rx="2.5" fill="#F4F1EA" />
          <rect x="78" y="232" width="36" height="20" rx="10" fill="url(#handsGrad)" />
        </g>
      `;
    case "holdStar":
      // 23. Звезда в ладони
      return `
        <g>
          <path d="M94.5 196 Q96 192 97.5 196 L101 205 L110 206.5 Q114 207.5 111 210 L104 216 L106 225 Q107 229 103.5 227 L96 222 L88.5 227 Q85 229 86 225 L88 216 L81 210 Q78 207.5 82 206.5 L91 205 Z" fill="#F2C14E" />
          <rect x="78" y="230" width="36" height="22" rx="11" fill="url(#handsGrad)" />
          <ellipse cx="96" cy="232" rx="12" ry="5" fill="${hi}" />
        </g>
      `;
    case "peaceDown":
      // 24. Два пальца вниз
      return `
        <g>
          <rect x="85" y="232" width="9" height="32" rx="4.5" transform="rotate(14 90 236)" fill="url(#handsGrad)" />
          <rect x="98" y="232" width="9" height="32" rx="4.5" transform="rotate(-14 102 236)" fill="url(#handsGrad)" />
          <rect x="80" y="214" width="32" height="26" rx="13" fill="url(#handsGrad)" />
          <rect x="86" y="224" width="20" height="8" rx="4" fill="${shadow}" />
        </g>
      `;
    case "claw":
      // 25. Тигриная лапка («Ррр!»)
      return `
        <g>
          <rect x="76" y="210" width="8" height="20" rx="4" transform="rotate(-18 80 220)" fill="url(#handsGrad)" />
          <rect x="86" y="206" width="8" height="22" rx="4" transform="rotate(-6 90 217)" fill="url(#handsGrad)" />
          <rect x="96" y="206" width="8" height="22" rx="4" transform="rotate(6 100 217)" fill="url(#handsGrad)" />
          <rect x="106" y="210" width="8" height="20" rx="4" transform="rotate(18 110 220)" fill="url(#handsGrad)" />
          <circle cx="78" cy="211" r="3" fill="${shadow}" />
          <circle cx="89" cy="207" r="3" fill="${shadow}" />
          <circle cx="101" cy="207" r="3" fill="${shadow}" />
          <circle cx="112" cy="211" r="3" fill="${shadow}" />
          <rect x="78" y="222" width="36" height="28" rx="14" fill="url(#handsGrad)" />
          <ellipse cx="96" cy="238" rx="9" ry="7" fill="${shadow}" />
        </g>
      `;
    case "gunPose":
      // 26. Пистолетик Бэнг
      return `
        <g>
          <rect x="92" y="202" width="9" height="26" rx="4.5" transform="rotate(-10 96 218)" fill="url(#handsGrad)" />
          <rect x="96" y="220" width="32" height="9" rx="4.5" fill="url(#handsGrad)" />
          <rect x="96" y="227" width="30" height="8.5" rx="4.25" fill="${hi}" />
          <rect x="78" y="220" width="28" height="28" rx="13" fill="url(#handsGrad)" />
          <rect x="92" y="235" width="14" height="12" rx="5" fill="${shadow}" />
        </g>
      `;
    case "pinkyPromise":
      // 27. Клятва мизинцем
      return `
        <g>
          <rect x="78" y="202" width="8.5" height="32" rx="4.25" transform="rotate(-8 82 220)" fill="url(#handsGrad)" />
          <rect x="80" y="226" width="32" height="28" rx="14" fill="url(#handsGrad)" />
          <rect x="88" y="225" width="7.5" height="16" rx="3.75" fill="${shadow}" />
          <rect x="95" y="225" width="7.5" height="16" rx="3.75" fill="${shadow}" />
          <rect x="102" y="226" width="7.5" height="15" rx="3.75" fill="${shadow}" />
          <rect x="88" y="234" width="18" height="8" rx="4" fill="${hi}" />
        </g>
      `;
    case "openCup":
      // 28. Ладошка-лодочка вверх
      return `
        <g>
          <path d="M72 228 C74 248, 118 248, 120 228 C122 220, 112 220, 110 226 C104 236, 88 236, 82 226 C80 220, 70 220, 72 228 Z" fill="url(#handsGrad)" />
          <ellipse cx="96" cy="230" rx="14" ry="5" fill="${hi}" />
        </g>
      `;
    case "holdFan":
      // 29. Японский складной веер Сэнсу
      return `
        <g>
          <path d="M96 236 L66 202 C82 186, 110 186, 126 202 Z" fill="#E05A47" />
          <path d="M96 236 L74 206 C86 194, 106 194, 118 206 Z" fill="#F2C14E" />
          <circle cx="96" cy="210" r="6" fill="#FFFFFF" />
          <rect x="82" y="228" width="28" height="24" rx="12" fill="url(#handsGrad)" />
        </g>
      `;
    case "thumbsSide":
    default:
      // 30. Большой палец указывает на Аргонёнка («Вот этот!»)
      return `
        <g>
          <rect x="100" y="222" width="26" height="10" rx="5" fill="url(#handsGrad)" />
          <rect x="78" y="220" width="30" height="28" rx="13" fill="url(#handsGrad)" />
          <rect x="82" y="222" width="16" height="7" rx="3.5" fill="${hi}" />
          <rect x="82" y="229" width="16" height="7" rx="3.5" fill="url(#handsGrad)" />
          <rect x="82" y="236" width="16" height="7" rx="3.5" fill="${shadow}" />
        </g>
      `;
  }
}

// Случайное смещение кистей рук в пределах 10% от точки спавна (X_spawn=96, Y_spawn=288)
function randomizeHandsOffset() {
  const maxRx = 96 * 0.10; // 9.6px (10% от точки спавна по X)
  const maxRy = 288 * 0.10; // 28.8px (10% от точки спавна по Y)

  const aL = rand() * 2 * Math.PI;
  const dL = Math.sqrt(rand());
  const aR = rand() * 2 * Math.PI;
  const dR = Math.sqrt(rand());

  state.handsOffset = {
    leftX: +(dL * Math.cos(aL) * maxRx).toFixed(1),
    leftY: +(dL * Math.sin(aL) * maxRy).toFixed(1),
    rightX: +(dR * Math.cos(aR) * maxRx).toFixed(1),
    rightY: +(dR * Math.sin(aR) * maxRy).toFixed(1)
  };
}

// Отрисовка парящих кистей рук: каждая рука является самостоятельным подэлементом (handLeft и handRight),
// а если обе руки — половинки сердечка (heartHalf), они соединяются вместе в центре груди в единое сердечко
function renderHands(handsShades) {
  if (!state.handsEnabled) return "";
  const off = state.handsOffset || { leftX: 0, leftY: 0, rightX: 0, rightY: 0 };
  const isDoubleHeart = state.handLeft === "heartHalf" && state.handRight === "heartHalf";
  const sharedDx = +(((off.leftX || 0) + (off.rightX || 0)) * 0.35).toFixed(1);
  const sharedDy = +(((off.leftY || 0) + (off.rightY || 0)) * 0.35).toFixed(1);
  const leftX = isDoubleHeart ? +(164.5 + sharedDx).toFixed(1) : +(96 + (off.leftX || 0)).toFixed(1);
  const leftY = isDoubleHeart ? +(290 + sharedDy).toFixed(1) : +(288 + (off.leftY || 0)).toFixed(1);
  const rightX = isDoubleHeart ? +(235.5 + sharedDx).toFixed(1) : +(304 + (off.rightX || 0)).toFixed(1);
  const rightY = isDoubleHeart ? +(290 + sharedDy).toFixed(1) : +(288 + (off.rightY || 0)).toFixed(1);
  const rawPreset = state.handAnimPreset || "floatSync";
  // Для соединённых рук-сердечек используем синхронный пресет анимации, чтобы половинки сердца двигались слитно
  const preset = isDoubleHeart && !["floatSync", "pulseBeat", "zenSway"].includes(rawPreset) ? "pulseBeat" : rawPreset;
  const animOn = isAnimationActiveNow();
  const isHandsAnim = Boolean(animOn && state.animHands);
  const gifP = getGifProgressNow();
  const gifAttrL = gifP !== null && isHandsAnim ? computeHandGifTransform(preset, "L", gifP, isDoubleHeart ? 200 : leftX, leftY) : "";
  const gifAttrR = gifP !== null && isHandsAnim ? computeHandGifTransform(preset, isDoubleHeart ? "L" : "R", gifP, isDoubleHeart ? 200 : rightX, rightY) : "";

  const leftInner = `
    <g transform="translate(${leftX}, ${leftY}) scale(1.2) translate(-96, -240)">
      ${renderSingleHandPose(state.handLeft, handsShades)}
    </g>
  `;
  const rightInner = `
    <g transform="translate(${rightX}, ${rightY}) scale(-1.2, 1.2) translate(-96, -240)">
      ${renderSingleHandPose(state.handRight, handsShades)}
    </g>
  `;

  const leftAnimCls = `hand-anim-L-${preset}`;
  const rightAnimCls = isDoubleHeart ? `hand-anim-L-${preset}` : `hand-anim-R-${preset}`;

  const leftMarkup = `
    <g class="svg-part" data-part="hands" data-subpart="handLeft"${getPartOffsetAttr("handLeft")}>
      ${isHandsAnim ? (gifP !== null ? `<g${gifAttrL}>${leftInner}</g>` : `<g class="${leftAnimCls}">${leftInner}</g>`) : leftInner}
    </g>
  `;
  const rightMarkup = `
    <g class="svg-part" data-part="hands" data-subpart="handRight"${getPartOffsetAttr("handRight")}>
      ${isHandsAnim ? (gifP !== null ? `<g${gifAttrR}>${rightInner}</g>` : `<g class="${rightAnimCls}">${rightInner}</g>`) : rightInner}
    </g>
  `;
  return `${leftMarkup}${rightMarkup}`;
}

// 9. Генерация отдельной категории «Частицы и аура вокруг» (50 вариантов без обводки и без прозрачностей, с мягкими углами)
function renderParticles(particlesId, partShades) {
  const c = partShades.base;
  const hi = partShades.hi;
  const soft = partShades.soft;
  const deep = partShades.deep;
  switch (particlesId) {
    case "none":
      return "";
    case "sparkles":
      // 2. Искры вокруг с мягко сглаженными лучами и внутренними изгибами
      return `
        <g fill="url(#particlesGrad)">
          <path d="M84.5 126 Q86 122 87.5 126 L90.4 136.5 Q91.2 138.8 93.5 139.6 L103 141.5 Q107 143 103 144.5 L93.5 146.4 Q91.2 147.2 90.4 149.5 L87.5 160 Q86 164 84.5 160 L81.6 149.5 Q80.8 147.2 78.5 146.4 L69 144.5 Q65 143 69 141.5 L78.5 139.6 Q80.8 138.8 81.6 136.5 Z" />
          <path d="M312.5 110 Q314 106 315.5 110 L317.5 118.5 Q318.2 120.5 320.2 121.1 L328 122.5 Q332 124 328 125.5 L320.2 126.9 Q318.2 127.5 317.5 129.5 L315.5 138 Q314 142 312.5 138 L310.5 129.5 Q309.8 127.5 307.8 126.9 L300 125.5 Q296 124 300 122.5 L307.8 121.1 Q309.8 120.5 310.5 118.5 Z" />
          <path d="M71 248 Q72 245 73 248 L75.4 254.6 Q76.1 256.4 77.9 257 L84 259 Q87 260 84 261 L77.9 263 Q76.1 263.6 75.4 265.4 L73 272 Q72 275 71 272 L68.6 265.4 Q67.9 263.6 66.1 263 L60 261 Q57 260 60 259 L66.1 257 Q67.9 256.4 68.6 254.6 Z" fill="${hi}" />
          <path d="M325 234 Q326 231 327 234 L329.4 240.6 Q330.1 242.4 331.9 243 L338 245 Q341 246 338 247 L331.9 249 Q330.1 249.6 329.4 251.4 L327 258 Q326 261 325 258 L322.6 251.4 Q321.9 249.6 320.1 249 L314 247 Q311 246 314 245 L320.1 243 Q321.9 242.4 322.6 240.6 Z" fill="${hi}" />
          <circle cx="110" cy="82" r="4.5" fill="${soft}" />
          <circle cx="292" cy="76" r="5" fill="${soft}" />
        </g>
      `;
    case "stardust":
      // 3. Звёздная пыль (созвездия и мерцающие точки без прозрачности)
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="74" cy="106" r="5" />
          <circle cx="104" cy="72" r="3.5" fill="${hi}" />
          <circle cx="64" cy="176" r="4" />
          <circle cx="88" cy="236" r="6" fill="${hi}" />
          <circle cx="324" cy="96" r="5.5" />
          <circle cx="294" cy="68" r="3.5" fill="${hi}" />
          <circle cx="336" cy="172" r="4.5" />
          <circle cx="312" cy="242" r="5" fill="${hi}" />
          <circle cx="84" cy="94" r="2.2" fill="${soft}" />
          <circle cx="94" cy="83" r="2.2" fill="${soft}" />
          <circle cx="314" cy="86" r="2.2" fill="${soft}" />
          <circle cx="304" cy="77" r="2.2" fill="${soft}" />
          <circle cx="72" cy="196" r="2.2" fill="${soft}" />
          <circle cx="80" cy="216" r="2.2" fill="${soft}" />
        </g>
      `;
    case "floatingHearts":
      // 4. Парящие сердечки со скруглённым уголком
      return `
        <g fill="url(#particlesGrad)">
          <path d="M82.5 141.5 Q84 143.5 85.5 141.5 L97 128 A8.5 8.5 0 0 0 84 117 A8.5 8.5 0 0 0 71 128 Z" />
          <path d="M314.5 125.5 Q316 127.5 317.5 125.5 L327 114 A7.5 7.5 0 0 0 316 104 A7.5 7.5 0 0 0 305 114 Z" />
          <path d="M72.5 237.5 Q74 239.5 75.5 237.5 L83 228 A6.5 6.5 0 0 0 74 219 A6.5 6.5 0 0 0 65 228 Z" fill="${hi}" />
          <path d="M324.5 227.5 Q326 229.5 327.5 227.5 L335 218 A6.5 6.5 0 0 0 326 209 A6.5 6.5 0 0 0 317 218 Z" fill="${hi}" />
          <circle cx="106" cy="84" r="4" fill="${soft}" />
          <circle cx="294" cy="78" r="4" fill="${soft}" />
        </g>
      `;
    case "sakuraPetals":
      // 5. Лепестки сакуры
      return `
        <g fill="url(#particlesGrad)">
          <path d="M76 112 C88 104, 98 114, 86 126 C78 134, 68 122, 76 112 Z" />
          <path d="M318 98 C330 90, 340 100, 328 112 C320 120, 310 108, 318 98 Z" />
          <path d="M64 216 C76 208, 86 218, 74 230 C66 238, 56 226, 64 216 Z" fill="${hi}" />
          <path d="M330 206 C342 198, 352 208, 340 220 C332 228, 322 216, 330 206 Z" fill="${hi}" />
          <path d="M114 68 C122 62, 130 70, 120 78 C114 84, 108 76, 114 68 Z" fill="${soft}" />
          <path d="M282 64 C290 58, 298 66, 288 74 C282 80, 276 72, 282 64 Z" fill="${soft}" />
        </g>
      `;
    case "argonGeo":
      // 6. Геометрия Аргона со скруглёнными гранями
      return `
        <g fill="url(#particlesGrad)">
          <rect x="69" y="117" width="26" height="26" rx="5" transform="rotate(45 82 130)" />
          <rect x="305" y="103" width="26" height="26" rx="5" transform="rotate(45 318 116)" />
          <path d="M72 228 Q74 225 76 228 L88 246 Q90 249 86 249 L62 249 Q58 249 60 246 Z" fill="${hi}" />
          <path d="M324 216 Q326 213 328 216 L340 234 Q342 237 338 237 L314 237 Q310 237 312 234 Z" fill="${hi}" />
          <rect x="104" y="68" width="12" height="12" rx="3.5" fill="${soft}" transform="rotate(20 110 74)" />
          <rect x="284" y="64" width="12" height="12" rx="3.5" fill="${soft}" transform="rotate(-18 290 70)" />
        </g>
      `;
    case "fireflies":
      // 7. Светлячки-ореолы без прозрачности (двухслойные круги)
      return `
        <g>
          <circle cx="82" cy="128" r="13" fill="${soft}" />
          <circle cx="82" cy="128" r="6" fill="#FFFFFF" />
          <circle cx="318" cy="114" r="14" fill="${soft}" />
          <circle cx="318" cy="114" r="6.5" fill="#FFFFFF" />
          <circle cx="70" cy="232" r="11" fill="${hi}" />
          <circle cx="70" cy="232" r="5" fill="#FFFFFF" />
          <circle cx="330" cy="224" r="12" fill="${hi}" />
          <circle cx="330" cy="224" r="5.5" fill="#FFFFFF" />
          <circle cx="116" cy="72" r="9" fill="${soft}" />
          <circle cx="116" cy="72" r="4" fill="#FFFFFF" />
          <circle cx="286" cy="68" r="9" fill="${soft}" />
          <circle cx="286" cy="68" r="4" fill="#FFFFFF" />
        </g>
      `;
    case "snowflakes":
      // 8. Снежинки-кристаллы без stroke (через скруглённые плашки)
      return `
        <g fill="url(#particlesGrad)">
          <rect x="80.5" y="114" width="3" height="28" rx="1.5" />
          <rect x="68" y="126.5" width="28" height="3" rx="1.5" />
          <rect x="80.5" y="114" width="3" height="28" rx="1.5" transform="rotate(45 82 128)" />
          <rect x="80.5" y="114" width="3" height="28" rx="1.5" transform="rotate(-45 82 128)" />
          <rect x="316.5" y="102" width="3" height="28" rx="1.5" />
          <rect x="304" y="114.5" width="28" height="3" rx="1.5" />
          <rect x="316.5" y="102" width="3" height="28" rx="1.5" transform="rotate(45 318 116)" />
          <rect x="316.5" y="102" width="3" height="28" rx="1.5" transform="rotate(-45 318 116)" />
          <g fill="${hi}">
            <rect x="72.5" y="224" width="3" height="20" rx="1.5" />
            <rect x="64" y="232.5" width="20" height="3" rx="1.5" />
            <rect x="324.5" y="214" width="3" height="20" rx="1.5" />
            <rect x="316" y="222.5" width="20" height="3" rx="1.5" />
          </g>
        </g>
      `;
    case "musicNotes":
      // 9. Музыкальные нотки со сглаженными уголками флажков
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="76" cy="142" r="6" />
          <path d="M80 142 L80 114 Q80 111.5 82.5 112.2 L94.5 115.5 Q96.5 116 96.5 118.5 Q96.5 121.2 94 120.5 L83.5 118 L83.5 142 Z" />
          <circle cx="312" cy="130" r="6" />
          <circle cx="330" cy="126" r="6" />
          <path d="M316 130 L316 102 Q316 99.5 318.5 99 L333.5 96.2 Q336 95.8 336 98.5 L336 126 L332.5 126 L332.5 101 L319.5 104 L319.5 130 Z" />
          <g fill="${hi}">
            <circle cx="72" cy="242" r="5.5" />
            <path d="M75.5 242 L75.5 218 Q75.5 215.5 78 216.2 L87.5 219.5 Q89.5 220 89.5 222.2 Q89.5 224.5 87 223.8 L79 221.5 L79 242 Z" />
          </g>
        </g>
      `;
    case "magicRunes":
      // 10. Магические руны и кольца со скруглёнными вершинами
      return `
        <g fill="url(#particlesGrad)" fill-rule="evenodd">
          <path d="M82 112 A18 18 0 1 0 82 148 A18 18 0 1 0 82 112 Z M82 115 A15 15 0 1 1 82 145 A15 15 0 1 1 82 115 Z" />
          <path d="M80.5 116.5 Q82 114 83.5 116.5 L95 136.5 Q96.5 139 93.5 139 L70.5 139 Q67.5 139 69 136.5 Z M82 121 L73 136 L91 136 Z" />
          <path d="M318 100 A18 18 0 1 0 318 136 A18 18 0 1 0 318 100 Z M318 103 A15 15 0 1 1 318 133 A15 15 0 1 1 318 103 Z" />
          <path d="M316.5 133.5 Q318 136 319.5 133.5 L331 113.5 Q332.5 111 329.5 111 L306.5 111 Q303.5 111 305 113.5 Z M318 129 L309 114 L327 114 Z" />
          <path d="M76 223 A11 11 0 1 0 76 245 A11 11 0 1 0 76 223 Z M76 226 A8 8 0 1 1 76 242 A8 8 0 1 1 76 226 Z" fill="${hi}" />
          <path d="M324 215 A11 11 0 1 0 324 237 A11 11 0 1 0 324 215 Z M324 218 A8 8 0 1 1 324 234 A8 8 0 1 1 324 218 Z" fill="${hi}" />
        </g>
      `;
    case "bubbles":
      // 11. Парящие пузырьки без прозрачностей
      return `
        <g>
          <path d="M82 111 A17 17 0 1 0 82 145 A17 17 0 1 0 82 111 Z M82 114 A14 14 0 1 1 82 142 A14 14 0 1 1 82 114 Z" fill="url(#particlesGrad)" fill-rule="evenodd" />
          <circle cx="76" cy="122" r="3.5" fill="#FFFFFF" />
          <path d="M318 95 A19 19 0 1 0 318 133 A19 19 0 1 0 318 95 Z M318 98 A16 16 0 1 1 318 130 A16 16 0 1 1 318 98 Z" fill="url(#particlesGrad)" fill-rule="evenodd" />
          <circle cx="311" cy="107" r="4" fill="#FFFFFF" />
          <path d="M72 221 A11 11 0 1 0 72 243 A11 11 0 1 0 72 221 Z M72 224 A8 8 0 1 1 72 240 A8 8 0 1 1 72 224 Z" fill="${hi}" fill-rule="evenodd" />
          <path d="M328 212 A12 12 0 1 0 328 236 A12 12 0 1 0 328 212 Z M328 215 A9 9 0 1 1 328 233 A9 9 0 1 1 328 215 Z" fill="${hi}" fill-rule="evenodd" />
          <circle cx="108" cy="82" r="6" fill="${soft}" />
        </g>
      `;
    case "lightningSparks":
      // 12. Разряды молний со сглаженными углами
      return `
        <g fill="url(#particlesGrad)">
          <path d="M86 106 Q88 103 86 108 L72 128 Q70 130 74 130 L82 130 Q85 130 83 133 L75 153 Q73 157 77 152 L96 128 Q98 126 94 126 L86 126 Z" />
          <path d="M314 98 Q312 95 314 100 L328 120 Q330 122 326 122 L318 122 Q315 122 317 125 L325 145 Q327 149 323 144 L304 120 Q302 118 306 118 L314 118 Z" />
          <path d="M76 219 Q77.5 216.5 76.5 220 L67 235 Q66 236.5 69 236.5 L74 236.5 Q76 236.5 75 238.5 L70.5 249 Q69.5 251.5 72 249 L85 233 Q86 231.5 83 231.5 L77 231.5 Z" fill="${hi}" />
          <path d="M324 211 Q322.5 208.5 323.5 212 L333 227 Q334 228.5 331 228.5 L326 228.5 Q324 228.5 325 230.5 L329.5 241 Q330.5 243.5 328 241 L315 225 Q314 223.5 317 223.5 L323 223.5 Z" fill="${hi}" />
        </g>
      `;
    case "saturnRings":
      // 13. Орбиты и мини-планеты без stroke
      return `
        <g>
          <circle cx="82" cy="128" r="10" fill="url(#particlesGrad)" />
          <path d="M82 120 A23 8 0 1 0 82 136 A23 8 0 1 0 82 120 Z M82 123 A19 5 0 1 1 82 133 A19 5 0 1 1 82 123 Z" transform="rotate(-24 82 128)" fill="${hi}" fill-rule="evenodd" />
          <circle cx="318" cy="116" r="11" fill="url(#particlesGrad)" />
          <path d="M318 108 A25 8 0 1 0 318 124 A25 8 0 1 0 318 108 Z M318 111 A21 5 0 1 1 318 121 A21 5 0 1 1 318 111 Z" transform="rotate(22 318 116)" fill="${hi}" fill-rule="evenodd" />
          <circle cx="76" cy="236" r="6" fill="${soft}" />
          <circle cx="324" cy="228" r="7" fill="${soft}" />
        </g>
      `;
    case "feathersAura":
      // 14. Лёгкие пёрышки и листики со сглаженными кончиками и черешками
      return `
        <g fill="url(#particlesGrad)">
          <path d="M71.5 111.5 Q72 108.5 74.5 110.5 C92 117, 97 137, 85.2 152.5 Q84 154.5 82.5 152.5 C70 137, 66 122, 71.5 111.5 Z" />
          <path d="M72 110.5 Q73 109.5 74 110.5 L85 153 Q84 154.5 83 153 Z" fill="${soft}" />
          <path d="M328.5 99.5 Q328 96.5 325.5 98.5 C308 105, 303 125, 314.8 140.5 Q316 142.5 317.5 140.5 C330 125, 334 110, 328.5 99.5 Z" />
          <path d="M328 98.5 Q327 97.5 326 98.5 L315 141 Q316 142.5 317 141 Z" fill="${soft}" />
          <path d="M67.5 219.5 Q68 217 70 218.5 C82 224, 85.5 239, 77 250.5 Q76 252 74.8 250.5 C66 239, 62.5 228, 67.5 219.5 Z" fill="${hi}" />
          <path d="M332.5 211.5 Q332 209 330 210.5 C318 216, 314.5 231, 323 242.5 Q324 244 325.2 242.5 C334 231, 337.5 220, 332.5 211.5 Z" fill="${hi}" />
        </g>
      `;
    case "sunbeams":
      // 15. Солнечные блики (плотные круги боке без прозрачностей)
      return `
        <g>
          <circle cx="82" cy="122" r="16" fill="${soft}" />
          <circle cx="94" cy="136" r="9" fill="${hi}" />
          <circle cx="318" cy="110" r="18" fill="${soft}" />
          <circle cx="304" cy="126" r="10" fill="${hi}" />
          <circle cx="74" cy="232" r="13" fill="url(#particlesGrad)" />
          <circle cx="326" cy="224" r="14" fill="url(#particlesGrad)" />
          <circle cx="112" cy="76" r="7" fill="${hi}" />
          <circle cx="288" cy="72" r="8" fill="${hi}" />
        </g>
      `;
    case "bambooLeaves":
      // 16. Листья бамбука с мягко сглаженными кончиками
      return `
        <g fill="url(#particlesGrad)">
          <path d="M69.5 119.2 Q67.2 117.5 70 116.8 Q86 112 94.8 130.2 Q96.5 133 93.8 133.6 Q78 138 69.5 119.2 Z" />
          <path d="M330.5 109.2 Q332.8 107.5 330 106.8 Q314 102 305.2 120.2 Q303.5 123 306.2 123.6 Q322 128 330.5 109.2 Z" />
          <path d="M65.5 225.2 Q63.2 223.5 66 222.8 Q82 218 88.8 234.2 Q90.5 237 87.8 237.6 Q72 242 65.5 225.2 Z" fill="${hi}" />
          <path d="M334.5 217.2 Q336.8 215.5 334 214.8 Q318 210 311.2 226.2 Q309.5 229 312.2 229.6 Q328 234 334.5 217.2 Z" fill="${hi}" />
        </g>
      `;
    case "mapleLeaves":
      // 17. Осенний клён момидзи
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="80" cy="126" r="10" />
          <ellipse cx="80" cy="112" rx="4" ry="9" />
          <ellipse cx="68" cy="122" rx="9" ry="4" transform="rotate(20 68 122)" />
          <ellipse cx="92" cy="122" rx="9" ry="4" transform="rotate(-20 92 122)" />
          <circle cx="320" cy="116" r="10" fill="${hi}" />
          <ellipse cx="320" cy="102" rx="4" ry="9" fill="${hi}" />
          <ellipse cx="308" cy="112" rx="9" ry="4" transform="rotate(20 308 112)" fill="${hi}" />
          <ellipse cx="332" cy="112" rx="9" ry="4" transform="rotate(-20 332 112)" fill="${hi}" />
        </g>
      `;
    case "butterflies":
      // 18. Порхающие бабочки
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="76" cy="122" r="8" />
          <circle cx="88" cy="122" r="8" />
          <circle cx="78" cy="132" r="6" fill="${hi}" />
          <circle cx="86" cy="132" r="6" fill="${hi}" />
          <circle cx="314" cy="112" r="8" />
          <circle cx="326" cy="112" r="8" />
          <circle cx="316" cy="122" r="6" fill="${hi}" />
          <circle cx="324" cy="122" r="6" fill="${hi}" />
        </g>
      `;
    case "spiritFlames":
      // 19. Огоньки Кицунэ-би с мягкой вершиной пламени
      return `
        <g fill="url(#particlesGrad)">
          <path d="M80.5 105.5 Q82 103 83.5 105.5 C96 122, 96 142, 82 146 C68 142, 68 122, 80.5 105.5 Z" />
          <circle cx="82" cy="134" r="6" fill="${soft}" />
          <path d="M316.5 97.5 Q318 95 319.5 97.5 C332 114, 332 134, 318 138 C304 134, 304 114, 316.5 97.5 Z" />
          <circle cx="318" cy="126" r="6" fill="${soft}" />
          <path d="M72.6 217.5 Q74 215 75.4 217.5 C84 228, 84 242, 74 246 C64 242, 64 228, 72.6 217.5 Z" fill="${hi}" />
          <path d="M324.6 209.5 Q326 207 327.4 209.5 C336 220, 336 234, 326 238 C316 234, 316 220, 324.6 209.5 Z" fill="${hi}" />
        </g>
      `;
    case "waterDrops":
      // 20. Капли росы со сглаженной капельной верхушкой
      return `
        <g fill="url(#particlesGrad)">
          <path d="M80.5 109.5 Q82 107 83.5 109.5 C92 124, 92 138, 82 138 C72 138, 72 124, 80.5 109.5 Z" />
          <path d="M316.5 99.5 Q318 97 319.5 99.5 C328 114, 328 128, 318 128 C308 128, 308 114, 316.5 99.5 Z" />
          <path d="M70.6 221.5 Q72 219 73.4 221.5 C80 232, 80 242, 72 242 C64 242, 64 232, 70.6 221.5 Z" fill="${hi}" />
          <path d="M326.6 213.5 Q328 211 329.4 213.5 C336 224, 336 234, 328 234 C320 234, 320 224, 326.6 213.5 Z" fill="${hi}" />
        </g>
      `;
    case "crystalShards":
      // 21. Осколки кристаллов со скруглёнными углами
      return `
        <g fill="url(#particlesGrad)">
          <rect x="72" y="112" width="16" height="28" rx="5" transform="rotate(-18 80 126)" />
          <rect x="312" y="102" width="16" height="28" rx="5" transform="rotate(18 320 116)" />
          <rect x="66" y="220" width="12" height="22" rx="4" transform="rotate(14 72 231)" fill="${hi}" />
          <rect x="322" y="212" width="12" height="22" rx="4" transform="rotate(-14 328 223)" fill="${hi}" />
        </g>
      `;
    case "cyberPixels":
      // 22. Кибер-пиксели
      return `
        <g fill="url(#particlesGrad)">
          <rect x="70" y="112" width="16" height="16" rx="4" />
          <rect x="90" y="128" width="10" height="10" rx="3" fill="${hi}" />
          <rect x="314" y="102" width="16" height="16" rx="4" />
          <rect x="300" y="118" width="10" height="10" rx="3" fill="${hi}" />
          <rect x="66" y="224" width="14" height="14" rx="3.5" fill="${soft}" />
          <rect x="320" y="216" width="14" height="14" rx="3.5" fill="${soft}" />
        </g>
      `;
    case "binaryMatrix":
      // 23. Цифровой поток
      return `
        <g fill="url(#particlesGrad)">
          <rect x="74" y="96" width="6" height="22" rx="3" />
          <circle cx="77" cy="128" r="4" fill="${hi}" />
          <rect x="74" y="140" width="6" height="18" rx="3" />
          <rect x="320" y="92" width="6" height="22" rx="3" />
          <circle cx="323" cy="124" r="4" fill="${hi}" />
          <rect x="320" y="136" width="6" height="18" rx="3" />
          <rect x="64" y="206" width="6" height="24" rx="3" fill="${soft}" />
          <rect x="330" y="202" width="6" height="24" rx="3" fill="${soft}" />
        </g>
      `;
    case "crescentMoons":
      // 24. Полумесяцы и звёзды с мягко скруглёнными рожками
      return `
        <g fill="url(#particlesGrad)">
          <path d="M87 112.5 Q89.5 111.5 88.2 114 A11 11 0 1 1 88.2 138 Q89.5 140.5 87 139.5 A14 14 0 1 0 87 112.5 Z" />
          <path d="M313 102.5 Q310.5 101.5 311.8 104 A11 11 0 1 0 311.8 128 Q310.5 130.5 313 129.5 A14 14 0 1 1 313 102.5 Z" />
          <circle cx="72" cy="232" r="7" fill="${hi}" />
          <circle cx="328" cy="224" r="7" fill="${hi}" />
        </g>
      `;
    case "goldenHalos":
      // 25. Священные кольца
      return `
        <g fill="url(#particlesGrad)" fill-rule="evenodd">
          <path d="M82 110 A18 18 0 1 0 82 146 A18 18 0 1 0 82 110 Z M82 116 A12 12 0 1 0 82 140 A12 12 0 1 0 82 116 Z" />
          <path d="M318 100 A18 18 0 1 0 318 136 A18 18 0 1 0 318 100 Z M318 106 A12 12 0 1 0 318 130 A12 12 0 1 0 318 106 Z" />
          <path d="M74 220 A12 12 0 1 0 74 244 A12 12 0 1 0 74 220 Z M74 225 A7 7 0 1 0 74 239 A7 7 0 1 0 74 225 Z" fill="${hi}" />
          <path d="M326 212 A12 12 0 1 0 326 236 A12 12 0 1 0 326 212 Z M326 217 A7 7 0 1 0 326 231 A7 7 0 1 0 326 217 Z" fill="${hi}" />
        </g>
      `;
    case "origamiCranes":
      // 26. Бумажные журавлики со скруглёнными крыльями
      return `
        <g fill="url(#particlesGrad)">
          <path d="M66 126.5 Q63 128 66 129.5 L80 135.2 Q82 136 84 135 L96 129.2 Q99 127.8 96.5 125.5 L88 114 Q86 109 82 112 Z" />
          <path d="M334 116.5 Q337 118 334 119.5 L320 125.2 Q318 126 316 125 L304 119.2 Q301 117.8 303.5 115.5 L312 104 Q314 99 318 102 Z" />
          <path d="M62 230.5 Q59.5 232 62 233.2 L72.5 237.5 Q74 238.2 75.5 237.5 L86 233 Q88.5 232 86.5 230 L77.5 219.5 Q76 217.8 74 219.5 Z" fill="${hi}" />
          <path d="M338 222.5 Q340.5 224 338 225.2 L327.5 229.5 Q326 230.2 324.5 229.5 L314 225 Q311.5 224 313.5 222 L322.5 211.5 Q324 209.8 326 211.5 Z" fill="${hi}" />
        </g>
      `;
    case "lotusPetalsAura":
      // 27. Вихрь лотоса
      return `
        <g fill="url(#particlesGrad)">
          <ellipse cx="78" cy="124" rx="14" ry="7" transform="rotate(-30 78 124)" />
          <ellipse cx="322" cy="114" rx="14" ry="7" transform="rotate(30 322 114)" />
          <ellipse cx="70" cy="228" rx="12" ry="6" transform="rotate(25 70 228)" fill="${hi}" />
          <ellipse cx="330" cy="220" rx="12" ry="6" transform="rotate(-25 330 220)" fill="${hi}" />
          <ellipse cx="108" cy="76" rx="10" ry="5" transform="rotate(-15 108 76)" fill="${soft}" />
          <ellipse cx="292" cy="72" rx="10" ry="5" transform="rotate(15 292 72)" fill="${soft}" />
        </g>
      `;
    case "dandelionSeeds":
      // 28. Пушинки одуванчика
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="80" cy="120" r="8" fill="${soft}" />
          <rect x="78.5" y="126" width="3" height="14" rx="1.5" />
          <circle cx="320" cy="110" r="8" fill="${soft}" />
          <rect x="318.5" y="116" width="3" height="14" rx="1.5" />
          <circle cx="72" cy="228" r="6" fill="${hi}" />
          <circle cx="328" cy="220" r="6" fill="${hi}" />
        </g>
      `;
    case "miniClouds":
      // 29. Облачка кинтоун
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="72" cy="128" r="10" />
          <circle cx="84" cy="124" r="12" />
          <circle cx="96" cy="128" r="9" />
          <circle cx="304" cy="118" r="9" />
          <circle cx="316" cy="114" r="12" />
          <circle cx="328" cy="118" r="10" />
          <circle cx="74" cy="234" r="10" fill="${hi}" />
          <circle cx="86" cy="234" r="8" fill="${hi}" />
        </g>
      `;
    case "rainbowDrops":
      // 30. Конфетти радости
      return `
        <g>
          <circle cx="78" cy="118" r="7" fill="url(#particlesGrad)" />
          <rect x="86" y="138" width="12" height="12" rx="4" transform="rotate(20 92 144)" fill="${hi}" />
          <circle cx="322" cy="108" r="7" fill="url(#particlesGrad)" />
          <rect x="302" y="128" width="12" height="12" rx="4" transform="rotate(-20 308 134)" fill="${hi}" />
          <circle cx="70" cy="228" r="6" fill="${soft}" />
          <circle cx="330" cy="220" r="6" fill="${soft}" />
        </g>
      `;
    case "floatingRunes":
      // 31. Древние глифы
      return `
        <g fill="url(#particlesGrad)">
          <rect x="72" y="112" width="18" height="24" rx="5" />
          <circle cx="81" cy="124" r="4" fill="#FFFFFF" />
          <rect x="310" y="102" width="18" height="24" rx="5" />
          <circle cx="319" cy="114" r="4" fill="#FFFFFF" />
          <rect x="66" y="220" width="14" height="20" rx="4" fill="${hi}" />
          <rect x="320" y="212" width="14" height="20" rx="4" fill="${hi}" />
        </g>
      `;
    case "plasmaOrbs":
      // 32. Сферы плазмы
      return `
        <g>
          <circle cx="80" cy="124" r="14" fill="url(#particlesGrad)" />
          <circle cx="80" cy="124" r="7" fill="${soft}" />
          <circle cx="320" cy="114" r="14" fill="url(#particlesGrad)" />
          <circle cx="320" cy="114" r="7" fill="${soft}" />
          <circle cx="72" cy="232" r="10" fill="${hi}" />
          <circle cx="328" cy="224" r="10" fill="${hi}" />
        </g>
      `;
    case "cometTails":
      // 33. Кометы вокруг со сглаженными шлейфами
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="88" cy="116" r="8" fill="${hi}" />
          <path d="M86 111 Q88 109.5 89.5 111.5 L91.5 119.5 Q92.5 121.5 90.5 122.8 L62 140 Q56 142 60 138 Z" />
          <circle cx="312" cy="106" r="8" fill="${hi}" />
          <path d="M314 101 Q312 99.5 310.5 101.5 L308.5 109.5 Q307.5 111.5 309.5 112.8 L338 130 Q344 132 340 128 Z" />
        </g>
      `;
    case "cloverLeaves":
      // 34. Четырёхлистный клевер
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="76" cy="120" r="6" />
          <circle cx="86" cy="120" r="6" />
          <circle cx="76" cy="130" r="6" />
          <circle cx="86" cy="130" r="6" />
          <circle cx="314" cy="110" r="6" fill="${hi}" />
          <circle cx="324" cy="110" r="6" fill="${hi}" />
          <circle cx="314" cy="120" r="6" fill="${hi}" />
          <circle cx="324" cy="120" r="6" fill="${hi}" />
        </g>
      `;
    case "rosePetals":
      // 35. Лепестки роз
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="80" cy="124" r="9" />
          <circle cx="320" cy="114" r="9" />
          <circle cx="70" cy="228" r="7" fill="${hi}" />
          <circle cx="330" cy="220" r="7" fill="${hi}" />
          <circle cx="106" cy="78" r="6" fill="${soft}" />
          <circle cx="294" cy="74" r="6" fill="${soft}" />
        </g>
      `;
    case "diamondDust":
      // 36. Алмазная крошка со скруглёнными углами
      return `
        <g fill="url(#particlesGrad)">
          <rect x="74" y="116" width="14" height="14" rx="3.5" transform="rotate(45 81 123)" />
          <rect x="312" y="106" width="14" height="14" rx="3.5" transform="rotate(45 319 113)" />
          <rect x="66" y="224" width="10" height="10" rx="2.5" transform="rotate(45 71 229)" fill="${hi}" />
          <rect x="324" y="216" width="10" height="10" rx="2.5" transform="rotate(45 329 221)" fill="${hi}" />
          <rect x="102" y="72" width="8" height="8" rx="2" transform="rotate(45 106 76)" fill="${soft}" />
          <rect x="290" y="68" width="8" height="8" rx="2" transform="rotate(45 294 72)" fill="${soft}" />
        </g>
      `;
    case "holyCrosses":
      // 37. Сияющие крестики
      return `
        <g fill="url(#particlesGrad)">
          <rect x="78" y="110" width="6" height="24" rx="3" />
          <rect x="69" y="119" width="24" height="6" rx="3" />
          <rect x="316" y="100" width="6" height="24" rx="3" />
          <rect x="307" y="109" width="24" height="6" rx="3" />
          <rect x="70" y="220" width="5" height="18" rx="2.5" fill="${hi}" />
          <rect x="63.5" y="226.5" width="18" height="5" rx="2.5" fill="${hi}" />
          <rect x="325" y="212" width="5" height="18" rx="2.5" fill="${hi}" />
          <rect x="318.5" y="218.5" width="18" height="5" rx="2.5" fill="${hi}" />
        </g>
      `;
    case "batSwarm":
      // 38. Ночные мышки
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="82" cy="124" r="5" />
          <ellipse cx="72" cy="122" rx="9" ry="4" transform="rotate(-20 72 122)" />
          <ellipse cx="92" cy="122" rx="9" ry="4" transform="rotate(20 92 122)" />
          <circle cx="318" cy="114" r="5" />
          <ellipse cx="308" cy="112" rx="9" ry="4" transform="rotate(-20 308 112)" />
          <ellipse cx="328" cy="112" rx="9" ry="4" transform="rotate(20 328 112)" />
        </g>
      `;
    case "ghostWisps":
      // 39. Духи-призраки с мягким контуром
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="80" cy="120" r="11" />
          <path d="M69 120 Q80 118 91 120 L84 144 Q80 148 76 144 Z" />
          <circle cx="77" cy="118" r="2" fill="#FFFFFF" />
          <circle cx="83" cy="118" r="2" fill="#FFFFFF" />
          <circle cx="320" cy="110" r="11" fill="${hi}" />
          <path d="M309 110 Q320 108 331 110 L324 134 Q320 138 316 134 Z" fill="${hi}" />
        </g>
      `;
    case "cherryBlossomStorm":
      // 40. Вихрь сакуры
      return `
        <g fill="url(#particlesGrad)">
          <ellipse cx="72" cy="108" rx="9" ry="5" transform="rotate(25 72 108)" />
          <ellipse cx="92" cy="136" rx="8" ry="4" transform="rotate(-15 92 136)" fill="${hi}" />
          <ellipse cx="64" cy="184" rx="9" ry="5" transform="rotate(40 64 184)" />
          <ellipse cx="82" cy="238" rx="8" ry="4" transform="rotate(-25 82 238)" fill="${soft}" />
          <ellipse cx="328" cy="102" rx="9" ry="5" transform="rotate(-25 328 102)" />
          <ellipse cx="308" cy="132" rx="8" ry="4" transform="rotate(15 308 132)" fill="${hi}" />
          <ellipse cx="336" cy="180" rx="9" ry="5" transform="rotate(-40 336 180)" />
          <ellipse cx="318" cy="234" rx="8" ry="4" transform="rotate(25 318 234)" fill="${soft}" />
        </g>
      `;
    case "neonTriangles":
      // 41. Неоновые треугольники со скруглёнными углами
      return `
        <g fill="url(#particlesGrad)">
          <path d="M78 110 Q80 106 82 110 L92 128 Q94 132 90 132 L70 132 Q66 132 68 128 Z" />
          <path d="M318 100 Q320 96 322 100 L332 118 Q334 122 330 122 L310 122 Q306 122 308 118 Z" />
          <path d="M70 220 Q72 216 74 220 L82 234 Q84 238 80 238 L64 238 Q60 238 62 234 Z" fill="${hi}" />
          <path d="M326 212 Q328 208 330 212 L338 226 Q340 230 336 230 L320 230 Q316 230 318 226 Z" fill="${hi}" />
        </g>
      `;
    case "celestialSunMoon":
      // 42. Солнце и Луна со сглаженными рожками
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="80" cy="124" r="14" />
          <circle cx="80" cy="124" r="8" fill="${hi}" />
          <path d="M323 106.5 Q325.5 105.5 324.2 108 A13 13 0 1 1 324.2 136 Q325.5 138.5 323 137.5 A16 16 0 1 0 323 106.5 Z" />
        </g>
      `;
    case "zenStonesAura":
      // 43. Парящие камни Дзен
      return `
        <g fill="url(#particlesGrad)">
          <ellipse cx="80" cy="134" rx="14" ry="8" />
          <ellipse cx="80" cy="122" rx="10" ry="6" fill="${hi}" />
          <ellipse cx="80" cy="112" rx="6" ry="4" fill="${soft}" />
          <ellipse cx="320" cy="126" rx="14" ry="8" />
          <ellipse cx="320" cy="114" rx="10" ry="6" fill="${hi}" />
          <ellipse cx="320" cy="104" rx="6" ry="4" fill="${soft}" />
        </g>
      `;
    case "goldenCrownSparks":
      // 44. Королевское сияние
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="82" cy="118" r="8" />
          <circle cx="106" cy="78" r="6" fill="${hi}" />
          <circle cx="318" cy="118" r="8" />
          <circle cx="294" cy="78" r="6" fill="${hi}" />
          <circle cx="72" cy="224" r="6" fill="${soft}" />
          <circle cx="328" cy="224" r="6" fill="${soft}" />
        </g>
      `;
    case "musicalWaves":
      // 45. Звуковые волны
      return `
        <g fill="url(#particlesGrad)">
          <rect x="64" y="122" width="6" height="18" rx="3" />
          <rect x="74" y="112" width="6" height="38" rx="3" fill="${hi}" />
          <rect x="84" y="120" width="6" height="22" rx="3" />
          <rect x="310" y="120" width="6" height="22" rx="3" />
          <rect x="320" y="112" width="6" height="38" rx="3" fill="${hi}" />
          <rect x="330" y="122" width="6" height="18" rx="3" />
        </g>
      `;
    case "candyStars":
      // 46. Конфеты компэйто
      return `
        <g fill="url(#particlesGrad)">
          <circle cx="80" cy="122" r="9" />
          <circle cx="80" cy="111" r="4" />
          <circle cx="80" cy="133" r="4" />
          <circle cx="69" cy="122" r="4" />
          <circle cx="91" cy="122" r="4" />
          <circle cx="320" cy="114" r="9" fill="${hi}" />
          <circle cx="320" cy="103" r="4" fill="${hi}" />
          <circle cx="320" cy="125" r="4" fill="${hi}" />
          <circle cx="309" cy="114" r="4" fill="${hi}" />
          <circle cx="331" cy="114" r="4" fill="${hi}" />
        </g>
      `;
    case "paperLanterns":
      // 47. Небесные фонарики
      return `
        <g fill="url(#particlesGrad)">
          <rect x="70" y="110" width="20" height="26" rx="8" />
          <rect x="74" y="136" width="12" height="4" rx="2" fill="${deep}" />
          <rect x="310" y="102" width="20" height="26" rx="8" />
          <rect x="314" y="128" width="12" height="4" rx="2" fill="${deep}" />
        </g>
      `;
    case "dragonScalesAura":
      // 48. Драконьи искры со сглаженными краями
      return `
        <g fill="url(#particlesGrad)">
          <path d="M72.5 129 A10 10 0 1 1 91.5 129 Q92 131 90.5 132.5 Q82 141.5 73.5 132.5 Q72 131 72.5 129 Z" />
          <path d="M308.5 119 A10 10 0 1 1 327.5 119 Q328 121 326.5 122.5 Q318 131.5 309.5 122.5 Q308 121 308.5 119 Z" />
          <path d="M64.5 229 A8 8 0 1 1 79.5 229 Q80 231 78.8 232.2 Q72 239.5 65.2 232.2 Q64 231 64.5 229 Z" fill="${hi}" />
          <path d="M320.5 221 A8 8 0 1 1 335.5 221 Q336 223 334.8 224.2 Q328 231.5 321.2 224.2 Q320 223 320.5 221 Z" fill="${hi}" />
        </g>
      `;
    case "auroraRibbons":
      // 49. Северное сияние со скруглёнными концами лент
      return `
        <g fill="url(#particlesGrad)">
          <path d="M64.5 146 C59 118, 86 98, 91.5 74 Q92.5 70.5 96.5 72 L100.5 73.8 Q103 75 101.8 78.5 C95.5 103, 69 122, 73.8 146 Q74.5 149.5 70 149.5 L67 149.5 Q64 149.5 64.5 146 Z" />
          <path d="M335.5 140 C341 112, 314 92, 308.5 68 Q307.5 64.5 303.5 66 L299.5 67.8 Q297 69 298.2 72.5 C304.5 97, 331 116, 326.2 140 Q325.5 143.5 330 143.5 L333 143.5 Q336 143.5 335.5 140 Z" />
        </g>
      `;
    case "argonConstellation":
      // 50. Созвездие Аргона
      return `
        <g fill="url(#particlesGrad)">
          <rect x="75" y="108" width="3" height="32" rx="1.5" transform="rotate(-22 76 124)" fill="${soft}" />
          <circle cx="70" cy="110" r="6" fill="${hi}" />
          <circle cx="82" cy="138" r="7" />
          <rect x="322" y="100" width="3" height="32" rx="1.5" transform="rotate(22 323 116)" fill="${soft}" />
          <circle cx="330" cy="102" r="6" fill="${hi}" />
          <circle cx="318" cy="130" r="7" />
        </g>
      `;
    default:
      return "";
  }
}

// Сборка полного SVG-документа с интерактивными областями клика (data-part), анимацией ушек, наклоном головы (±7°), бликами 45° и поддержкой покадрового экспорта GIF
function buildSvgString(gifTimeSec = null) {
  currentGifTimeSec = typeof gifTimeSec === "number" ? gifTimeSec : null;
  try {
  const skin = buildShades(state.colors.skin);
  const earsShades = buildShades(state.colors.ears);
  const earringsShades = buildShades(state.colors.earrings);
  const hairShortShades = buildShades(state.colors.hairShort);
  const hairBackShades = buildShades(state.colors.hairBack);
  const hairBangsShades = buildShades(state.colors.hairBangs);
  const hairTopShades = buildShades(state.colors.hairTop);
  const beardShades = buildShades(state.colors.facialHair);
  const bodyShades = buildShades(state.colors.bodyShape);
  const detailShades = buildShades(state.colors.clothDetail);
  const pocketShades = buildShades(state.colors.clothPocket);
  const handsShades = buildShades(state.colors.hands);
  const glassesShades = buildShades(state.colors.glasses);
  const hornsShades = buildShades(state.colors.horns);
  const hatShades = buildShades(state.colors.hat);
  const accShades = buildShades(state.colors.acc);
  const particlesShades = buildShades(state.colors.particles);

  const bgObj = BACKGROUNDS.find((b) => b.id === state.bg) || BACKGROUNDS[0];
  const bgCustomShades = buildShades(state.colors.bg);
  const bgTop = state.useCustomBg ? bgCustomShades.soft.slice(1) : bgObj.top;
  const bgMid = state.useCustomBg ? bgCustomShades.hi.slice(1) : bgObj.mid;
  const bgCore = state.useCustomBg ? bgCustomShades.base.slice(1) : bgObj.core;
  const bgBottom = state.useCustomBg ? bgCustomShades.shadow.slice(1) : bgObj.bottom;

  const noiseUri = getNoiseDataUri("normal");

  // Разметка фона: линейная база + мягкое радиальное градиентное пятно в центре
  const rawBgMarkup = `
    <rect x="0" y="0" width="400" height="400" fill="url(#${bgObj.id}-base)" />
    <ellipse cx="200" cy="176" rx="210" ry="188" fill="url(#${bgObj.id}-core)" />
  `;

  const allMasks = LAYER_KEYS.map((k) => buildGeoSubtractionMask(k)).join("\n");

  const hairShortMarkup = renderHairShort(state.hairShort);
  const hairBackMarkup = renderHairBack(state.hairBack).replaceAll("url(#hairGrad)", "url(#hairBackGrad)");
  const hairBangsMarkup = renderHairBangs(state.hairBangs).replaceAll("url(#hairGrad)", "url(#hairBangsGrad)");
  const hairTopMarkup = renderHairTop(state.hairTop).replaceAll("url(#hairGrad)", "url(#hairTopGrad)");

  const accMarkup = renderAccessories(state.acc, accShades);
  const isClothMask = state.acc === "mask";
  const isNosePlaster = state.acc === "nosePlaster";
  const glassesMarkup = renderGlasses(state.glasses);
  const hatMarkup = renderHat(state.hat, hatShades);
  const isAstroHelmet = state.hat === "astroHelmet";

  const offHands = state.handsOffset || { leftX: 0, leftY: 0, rightX: 0, rightY: 0 };
  const isDoubleHeartHands = state.handLeft === "heartHalf" && state.handRight === "heartHalf";
  const sharedHandsDx = +(((offHands.leftX || 0) + (offHands.rightX || 0)) * 0.35).toFixed(1);
  const sharedHandsDy = +(((offHands.leftY || 0) + (offHands.rightY || 0)) * 0.35).toFixed(1);
  const hLx = isDoubleHeartHands ? +(200 + sharedHandsDx).toFixed(1) : +(96 + (offHands.leftX || 0)).toFixed(1);
  const hLy = isDoubleHeartHands ? +(290 + sharedHandsDy).toFixed(1) : +(288 + (offHands.leftY || 0)).toFixed(1);
  const hRx = isDoubleHeartHands ? +(200 + sharedHandsDx).toFixed(1) : +(304 + (offHands.rightX || 0)).toFixed(1);
  const hRy = isDoubleHeartHands ? +(290 + sharedHandsDy).toFixed(1) : +(288 + (offHands.rightY || 0)).toFixed(1);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" class="avatar-svg" id="argon-svg">
    <defs>
      <style>
        .blend-overlay { mix-blend-mode: overlay; }
        .blend-multiply { mix-blend-mode: multiply; }
        .blend-soft { mix-blend-mode: soft-light; }
        .blend-screen { mix-blend-mode: screen; }
        .mask-alpha { mask-type: alpha; }
        @keyframes argonNoiseShift {
          0%   { transform: translate(0px, 0px); }
          14%  { transform: translate(-27px, 19px); }
          28%  { transform: translate(23px, -31px); }
          42%  { transform: translate(-35px, -17px); }
          57%  { transform: translate(31px, 25px); }
          71%  { transform: translate(-19px, 33px); }
          85%  { transform: translate(29px, -21px); }
          100% { transform: translate(-23px, -29px); }
        }
        .anim-noise-layer { animation: argonNoiseShift 0.56s steps(1, end) infinite; }

        /* Моргание для любого типа глаз относительно собственного центра каждого глаза (без бровей) */
        .eye-blink-unit {
          transform-box: fill-box;
          transform-origin: center;
          animation: argonEyeBlink 4.2s ease-in-out infinite;
        }
        @keyframes argonEyeBlink {
          0%, 42%, 48%, 88%, 94%, 100% { transform: scaleY(1) scaleX(1); }
          45% { transform: scaleY(0.07) scaleX(1.06); }
          91% { transform: scaleY(0.07) scaleX(1.06); }
          97% { transform: scaleY(0.07) scaleX(1.06); }
        }

        /* Отдельное плавное движение бровей (немного поднимаются вверх и опускаются обратно, не сжимаясь при моргании) */
        .eye-brow-unit {
          animation: argonBrowLift 2.4s ease-in-out infinite;
        }
        @keyframes argonBrowLift {
          0%, 100% { transform: translateY(0px); }
          45%, 55% { transform: translateY(-2.8px); }
        }

        /* Диагональный блик-полоска под углом 45° (статичный и в движении по очкам, серьгам, рогам и шапкам) */
        .glare-static-pos {
          transform: translate(-12px, 0px);
        }
        @keyframes argonGlareSweep {
          0% { transform: translate(-210px, -30px); opacity: 0; }
          10% { opacity: 1; }
          55% { transform: translate(210px, 30px); opacity: 1; }
          65%, 100% { transform: translate(210px, 30px); opacity: 0; }
        }
        .glare-sweep-0 { animation: argonGlareSweep 3.2s ease-in-out infinite; }
        .glare-sweep-1 { animation: argonGlareSweep 3.2s ease-in-out -0.45s infinite; }
        .glare-sweep-2 { animation: argonGlareSweep 3.2s ease-in-out -0.95s infinite; }
        .glare-sweep-3 { animation: argonGlareSweep 3.2s ease-in-out -1.45s infinite; }

        /* Независимое парение каждой частицы ауры с изменением размера на ±5% (0.95..1.05) */
        .particle-unit {
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes particleFloat0 {
          0%, 100% { transform: translate(0px, 0px) scale(0.95); }
          50% { transform: translate(6px, -14px) scale(1.05); }
        }
        @keyframes particleFloat1 {
          0%, 100% { transform: translate(0px, 0px) scale(1.05); }
          50% { transform: translate(-8px, -11px) scale(0.95); }
        }
        @keyframes particleFloat2 {
          0%, 100% { transform: translate(0px, 0px) scale(0.96); }
          33% { transform: translate(-6px, 9px) scale(1.05); }
          66% { transform: translate(7px, -9px) scale(0.95); }
        }
        @keyframes particleFloat3 {
          0%, 100% { transform: translate(0px, 0px) scale(1.04); }
          50% { transform: translate(9px, 10px) scale(0.95); }
        }
        @keyframes particleFloat4 {
          0%, 100% { transform: translate(0px, 0px) scale(0.95); }
          40% { transform: translate(-9px, -13px) scale(1.05); }
          80% { transform: translate(5px, 6px) scale(0.97); }
        }
        @keyframes particleFloat5 {
          0%, 100% { transform: translate(0px, 0px) scale(1.05); }
          50% { transform: translate(-5px, 13px) scale(0.95); }
        }
        .particle-unit-0 { animation: particleFloat0 2.3s ease-in-out infinite; }
        .particle-unit-1 { animation: particleFloat1 2.9s ease-in-out -0.6s infinite; }
        .particle-unit-2 { animation: particleFloat2 3.4s ease-in-out -1.3s infinite; }
        .particle-unit-3 { animation: particleFloat3 2.6s ease-in-out -1.9s infinite; }
        .particle-unit-4 { animation: particleFloat4 3.1s ease-in-out -0.9s infinite; }
        .particle-unit-5 { animation: particleFloat5 2.7s ease-in-out -2.2s infinite; }

        /* 1. Синхронное парение (5% = ±18..20px по вертикали) */
        @keyframes handFloatSync {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(0px, -19px); }
        }
        .hand-anim-L-floatSync, .hand-anim-R-floatSync { animation: handFloatSync 2.4s ease-in-out infinite; }

        /* 2. Качели в противофазе (±19px) */
        @keyframes handFloatAltL {
          0%, 100% { transform: translate(0px, -16px); }
          50% { transform: translate(0px, 16px); }
        }
        @keyframes handFloatAltR {
          0%, 100% { transform: translate(0px, 16px); }
          50% { transform: translate(0px, -16px); }
        }
        .hand-anim-L-floatAlt { animation: handFloatAltL 2.2s ease-in-out infinite; }
        .hand-anim-R-floatAlt { animation: handFloatAltR 2.2s ease-in-out infinite; }

        /* 3. Приветственный взмах (±18px и мягкий наклон) */
        @keyframes handWaveL {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-14px, -14px) rotate(-8deg); }
          75% { transform: translate(12px, -8px) rotate(7deg); }
        }
        @keyframes handWaveR {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(14px, -14px) rotate(8deg); }
          75% { transform: translate(-12px, -8px) rotate(-7deg); }
        }
        .hand-anim-L-waveHello { transform-box: view-box; transform-origin: ${hLx}px ${hLy}px; animation: handWaveL 1.8s ease-in-out infinite; }
        .hand-anim-R-waveHello { transform-box: view-box; transform-origin: ${hRx}px ${hRy}px; animation: handWaveR 1.8s ease-in-out infinite; }

        /* 4. Ритмичный пульс (масштаб ±5% + подъём) */
        @keyframes handPulseBeat {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(0px, -14px) scale(1.06); }
        }
        .hand-anim-L-pulseBeat { transform-box: view-box; transform-origin: ${hLx}px ${hLy}px; animation: handPulseBeat 1.3s ease-in-out infinite; }
        .hand-anim-R-pulseBeat { transform-box: view-box; transform-origin: ${hRx}px ${hRy}px; animation: handPulseBeat 1.3s ease-in-out infinite; }

        /* 5. Круговая орбита (радиус ~16px = 4..5%) */
        @keyframes handOrbitL {
          0% { transform: translate(0px, -15px); }
          25% { transform: translate(15px, 0px); }
          50% { transform: translate(0px, 15px); }
          75% { transform: translate(-15px, 0px); }
          100% { transform: translate(0px, -15px); }
        }
        @keyframes handOrbitR {
          0% { transform: translate(0px, -15px); }
          25% { transform: translate(-15px, 0px); }
          50% { transform: translate(0px, 15px); }
          75% { transform: translate(15px, 0px); }
          100% { transform: translate(0px, -15px); }
        }
        .hand-anim-L-orbitCircle { animation: handOrbitL 2.8s linear infinite; }
        .hand-anim-R-orbitCircle { animation: handOrbitR 2.8s linear infinite; }

        /* 6. Сближение ладошек (горизонтальный сдвиг на 5% = 19px к центру) */
        @keyframes handClapL {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(19px, -8px); }
        }
        @keyframes handClapR {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-19px, -8px); }
        }
        .hand-anim-L-clapBounce { animation: handClapL 1.5s ease-in-out infinite; }
        .hand-anim-R-clapBounce { animation: handClapR 1.5s ease-in-out infinite; }

        /* 7. Радостный трепет (быстрые колебания в пределах 5%) */
        @keyframes handShiverL {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(-10px, -14px); }
          50% { transform: translate(10px, -6px); }
          75% { transform: translate(-8px, -16px); }
        }
        @keyframes handShiverR {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(10px, -14px); }
          50% { transform: translate(-10px, -6px); }
          75% { transform: translate(8px, -16px); }
        }
        .hand-anim-L-shiverExcite { animation: handShiverL 0.75s ease-in-out infinite; }
        .hand-anim-R-shiverExcite { animation: handShiverR 0.75s ease-in-out infinite; }

        /* 8. Дзен-маятник (плавное горизонтальное покачивание на 5% = ±18px) */
        @keyframes handZenSway {
          0%, 100% { transform: translate(-17px, -4px); }
          50% { transform: translate(17px, -4px); }
        }
        .hand-anim-L-zenSway, .hand-anim-R-zenSway { animation: handZenSway 3.4s ease-in-out infinite; }

        /* 9. Восьмёрка (плавная траектория ∞ в пределах 5%) */
        @keyframes handFigEightL {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(15px, -12px); }
          50% { transform: translate(0px, 0px); }
          75% { transform: translate(-15px, 12px); }
        }
        @keyframes handFigEightR {
          0%, 100% { transform: translate(0px, 0px); }
          25% { transform: translate(-15px, -12px); }
          50% { transform: translate(0px, 0px); }
          75% { transform: translate(15px, 12px); }
        }
        .hand-anim-L-figureEight { animation: handFigEightL 3.0s ease-in-out infinite; }
        .hand-anim-R-figureEight { animation: handFigEightR 3.0s ease-in-out infinite; }

        /* 10. Магический каст (левитация по диагонали на 5% с вращением) */
        @keyframes handMagicL {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          40% { transform: translate(12px, -19px) rotate(6deg); }
          70% { transform: translate(-8px, -11px) rotate(-4deg); }
        }
        @keyframes handMagicR {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          40% { transform: translate(-12px, -19px) rotate(-6deg); }
          70% { transform: translate(8px, -11px) rotate(4deg); }
        }
        .hand-anim-L-magicCast { transform-box: view-box; transform-origin: ${hLx}px ${hLy}px; animation: handMagicL 2.5s ease-in-out infinite; }
        .hand-anim-R-magicCast { transform-box: view-box; transform-origin: ${hRx}px ${hRy}px; animation: handMagicR 2.5s ease-in-out infinite; }

        /* Анимация всех видов ушек и серёжек (покачивание/подёргивание вокруг основания ушей 152,200 и 248,200) */
        @keyframes argonEarWiggleL {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(8deg); }
          45% { transform: translateY(1px) rotate(-4deg); }
          65% { transform: translateY(-2px) rotate(6.5deg); }
          82% { transform: translateY(0px) rotate(-2deg); }
        }
        @keyframes argonEarWiggleR {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(-8deg); }
          45% { transform: translateY(1px) rotate(4deg); }
          65% { transform: translateY(-2px) rotate(-6.5deg); }
          82% { transform: translateY(0px) rotate(2deg); }
        }
        .ear-anim-L { transform-box: view-box; transform-origin: 152px 200px; animation: argonEarWiggleL 2.4s ease-in-out infinite; }
        .ear-anim-R { transform-box: view-box; transform-origin: 248px 200px; animation: argonEarWiggleR 2.4s ease-in-out infinite; }

        /* 8 пресетов анимации наклона головы и всех её наследующих слоёв (±7° в каждую сторону от 0° на севере вокруг основания шеи 200,256) */
        .head-tilt-group { transform-box: view-box; transform-origin: 200px 256px; }
        @keyframes headPendulumSmooth {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-7deg); }
          75% { transform: rotate(7deg); }
        }
        @keyframes headCuriousTilt {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          20%, 38% { transform: translateY(-1.5px) rotate(7deg); }
          52% { transform: translateY(0px) rotate(0deg); }
          70%, 86% { transform: translateY(-1.5px) rotate(-7deg); }
        }
        @keyframes headHappyBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(-7deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-4px) rotate(7deg); }
        }
        @keyframes headShyPeek {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          28%, 45% { transform: translateY(2px) rotate(-7deg); }
          76%, 88% { transform: translateY(-1px) rotate(7deg); }
        }
        @keyframes headMusicGroove {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          15% { transform: translateY(-3.5px) rotate(-5deg); }
          30% { transform: translateY(-1px) rotate(-7deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          65% { transform: translateY(-3.5px) rotate(5deg); }
          80% { transform: translateY(-1px) rotate(7deg); }
        }
        @keyframes headDreamyFloat {
          0%, 100% { transform: translateY(-3px) rotate(0deg); }
          25% { transform: translateY(0px) rotate(-7deg); }
          50% { transform: translateY(2px) rotate(0deg); }
          75% { transform: translateY(0px) rotate(7deg); }
        }
        @keyframes headSassySnap {
          0%, 18%, 100% { transform: translateY(0px) rotate(0deg); }
          28%, 42% { transform: translateY(-2px) rotate(7deg); }
          55%, 65% { transform: translateY(0px) rotate(0deg); }
          75%, 88% { transform: translateY(-2px) rotate(-7deg); }
        }
        @keyframes headZenBreath {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          30% { transform: translateY(-2.5px) rotate(-7deg); }
          50% { transform: translateY(-3px) rotate(0deg); }
          70% { transform: translateY(-2.5px) rotate(7deg); }
        }
        .head-anim-pendulumSmooth { animation: headPendulumSmooth 2.8s ease-in-out infinite; }
        .head-anim-curiousTilt { animation: headCuriousTilt 3.4s ease-in-out infinite; }
        .head-anim-happyBob { animation: headHappyBob 1.9s ease-in-out infinite; }
        .head-anim-shyPeek { animation: headShyPeek 3.6s ease-in-out infinite; }
        .head-anim-musicGroove { animation: headMusicGroove 1.8s ease-in-out infinite; }
        .head-anim-dreamyFloat { animation: headDreamyFloat 3.8s ease-in-out infinite; }
        .head-anim-sassySnap { animation: headSassySnap 2.4s ease-in-out infinite; }
        .head-anim-zenBreath { animation: headZenBreath 4.0s ease-in-out infinite; }
        ${currentGifTimeSec !== null ? ".avatar-svg * { animation: none !important; transform-origin: 0px 0px !important; transform-box: view-box !important; }" : ""}
      </style>

      <!-- Контурные обрезки по границам холста (#stageBoundsClip), силуэту тела (#bodyOnlyClip), форме лица (#faceOnlyClip) и по верхнему краю волос (#headHairClip) -->
      <clipPath id="stageBoundsClip">
        <rect x="0" y="0" width="400" height="400" />
      </clipPath>
      <clipPath id="bodyOnlyClip"${getPartOffsetAttr("bodyShape")}>
        ${renderBodyOnlyGeometry(state.bodyShape)}
      </clipPath>
      <clipPath id="faceOnlyClip"${getPartOffsetAttr("face")}>
        ${renderFaceGeometry(state.face)}
      </clipPath>
      <clipPath id="headHairClip">
        ${buildHeadHairClipMarkup()}
      </clipPath>

      <!-- Текстура шума sf-noise-img и 3 паттерна (масштабированы под viewBox 400x400 без муара) -->
      <image id="sf-noise-img" width="400" height="400" preserveAspectRatio="none" href="${noiseUri}" />
      <pattern id="sf-noise" patternUnits="userSpaceOnUse" width="400" height="400">
        <use href="#sf-noise-img" />
      </pattern>
      <pattern id="sf-noise-2" patternUnits="userSpaceOnUse" width="540" height="540" x="-70" y="-70">
        <use href="#sf-noise-img" transform="scale(1.35)" />
      </pattern>
      <pattern id="sf-noise-3" patternUnits="userSpaceOnUse" width="460" height="460" x="-30" y="-30">
        <use href="#sf-noise-img" transform="scale(1.15)" />
      </pattern>

      <!-- Фильтр мягкого свечения Ядра Аргона и нимба -->
      <filter id="argonCoreGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Линейная база и мягкое радиальное градиентное пятно фона (-base и -core) -->
      <linearGradient id="${bgObj.id}-base" x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0%" stop-color="#${bgTop}" />
        <stop offset="48%" stop-color="#${bgMid}" />
        <stop offset="100%" stop-color="#${bgBottom}" />
      </linearGradient>
      <radialGradient id="${bgObj.id}-core" cx="0.5" cy="0.42" r="0.52">
        <stop offset="0%" stop-color="#${bgCore}" stop-opacity="0.92" />
        <stop offset="55%" stop-color="#${bgCore}" stop-opacity="0.42" />
        <stop offset="100%" stop-color="#${bgMid}" stop-opacity="0" />
      </radialGradient>

      <!-- Крупные геометрические маски вычитания шума -->
      ${allMasks}

      <!-- Узлы сетчатого градиента (Mesh Gradient) для каждого объекта при включённом режиме «Градиент» -->
      ${buildMeshGradientDefs()}

      <!-- Индивидуальные затемняющие градиенты объёма для каждого элемента (от базового тона к тени без высветления) -->
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${skin.base}" />
        <stop offset="100%" stop-color="${skin.shadow}" />
      </linearGradient>

      <linearGradient id="earsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${earsShades.base}" />
        <stop offset="100%" stop-color="${earsShades.shadow}" />
      </linearGradient>

      <linearGradient id="earringsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${earringsShades.base}" />
        <stop offset="100%" stop-color="${earringsShades.shadow}" />
      </linearGradient>

      <linearGradient id="hairShortGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${hairShortShades.base}" />
        <stop offset="100%" stop-color="${hairShortShades.deep}" />
      </linearGradient>

      <linearGradient id="hairBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${hairBackShades.base}" />
        <stop offset="100%" stop-color="${hairBackShades.deep}" />
      </linearGradient>

      <linearGradient id="hairBangsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${hairBangsShades.base}" />
        <stop offset="100%" stop-color="${hairBangsShades.deep}" />
      </linearGradient>

      <linearGradient id="hairTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${hairTopShades.base}" />
        <stop offset="100%" stop-color="${hairTopShades.deep}" />
      </linearGradient>

      <linearGradient id="beardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${beardShades.base}" />
        <stop offset="100%" stop-color="${beardShades.deep}" />
      </linearGradient>

      <linearGradient id="clothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bodyShades.base}" />
        <stop offset="100%" stop-color="${bodyShades.deep}" />
      </linearGradient>

      <linearGradient id="clothAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${detailShades.base}" />
        <stop offset="100%" stop-color="${detailShades.shadow}" />
      </linearGradient>

      <linearGradient id="pocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${pocketShades.base}" />
        <stop offset="100%" stop-color="${pocketShades.shadow}" />
      </linearGradient>

      <linearGradient id="handsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${handsShades.base}" />
        <stop offset="100%" stop-color="${handsShades.shadow}" />
      </linearGradient>

      <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${glassesShades.base}" />
        <stop offset="50%" stop-color="${glassesShades.shadow}" />
        <stop offset="100%" stop-color="${glassesShades.deep}" />
      </linearGradient>

      <linearGradient id="hornsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${hornsShades.base}" />
        <stop offset="100%" stop-color="${hornsShades.shadow}" />
      </linearGradient>

      <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${hatShades.base}" />
        <stop offset="100%" stop-color="${hatShades.shadow}" />
      </linearGradient>

      <linearGradient id="particlesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${particlesShades.base}" />
        <stop offset="100%" stop-color="${particlesShades.shadow}" />
      </linearGradient>
    </defs>

    <!-- Слой 1: Задний план с мягким градиентным пятном и текстурой sf-noise -->
    ${wrapLayerWithNoise("bg", rawBgMarkup, "bg")}

    <!-- Слой 1А: Частицы и аура вокруг (сразу перед фоном, за персонажем, с диагональным бликом 45°) -->
    ${appendGlareStripe45("particles", wrapLayerWithNoise("particles", renderParticles(state.particles, particlesShades), "particles"), 1, false)}

    <!-- Задние слои головы (купол астронавта и задняя часть прически), наследующие наклон головы (±7° от 0° на севере) -->
    <g class="${getGifProgressNow() === null && isAnimationActiveNow() && state.animHead ? `head-tilt-group head-anim-${state.headAnimPreset || "pendulumSmooth"}` : "head-tilt-static"}"${getGifProgressNow() !== null && state.animHead ? computeHeadTiltGifTransform(state.headAnimPreset || "pendulumSmooth", getGifProgressNow()) : ""}>
      <!-- Слой 1Б: Купол астронавта (отрисовывается сразу после фона как нимб за головой) -->
      ${isAstroHelmet ? appendGlareStripe45("hatAstro", wrapLayerWithNoise("hat", hatMarkup, "hat"), 3, true) : ""}

      <!-- Слой 2: Задняя часть прически -->
      ${wrapLayerWithNoise("hairBack", hairBackMarkup, "hairBack")}
    </g>

    <!-- Слой 3А: Силуэт тела -->
    ${wrapLayerWithNoise("bodyShape", renderBodyShape(state.bodyShape, skin), "bodyShape")}

    <!-- Слой 3Б: Элементы одежды на теле (с опциональным бликом 45°) -->
    ${appendGlareStripe45("clothDetail", wrapLayerWithNoise("clothDetail", renderClothDetail(state.clothDetail, skin, detailShades, pocketShades), "clothDetail"), 2, false)}

    <!-- Передние слои головы и все наследующие её элементы (ушки, лицо, серьги, глаза, нос, рот, борода, волосы, очки, рога, шапка), синхронно качающиеся на ±7° от 0° на севере -->
    <g class="${getGifProgressNow() === null && isAnimationActiveNow() && state.animHead ? `head-tilt-group head-anim-${state.headAnimPreset || "pendulumSmooth"}` : "head-tilt-static"}"${getGifProgressNow() !== null && state.animHead ? computeHeadTiltGifTransform(state.headAnimPreset || "pendulumSmooth", getGifProgressNow()) : ""}>
      <!-- Слой 4А: Форма ушек (с анимацией ушек) -->
      ${wrapLayerWithNoise("ears", renderEars(state.ears, earsShades), "ears")}

      <!-- Слой 4Б: Овал лица (обрезается верхним краем волос через #headHairClip) -->
      ${wrapLayerWithNoise("skin", renderFace(state.face), "face")}

      <!-- Слой 4В: Серьги (отдельный слой поверх ушек и контура щёк с 45° бликом в анимации) -->
      ${appendGlareStripe45("earrings", wrapLayerWithNoise("earrings", renderEarrings(state.earrings, earringsShades), "earrings"), 1, false)}

      <!-- Слой 5: Глаза (с поддержкой моргания для каждого типа), нос, рот и аксессуары -->
      ${!isClothMask && !isNosePlaster && accMarkup ? wrapSubpartWithMesh("acc", accMarkup, "-base") : ""}
      ${wrapSubpartWithMesh("eyes", renderEyes(state.eyes))}
      ${wrapSubpartWithMesh("nose", renderNose(state.nose))}
      ${isNosePlaster && accMarkup ? wrapSubpartWithMesh("acc", accMarkup, "-nose") : ""}
      ${wrapSubpartWithMesh("mouth", renderMouth(state.mouth))}

      <!-- Слой 5Б: Борода и усы (или тканевая маска по контуру лица) -->
      ${wrapLayerWithNoise("facialHair", renderFacialHair(state.facialHair), "facialHair")}
      ${isClothMask && accMarkup ? wrapSubpartWithMesh("acc", accMarkup, "-mask") : ""}

      <!-- Слой 6А: Прическа короткая (мужские и короткие стрижки от висков наверх) -->
      ${wrapLayerWithNoise("hairShort", hairShortMarkup, "hairShort")}

      <!-- Слой 6Б: Чёлка -->
      ${wrapLayerWithNoise("hairBangs", hairBangsMarkup, "hairBangs")}

      <!-- Слой 6В: Верх прически -->
      ${wrapLayerWithNoise("hairTop", hairTopMarkup, "hairTop")}

      <!-- Слой 7А: Очки и монокли с диагональным бликом-полоской под углом 45° -->
      ${glassesMarkup ? appendGlareStripe45("glasses", wrapSubpartWithMesh("glasses", glassesMarkup), 0, true) : ""}

      <!-- Слой 7Б: Рога с бликом 45° в анимации -->
      ${appendGlareStripe45("horns", wrapLayerWithNoise("horns", renderHorns(state.horns, hornsShades), "horns"), 2, false)}

      <!-- Слой 7В: Головной убор и декор (кроме купола астронавта, который позади головы) с бликом 45° в анимации -->
      ${!isAstroHelmet ? appendGlareStripe45("hat", wrapLayerWithNoise("hat", hatMarkup, "hat"), 3, false) : ""}
    </g>

    <!-- Слой 7Г: Парящие кисти рук (не соединены с телом) -->
    ${wrapLayerWithNoise("hands", renderHands(handsShades), "hands")}
  </svg>`;
  } finally {
    currentGifTimeSec = null;
  }
}

let activePartTimer = null;
let activeSectionTimer = null;
let lastSelectedPart = null;
let selectedSubpartKey = null;

// Сброс ручного сдвига и масштаба для конкретного изменённого элемента (чтобы при смене элемента он возвращался на точку спавна)
function resetTransformsForStateKey(stateKey) {
  if (!state.partOffsets) state.partOffsets = {};
  if (stateKey === "handLeft") {
    delete state.partOffsets.handLeft;
    if (state.handsOffset) {
      state.handsOffset.leftX = 0;
      state.handsOffset.leftY = 0;
    }
    if (selectedSubpartKey === "handLeft") syncScaleSliderUI();
    return;
  }
  if (stateKey === "handRight") {
    delete state.partOffsets.handRight;
    if (state.handsOffset) {
      state.handsOffset.rightX = 0;
      state.handsOffset.rightY = 0;
    }
    if (selectedSubpartKey === "handRight") syncScaleSliderUI();
    return;
  }
  const keysToClear = [stateKey, `${stateKey}:L`, `${stateKey}:R`, `${stateKey}:C`];
  keysToClear.forEach((k) => {
    delete state.partOffsets[k];
  });
  if (selectedSubpartKey && keysToClear.includes(selectedSubpartKey)) {
    syncScaleSliderUI();
  }
}

// Полный сброс всех ручных сдвигов и масштабов (вызывается при рандоме или кнопке «Сброс правок»)
function resetAllPartTransforms() {
  state.partOffsets = {};
  syncScaleSliderUI();
}

// Синхронизация ползунка масштаба (±20%) с текущим выбранным на сцене самостоятельным элементом
function syncScaleSliderUI() {
  const panel = document.getElementById("element-scale-panel");
  const labelEl = document.getElementById("lbl-scale-target");
  const valEl = document.getElementById("lbl-scale-val");
  const rangeEl = document.getElementById("rng-part-scale");
  if (!panel || !labelEl || !valEl || !rangeEl) return;

  if (!selectedSubpartKey || selectedSubpartKey === "bg") {
    panel.classList.remove("is-active");
    rangeEl.disabled = true;
    rangeEl.value = "0";
    labelEl.textContent = t("scaleDefaultLabel");
    valEl.textContent = "0%";
    return;
  }

  const subLabel = getLocalizedSubpartLabel(selectedSubpartKey);
  const cur = (state.partOffsets && state.partOffsets[selectedSubpartKey]) || { dx: 0, dy: 0, scalePct: 0 };
  const pct = Math.max(-20, Math.min(20, Math.round(Number(cur.scalePct) || 0)));

  panel.classList.add("is-active");
  rangeEl.disabled = false;
  rangeEl.value = String(pct);
  labelEl.textContent = `${t("scalePrefix")} ${subLabel}`;
  valEl.textContent = `${pct > 0 ? "+" : ""}${pct}%`;
}

// Подсветка и выбор самостоятельного элемента на SVG (короткий клик -> ползунок масштаба ±20%) и независимый сдвиг на ±10% при долгом зажатии
function setupStagePartClick() {
  const mount = document.getElementById("svg-Mount");
  if (!mount) return;

  let longPressTimer = null;
  let draggingPartGroup = null;
  let draggingSubpartKey = null;
  let dragStartClientX = 0;
  let dragStartClientY = 0;
  let dragInitialOffset = { dx: 0, dy: 0, scalePct: 0 };
  let isDraggingActive = false;
  let suppressNextClick = false;
  const MAX_SHIFT_UNITS = 40; // 10% от холста 400x400 (±40 единиц)

  const clearLongPress = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
  };

  const rangeEl = document.getElementById("rng-part-scale");
  if (rangeEl) {
    rangeEl.addEventListener("input", (e) => {
      if (!selectedSubpartKey || selectedSubpartKey === "bg") return;
      const pct = Math.max(-20, Math.min(20, Math.round(Number(e.target.value) || 0)));
      if (!state.partOffsets) state.partOffsets = {};
      const prev = state.partOffsets[selectedSubpartKey] || { dx: 0, dy: 0, scalePct: 0 };
      state.partOffsets[selectedSubpartKey] = {
        dx: prev.dx || 0,
        dy: prev.dy || 0,
        scalePct: pct
      };
      syncScaleSliderUI();
      updateStage();
    });
  }

  mount.addEventListener("pointerdown", (e) => {
    const partGroup = e.target.closest(".svg-part");
    if (!partGroup) return;
    const partKey = partGroup.getAttribute("data-part");
    if (!partKey || partKey === "bg") return;
    const subpartKey = partGroup.getAttribute("data-subpart") || partKey;

    clearLongPress();
    draggingPartGroup = partGroup;
    draggingSubpartKey = subpartKey;
    dragStartClientX = e.clientX;
    dragStartClientY = e.clientY;
    const currentOff = (state.partOffsets && state.partOffsets[subpartKey]) || { dx: 0, dy: 0, scalePct: 0 };
    dragInitialOffset = {
      dx: Number(currentOff.dx) || 0,
      dy: Number(currentOff.dy) || 0,
      scalePct: Number(currentOff.scalePct) || 0
    };
    isDraggingActive = false;

    longPressTimer = setTimeout(() => {
      isDraggingActive = true;
      suppressNextClick = true;
      selectedSubpartKey = subpartKey;
      syncScaleSliderUI();
      partGroup.classList.add("is-part-dragging");
      const piv = SUBPART_PIVOTS[subpartKey] || { label: subpartKey };
      const codeEl = document.getElementById("argon-code");
      if (codeEl) {
        codeEl.textContent = `СДВИГ • ${piv.label} • перетащите до ±10%`;
      }
    }, 240);
  });

  window.addEventListener("pointermove", (e) => {
    if (!draggingPartGroup || !draggingSubpartKey) return;
    const deltaX = e.clientX - dragStartClientX;
    const deltaY = e.clientY - dragStartClientY;

    if (!isDraggingActive) {
      if (Math.hypot(deltaX, deltaY) > 8) {
        clearLongPress();
      }
      return;
    }

    e.preventDefault();
    const svgEl = mount.querySelector("svg");
    const rect = svgEl ? svgEl.getBoundingClientRect() : { width: 400, height: 400 };
    const scaleX = 400 / Math.max(1, rect.width);
    const scaleY = 400 / Math.max(1, rect.height);

    const nextDx = Math.max(-MAX_SHIFT_UNITS, Math.min(MAX_SHIFT_UNITS, Math.round(dragInitialOffset.dx + deltaX * scaleX)));
    const nextDy = Math.max(-MAX_SHIFT_UNITS, Math.min(MAX_SHIFT_UNITS, Math.round(dragInitialOffset.dy + deltaY * scaleY)));

    if (!state.partOffsets) state.partOffsets = {};
    state.partOffsets[draggingSubpartKey] = {
      dx: nextDx,
      dy: nextDy,
      scalePct: dragInitialOffset.scalePct
    };
    const transformStr = buildSubpartTransformValue(draggingSubpartKey);
    if (transformStr) {
      draggingPartGroup.setAttribute("transform", transformStr);
    } else {
      draggingPartGroup.removeAttribute("transform");
    }

    const piv = SUBPART_PIVOTS[draggingSubpartKey] || { label: draggingSubpartKey };
    const pctX = Math.round((nextDx / 400) * 100);
    const pctY = Math.round((nextDy / 400) * 100);
    const codeEl = document.getElementById("argon-code");
    if (codeEl) {
      codeEl.textContent = `СДВИГ (${piv.label}): X ${pctX > 0 ? "+" : ""}${pctX}%, Y ${pctY > 0 ? "+" : ""}${pctY}% (макс ±10%)`;
    }
  });

  const finishPointerDrag = () => {
    clearLongPress();
    if (isDraggingActive && draggingPartGroup) {
      draggingPartGroup.classList.remove("is-part-dragging");
      isDraggingActive = false;
      draggingPartGroup = null;
      draggingSubpartKey = null;
      updateStage();
      return;
    }
    draggingPartGroup = null;
    draggingSubpartKey = null;
  };

  window.addEventListener("pointerup", finishPointerDrag);
  window.addEventListener("pointercancel", finishPointerDrag);

  mount.addEventListener("click", (e) => {
    if (suppressNextClick) {
      suppressNextClick = false;
      return;
    }
    const partGroup = e.target.closest(".svg-part");
    if (!partGroup) return;
    const partKey = partGroup.getAttribute("data-part");
    if (!partKey) return;
    const subpartKey = partGroup.getAttribute("data-subpart") || partKey;

    lastSelectedPart = partKey;
    if (partKey !== "bg") {
      selectedSubpartKey = subpartKey;
      syncScaleSliderUI();
    }

    // Снимаем старую подсветку на SVG и подсвечиваем кликнутый самостоятельный элемент
    mount.querySelectorAll(".svg-part.is-part-selected").forEach((el) => {
      el.classList.remove("is-part-selected");
    });
    partGroup.classList.add("is-part-selected");

    if (activePartTimer) clearTimeout(activePartTimer);
    activePartTimer = setTimeout(() => {
      partGroup.classList.remove("is-part-selected");
    }, 1600);

    // Находим соответствующую секцию в правой панели, раскрываем её при необходимости и переходим к ней
    const targetSection = document.querySelector(`.section-group[data-section-target="${partKey}"]`);
    if (targetSection) {
      targetSection.classList.remove("is-collapsed");
      syncCloseAllButtons();
      document.querySelectorAll(".section-group.is-highlighted").forEach((sec) => {
        sec.classList.remove("is-highlighted");
      });
      targetSection.classList.add("is-highlighted");
      targetSection.scrollIntoView({ behavior: "instant", block: "center" });

      if (activeSectionTimer) clearTimeout(activeSectionTimer);
      activeSectionTimer = setTimeout(() => {
        targetSection.classList.remove("is-highlighted");
      }, 2200);
    }
  });
}

// Синхронизация текста кнопки «Закрыть все вкладки» / «Развернуть все вкладки»
function syncCloseAllButtons() {
  const sections = Array.from(document.querySelectorAll(".controls-card .section-group"));
  const allCollapsed = sections.length > 0 && sections.every((sec) => sec.classList.contains("is-collapsed"));
  const btnPanel = document.getElementById("btn-close-all-panel");
  if (btnPanel) {
    btnPanel.textContent = allCollapsed ? t("expandAllTabs") : t("closeAllTabs");
  }
}

// Переключение сворачивания всех секций правой панели («Закрыть все вкладки» / «Развернуть все вкладки»)
function toggleAllSectionsCollapse() {
  const sections = Array.from(document.querySelectorAll(".controls-card .section-group"));
  if (sections.length === 0) return;
  const allCollapsed = sections.every((sec) => sec.classList.contains("is-collapsed"));
  const nextCollapse = !allCollapsed;
  sections.forEach((sec) => {
    sec.classList.toggle("is-collapsed", nextCollapse);
  });
  syncCloseAllButtons();
}

// Синхронизация визуального состояния кнопок замков категорий при рандоме
function syncLockButtons() {
  const lockBtns = document.querySelectorAll(".lock-btn[data-lock-target]");
  let allLocked = lockBtns.length > 0;
  lockBtns.forEach((btn) => {
    const key = btn.getAttribute("data-lock-target");
    const locked = Boolean(state.locks[key]);
    if (!locked) allLocked = false;
    btn.classList.toggle("is-locked", locked);
    btn.textContent = locked ? t("lockBtnLocked") : t("lockBtnUnlocked");
  });
  const btnLockAll = document.getElementById("btn-lock-all");
  if (btnLockAll) {
    btnLockAll.textContent = allLocked ? t("lockAllOpen") : t("lockAllClose");
  }
}

// Инициализация кнопок закрепления категорий (замок от рандома) и сворачивания секций («Закрыть все вкладки»)
function setupLockControls() {
  const lockBtns = document.querySelectorAll(".lock-btn[data-lock-target]");
  lockBtns.forEach((btn) => {
    const key = btn.getAttribute("data-lock-target");
    if (!key) return;
    btn.addEventListener("click", () => {
      state.locks[key] = !state.locks[key];
      syncLockButtons();
    });
  });

  const btnLockAll = document.getElementById("btn-lock-all");
  if (btnLockAll) {
    btnLockAll.addEventListener("click", () => {
      const keys = Array.from(lockBtns)
        .map((b) => b.getAttribute("data-lock-target"))
        .filter(Boolean);
      const allLocked = keys.length > 0 && keys.every((k) => Boolean(state.locks[k]));
      const nextState = !allLocked;
      keys.forEach((k) => {
        state.locks[k] = nextState;
      });
      syncLockButtons();
    });
  }

  const btnCloseAllPanel = document.getElementById("btn-close-all-panel");
  if (btnCloseAllPanel) {
    btnCloseAllPanel.addEventListener("click", toggleAllSectionsCollapse);
  }

  // При клике по заголовку группы: сворачиваем/разворачиваем эту группу (блоки развёрнуты по умолчанию)
  document.querySelectorAll(".section-group .section-title").forEach((titleEl) => {
    titleEl.addEventListener("click", () => {
      const sec = titleEl.closest(".section-group");
      if (!sec) return;
      sec.classList.toggle("is-collapsed");
      syncCloseAllButtons();
    });
  });

  syncLockButtons();
  syncCloseAllButtons();
}

// Синхронизация визуального состояния кнопок включения шума по деталям
function syncGrainToggleButtons() {
  const buttons = document.querySelectorAll("#grain-controls .grain-toggle");
  buttons.forEach((btn) => {
    const layer = btn.getAttribute("data-layer");
    btn.classList.toggle("is-active", Boolean(state.grain[layer]));
  });
}

// Синхронизация визуального состояния кнопок включения сетчатого градиента по частям тела
function syncMeshToggleButtons() {
  const chkGrad = document.getElementById("chk-gradient-mode");
  if (chkGrad) {
    chkGrad.checked = Boolean(state.gradientMode);
  }
  const buttons = document.querySelectorAll("#mesh-controls .mesh-toggle");
  buttons.forEach((btn) => {
    const layer = btn.getAttribute("data-mesh-layer");
    if (!layer) return;
    btn.classList.toggle("is-active", Boolean(state.mesh && state.mesh[layer]));
  });
}

// Очистка всех подписей от порядковых номеров ("1. ", "2. " и т.д.) и сохранение оригинальной русской подписи в rawLabel
function stripOptionNumbers() {
  const cleanLabel = (str) => String(str || "").replace(/^\d+\.\s*/, "");
  const storeClean = (item) => {
    const cl = cleanLabel(item.label);
    item.rawLabel = item.rawLabel || cl;
    item.label = cl;
  };
  BACKGROUNDS.forEach(storeClean);
  NOISE_MODES.forEach(storeClean);
  GEO_CUTOUT_MODES.forEach(storeClean);
  PALETTE_MODES.forEach(storeClean);
  HAND_ANIM_PRESETS.forEach(storeClean);
  HEAD_ANIM_PRESETS.forEach(storeClean);
  Object.values(OPTIONS).forEach((list) => {
    if (Array.isArray(list)) {
      list.forEach(storeClean);
    }
  });
}
stripOptionNumbers();

// Текущий язык интерфейса (по умолчанию английский: "en")
let currentLang = "en";

// Полный словарь локализации интерфейса на 6 языков: английский (en), испанский (es), немецкий (de), китайский (zh), французский (fr), русский (ru)
const UI_I18N = {
  en: {
    pageTitle: "Argonyata Generator — Japanese Minimalism",
    brandTitle: "Argonyata Generator",
    brandSubtitle: "Vector avatar builder from geometric primitives",
    btnRandom: "🎲 Random Seed",
    btnRandomTitle: "Generate a new random seed",
    btnExportSvg: "Download SVG",
    btnExportPng: "Download PNG",
    btnExportGif: "Download GIF 512×512",
    stageHint: "Click an element to move or scale (±20%) • Hold an element to drag slightly (±10%)",
    supportText: "Liked the generator?<br>Please support us!",
    supportBtn: "💖 Support",
    supportBtnTitle: "Open support page",
    scaleDefaultLabel: "Click an element to scale (±20%) or hold to move (±10%)",
    scalePrefix: "Scale:",
    btnResetOffsets: "Reset Edits",
    btnResetOffsetsTitle: "Reset all manual shifts and element scaling",
    btnAllGrain: "Grain: On/Off All",
    secAnim: "Animation",
    chkAnimEnabled: "Enable animation",
    chkAnimNoise: "Moving noise",
    chkAnimParticles: "Floating particles (±5%)",
    chkAnimBlink: "Eye blinking",
    chkAnimEars: "Moving ears",
    chkAnimHead: "Head tilt (±7°)",
    chkAnimGlare: "45° Glare",
    chkAnimHands: "Moving hands (5%)",
    subGlareTargets: "45° Glare on specific elements (on/off):",
    glareGlasses: "✨ Glasses",
    glareEarrings: "✨ Earrings",
    glareHorns: "✨ Horns",
    glareHat: "✨ Hat",
    glareCloth: "✨ Outfit",
    glareParticles: "✨ Particles",
    subHeadAnim: "Head sway presets (±7° from 0° north, 8):",
    subHandAnim: "Hand motion presets (10):",
    seedLabel: "Seed:",
    seedPlaceholder: "Enter seed...",
    btnNewSeed: "🎲 Random",
    btnNewSeedTitle: "Generate random variant",
    btnPrevSeed: "← Back",
    btnPrevSeedTitle: "Restore previous seed",
    btnApplySeed: "Apply",
    btnApplySeedTitle: "Generate avatar from seed",
    btnCopySeed: "Copy",
    btnCopySeedTitle: "Copy current seed",
    copiedText: "Copied!",
    btnCloseAllTitle: "Collapse or expand all constructor tabs",
    closeAllTabs: "Close all tabs",
    expandAllTabs: "Expand all tabs",
    btnColorLockAllTitle: "Lock or unlock all colors",
    colorLockAll: "🎨 Lock colors: All",
    colorUnlockAll: "🎨 Unlock colors: All",
    btnLockAllTitle: "Lock or unlock all categories from random",
    lockAllClose: "🔒 Locks: Lock all",
    lockAllOpen: "🔓 Locks: Unlock all",
    lockBtnUnlocked: "🔓 Random",
    lockBtnLocked: "🔒 Locked",
    secColorModes: "Color Modes (Contrast & 3 Colors)",
    chkContrastTitle: "Upper element contrast policy: prevents overlapping layers from sharing conflicting colors",
    chkContrast: "Contrast",
    chkThreeColorsTitle: "Use only 3 harmonious colors for all elements and background",
    chkThreeColors: "Three Colors",
    secPalette: "Color Palettes (20)",
    secGradient: "Mesh Gradient by Body Parts",
    chkGradientTitle: "Enable or disable mesh gradient",
    chkGradient: "Gradient",
    btnAllMesh: "On/Off All",
    btnAllMeshTitle: "Toggle gradient on all body parts",
    btnRerollMesh: "Random Gradient",
    btnRerollMeshTitle: "Randomize gradient nodes and parts",
    layerBg: "Background",
    layerSkin: "Face",
    layerEars: "Ears",
    layerEarrings: "Earrings",
    layerBody: "Body",
    layerCloth: "Outfit",
    layerHands: "Hands",
    layerHairShort: "Hair: Short",
    layerHairBack: "Hair: Back",
    layerHairBangs: "Bangs",
    layerHairTop: "Crown",
    layerFacialHair: "Beard/Mustache",
    layerHorns: "Horns",
    layerHat: "Hat",
    layerHatGlasses: "Hat/Glasses",
    layerParticles: "Particles",
    layerEyes: "Eyes",
    layerNose: "Nose",
    layerMouth: "Mouth",
    layerAcc: "Accessories",
    layerGlasses: "Glasses",
    secNoise: "Vivid Noise Grain (4) & Geo-Cutouts (16)",
    btnRerollNoise: "Randomize Noise by Parts",
    secBg: "Background & Gradient Aura (22)",
    secFace: "Face Shape & Chubby Cheeks (22)",
    btnFaceBoostTitle: "Boost upper head height to close gaps under hair or hats",
    btnFaceBoostPrefix: "Boost top:",
    lblFaceBoost: "Boost upper head (close gaps):",
    secEars: "Ear Shapes (16)",
    secEarrings: "Earrings (15)",
    secEyes: "Eye Geometry (61)",
    secNose: "Minimalist Nose (15)",
    secMouth: "Mouth Geometry & Emotion (15)",
    secFacialHair: "Beards & Mustaches (30)",
    secHairShort: "Hairstyle: Short (50)",
    btnSyncHair: "Sync hair color",
    secHairBack: "Hairstyle: Back Silhouette (50)",
    secHairBangs: "Hairstyle: Bangs (50)",
    secHairTop: "Hairstyle: Top / Crown (50)",
    secBodyShape: "Body Silhouette (65)",
    secClothDetail: "Clothing Details (50)",
    secHands: "Floating Hands (30)",
    chkHandsEnabled: "Enable hands",
    btnSyncHands: "Match skin color",
    btnRerollHands: "Random offset",
    subHandLeft: "Left Hand (30)",
    subHandRight: "Right Hand (30, mirrored)",
    secGlasses: "Glasses & Monocles (19)",
    secHorns: "Horns & Antennas (15)",
    secHat: "Headwear & Adaptive Headphones (54)",
    secAcc: "Face Accessories & Mask (15)",
    secParticles: "Particles & Surrounding Aura (50)",
    btnScrollTopTitle: "Scroll to top",
    modalSupportBtn: "💖 Support the Author",
    customColorLabel: "Custom:",
    customColorAria: "Custom element color",
    lockColorLabel: "Lock color",
    lockColorTitle: "Lock only this element's color (shape still changes on random)",
    glarePillLabel: "✨ Glare",
    glarePillTitle: "Toggle 45° diagonal glare for this element",
    dlDownloadingFmt: "Downloading",
    dlBuildingGif: "Building GIF 512×512",
    dlTitleGif: "Your GIF is being generated!",
    dlTitleSvg: "Please support us! 💖",
    dlSubGif: "While the animation is being built, please support our project if you enjoyed Argonyata Generator! 💖",
    dlSubSvg: "While your file is being prepared, please support our project if you enjoyed Argonyata Generator! 💖",
    dlAutoStart: "Automatic download starts in:",
    dlBuildingFrames: "Building frames",
    dlReadyDownloading: "Animation ready, downloading:",
    dlPackingGif: "Packing GIF animation...",
    dlSecUnit: "s",
    dlLoading: "Downloading...",
    dlFrameWord: "Frame",
    dlBtnPacking: "Packing GIF...",
    noneLabel: "None"
  },
  es: {
    pageTitle: "Generador Argonyata — Minimalismo Japonés",
    brandTitle: "Generador Argonyata",
    brandSubtitle: "Constructor vectorial de avatares con primitivas geométricas",
    btnRandom: "🎲 Semilla aleatoria",
    btnRandomTitle: "Generar una nueva semilla aleatoria",
    btnExportSvg: "Descargar SVG",
    btnExportPng: "Descargar PNG",
    btnExportGif: "Descargar GIF 512×512",
    stageHint: "Haz clic en un elemento para mover o escalar (±20%) • Mantén pulsado para desplazar (±10%)",
    supportText: "¿Te gustó el generador?<br>¡Por favor, apóyanos!",
    supportBtn: "💖 Apoyar",
    supportBtnTitle: "Abrir página de apoyo",
    scaleDefaultLabel: "Haz clic en un elemento para escalar (±20%) o mantén para mover (±10%)",
    scalePrefix: "Escala:",
    btnResetOffsets: "Restablecer ajustes",
    btnResetOffsetsTitle: "Restablecer todos los desplazamientos y escalas manuales",
    btnAllGrain: "Grano: Act./Desact. todo",
    secAnim: "Animación",
    chkAnimEnabled: "Activar animación",
    chkAnimNoise: "Ruido en movimiento",
    chkAnimParticles: "Partículas flotantes (±5%)",
    chkAnimBlink: "Parpadeo de ojos",
    chkAnimEars: "Orejas en movimiento",
    chkAnimHead: "Inclinación de cabeza (±7°)",
    chkAnimGlare: "Destello 45°",
    chkAnimHands: "Manos en movimiento (5%)",
    subGlareTargets: "Destello 45° en elementos específicos (act./desact.):",
    glareGlasses: "✨ Gafas",
    glareEarrings: "✨ Pendientes",
    glareHorns: "✨ Cuernos",
    glareHat: "✨ Gorro",
    glareCloth: "✨ Ropa",
    glareParticles: "✨ Partículas",
    subHeadAnim: "Ajustes de balanceo de cabeza (±7°, 8):",
    subHandAnim: "Ajustes de movimiento de manos (10):",
    seedLabel: "Semilla:",
    seedPlaceholder: "Introduce semilla...",
    btnNewSeed: "🎲 Aleatorio",
    btnNewSeedTitle: "Generar variante aleatoria",
    btnPrevSeed: "← Atrás",
    btnPrevSeedTitle: "Restaurar semilla anterior",
    btnApplySeed: "Aplicar",
    btnApplySeedTitle: "Generar avatar según la semilla",
    btnCopySeed: "Copiar",
    btnCopySeedTitle: "Copiar semilla actual",
    copiedText: "¡Copiado!",
    btnCloseAllTitle: "Contraer o expandir todas las pestañas",
    closeAllTabs: "Cerrar pestañas",
    expandAllTabs: "Expandir pestañas",
    btnColorLockAllTitle: "Fijar o desbloquear todos los colores",
    colorLockAll: "🎨 Fijar color: Todos",
    colorUnlockAll: "🎨 Soltar color: Todos",
    btnLockAllTitle: "Cerrar o abrir todos los candados del aleatorio",
    lockAllClose: "🔒 Candados: Cerrar todos",
    lockAllOpen: "🔓 Candados: Abrir todos",
    lockBtnUnlocked: "🔓 Aleatorio",
    lockBtnLocked: "🔒 Fijado",
    secColorModes: "Modos de color (Contraste y 3 colores)",
    chkContrastTitle: "Política de contraste superior: evita colores conflictivos entre capas superpuestas",
    chkContrast: "Contraste",
    chkThreeColorsTitle: "Usar solo 3 colores para todos los elementos y el fondo",
    chkThreeColors: "Tres colores",
    secPalette: "Paletas de colores (20)",
    secGradient: "Gradiente de malla por partes (Mesh Gradient)",
    chkGradientTitle: "Activar o desactivar gradiente de malla",
    chkGradient: "Gradiente",
    btnAllMesh: "Act./Desact. todo",
    btnAllMeshTitle: "Alternar gradiente en todas las partes",
    btnRerollMesh: "Gradiente aleatorio",
    btnRerollMeshTitle: "Generar nodos de gradiente aleatorios",
    layerBg: "Fondo",
    layerSkin: "Rostro",
    layerEars: "Orejas",
    layerEarrings: "Pendientes",
    layerBody: "Cuerpo",
    layerCloth: "Ropa",
    layerHands: "Manos",
    layerHairShort: "Pelo: Corto",
    layerHairBack: "Pelo: Atrás",
    layerHairBangs: "Flequillo",
    layerHairTop: "Coronilla",
    layerFacialHair: "Barba/Bigote",
    layerHorns: "Cuernos",
    layerHat: "Gorro",
    layerHatGlasses: "Gorro/Gafas",
    layerParticles: "Partículas",
    layerEyes: "Ojos",
    layerNose: "Nariz",
    layerMouth: "Boca",
    layerAcc: "Accesorios",
    layerGlasses: "Gafas",
    secNoise: "Grano de ruido (4) y recorte geométrico (16)",
    btnRerollNoise: "Ruido aleatorio por partes",
    secBg: "Fondo y aura de gradiente (22)",
    secFace: "Óvalo facial y mejillas (22)",
    btnFaceBoostTitle: "Aumentar la parte superior de la cabeza para cubrir huecos",
    btnFaceBoostPrefix: "Subir sup.:",
    lblFaceBoost: "Aumentar parte superior de la cabeza:",
    secEars: "Forma de orejas (16)",
    secEarrings: "Pendientes (15)",
    secEyes: "Geometría de ojos (61)",
    secNose: "Nariz minimalista (15)",
    secMouth: "Geometría de boca y emoción (15)",
    secFacialHair: "Barbas y bigotes (30)",
    secHairShort: "Peinado: Corto (50)",
    btnSyncHair: "Sincr. color de pelo",
    secHairBack: "Peinado: Silueta trasera (50)",
    secHairBangs: "Peinado: Flequillo (50)",
    secHairTop: "Peinado: Parte superior (50)",
    secBodyShape: "Silueta del cuerpo (65)",
    secClothDetail: "Detalles de ropa (50)",
    secHands: "Manos flotantes (30)",
    chkHandsEnabled: "Activar manos",
    btnSyncHands: "Color de piel",
    btnRerollHands: "Desplaz. aleatorio",
    subHandLeft: "Mano izquierda (30)",
    subHandRight: "Mano derecha (30, espejo)",
    secGlasses: "Gafas y monóculos (19)",
    secHorns: "Cuernos y antenas (15)",
    secHat: "Sombreros y auriculares (54)",
    secAcc: "Accesorios faciales y máscara (15)",
    secParticles: "Partículas y aura (50)",
    btnScrollTopTitle: "Subir arriba",
    modalSupportBtn: "💖 Apoyar al autor",
    customColorLabel: "Propio:",
    customColorAria: "Color personalizado",
    lockColorLabel: "Fijar color",
    lockColorTitle: "Fijar solo el color de este elemento",
    glarePillLabel: "✨ Destello",
    glarePillTitle: "Activar o desactivar destello 45° en este elemento",
    dlDownloadingFmt: "Descargando",
    dlBuildingGif: "Creando GIF 512×512",
    dlTitleGif: "¡Tu GIF se está generando!",
    dlTitleSvg: "¡Apóyanos por favor! 💖",
    dlSubGif: "Mientras se genera la animación, ¡por favor apoya nuestro proyecto si te gustó! 💖",
    dlSubSvg: "Mientras se prepara el archivo, ¡por favor apoya nuestro proyecto si te gustó! 💖",
    dlAutoStart: "La descarga automática comenzará en:",
    dlBuildingFrames: "Creando fotogramas",
    dlReadyDownloading: "Animación lista, descargando:",
    dlPackingGif: "Empaquetando animación GIF...",
    dlSecUnit: " s",
    dlLoading: "Descargando...",
    dlFrameWord: "Fotograma",
    dlBtnPacking: "Empaquetando GIF...",
    noneLabel: "Ninguno"
  },
  de: {
    pageTitle: "Argonyata Generator — Japanischer Minimalismus",
    brandTitle: "Argonyata Generator",
    brandSubtitle: "Vektor-Avatar-Baukasten aus geometrischen Primitiven",
    btnRandom: "🎲 Zufalls-Seed",
    btnRandomTitle: "Neuen zufälligen Seed generieren",
    btnExportSvg: "SVG herunterladen",
    btnExportPng: "PNG herunterladen",
    btnExportGif: "GIF 512×512 herunterladen",
    stageHint: "Element anklicken zum Skalieren (±20%) • Gedrückt halten zum Verschieben (±10%)",
    supportText: "Gefällt dir der Generator?<br>Bitte unterstütze uns!",
    supportBtn: "💖 Unterstützen",
    supportBtnTitle: "Unterstützungsseite öffnen",
    scaleDefaultLabel: "Element anklicken zum Skalieren (±20%) oder halten zum Verschieben (±10%)",
    scalePrefix: "Skalierung:",
    btnResetOffsets: "Änderungen zurücksetzen",
    btnResetOffsetsTitle: "Alle manuellen Verschiebungen und Skalierungen zurücksetzen",
    btnAllGrain: "Körnung: Alle An/Aus",
    secAnim: "Animation",
    chkAnimEnabled: "Animation aktivieren",
    chkAnimNoise: "Bewegtes Rauschen",
    chkAnimParticles: "Schwebende Partikel (±5%)",
    chkAnimBlink: "Augenblinzeln",
    chkAnimEars: "Ohren wackeln",
    chkAnimHead: "Kopfneigung (±7°)",
    chkAnimGlare: "45°-Glanz",
    chkAnimHands: "Hände bewegen (5%)",
    subGlareTargets: "45°-Glanz auf bestimmten Elementen (an/aus):",
    glareGlasses: "✨ Brille",
    glareEarrings: "✨ Ohrringe",
    glareHorns: "✨ Hörner",
    glareHat: "✨ Kopfbedeckung",
    glareCloth: "✨ Kleidung",
    glareParticles: "✨ Partikel",
    subHeadAnim: "Kopfneigungs-Presets (±7°, 8):",
    subHandAnim: "Handbewegungs-Presets (10):",
    seedLabel: "Seed:",
    seedPlaceholder: "Seed eingeben...",
    btnNewSeed: "🎲 Zufall",
    btnNewSeedTitle: "Zufällige Variante generieren",
    btnPrevSeed: "← Zurück",
    btnPrevSeedTitle: "Vorherigen Seed wiederherstellen",
    btnApplySeed: "Anwenden",
    btnApplySeedTitle: "Avatar nach Seed generieren",
    btnCopySeed: "Kopieren",
    btnCopySeedTitle: "Aktuellen Seed kopieren",
    copiedText: "Kopiert!",
    btnCloseAllTitle: "Alle Konstruktor-Tabs ein- oder ausklappen",
    closeAllTabs: "Alle Tabs schließen",
    expandAllTabs: "Alle Tabs öffnen",
    btnColorLockAllTitle: "Alle Farben sperren oder entsperren",
    colorLockAll: "🎨 Farbsperre: Alle",
    colorUnlockAll: "🎨 Farbsperre: Lösen",
    btnLockAllTitle: "Alle Kategorien für Zufall sperren oder entsperren",
    lockAllClose: "🔒 Sperren: Alle schließen",
    lockAllOpen: "🔓 Sperren: Alle öffnen",
    lockBtnUnlocked: "🔓 Zufall",
    lockBtnLocked: "🔒 Gesperrt",
    secColorModes: "Farbmodi (Kontrast & 3 Farben)",
    chkContrastTitle: "Oberflächen-Kontrastregel: verhindert Farbkonflikte zwischen Ebenen",
    chkContrast: "Kontrast",
    chkThreeColorsTitle: "Nur 3 harmonische Farben für alle Elemente und Hintergrund verwenden",
    chkThreeColors: "Drei Farben",
    secPalette: "Farbpaletten (20)",
    secGradient: "Mesh-Verlauf nach Körperteilen",
    chkGradientTitle: "Mesh-Verlauf aktivieren oder deaktivieren",
    chkGradient: "Verlauf",
    btnAllMesh: "Alle An/Aus",
    btnAllMeshTitle: "Verlauf für alle Teile umschalten",
    btnRerollMesh: "Zufalls-Verlauf",
    btnRerollMeshTitle: "Zufällige Verlaufsknoten generieren",
    layerBg: "Hintergrund",
    layerSkin: "Gesicht",
    layerEars: "Ohren",
    layerEarrings: "Ohrringe",
    layerBody: "Körper",
    layerCloth: "Kleidung",
    layerHands: "Hände",
    layerHairShort: "Haare: Kurz",
    layerHairBack: "Haare: Hinten",
    layerHairBangs: "Pony",
    layerHairTop: "Oberkopf",
    layerFacialHair: "Bart/Schnurrbart",
    layerHorns: "Hörner",
    layerHat: "Hut",
    layerHatGlasses: "Hut/Brille",
    layerParticles: "Partikel",
    layerEyes: "Augen",
    layerNose: "Nase",
    layerMouth: "Mund",
    layerAcc: "Accessoires",
    layerGlasses: "Brille",
    secNoise: "Körnung (4) & Geo-Ausschnitte (16)",
    btnRerollNoise: "Zufalls-Rauschen pro Teil",
    secBg: "Hintergrund & Verlauf-Aura (22)",
    secFace: "Gesichtsform & Pausbacken (22)",
    btnFaceBoostTitle: "Oberkopf vergrößern, um Lücken unter Haaren oder Hüten zu schließen",
    btnFaceBoostPrefix: "Oberkopf:",
    lblFaceBoost: "Oberkopf vergrößern (Lücken schließen):",
    secEars: "Ohrformen (16)",
    secEarrings: "Ohrringe (15)",
    secEyes: "Augen-Geometrie (61)",
    secNose: "Minimalistische Nase (15)",
    secMouth: "Mund-Geometrie & Emotion (15)",
    secFacialHair: "Bärte & Schnurrbärte (30)",
    secHairShort: "Frisur: Kurz (50)",
    btnSyncHair: "Haarfarbe synchr.",
    secHairBack: "Frisur: Hinterkopf (50)",
    secHairBangs: "Frisur: Pony (50)",
    secHairTop: "Frisur: Oberkopf (50)",
    secBodyShape: "Körpersilhouette (65)",
    secClothDetail: "Kleidungsdetails (50)",
    secHands: "Schwebende Hände (30)",
    chkHandsEnabled: "Hände aktivieren",
    btnSyncHands: "Hautfarbe übernehmen",
    btnRerollHands: "Zufalls-Versatz",
    subHandLeft: "Linke Hand (30)",
    subHandRight: "Rechte Hand (30, gespiegelt)",
    secGlasses: "Brillen & Monokel (19)",
    secHorns: "Hörner & Antennen (15)",
    secHat: "Kopfbedeckung & Kopfhörer (54)",
    secAcc: "Gesichts-Accessoires & Maske (15)",
    secParticles: "Partikel & Aura (50)",
    btnScrollTopTitle: "Nach oben scrollen",
    modalSupportBtn: "💖 Autor unterstützen",
    customColorLabel: "Eigene:",
    customColorAria: "Benutzerdefinierte Farbe",
    lockColorLabel: "Farbe фиксир.".replace("фиксир.", "sperren"),
    lockColorTitle: "Nur die Farbe dieses Elements sperren",
    glarePillLabel: "✨ Glanz",
    glarePillTitle: "45°-Glanz für dieses Element umschalten",
    dlDownloadingFmt: "Download",
    dlBuildingGif: "GIF 512×512 wird erstellt",
    dlTitleGif: "Dein GIF wird erstellt!",
    dlTitleSvg: "Bitte unterstütze uns! 💖",
    dlSubGif: "Während die Animation erstellt wird, unterstütze bitte unser Projekt, wenn es dir gefällt! 💖",
    dlSubSvg: "Während die Datei vorbereitet wird, unterstütze bitte unser Projekt, wenn es dir gefällt! 💖",
    dlAutoStart: "Automatischer Download startet in:",
    dlBuildingFrames: "Frames werden erstellt",
    dlReadyDownloading: "Animation bereit, Download:",
    dlPackingGif: "GIF-Animation wird gepackt...",
    dlSecUnit: " Sek.",
    dlLoading: "Download...",
    dlFrameWord: "Frame",
    dlBtnPacking: "GIF packen...",
    noneLabel: "Keine"
  },
  zh: {
    pageTitle: "Argonyata 生成器 — 日式极简风",
    brandTitle: "Argonyata 生成器",
    brandSubtitle: "基于几何图元的矢量头像构建器",
    btnRandom: "🎲 随机种子",
    btnRandomTitle: "生成新的随机种子",
    btnExportSvg: "下载 SVG",
    btnExportPng: "下载 PNG",
    btnExportGif: "下载 GIF 512×512",
    stageHint: "点击元素可移动或缩放 (±20%) • 长按元素可微调拖动 (±10%)",
    supportText: "喜欢这个生成器吗？<br>请支持我们！",
    supportBtn: "💖 支持我们",
    supportBtnTitle: "打开支持页面",
    scaleDefaultLabel: "点击元素进行缩放 (±20%) 或长按拖动 (±10%)",
    scalePrefix: "缩放:",
    btnResetOffsets: "重置修改",
    btnResetOffsetsTitle: "重置所有手动位移与缩放",
    btnAllGrain: "颗粒: 全部开/关",
    secAnim: "动画设置",
    chkAnimEnabled: "启用动画",
    chkAnimNoise: "动态噪点",
    chkAnimParticles: "粒子漂浮 (±5%)",
    chkAnimBlink: "眨眼动画",
    chkAnimEars: "耳朵微动",
    chkAnimHead: "头部摆动 (±7°)",
    chkAnimGlare: "45° 流光",
    chkAnimHands: "双手浮动 (5%)",
    subGlareTargets: "指定元素的 45° 流光 (开/关):",
    glareGlasses: "✨ 眼镜",
    glareEarrings: "✨ 耳环",
    glareHorns: "✨ 角/天线",
    glareHat: "✨ 帽子",
    glareCloth: "✨ 服饰",
    glareParticles: "✨ 粒子",
    subHeadAnim: "头部摆动预设 (±7°, 8种):",
    subHandAnim: "手部动作预设 (10种):",
    seedLabel: "种子:",
    seedPlaceholder: "输入种子...",
    btnNewSeed: "🎲 随机生成",
    btnNewSeedTitle: "生成随机形象",
    btnPrevSeed: "← 返回",
    btnPrevSeedTitle: "恢复上一个种子",
    btnApplySeed: "应用",
    btnApplySeedTitle: "根据种子生成形象",
    btnCopySeed: "复制",
    btnCopySeedTitle: "复制当前种子",
    copiedText: "已复制！",
    btnCloseAllTitle: "折叠或展开所有面板",
    closeAllTabs: "折叠全部面板",
    expandAllTabs: "展开全部面板",
    btnColorLockAllTitle: "锁定或解锁所有颜色",
    colorLockAll: "🎨 锁定颜色: 全部",
    colorUnlockAll: "🎨 解锁颜色: 全部",
    btnLockAllTitle: "锁定或解锁所有随机分类",
    lockAllClose: "🔒 锁定: 全部关闭",
    lockAllOpen: "🔓 锁定: 全部打开",
    lockBtnUnlocked: "🔓 随机",
    lockBtnLocked: "🔒 已锁定",
    secColorModes: "色彩模式 (对比度 & 三色模式)",
    chkContrastTitle: "上层元素对比策略：防止重叠图层颜色冲突",
    chkContrast: "高对比度",
    chkThreeColorsTitle: "全身与背景仅使用 3 种和谐色彩",
    chkThreeColors: "三色模式",
    secPalette: "色彩调色板 (20)",
    secGradient: "身体部位网格渐变 (Mesh Gradient)",
    chkGradientTitle: "启用或禁用网格渐变",
    chkGradient: "渐变",
    btnAllMesh: "全部开/关",
    btnAllMeshTitle: "切换所有部位的渐变",
    btnRerollMesh: "随机渐变",
    btnRerollMeshTitle: "随机生成各部位渐变节点",
    layerBg: "背景",
    layerSkin: "脸部",
    layerEars: "耳朵",
    layerEarrings: "耳环",
    layerBody: "身体",
    layerCloth: "服饰",
    layerHands: "双手",
    layerHairShort: "短发",
    layerHairBack: "后发",
    layerHairBangs: "刘海",
    layerHairTop: "头顶发",
    layerFacialHair: "胡须",
    layerHorns: "角/天线",
    layerHat: "帽子",
    layerHatGlasses: "帽子/眼镜",
    layerParticles: "粒子",
    layerEyes: "眼睛",
    layerNose: "鼻子",
    layerMouth: "嘴巴",
    layerAcc: "面部饰品",
    layerGlasses: "眼镜",
    secNoise: "鲜明噪点颗粒 (4) & 几何镂空 (16)",
    btnRerollNoise: "按部位随机噪点",
    secBg: "背景与渐变光环 (22)",
    secFace: "脸型与圆润脸颊 (22)",
    btnFaceBoostTitle: "加高头顶以填补头发或帽子下的空隙",
    btnFaceBoostPrefix: "头顶加高:",
    lblFaceBoost: "加高头顶 (填补空隙):",
    secEars: "耳朵形状 (16)",
    secEarrings: "耳环 (15)",
    secEyes: "眼睛几何 (61)",
    secNose: "极简鼻子 (15)",
    secMouth: "嘴巴几何与表情 (15)",
    secFacialHair: "胡须与八字胡 (30)",
    secHairShort: "发型: 短发 (50)",
    btnSyncHair: "同步发色",
    secHairBack: "发型: 后发轮廓 (50)",
    secHairBangs: "发型: 刘海 (50)",
    secHairTop: "发型: 头顶 (50)",
    secBodyShape: "身体轮廓 (65)",
    secClothDetail: "服装细节 (50)",
    secHands: "悬浮双手 (30)",
    chkHandsEnabled: "显示双手",
    btnSyncHands: "同步肤色",
    btnRerollHands: "随机偏移",
    subHandLeft: "左手姿势 (30)",
    subHandRight: "右手姿势 (30, 镜像)",
    secGlasses: "眼镜与单片镜 (19)",
    secHorns: "角与天线 (15)",
    secHat: "头饰与自适应耳机 (54)",
    secAcc: "面部配饰与口罩 (15)",
    secParticles: "周围粒子与光环 (50)",
    btnScrollTopTitle: "回到顶部",
    modalSupportBtn: "💖 支持作者",
    customColorLabel: "自选:",
    customColorAria: "自定义颜色",
    lockColorLabel: "锁定颜色",
    lockColorTitle: "仅锁定该元素颜色（形状仍参与随机）",
    glarePillLabel: "✨ 流光",
    glarePillTitle: "开关此元素的 45° 斜向流光",
    dlDownloadingFmt: "正在下载",
    dlBuildingGif: "正在生成 GIF 512×512",
    dlTitleGif: "您的 GIF 正在生成中！",
    dlTitleSvg: "请支持我们！💖",
    dlSubGif: "在合成动画的同时，如果您喜欢 Argonyata 生成器，请支持我们的项目！💖",
    dlSubSvg: "在准备文件的同时，如果您喜欢 Argonyata 生成器，请支持我们的项目！💖",
    dlAutoStart: "自动下载将在以下时间开始:",
    dlBuildingFrames: "正在渲染帧",
    dlReadyDownloading: "动画已就绪，正在下载:",
    dlPackingGif: "正在打包 GIF 动画...",
    dlSecUnit: " 秒",
    dlLoading: "正在下载...",
    dlFrameWord: "帧",
    dlBtnPacking: "正在打包 GIF...",
    noneLabel: "无"
  },
  fr: {
    pageTitle: "Générateur Argonyata — Minimalisme Japonais",
    brandTitle: "Générateur Argonyata",
    brandSubtitle: "Constructeur d'avatars vectoriels à partir de primitives géométriques",
    btnRandom: "🎲 Graine aléatoire",
    btnRandomTitle: "Générer une nouvelle graine aléatoire",
    btnExportSvg: "Télécharger SVG",
    btnExportPng: "Télécharger PNG",
    btnExportGif: "Télécharger GIF 512×512",
    stageHint: "Cliquez sur un élément pour agrandir (±20%) • Maintenez pour déplacer (±10%)",
    supportText: "Vous aimez le générateur ?<br>Soutenez-nous s'il vous plaît !",
    supportBtn: "💖 Soutenir",
    supportBtnTitle: "Ouvrir la page de soutien",
    scaleDefaultLabel: "Cliquez sur un élément pour l'échelle (±20%) ou maintenez pour déplacer (±10%)",
    scalePrefix: "Échelle :",
    btnResetOffsets: "Réinitialiser",
    btnResetOffsetsTitle: "Réinitialiser tous les déplacements et échelles manuels",
    btnAllGrain: "Grain : Tout Act./Désact.",
    secAnim: "Animation",
    chkAnimEnabled: "Activer l'animation",
    chkAnimNoise: "Bruit animé",
    chkAnimParticles: "Particules flottantes (±5%)",
    chkAnimBlink: "Clignement des yeux",
    chkAnimEars: "Oreilles mobiles",
    chkAnimHead: "Inclinaison tête (±7°)",
    chkAnimGlare: "Reflet 45°",
    chkAnimHands: "Mains mobiles (5%)",
    subGlareTargets: "Reflet 45° sur des éléments précis (act./désact.) :",
    glareGlasses: "✨ Lunettes",
    glareEarrings: "✨ Boucles",
    glareHorns: "✨ Cornes",
    glareHat: "✨ Chapeau",
    glareCloth: "✨ Tenue",
    glareParticles: "✨ Particules",
    subHeadAnim: "Préréglages d'inclinaison de tête (±7°, 8) :",
    subHandAnim: "Préréglages de mouvement des mains (10) :",
    seedLabel: "Graine :",
    seedPlaceholder: "Entrez une graine...",
    btnNewSeed: "🎲 Aléatoire",
    btnNewSeedTitle: "Générer une variante aléatoire",
    btnPrevSeed: "← Retour",
    btnPrevSeedTitle: "Restaurer la graine précédente",
    btnApplySeed: "Appliquer",
    btnApplySeedTitle: "Générer l'avatar selon la graine",
    btnCopySeed: "Copier",
    btnCopySeedTitle: "Copier la graine actuelle",
    copiedText: "Copié !",
    btnCloseAllTitle: "Réduire ou déplier tous les onglets",
    closeAllTabs: "Fermer les onglets",
    expandAllTabs: "Ouvrir les onglets",
    btnColorLockAllTitle: "Verrouiller ou déverrouiller toutes les couleurs",
    colorLockAll: "🎨 Figer couleurs : Tout",
    colorUnlockAll: "🎨 Libérer couleurs : Tout",
    btnLockAllTitle: "Verrouiller ou déverrouiller tous les cadenas",
    lockAllClose: "🔒 Cadenas : Tout fermer",
    lockAllOpen: "🔓 Cadenas : Tout ouvrir",
    lockBtnUnlocked: "🔓 Aléatoire",
    lockBtnLocked: "🔒 Verrouillé",
    secColorModes: "Modes de couleur (Contraste & 3 couleurs)",
    chkContrastTitle: "Politique de contraste : évite les couleurs conflictuelles entre couches superposées",
    chkContrast: "Contraste",
    chkThreeColorsTitle: "Utiliser seulement 3 couleurs harmonieuses pour tout l'avatar",
    chkThreeColors: "Trois couleurs",
    secPalette: "Palettes de couleurs (20)",
    secGradient: "Dégradé maillé par parties (Mesh Gradient)",
    chkGradientTitle: "Activer ou désactiver le dégradé maillé",
    chkGradient: "Dégradé",
    btnAllMesh: "Tout Act./Désact.",
    btnAllMeshTitle: "Basculer le dégradé sur toutes les parties",
    btnRerollMesh: "Dégradé aléatoire",
    btnRerollMeshTitle: "Générer des nœuds de dégradé aléatoires",
    layerBg: "Fond",
    layerSkin: "Visage",
    layerEars: "Oreilles",
    layerEarrings: "Boucles",
    layerBody: "Corps",
    layerCloth: "Tenue",
    layerHands: "Mains",
    layerHairShort: "Cheveux : Courts",
    layerHairBack: "Cheveux : Arrière",
    layerHairBangs: "Frange",
    layerHairTop: "Sommet",
    layerFacialHair: "Barbe/Moustache",
    layerHorns: "Cornes",
    layerHat: "Chapeau",
    layerHatGlasses: "Chapeau/Lunettes",
    layerParticles: "Particules",
    layerEyes: "Yeux",
    layerNose: "Nez",
    layerMouth: "Bouche",
    layerAcc: "Accessoires",
    layerGlasses: "Lunettes",
    secNoise: "Grain de bruit (4) & Découpes géo (16)",
    btnRerollNoise: "Bruit aléatoire par détail",
    secBg: "Arrière-plan et aura dégradée (22)",
    secFace: "Ovale du visage et joues (22)",
    btnFaceBoostTitle: "Rehausser le haut de la tête pour combler les espaces",
    btnFaceBoostPrefix: "Rehausser haut :",
    lblFaceBoost: "Rehausser le haut de la tête :",
    secEars: "Formes d'oreilles (16)",
    secEarrings: "Boucles d'oreilles (15)",
    secEyes: "Géométrie des yeux (61)",
    secNose: "Nez minimaliste (15)",
    secMouth: "Géométrie de la bouche et émotion (15)",
    secFacialHair: "Barbes et moustaches (30)",
    secHairShort: "Coiffure : Courte (50)",
    btnSyncHair: "Sync. couleur cheveux",
    secHairBack: "Coiffure : Silhouette arrière (50)",
    secHairBangs: "Coiffure : Frange (50)",
    secHairTop: "Coiffure : Sommet (50)",
    secBodyShape: "Silhouette du corps (65)",
    secClothDetail: "Détails de vêtements (50)",
    secHands: "Mains flottantes (30)",
    chkHandsEnabled: "Activer les mains",
    btnSyncHands: "Couleur de peau",
    btnRerollHands: "Décalage aléatoire",
    subHandLeft: "Main gauche (30)",
    subHandRight: "Main droite (30, miroir)",
    secGlasses: "Lunettes et monocles (19)",
    secHorns: "Cornes et antennes (15)",
    secHat: "Couvre-chefs et casques audio (54)",
    secAcc: "Accessoires du visage et masque (15)",
    secParticles: "Particules et aura (50)",
    btnScrollTopTitle: "Remonter en haut",
    modalSupportBtn: "💖 Soutenir l'auteur",
    customColorLabel: "Perso :",
    customColorAria: "Couleur personnalisée",
    lockColorLabel: "Figer couleur",
    lockColorTitle: "Verrouiller uniquement la couleur de cet élément",
    glarePillLabel: "✨ Reflet",
    glarePillTitle: "Activer/désactiver le reflet 45° pour cet élément",
    dlDownloadingFmt: "Téléchargement",
    dlBuildingGif: "Création du GIF 512×512",
    dlTitleGif: "Votre GIF est en cours de création !",
    dlTitleSvg: "Soutenez-nous s'il vous plaît ! 💖",
    dlSubGif: "Pendant la création de l'animation, soutenez notre projet si le générateur vous plaît ! 💖",
    dlSubSvg: "Pendant la préparation du fichier, soutenez notre projet si le générateur vous plaît ! 💖",
    dlAutoStart: "Le téléchargement automatique démarre dans :",
    dlBuildingFrames: "Assemblage des images",
    dlReadyDownloading: "Animation prête, téléchargement :",
    dlPackingGif: "Empaquetage de l'animation GIF...",
    dlSecUnit: " s",
    dlLoading: "Téléchargement...",
    dlFrameWord: "Image",
    dlBtnPacking: "Empaquetage GIF...",
    noneLabel: "Aucun"
  },
  ru: {
    pageTitle: "Генератор Аргонят — Японский минимализм",
    brandTitle: "Генератор Аргонят",
    brandSubtitle: "Векторный конструктор из геометрических примитивов",
    btnRandom: "🎲 Случайный сид",
    btnRandomTitle: "Сгенерировать новый случайный сид",
    btnExportSvg: "Скачать SVG",
    btnExportPng: "Скачать PNG",
    btnExportGif: "Скачать GIF 512×512",
    stageHint: "Кликните по элементу, чтобы передвинуть или увеличить (±20%) • Удерживайте элемент, чтобы передвинуть немного (±10%)",
    supportText: "Понравился генератор?<br>Пожалуйста, поддержите!",
    supportBtn: "💖 Поддержать",
    supportBtnTitle: "Перейти на страницу поддержки",
    scaleDefaultLabel: "Кликните по элементу для масштаба (±20%) или зажмите для сдвига (±10%)",
    scalePrefix: "Масштаб:",
    btnResetOffsets: "Сброс правок",
    btnResetOffsetsTitle: "Сбросить все ручные сдвиги и масштаб элементов",
    btnAllGrain: "Зерно: Вкл/Выкл всё",
    secAnim: "Анимация",
    chkAnimEnabled: "Вкл. анимацию",
    chkAnimNoise: "Движется шум",
    chkAnimParticles: "Частички парят (±5%)",
    chkAnimBlink: "Моргание глаз",
    chkAnimEars: "Ушки двигаются",
    chkAnimHead: "Наклон головы (±7°)",
    chkAnimGlare: "Блик 45°",
    chkAnimHands: "Ручки двигаются (5%)",
    subGlareTargets: "Блик 45° на конкретных элементах (вкл/выкл):",
    glareGlasses: "✨ Очки",
    glareEarrings: "✨ Серьги",
    glareHorns: "✨ Рога",
    glareHat: "✨ Шапка",
    glareCloth: "✨ Одежда",
    glareParticles: "✨ Частицы",
    subHeadAnim: "Пресеты качания головы (±7° от 0° на севере, 8):",
    subHandAnim: "Пресеты движения рук (10):",
    seedLabel: "Сид:",
    seedPlaceholder: "Введите сид...",
    btnNewSeed: "🎲 Случайный",
    btnNewSeedTitle: "Сгенерировать случайный вариант",
    btnPrevSeed: "← Назад",
    btnPrevSeedTitle: "Вернуть предыдущий сид",
    btnApplySeed: "Применить",
    btnApplySeedTitle: "Сгенерировать Аргонёнка по указанному сиду",
    btnCopySeed: "Копировать",
    btnCopySeedTitle: "Скопировать текущий сид",
    copiedText: "Скопировано!",
    btnCloseAllTitle: "Свернуть или развернуть все вкладки конструктора",
    closeAllTabs: "Закрыть все вкладки",
    expandAllTabs: "Развернуть все вкладки",
    btnColorLockAllTitle: "Зафиксировать или снять фиксацию всех цветов",
    colorLockAll: "🎨 Фикс цвета: Все",
    colorUnlockAll: "🎨 Фикс цвета: Снять все",
    btnLockAllTitle: "Закрыть или открыть все замки от рандома",
    lockAllClose: "🔒 Замки: Закрыть все",
    lockAllOpen: "🔓 Замки: Открыть все",
    lockBtnUnlocked: "🔓 В рандоме",
    lockBtnLocked: "🔒 Закреплено",
    secColorModes: "Режимы цвета (Контрастность и 3 цвета)",
    chkContrastTitle: "Политика контрастности верхлежащего элемента",
    chkContrast: "Контрастность",
    chkThreeColorsTitle: "Использовать только 3 цвета для всех элементов и фона",
    chkThreeColors: "Три цвета",
    secPalette: "Цветовые палитры (20)",
    secGradient: "Сетчатый градиент по частям тела (Mesh Gradient)",
    chkGradientTitle: "Включить или отключить сетчатый градиент",
    chkGradient: "Градиент",
    btnAllMesh: "Вкл/Выкл всё",
    btnAllMeshTitle: "Включить или выключить градиент на всех частях тела",
    btnRerollMesh: "Рандом градиента",
    btnRerollMeshTitle: "Сгенерировать случайные узлы и распределение градиента по деталям",
    layerBg: "Фон",
    layerSkin: "Лицо",
    layerEars: "Ушки",
    layerEarrings: "Серьги",
    layerBody: "Силуэт",
    layerCloth: "Одежда",
    layerHands: "Кисти рук",
    layerHairShort: "Волосы: Короткие",
    layerHairBack: "Волосы: Зад",
    layerHairBangs: "Чёлка",
    layerHairTop: "Макушка",
    layerFacialHair: "Борода/Усы",
    layerHorns: "Рога",
    layerHat: "Шапка",
    layerHatGlasses: "Шапка/Очки",
    layerParticles: "Частицы",
    layerEyes: "Глаза",
    layerNose: "Нос",
    layerMouth: "Рот",
    layerAcc: "Аксессуары",
    layerGlasses: "Очки",
    secNoise: "Яркое зерно шума (4) и гео-вычитание (16)",
    btnRerollNoise: "Рандом шума по деталям",
    secBg: "Задний план и градиентная аура (22)",
    secFace: "Овал лица и пухлые щёчки (22)",
    btnFaceBoostTitle: "Увеличить верх головы на N процентов для закрытия зазоров под прической или шапкой",
    btnFaceBoostPrefix: "Увеличить верх:",
    lblFaceBoost: "Увеличить верх головы (закрытие дырок):",
    secEars: "Форма ушек (16)",
    secEarrings: "Серьги (15)",
    secEyes: "Геометрия глаз (61)",
    secNose: "Минималистичный нос (15)",
    secMouth: "Геометрия рта и эмоция (15)",
    secFacialHair: "Бороды и усы (30)",
    secHairShort: "Прическа: Короткая (50)",
    btnSyncHair: "Синхр. цвет волос",
    secHairBack: "Прическа: Задний силуэт (50)",
    secHairBangs: "Прическа: Чёлка (50)",
    secHairTop: "Прическа: Верх (50)",
    secBodyShape: "Силуэт тела (65)",
    secClothDetail: "Элементы одежды на теле (50)",
    secHands: "Кисти рук (30)",
    chkHandsEnabled: "Включить руки",
    btnSyncHands: "В цвет кожи",
    btnRerollHands: "Случайное смещение",
    subHandLeft: "Левая кисть (30)",
    subHandRight: "Правая кисть (30, зеркально)",
    secGlasses: "Очки и монокли (19)",
    secHorns: "Рога и антенны (15)",
    secHat: "Головной убор и адаптивные наушники (54)",
    secAcc: "Аксессуары лица и тканевая маска (15)",
    secParticles: "Частицы и аура вокруг (50)",
    btnScrollTopTitle: "Прокрутить наверх",
    modalSupportBtn: "💖 Поддержать автора",
    customColorLabel: "Свой:",
    customColorAria: "Произвольный цвет элемента",
    lockColorLabel: "Фикс цвета",
    lockColorTitle: "Зафиксировать только цвет этого элемента (форма продолжит меняться в рандоме)",
    glarePillLabel: "✨ Блик",
    glarePillTitle: "Включить или отключить диагональный блик 45° для этого конкретного элемента",
    dlDownloadingFmt: "Скачивание",
    dlBuildingGif: "Сборка GIF 512×512",
    dlTitleGif: "Ваша гиф формируется!",
    dlTitleSvg: "Поддержите пожалуйста! 💖",
    dlSubGif: "Пока анимация собирается, пожалуйста, поддержите наш проект, если вам понравился Генератор Аргонят! 💖",
    dlSubSvg: "Пока файл формируется, пожалуйста, поддержите наш проект, если вам понравился Генератор Аргонят! 💖",
    dlAutoStart: "Автоматическая загрузка начнётся через:",
    dlBuildingFrames: "Сборка кадров",
    dlReadyDownloading: "Анимация готова, скачивание:",
    dlPackingGif: "Упаковка анимации GIF...",
    dlSecUnit: " сек",
    dlLoading: "Загрузка...",
    dlFrameWord: "Кадр",
    dlBtnPacking: "Упаковка GIF...",
    noneLabel: "Нет"
  }
};

// Переводы названий выбираемых на холсте частей (SUBPART_PIVOTS)
const SUBPART_LABELS_I18N = {
  en: {
    handLeft: "Left Hand",
    handRight: "Right Hand",
    "ears:L": "Left Ear",
    "ears:R": "Right Ear",
    ears: "Ears",
    "earrings:L": "Left Earring",
    "earrings:R": "Right Earring",
    earrings: "Earrings",
    "eyes:L": "Left Eye",
    "eyes:R": "Right Eye",
    "eyes:C": "Third Eye",
    eyes: "Eyes",
    "horns:L": "Left Horn / Antenna",
    "horns:R": "Right Horn / Antenna",
    "horns:C": "Horn / Halo",
    horns: "Horns & Antennas",
    "acc:L": "Accessory (Left Cheek)",
    "acc:R": "Accessory (Right Cheek)",
    acc: "Face Accessory",
    nose: "Nose",
    mouth: "Mouth",
    facialHair: "Beard & Mustache",
    face: "Face Shape",
    hairShort: "Short Hair",
    hairBack: "Back Hair",
    hairBangs: "Bangs",
    hairTop: "Top Hair",
    bodyShape: "Body Silhouette",
    clothDetail: "Clothing Detail",
    glasses: "Glasses / Monocle",
    hat: "Headwear",
    "particles:L": "Particles (Left)",
    "particles:R": "Particles (Right)",
    particles: "Particles & Aura"
  },
  es: {
    handLeft: "Mano izquierda",
    handRight: "Mano derecha",
    "ears:L": "Oreja izquierda",
    "ears:R": "Oreja derecha",
    ears: "Orejas",
    "earrings:L": "Pendiente izquierdo",
    "earrings:R": "Pendiente derecho",
    earrings: "Pendientes",
    "eyes:L": "Ojo izquierdo",
    "eyes:R": "Ojo derecho",
    "eyes:C": "Tercer ojo",
    eyes: "Ojos",
    "horns:L": "Cuerno izquierdo",
    "horns:R": "Cuerno derecho",
    "horns:C": "Cuerno / Halo",
    horns: "Cuernos y antenas",
    "acc:L": "Accesorio (mejilla izq.)",
    "acc:R": "Accesorio (mejilla der.)",
    acc: "Accesorio facial",
    nose: "Nariz",
    mouth: "Boca",
    facialHair: "Barba y bigote",
    face: "Óvalo facial",
    hairShort: "Pelo corto",
    hairBack: "Pelo trasero",
    hairBangs: "Flequillo",
    hairTop: "Coronilla",
    bodyShape: "Silueta del cuerpo",
    clothDetail: "Detalle de ropa",
    glasses: "Gafas / Monóculo",
    hat: "Sombrero / Casco",
    "particles:L": "Partículas (izq.)",
    "particles:R": "Partículas (der.)",
    particles: "Partículas y aura"
  },
  de: {
    handLeft: "Linke Hand",
    handRight: "Rechte Hand",
    "ears:L": "Linkes Ohr",
    "ears:R": "Rechtes Ohr",
    ears: "Ohren",
    "earrings:L": "Linker Ohrring",
    "earrings:R": "Rechter Ohrring",
    earrings: "Ohrringe",
    "eyes:L": "Linkes Auge",
    "eyes:R": "Rechtes Auge",
    "eyes:C": "Drittes Auge",
    eyes: "Augen",
    "horns:L": "Linkes Horn",
    "horns:R": "Rechtes Horn",
    "horns:C": "Horn / Heiligenschein",
    horns: "Hörner & Antennen",
    "acc:L": "Accessoire (linke Wange)",
    "acc:R": "Accessoire (rechte Wange)",
    acc: "Gesichts-Accessoire",
    nose: "Nase",
    mouth: "Mund",
    facialHair: "Bart & Schnurrbart",
    face: "Gesichtsform",
    hairShort: "Kurzhaarfrisur",
    hairBack: "Hinterkopfhaare",
    hairBangs: "Pony",
    hairTop: "Oberkopfhaare",
    bodyShape: "Körpersilhouette",
    clothDetail: "Kleidungsdetail",
    glasses: "Brille / Monokel",
    hat: "Kopfbedeckung",
    "particles:L": "Partikel (links)",
    "particles:R": "Partikel (rechts)",
    particles: "Partikel & Aura"
  },
  zh: {
    handLeft: "左手",
    handRight: "右手",
    "ears:L": "左耳",
    "ears:R": "右耳",
    ears: "耳朵",
    "earrings:L": "左耳环",
    "earrings:R": "右耳环",
    earrings: "耳环",
    "eyes:L": "左眼",
    "eyes:R": "右眼",
    "eyes:C": "第三只眼",
    eyes: "眼睛",
    "horns:L": "左角/天线",
    "horns:R": "右角/天线",
    "horns:C": "独角/光环",
    horns: "角与天线",
    "acc:L": "配饰 (左脸颊)",
    "acc:R": "配饰 (右脸颊)",
    acc: "面部配饰",
    nose: "鼻子",
    mouth: "嘴巴",
    facialHair: "胡须",
    face: "脸型",
    hairShort: "短发",
    hairBack: "后发",
    hairBangs: "刘海",
    hairTop: "头顶发",
    bodyShape: "身体轮廓",
    clothDetail: "服装细节",
    glasses: "眼镜/单片镜",
    hat: "头饰/耳机",
    "particles:L": "粒子 (左)",
    "particles:R": "粒子 (右)",
    particles: "粒子与光环"
  },
  fr: {
    handLeft: "Main gauche",
    handRight: "Main droite",
    "ears:L": "Oreille gauche",
    "ears:R": "Oreille droite",
    ears: "Oreilles",
    "earrings:L": "Boucle gauche",
    "earrings:R": "Boucle droite",
    earrings: "Boucles d'oreilles",
    "eyes:L": "Œil gauche",
    "eyes:R": "Œil droit",
    "eyes:C": "Troisième œil",
    eyes: "Yeux",
    "horns:L": "Corne gauche",
    "horns:R": "Corne droite",
    "horns:C": "Corne / Auréole",
    horns: "Cornes et antennes",
    "acc:L": "Accessoire (joue gauche)",
    "acc:R": "Accessoire (joue droite)",
    acc: "Accessoire du visage",
    nose: "Nez",
    mouth: "Bouche",
    facialHair: "Barbe et moustache",
    face: "Ovale du visage",
    hairShort: "Cheveux courts",
    hairBack: "Cheveux arrière",
    hairBangs: "Frange",
    hairTop: "Sommet des cheveux",
    bodyShape: "Silhouette du corps",
    clothDetail: "Détail vestimentaire",
    glasses: "Lunettes / Monocle",
    hat: "Couvre-chef",
    "particles:L": "Particules (gauche)",
    "particles:R": "Particules (droite)",
    particles: "Particules et aura"
  }
};

// Переводы фиксированных пресетов (палитры, анимация, шум, гео-вычитание, фоны)
const PRESET_LABELS_I18N = {
  en: {
    "pal-01": "Kyoto Autumn", "pal-02": "Neon Tokyo", "pal-03": "Zen Nature", "pal-04": "Matcha & Sakura",
    "pal-05": "Nordic Sea", "pal-06": "Peach Sunset", "pal-07": "Lavender Dream", "pal-08": "Retro Arcade",
    "pal-09": "Forest Kodama", "pal-10": "Royal Velvet", "pal-11": "Strawberry Milk", "pal-12": "Cyber Matrix",
    "pal-13": "Dune Desert", "pal-14": "Ocean Abyss", "pal-15": "Caramel Latte", "pal-16": "Fuchsia Midnight",
    "pal-17": "Nordic Cozy", "pal-18": "Tropical Mango", "pal-19": "Lunar Porcelain", "pal-20": "Golden Dragon",
    floatSync: "Sync Float", floatAlt: "Alternating Swing", waveHello: "Wave Hello", pulseBeat: "Rhythmic Pulse",
    orbitCircle: "Circular Orbit", clapBounce: "Clap Bounce", shiverExcite: "Excited Shiver", zenSway: "Zen Pendulum",
    figureEight: "Figure Eight", magicCast: "Magic Cast",
    pendulumSmooth: "Pendulum (±7°)", curiousTilt: "Curious Tilt", happyBob: "Happy Rhythm", shyPeek: "Shy Peek",
    musicGroove: "Music Groove", dreamyFloat: "Dreamy Wave", sassySnap: "Sassy Snap", zenBreath: "Zen Breath",
    mix: "Mix 3 Noises (Random)", v1: "Velvet (sf-noise)", v2: "Coarse (sf-noise-2)", v3: "Dense (sf-noise-3)",
    random: "Geo-Cutout: Random", stripes: "Large Diagonals", circles: "Bauhaus Circles", triangles: "Soft Prisms",
    blocks: "Square Blocks", waves: "Seigaiha Waves", zigzags: "Lightning Zigzag", stars: "Starbursts",
    hearts: "Heart Silhouettes", diamonds: "Argyle Diamonds", rings: "Orbit Rings", crosses: "Plus & Crosses",
    crescents: "Lunar Crescents", hexagons: "Honeycomb Hexagons", spirals: "Swirl Petals"
  },
  es: {
    "pal-01": "Otoño en Kioto", "pal-02": "Tokio Neón", "pal-03": "Naturaleza Zen", "pal-04": "Matcha y Sakura",
    "pal-05": "Mar del Norte", "pal-06": "Atardecer Melocotón", "pal-07": "Sueño Lavanda", "pal-08": "Arcade Retro",
    "pal-09": "Kodama del Bosque", "pal-10": "Terciopelo Real", "pal-11": "Leche de Fresa", "pal-12": "Matriz Cyber",
    "pal-13": "Desierto Duna", "pal-14": "Abismo Oceánico", "pal-15": "Latte Caramelo", "pal-16": "Fucsia Medianoche",
    "pal-17": "Hogar Nórdico", "pal-18": "Mango Tropical", "pal-19": "Porcelana Lunar", "pal-20": "Dragón Dorado",
    floatSync: "Flotación sincr.", floatAlt: "Balanceo alterno", waveHello: "Saludo con mano", pulseBeat: "Pulso rítmico",
    orbitCircle: "Órbita circular", clapBounce: "Palmas", shiverExcite: "Temblor alegre", zenSway: "Péndulo Zen",
    figureEight: "Figura ocho", magicCast: "Conjuro mágico",
    pendulumSmooth: "Péndulo (±7°)", curiousTilt: "Giro curioso", happyBob: "Ritmo alegre", shyPeek: "Mirada tímida",
    musicGroove: "Ritmo musical", dreamyFloat: "Onda soñadora", sassySnap: "Toque vivo", zenBreath: "Respiro Zen",
    mix: "Mezcla 3 ruidos (Aleat.)", v1: "Terciopelo (sf-noise)", v2: "Grueso (sf-noise-2)", v3: "Denso (sf-noise-3)",
    random: "Geo-recorte: Aleatorio", stripes: "Diagonales grandes", circles: "Círculos Bauhaus", triangles: "Prismas suaves",
    blocks: "Bloques cuadrados", waves: "Olas Seigaiha", zigzags: "Zigzag rayo", stars: "Destellos estrella",
    hearts: "Siluetas corazón", diamonds: "Rombos Argyle", rings: "Anillos órbita", crosses: "Cruces y signos +",
    crescents: "Crecientes lunares", hexagons: "Panales hexágono", spirals: "Pétalos remolino"
  },
  de: {
    "pal-01": "Kyoto-Herbst", "pal-02": "Neon-Tokio", "pal-03": "Zen-Natur", "pal-04": "Matcha & Sakura",
    "pal-05": "Nordsee", "pal-06": "Pfirsich-Abendrot", "pal-07": "Lavendeltraum", "pal-08": "Retro-Arcade",
    "pal-09": "Wald-Kodama", "pal-10": "Königssamt", "pal-11": "Erdbeermilch", "pal-12": "Cyber-Matrix",
    "pal-13": "Wüstendüne", "pal-14": "Ozeantiefen", "pal-15": "Karamell-Latte", "pal-16": "Fuchsia-Mitternacht",
    "pal-17": "Nordisch Gemütlich", "pal-18": "Tropen-Mango", "pal-19": "Mondporzellan", "pal-20": "Goldener Drache",
    floatSync: "Synchr. Schweben", floatAlt: "Gegentakt-Schaukel", waveHello: "Winken", pulseBeat: "Rhythmischer Puls",
    orbitCircle: "Kreisbahn", clapBounce: "Klatschen", shiverExcite: "Freudiges Zittern", zenSway: "Zen-Pendel",
    figureEight: "Achterbahn", magicCast: "Magischer Zauber",
    pendulumSmooth: "Pendel (±7°)", curiousTilt: "Neugierige Neigung", happyBob: "Fröhlicher Takt", shyPeek: "Schüchterner Blick",
    musicGroove: "Musik-Groove", dreamyFloat: "Traumwelle", sassySnap: "Flotter Akzent", zenBreath: "Zen-Atem",
    mix: "3er-Rauschmix (Zufall)", v1: "Samtig (sf-noise)", v2: "Grob (sf-noise-2)", v3: "Dicht (sf-noise-3)",
    random: "Geo-Schnitt: Zufall", stripes: "Große Diagonalen", circles: "Bauhaus-Kreise", triangles: "Weiche Prismen",
    blocks: "Quadrat-Blöcke", waves: "Seigaiha-Wellen", zigzags: "Blitz-Zickzack", stars: "Sternenfunken",
    hearts: "Herz-Silhouetten", diamonds: "Argyle-Rauten", rings: "Orbit-Ringe", crosses: "Plus & Kreuze",
    crescents: "Mondsicheln", hexagons: "Waben-Sechsecke", spirals: "Wirbelblätter"
  },
  zh: {
    "pal-01": "京都之秋", "pal-02": "霓虹东京", "pal-03": "禅意自然", "pal-04": "抹茶与樱花",
    "pal-05": "北海之滨", "pal-06": "蜜桃落日", "pal-07": "薰衣草之梦", "pal-08": "复古街机",
    "pal-09": "森林木灵", "pal-10": "皇家丝绒", "pal-11": "草莓牛奶", "pal-12": "赛博矩阵",
    "pal-13": "沙丘荒漠", "pal-14": "深海之渊", "pal-15": "焦糖拿铁", "pal-16": "紫红午夜",
    "pal-17": "北欧温馨", "pal-18": "热带芒果", "pal-19": "月白瓷", "pal-20": "金龙献瑞",
    floatSync: "同步漂浮", floatAlt: "交替摆动", waveHello: "挥手问好", pulseBeat: "律动脉冲",
    orbitCircle: "环形轨道", clapBounce: "拍手跃动", shiverExcite: "欢快颤动", zenSway: "禅意钟摆",
    figureEight: "八字轨迹", magicCast: "魔法施放",
    pendulumSmooth: "平滑钟摆 (±7°)", curiousTilt: "好奇歪头", happyBob: "欢快律动", shyPeek: "害羞窥视",
    musicGroove: "音乐律动", dreamyFloat: "梦幻波浪", sassySnap: "俏皮定格", zenBreath: "禅意呼吸",
    mix: "3种噪点混合 (随机)", v1: "丝绒噪点 (sf-noise)", v2: "粗颗粒 (sf-noise-2)", v3: "高密度 (sf-noise-3)",
    random: "几何镂空: 随机", stripes: "宽幅斜纹", circles: "包豪斯圆", triangles: "柔和棱镜",
    blocks: "方块矩阵", waves: "青海波浪", zigzags: "闪电折线", stars: "星芒闪耀",
    hearts: "爱心剪影", diamonds: "菱格纹", rings: "轨道圆环", crosses: "十字星号",
    crescents: "新月弯弧", hexagons: "蜂巢六边形", spirals: "旋涡花瓣"
  },
  fr: {
    "pal-01": "Automne à Kyoto", "pal-02": "Tokyo Néon", "pal-03": "Nature Zen", "pal-04": "Matcha & Sakura",
    "pal-05": "Mer du Nord", "pal-06": "Coucher Pêche", "pal-07": "Rêve Lavande", "pal-08": "Arcade Rétro",
    "pal-09": "Kodama Sylvestre", "pal-10": "Velours Royal", "pal-11": "Lait Fraise", "pal-12": "Matrice Cyber",
    "pal-13": "Désert de Dune", "pal-14": "Abysse Océanique", "pal-15": "Latte Caramel", "pal-16": "Fuchsia Minuit",
    "pal-17": "Cosy Nordique", "pal-18": "Mangue Tropicale", "pal-19": "Porcelaine Lunaire", "pal-20": "Dragon d'Or",
    floatSync: "Flottement sync.", floatAlt: "Balancier alterné", waveHello: "Salut de la main", pulseBeat: "Impulsion rythmée",
    orbitCircle: "Orbite circulaire", clapBounce: "Mains rapprochées", shiverExcite: "Frisson joyeux", zenSway: "Pendule Zen",
    figureEight: "Chiffre huit", magicCast: "Sort magique",
    pendulumSmooth: "Pendule (±7°)", curiousTilt: "Inclinaison curieuse", happyBob: "Rythme joyeux", shyPeek: "Regard timide",
    musicGroove: "Groove musical", dreamyFloat: "Onde rêveuse", sassySnap: "Accent vif", zenBreath: "Souffle Zen",
    mix: "Mix 3 bruits (Aléat.)", v1: "Velours (sf-noise)", v2: "Grand grain (sf-noise-2)", v3: "Dense (sf-noise-3)",
    random: "Géo-découpe : Aléatoire", stripes: "Grandes diagonales", circles: "Cercles Bauhaus", triangles: "Prismes doux",
    blocks: "Blocs carrés", waves: "Vagues Seigaiha", zigzags: "Zigzag éclair", stars: "Éclats d'étoiles",
    hearts: "Silhouettes cœurs", diamonds: "Losanges Argyle", rings: "Anneaux d'orbite", crosses: "Plus & Croix",
    crescents: "Croissants lunaires", hexagons: "Hexagones ruche", spirals: "Pétales tourbillon"
  }
};

// Перевод ключевых токенов ID опций на испанский, немецкий, китайский и французский
const TOKEN_I18N = {
  es: {
    round: "Redondo", soft: "Suave", oval: "Óvalo", chubby: "Mejillas", cheeks: "Rellenas", square: "Cuadrado",
    heart: "Corazón", diamond: "Diamante", pear: "Pera", hexagon: "Hexágono", cloud: "Nube", shield: "Escudo",
    elf: "Elfo", short: "Corto", long: "Largo", cat: "Gato", ears: "Orejas", ear: "Oreja", bunny: "Conejo",
    bear: "Oso", frog: "Rana", fox: "Zorro", wolf: "Lobo", deer: "Ciervo", dragon: "Dragón", unicorn: "Unicornio",
    horns: "Cuernos", antenna: "Antena", halo: "Halo", ring: "Anillo", rings: "Anillos", crown: "Corona",
    star: "Estrella", stars: "Estrellas", moon: "Luna", moons: "Lunas", sun: "Sol", fire: "Fuego", flames: "Llamas",
    water: "Agua", snow: "Nieve", snowflakes: "Copos", sakura: "Sakura", petals: "Pétalos", flower: "Flor",
    floral: "Floral", leaves: "Hojas", leaf: "Hoja", maple: "Arce", butterfly: "Mariposa", butterflies: "Mariposas",
    sparkles: "Destellos", sparkle: "Destello", aura: "Aura", rainbow: "Arcoíris", lightning: "Rayo",
    angry: "Enojado", fury: "Furia", demon: "Demonio", laser: "Láser", glowing: "Brillante", shadow: "Sombra",
    sad: "Triste", tears: "Lágrimas", tear: "Lágrima", happy: "Feliz", wink: "Guiño", sleepy: "Soñoliento",
    calm: "Calma", cute: "Tierno", anime: "Anime", wide: "Amplio", big: "Grande", tiny: "Pequeño", small: "Pequeño",
    mini: "Mini", max: "Máx", smile: "Sonrisa", smirk: "Sonrisa pícara", fang: "Colmillo", tongue: "Lengua",
    beard: "Barba", mustache: "Bigote", stubble: "Barba de 3 días", full: "Completa", goatee: "Perilla",
    mutton: "Patillas", chops: "Anchas", wizard: "Mago", witch: "Bruja", sensei: "Sensei",viking: "Vikingo",
    hoodie: "Sudadera", kimono: "Kimono", sweater: "Suéter", jacket: "Chaqueta", coat: "Abrigo", vest: "Chaleco",
    scarf: "Bufanda", tie: "Corbata", bowtie: "Pajarita", armor: "Armadura", cape: "Capa", robe: "Túnica",
    hat: "Sombrero", cap: "Gorra", beanie: "Gorro", beret: "Boina", helmet: "Casco", headphones: "Auriculares",
    headset: "Casco Gamer", earmuffs: "Orejeras", fluffy: "Esponjoso", gamer: "Gamer", gaming: "Gaming",
    glasses: "Gafas", goggles: "Goggles", monocle: "Monóculo", visor: "Visor", mask: "Máscara", blush: "Rubor",
    freckles: "Pecas", whiskers: "Bigotes", peace: "Paz", thumbs: "Pulgar", up: "Arriba", down: "Abajo",
    fist: "Puño", open: "Abierta", wave: "Saludo", point: "Señalar", rock: "Rock", ok: "OK", pray: "Oración"
  },
  de: {
    round: "Rund", soft: "Weich", oval: "Oval", chubby: "Pausbacken", cheeks: "Wangen", square: "Quadrat",
    heart: "Herz", diamond: "Diamant", pear: "Birne", hexagon: "Sechseck", cloud: "Wolke", shield: "Schild",
    elf: "Elfen", short: "Kurz", long: "Lang", cat: "Katzen", ears: "Ohren", ear: "Ohr", bunny: "Hasen",
    bear: "Bären", frog: "Frosch", fox: "Fuchs", wolf: "Wolf", deer: "Hirsch", dragon: "Drachen", unicorn: "Einhorn",
    horns: "Hörner", antenna: "Antenne", halo: "Heiligenschein", ring: "Ring", rings: "Ringe", crown: "Krone",
    star: "Stern", stars: "Sterne", moon: "Mond", moons: "Monde", sun: "Sonne", fire: "Feuer", flames: "Flammen",
    water: "Wasser", snow: "Schnee", snowflakes: "Schneeflocken", sakura: "Sakura", petals: "Blüten", flower: "Blume",
    floral: "Blumen", leaves: "Blätter", leaf: "Blatt", maple: "Ahorn", butterfly: "Schmetterling", butterflies: "Schmetterlinge",
    sparkles: "Funken", sparkle: "Glitzer", aura: "Aura", rainbow: "Regenbogen", lightning: "Blitz",
    angry: "Wütend", fury: "Zorn", demon: "Dämon", laser: "Laser", glowing: "Leuchtend", shadow: "Schatten",
    sad: "Traurig", tears: "Tränen", tear: "Träne", happy: "Fröhlich", wink: "Zwinkern", sleepy: "Schläfrig",
    calm: "Ruhig", cute: "Niedlich", anime: "Anime", wide: "Weit", big: "Groß", tiny: "Winzig", small: "Klein",
    mini: "Mini", max: "Max", smile: "Lächeln", smirk: "Grinsen", fang: "Reißzahn", tongue: "Zunge",
    beard: "Bart", mustache: "Schnurrbart", stubble: "Dreitagebart", full: "Vollbart", goatee: "Spitzbart",
    mutton: "Koteletten", chops: "Breit", wizard: "Zauberer", witch: "Hexe", sensei: "Sensei", viking: "Wikinger",
    hoodie: "Hoodie", kimono: "Kimono", sweater: "Pullover", jacket: "Jacke", coat: "Mantel", vest: "Weste",
    scarf: "Schal", tie: "Krawatte", bowtie: "Fliege", armor: "Rüstung", cape: "Umhang", robe: "Robe",
    hat: "Hut", cap: "Kappe", beanie: "Mütze", beret: "Baskenmütze", helmet: "Helm", headphones: "Kopfhörer",
    headset: "Headset", earmuffs: "Ohrenschützer", fluffy: "Flauschig", gamer: "Gamer", gaming: "Gaming",
    glasses: "Brille", goggles: "Schutzbrille", monocle: "Monokel", visor: "Visier", mask: "Maske", blush: "Rouge",
    freckles: "Sommersprossen", whiskers: "Schnurrhaare", peace: "Peace", thumbs: "Daumen", up: "Hoch", down: "Runter",
    fist: "Faust", open: "Offen", wave: "Winken", point: "Zeigen", rock: "Rock", ok: "OK", pray: "Gebet"
  },
  zh: {
    round: "圆润", soft: "柔和", oval: "椭圆", chubby: "嘟嘟", cheeks: "脸颊", square: "方形",
    heart: "爱心", diamond: "菱形", pear: "梨形", hexagon: "六角", cloud: "云朵", shield: "盾形",
    elf: "精灵", short: "短", long: "长", cat: "猫咪", ears: "耳朵", ear: "耳", bunny: "兔",
    bear: "小熊", frog: "青蛙", fox: "狐狸", wolf: "狼", deer: "鹿", dragon: "龙", unicorn: "独角兽",
    horns: "角", antenna: "天线", halo: "光环", ring: "环", rings: "圆环", crown: "皇冠",
    star: "星", stars: "繁星", moon: "月", moons: "新月", sun: "太阳", fire: "火焰", flames: "烈焰",
    water: "水滴", snow: "雪", snowflakes: "雪花", sakura: "樱花", petals: "花瓣", flower: "花朵",
    floral: "花卉", leaves: "落叶", leaf: "叶子", maple: "枫叶", butterfly: "蝴蝶", butterflies: "群蝶",
    sparkles: "闪光", sparkle: "星光", aura: "气场", rainbow: "彩虹", lightning: "闪电",
    angry: "愤怒", fury: "狂怒", demon: "恶魔", laser: "激光", glowing: "发光", shadow: "暗影",
    sad: "悲伤", tears: "泪水", tear: "泪滴", happy: "开心", wink: "眨眼", sleepy: "困倦",
    calm: "平静", cute: "可爱", anime: "动漫", wide: "宽", big: "大", tiny: "微", small: "小",
    mini: "迷你", max: "特大", smile: "微笑", smirk: "坏笑", fang: "虎牙", tongue: "吐舌",
    beard: "胡须", mustache: "八字胡", stubble: "胡茬", full: "大胡子", goatee: "山羊胡",
    mutton: "连鬓", chops: "络腮胡", wizard: "法师", witch: "女巫", sensei: "宗师", viking: "维京",
    hoodie: "连帽衫", kimono: "和服", sweater: "毛衣", jacket: "夹克", coat: "大衣", vest: "背心",
    scarf: "围巾", tie: "领带", bowtie: "领结", armor: "铠甲", cape: "披风", robe: "长袍",
    hat: "帽", cap: "鸭舌帽", beanie: "冷帽", beret: "贝雷帽", helmet: "头盔", headphones: "耳机",
    headset: "电竞耳麦", earmuffs: "毛绒耳罩", fluffy: "蓬松", gamer: "玩家", gaming: "电竞",
    glasses: "眼镜", goggles: "护目镜", monocle: "单片镜", visor: "面罩", mask: "口罩", blush: "腮红",
    freckles: "雀斑", whiskers: "胡须纹", peace: "剪刀手", thumbs: "大拇指", up: "向上", down: "向下",
    fist: "握拳", open: "张开", wave: "挥手", point: "指向", rock: "摇滚", ok: "OK", pray: "合十"
  },
  fr: {
    round: "Rond", soft: "Doux", oval: "Ovale", chubby: "Joues", cheeks: "Dodues", square: "Carré",
    heart: "Cœur", diamond: "Diamant", pear: "Poire", hexagon: "Hexagone", cloud: "Nuage", shield: "Bouclier",
    elf: "Elfe", short: "Court", long: "Long", cat: "Chat", ears: "Oreilles", ear: "Oreille", bunny: "Lapin",
    bear: "Ours", frog: "Grenouille", fox: "Renard", wolf: "Loup", deer: "Cerf", dragon: "Dragon", unicorn: "Licorne",
    horns: "Cornes", antenna: "Antenne", halo: "Auréole", ring: "Anneau", rings: "Anneaux", crown: "Couronne",
    star: "Étoile", stars: "Étoiles", moon: "Lune", moons: "Lunes", sun: "Soleil", fire: "Feu", flames: "Flammes",
    water: "Eau", snow: "Neige", snowflakes: "Flocons", sakura: "Sakura", petals: "Pétales", flower: "Fleur",
    floral: "Floral", leaves: "Feuilles", leaf: "Feuille", maple: "Érable", butterfly: "Papillon", butterflies: "Papillons",
    sparkles: "Étincelles", sparkle: "Éclat", aura: "Aura", rainbow: "Arc-en-ciel", lightning: "Éclair",
    angry: "Colère", fury: "Furie", demon: "Démon", laser: "Laser", glowing: "Lumineux", shadow: "Ombre",
    sad: "Triste", tears: "Larmes", tear: "Larme", happy: "Joyeux", wink: "Clin d'œil", sleepy: "Endormi",
    calm: "Calme", cute: "Mignon", anime: "Anime", wide: "Large", big: "Grand", tiny: "Minuscule", small: "Petit",
    mini: "Mini", max: "Max", smile: "Sourire", smirk: "Sourire en coin", fang: "Croc", tongue: "Langue",
    beard: "Barbe", mustache: "Moustache", stubble: "Barbe de 3 jours", full: "Complète", goatee: "Bouc",
    mutton: "Favoris", chops: "Larges", wizard: "Mage", witch: "Sorcière", sensei: "Sensei", viking: "Viking",
    hoodie: "Sweat", kimono: "Kimono", sweater: "Pull", jacket: "Veste", coat: "Manteau", vest: "Gilet",
    scarf: "Écharpe", tie: "Cravate", bowtie: "Nœud papillon", armor: "Armure", cape: "Cape", robe: "Robe",
    hat: "Chapeau", cap: "Casquette", beanie: "Bonnet", beret: "Béret", helmet: "Casque", headphones: "Écouteurs",
    headset: "Casque Gamer", earmuffs: "Cache-oreilles", fluffy: "Moelleux", gamer: "Gamer", gaming: "Gaming",
    glasses: "Lunettes", goggles: "Lunettes pro", monocle: "Monocle", visor: "Visière", mask: "Masque", blush: "Blush",
    freckles: "Taches de rousseur", whiskers: "Moustaches", peace: "Paix", thumbs: "Pouce", up: "Haut", down: "Bas",
    fist: "Poing", open: "Ouverte", wave: "Salut", point: "Pointer", rock: "Rock", ok: "OK", pray: "Prière"
  }
};

// Получение перевода строки интерфейса по ключу
function t(key) {
  const dict = UI_I18N[currentLang] || UI_I18N.en;
  return dict[key] !== undefined ? dict[key] : (UI_I18N.en[key] || key);
}

// Получение локализованного названия части тела для панели масштаба
function getLocalizedSubpartLabel(subpartKey) {
  if (currentLang === "ru") {
    return (SUBPART_PIVOTS[subpartKey] && SUBPART_PIVOTS[subpartKey].label) || subpartKey;
  }
  const map = SUBPART_LABELS_I18N[currentLang] || SUBPART_LABELS_I18N.en;
  return map[subpartKey] || SUBPART_LABELS_I18N.en[subpartKey] || subpartKey;
}

// Получение локализованной подписи для кнопки-опции (782 пресета)
function getLocalizedOptionLabel(stateKey, item) {
  if (!item) return "";
  if (currentLang === "ru") {
    return item.rawLabel || item.label || "";
  }
  const id = String(item.id || "");
  if (id === "none") {
    return t("noneLabel");
  }
  const presetMap = PRESET_LABELS_I18N[currentLang] || PRESET_LABELS_I18N.en;
  if (presetMap[id]) {
    return presetMap[id];
  }
  if (/^grad-\d+$/.test(id)) {
    const num = id.split("-")[1];
    const auraWord = { en: "Aura", es: "Aura", de: "Aura", zh: "光环", fr: "Aura" }[currentLang] || "Aura";
    return `${auraWord} #${num}`;
  }
  const rawTokens = id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])(\d+)/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const tokMap = TOKEN_I18N[currentLang] || {};
  return rawTokens
    .map((tok) => {
      const low = tok.toLowerCase();
      if (tokMap[low]) return tokMap[low];
      return tok.charAt(0).toUpperCase() + tok.slice(1);
    })
    .join(currentLang === "zh" ? "" : " ");
}

// Применение выбранного языка ко всем статическим и динамическим элементам страницы
function applyLocalization(lang) {
  if (UI_I18N[lang]) {
    currentLang = lang;
  } else {
    currentLang = "en";
  }
  document.documentElement.lang = currentLang;
  document.title = t("pageTitle");

  // Переключаем активную кнопку флага в шапке
  document.querySelectorAll("#lang-switcher .lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === currentLang);
  });

  // Обновляем текстовые узлы с data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });

  // Обновляем узлы с HTML-переносом строки (data-i18n-html)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key) el.innerHTML = t(key);
  });

  // Обновляем placeholder полей ввода
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", t(key));
  });

  // Обновляем всплывающие подсказки title
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (key) el.setAttribute("title", t(key));
  });

  initAllControls();
  syncLockButtons();
  syncCloseAllButtons();
  syncScaleSliderUI();
}

// Соответствие ключа опции и ключа цвета в state.colors
const STATE_KEY_TO_COLOR_KEY = {
  bg: "bg",
  face: "skin",
  ears: "ears",
  earrings: "earrings",
  eyes: "eyes",
  nose: "nose",
  mouth: "mouth",
  facialHair: "facialHair",
  hairShort: "hairShort",
  hairBack: "hairBack",
  hairBangs: "hairBangs",
  hairTop: "hairTop",
  bodyShape: "bodyShape",
  clothDetail: "clothDetail",
  handLeft: "hands",
  handRight: "hands",
  glasses: "glasses",
  horns: "horns",
  hat: "hat",
  acc: "acc",
  particles: "particles"
};

// Генерация SVG-миниатюры объекта без лишней обёртки (просто сам векторный элемент и подпись внизу), окрашенной в выбранный цвет группы
const SILHOUETTE_CACHE = new Map();
function buildOptionSilhouetteSvg(stateKey, item) {
  const colorKey = STATE_KEY_TO_COLOR_KEY[stateKey] || "";
  const groupColor = String((colorKey && state.colors[colorKey]) || "#232126").toUpperCase();
  const pocketColor = stateKey === "clothDetail" ? String(state.colors.clothPocket || groupColor).toUpperCase() : "";
  const cacheKey = `${stateKey}:${item.id}:${groupColor}:${pocketColor}`;
  if (SILHOUETTE_CACHE.has(cacheKey)) {
    return SILHOUETTE_CACHE.get(cacheKey);
  }

  // Миниатюры для 20 пресетов цветовых палитр
  if (stateKey === "activePalette") {
    const pal = PALETTES[item.id] || PALETTES["pal-01"];
    const c1 = pal.swatches[5] || "#E05A47";
    const c2 = pal.swatches[6] || "#F2C14E";
    const c3 = pal.swatches[7] || "#5A7D7C";
    const c4 = pal.swatches[8] || "#5E49F4";
    const palSvg = `<svg class="chip-svg" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="13" cy="14" r="8" fill="${c1}"/>
      <circle cx="27" cy="14" r="8" fill="${c2}"/>
      <circle cx="13" cy="27" r="8" fill="${c3}"/>
      <circle cx="27" cy="27" r="8" fill="${c4}"/>
    </svg>`;
    SILHOUETTE_CACHE.set(cacheKey, palSvg);
    return palSvg;
  }

  // Миниатюры для 8 пресетов качания/наклона головы (±7° от 0° на севере)
  if (stateKey === "headAnimPreset") {
    const skinCol = String(state.colors.skin || "#FBE5D8").toUpperCase();
    const headSvg = `<svg class="chip-svg" width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M10 11 Q20 5 30 11" fill="none" stroke="#E05A47" stroke-width="2" stroke-linecap="round"/>
      <g transform="rotate(7 20 30)">
        <circle cx="20" cy="22" r="9.5" fill="${skinCol}" stroke="#232126" stroke-width="1.5"/>
        <circle cx="17" cy="21" r="1.4" fill="#232126"/>
        <circle cx="23" cy="21" r="1.4" fill="#232126"/>
      </g>
    </svg>`;
    SILHOUETTE_CACHE.set(cacheKey, headSvg);
    return headSvg;
  }

  // Миниатюры для 10 пресетов движения рук (5%)
  if (stateKey === "handAnimPreset") {
    const handCol = String(state.colors.hands || "#FBE5D8").toUpperCase();
    const accCol = "#E05A47";
    const animSvg = `<svg class="chip-svg" width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="13" cy="22" r="6.5" fill="${handCol}" stroke="#232126" stroke-width="1.5"/>
      <circle cx="27" cy="22" r="6.5" fill="${handCol}" stroke="#232126" stroke-width="1.5"/>
      <path d="M10 10 Q20 4 30 10" fill="none" stroke="${accCol}" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`;
    SILHOUETTE_CACHE.set(cacheKey, animSvg);
    return animSvg;
  }

  // Миниатюры для фонов
  if (stateKey === "bg") {
    const bgSvg = `<svg class="chip-svg" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="4" y="4" width="32" height="32" rx="10" fill="#${item.core}"/>
      <circle cx="16" cy="15" r="9" fill="#${item.top}"/>
      <circle cx="26" cy="25" r="7" fill="#${item.mid}"/>
    </svg>`;
    SILHOUETTE_CACHE.set(cacheKey, bgSvg);
    return bgSvg;
  }

  // Миниатюры для режимов шума
  if (stateKey === "noiseMode") {
    const nSvg = `<svg class="chip-svg" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="8" fill="none" stroke="#232126" stroke-width="2"/>
      <circle cx="14" cy="15" r="2.2" fill="#E05A47"/><circle cx="24" cy="13" r="1.8" fill="#5E49F4"/>
      <circle cx="19" cy="21" r="2.4" fill="#232126"/><circle cx="13" cy="26" r="1.7" fill="#5A7D7C"/>
      <circle cx="26" cy="25" r="2.2" fill="#E05A47"/>
    </svg>`;
    SILHOUETTE_CACHE.set(cacheKey, nSvg);
    return nSvg;
  }

  // Миниатюры для 16 режимов гео-разрезов (вычитающих фигур шума), чтобы каждую фигуру было легко отличить
  if (stateKey === "geoCutout") {
    let cutoutInner = "";
    switch (item.id) {
      case "random":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <circle cx="14" cy="14" r="5" fill="#E05A47"/>
          <polygon points="26,8 32,19 20,19" fill="#F2C14E"/>
          <rect x="9" y="23" width="9" height="9" rx="2" fill="#54B565"/>
          <path d="M26 22 L28 26 L32 28 L28 30 L26 34 L24 30 L20 28 L24 26 Z" fill="#FFFFFF"/>
        `;
        break;
      case "stripes":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <g transform="rotate(-28 20 20)" fill="#FFFFFF">
            <rect x="2" y="10" width="36" height="4.2" rx="2"/>
            <rect x="2" y="18" width="36" height="4.8" rx="2"/>
            <rect x="2" y="26.5" width="36" height="4.2" rx="2"/>
          </g>
        `;
        break;
      case "circles":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <circle cx="15" cy="15" r="6.5" fill="#FFFFFF"/>
          <circle cx="26" cy="25" r="5.5" fill="#FFFFFF"/>
          <circle cx="26" cy="12" r="3.5" fill="#E05A47"/>
        `;
        break;
      case "triangles":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <polygon points="15,8 24,22 7,22" fill="#FFFFFF"/>
          <polygon points="27,16 34,30 19,30" fill="#E05A47"/>
        `;
        break;
      case "blocks":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <rect x="8" y="8" width="11" height="11" rx="2.5" fill="#FFFFFF"/>
          <rect x="21" y="20" width="11" height="11" rx="2.5" fill="#FFFFFF"/>
          <rect x="22" y="9" width="8" height="8" rx="2" fill="#E05A47"/>
        `;
        break;
      case "waves":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <path d="M7 13 Q 13.5 8, 20 13 T 33 13" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M7 21 Q 13.5 16, 20 21 T 33 21" fill="none" stroke="#E05A47" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M7 29 Q 13.5 24, 20 29 T 33 29" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round"/>
        `;
        break;
      case "zigzags":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <polyline points="7,15 14,9 20,16 26,9 33,15" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="7,27 14,21 20,28 26,21 33,27" fill="none" stroke="#E05A47" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
        `;
        break;
      case "stars":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <path d="M16 7 C17.5 13, 18 13.5, 24 15 C18 16.5, 17.5 17, 16 23 C14.5 17, 14 16.5, 8 15 C14 13.5, 14.5 13, 16 7 Z" fill="#FFFFFF"/>
          <path d="M27 20 C28 24, 28.5 24.5, 32.5 25.5 C28.5 26.5, 28 27, 27 31 C26 27, 25.5 26.5, 21.5 25.5 C25.5 24.5, 26 24, 27 20 Z" fill="#F2C14E"/>
        `;
        break;
      case "hearts":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <path d="M20 14 C20 9.5, 11 9.5, 11 15.5 C11 21, 20 25, 20 29.5 C20 25, 29 21, 29 15.5 C29 9.5, 20 9.5, 20 14 Z" fill="#FFFFFF"/>
        `;
        break;
      case "diamonds":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <polygon points="15,7 22,17 15,27 8,17" fill="#FFFFFF"/>
          <polygon points="27,13 33,22 27,31 21,22" fill="#E05A47"/>
        `;
        break;
      case "rings":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <circle cx="20" cy="20" r="10.5" fill="none" stroke="#FFFFFF" stroke-width="3.2"/>
          <circle cx="20" cy="20" r="4.8" fill="none" stroke="#E05A47" stroke-width="2.8"/>
        `;
        break;
      case "crosses":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <rect x="9" y="13" width="14" height="5" rx="2" fill="#FFFFFF"/>
          <rect x="13.5" y="8.5" width="5" height="14" rx="2" fill="#FFFFFF"/>
          <rect x="20" y="24" width="11" height="4" rx="1.5" fill="#E05A47"/>
          <rect x="23.5" y="20.5" width="4" height="11" rx="1.5" fill="#E05A47"/>
        `;
        break;
      case "crescents":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <path d="M22 9 A 10.5 10.5 0 1 0 27 28 A 8.2 8.2 0 1 1 22 9 Z" fill="#FFFFFF"/>
          <circle cx="26" cy="14" r="2.5" fill="#F2C14E"/>
        `;
        break;
      case "hexagons":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <polygon points="15,8 21,11.5 21,18.5 15,22 9,18.5 9,11.5" fill="#FFFFFF"/>
          <polygon points="25,18 31,21.5 31,28.5 25,32 19,28.5 19,21.5" fill="#E05A47"/>
        `;
        break;
      case "spirals":
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#232126"/>
          <ellipse cx="20" cy="12" rx="3.2" ry="6" transform="rotate(25 20 12)" fill="#FFFFFF"/>
          <ellipse cx="28" cy="20" rx="6" ry="3.2" transform="rotate(25 28 20)" fill="#E05A47"/>
          <ellipse cx="20" cy="28" rx="3.2" ry="6" transform="rotate(25 20 28)" fill="#FFFFFF"/>
          <ellipse cx="12" cy="20" rx="6" ry="3.2" transform="rotate(25 12 20)" fill="#E05A47"/>
        `;
        break;
      case "none":
      default:
        cutoutInner = `
          <rect x="4" y="4" width="32" height="32" rx="9" fill="none" stroke="#7A757E" stroke-width="2" stroke-dasharray="3 3"/>
          <line x1="12" y1="28" x2="28" y2="12" stroke="#E05A47" stroke-width="2.5" stroke-linecap="round"/>
        `;
        break;
    }
    const gSvg = `<svg class="chip-svg" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">${cutoutInner}</svg>`;
    SILHOUETTE_CACHE.set(cacheKey, gSvg);
    return gSvg;
  }

  const isLightThumb = analyzeHexColor(groupColor).lum > 0.78;
  const thumbStrokeColor = isLightThumb ? "#7A757E" : groupColor;

  // Пустой индикатор для вариантов "Без ..." (none), окрашенный в выбранный цвет группы
  if (item.id === "none") {
    const emptySvg = `<svg class="chip-svg" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="10" fill="none" stroke="${thumbStrokeColor}" stroke-width="2.2" stroke-dasharray="3 3"/><line x1="13" y1="27" x2="27" y2="13" stroke="${thumbStrokeColor}" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    SILHOUETTE_CACHE.set(cacheKey, emptySvg);
    return emptySvg;
  }

  const groupShades = buildShades(groupColor);
  const skinShades = buildShades(state.colors.skin || "#FBE5D8");
  const pocketShades = buildShades(pocketColor || groupColor);

  const prevVal = state[stateKey];
  const prevFace = state.face;
  state[stateKey] = item.id;
  if (stateKey !== "face") {
    state.face = "round";
  }

  let rawInner = "";
  let viewBox = "110 80 180 220";

  try {
    switch (stateKey) {
      case "face":
        rawInner = renderFaceGeometry(item.id);
        viewBox = "132 122 136 148";
        break;
      case "ears":
        rawInner = renderEars(item.id, groupShades);
        viewBox = "74 148 252 100";
        break;
      case "earrings":
        rawInner = renderEarrings(item.id, groupShades);
        viewBox = "116 196 168 62";
        break;
      case "eyes":
        rawInner = renderEyes(item.id);
        viewBox = "146 174 108 44";
        break;
      case "nose":
        rawInner = renderNose(item.id);
        viewBox = "182 186 36 34";
        break;
      case "mouth":
        rawInner = renderMouth(item.id);
        viewBox = "168 208 64 40";
        break;
      case "facialHair":
        rawInner = renderFacialHair(item.id);
        viewBox = "128 198 144 120";
        break;
      case "hairShort":
        rawInner = renderHairShort(item.id);
        viewBox = "114 84 172 132";
        break;
      case "hairBack":
        rawInner = renderHairBack(item.id);
        viewBox = "80 96 240 244";
        break;
      case "hairBangs":
        rawInner = renderHairBangs(item.id);
        viewBox = "120 108 160 132";
        break;
      case "hairTop":
        rawInner = renderHairTop(item.id);
        viewBox = "96 42 208 142";
        break;
      case "bodyShape":
        rawInner = renderBodyOnlyGeometry(item.id);
        viewBox = "65 225 270 180";
        break;
      case "clothDetail":
        rawInner = renderClothDetail(item.id, skinShades, groupShades, pocketShades);
        viewBox = "105 240 190 160";
        break;
      case "handLeft":
        rawInner = renderSingleHandPose(item.id, groupShades);
        viewBox = "62 184 76 86";
        break;
      case "handRight":
        rawInner = `<g transform="translate(400, 0) scale(-1, 1)">${renderSingleHandPose(item.id, groupShades)}</g>`;
        viewBox = "262 184 76 86";
        break;
      case "glasses":
        rawInner = renderGlasses(item.id);
        viewBox = "118 162 164 66";
        break;
      case "horns":
        rawInner = renderHorns(item.id, groupShades);
        viewBox = "90 52 220 120";
        break;
      case "hat":
        rawInner = renderHat(item.id, groupShades);
        viewBox = "72 38 256 184";
        break;
      case "acc":
        rawInner = renderAccessories(item.id, groupShades);
        viewBox = "130 156 140 108";
        break;
      case "particles":
        rawInner = renderParticles(item.id, groupShades);
        viewBox = "42 52 316 236";
        break;
      default:
        rawInner = `<circle cx="200" cy="200" r="60" fill="${groupShades.base}"/>`;
        break;
    }
  } catch (err) {
    rawInner = `<circle cx="200" cy="200" r="50" fill="${groupShades.base}"/>`;
  } finally {
    state[stateKey] = prevVal;
    state.face = prevFace;
  }

  // Заменяем ссылки на SVG-градиенты и clip-path на реальные оттенки выбранного цвета группы
  let cleanedInner = rawInner
    .replace(/clip-path="url\([^)]+\)"/g, "")
    .replace(/filter="url\([^)]+\)"/g, "")
    .replace(/url\(#pocketGrad\)/g, pocketShades.base)
    .replace(/url\(#clothAccent\)/g, groupShades.base)
    .replace(/url\(#[^)]+\)/g, groupShades.base);

  // Для группы «Частицы и аура вокруг» оставляем ровно 1 крупный примитив/мотив, чтобы его можно было детально рассмотреть
  if (stateKey === "particles") {
    const singlePreview = extractSingleParticleThumbnail(item.id, cleanedInner, groupShades.base);
    cleanedInner = singlePreview.markup;
    viewBox = singlePreview.viewBox;
  }

  const wrappedInner = isLightThumb
    ? `<g stroke="#232126" stroke-width="1.1" stroke-opacity="0.36" stroke-linejoin="round">${cleanedInner}</g>`
    : cleanedInner;
  const finalSvg = `<svg class="chip-svg${isLightThumb ? " chip-svg-light" : ""}" width="40" height="40" viewBox="${viewBox}" aria-hidden="true">${wrappedInner}</svg>`;
  SILHOUETTE_CACHE.set(cacheKey, finalSvg);
  return finalSvg;
}

// Извлечение одного примитива/мотива частицы и расчёт крупного viewBox вплотную к примитиву, чтобы в миниатюре он был крупным и отчётливым
function extractSingleParticleThumbnail(particlesId, cleanedMarkup, fallbackFill) {
  const allTags = cleanedMarkup.match(/<(?:path|circle|ellipse|rect|polygon)\b[^>]*\/?>/gi) || [];
  if (allTags.length === 0) {
    return {
      markup: `<circle cx="20" cy="20" r="12" fill="${fallbackFill}"/>`,
      viewBox: "0 0 40 40"
    };
  }

  // Во всех 50 вариантах частиц первый мотив расположен в левом верхнем квадранте (около x=80, y=124);
  // оставляем только примитивы первого мотива (в радиусе 25px от первого тега), отсекая соседние частицы
  const px0 = extractTagPrimaryX(allTags[0]);
  const py0 = extractTagPrimaryY(allTags[0]);
  let motifTags = allTags.filter((tag) => {
    const px = extractTagPrimaryX(tag);
    const py = extractTagPrimaryY(tag);
    return Math.hypot(px - px0, py - py0) <= 25;
  });
  if (motifTags.length === 0) {
    motifTags = [allTags[0]];
  }

  // Для россыпей из отдельных мелких элементов оставляем строго 1 первый примитив, чтобы он занимал всю миниатюру
  const singleTagOnlyIds = [
    "sparkles",
    "stardust",
    "floatingHearts",
    "sakuraPetals",
    "argonGeo",
    "lightningSparks",
    "feathersAura",
    "sunbeams",
    "bambooLeaves",
    "mapleLeaves",
    "waterDrops",
    "crystalShards",
    "cyberPixels",
    "binaryMatrix",
    "crescentMoons",
    "goldenHalos",
    "origamiCranes",
    "rainbowDrops",
    "floatingRunes",
    "rosePetals",
    "diamondDust",
    "batSwarm",
    "cherryBlossomStorm",
    "neonTriangles",
    "goldenCrownSparks",
    "dragonScalesAura",
    "auroraRibbons"
  ];
  if (singleTagOnlyIds.includes(particlesId)) {
    motifTags = [motifTags[0]];
  }

  // Вычисляем точный ограничивающий прямоугольник (bounding box) выбранного примитива
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const addPt = (x, y) => {
    if (Number.isFinite(x) && Number.isFinite(y)) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  };

  motifTags.forEach((tag) => {
    const tagLower = tag.slice(1, 8).toLowerCase();
    if (tagLower.startsWith("circle")) {
      const cx = parseFloat((tag.match(/\bcx="([\d.-]+)"/) || [])[1]);
      const cy = parseFloat((tag.match(/\bcy="([\d.-]+)"/) || [])[1]);
      const r = parseFloat((tag.match(/\br="([\d.-]+)"/) || [])[1]) || 8;
      addPt(cx - r, cy - r);
      addPt(cx + r, cy + r);
    } else if (tagLower.startsWith("ellipse")) {
      const cx = parseFloat((tag.match(/\bcx="([\d.-]+)"/) || [])[1]);
      const cy = parseFloat((tag.match(/\bcy="([\d.-]+)"/) || [])[1]);
      const rx = parseFloat((tag.match(/\brx="([\d.-]+)"/) || [])[1]) || 8;
      const ry = parseFloat((tag.match(/\bry="([\d.-]+)"/) || [])[1]) || 8;
      const rad = Math.max(rx, ry);
      addPt(cx - rad, cy - rad);
      addPt(cx + rad, cy + rad);
    } else if (tagLower.startsWith("rect")) {
      const x = parseFloat((tag.match(/\bx="([\d.-]+)"/) || [])[1]);
      const y = parseFloat((tag.match(/\by="([\d.-]+)"/) || [])[1]);
      const w = parseFloat((tag.match(/\bwidth="([\d.-]+)"/) || [])[1]) || 12;
      const h = parseFloat((tag.match(/\bheight="([\d.-]+)"/) || [])[1]) || 12;
      const cx = x + w / 2;
      const cy = y + h / 2;
      const half = Math.max(w, h) / 2;
      addPt(cx - half, cy - half);
      addPt(cx + half, cy + half);
    } else if (tagLower.startsWith("polygon")) {
      const ptsStr = (tag.match(/\bpoints="([^"]+)"/) || [])[1] || "";
      const nums = (ptsStr.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
      for (let i = 0; i + 1 < nums.length; i += 2) {
        addPt(nums[i], nums[i + 1]);
      }
    } else if (tagLower.startsWith("path")) {
      const dStr = (tag.match(/\bd="([^"]+)"/) || [])[1] || "";
      const tokens = dStr.match(/[a-zA-Z]|-?\d+(?:\.\d+)?/g) || [];
      let i = 0;
      let cmd = "M";
      let lastX = 80;
      let lastY = 124;
      while (i < tokens.length) {
        if (/^[a-zA-Z]$/.test(tokens[i])) {
          cmd = tokens[i].toUpperCase();
          i++;
          continue;
        }
        if (cmd === "A") {
          const rx = parseFloat(tokens[i]) || 0;
          const ry = parseFloat(tokens[i + 1]) || 0;
          const ex = parseFloat(tokens[i + 5]);
          const ey = parseFloat(tokens[i + 6]);
          const midX = (lastX + ex) / 2;
          const midY = (lastY + ey) / 2;
          addPt(midX - rx, midY - ry);
          addPt(midX + rx, midY + ry);
          lastX = ex;
          lastY = ey;
          i += 7;
        } else if (cmd === "Z") {
          i++;
        } else {
          const x = parseFloat(tokens[i]);
          const y = parseFloat(tokens[i + 1]);
          addPt(x, y);
          lastX = x;
          lastY = y;
          i += 2;
        }
      }
    }
  });

  if (!Number.isFinite(minX) || !Number.isFinite(minY)) {
    minX = 64;
    minY = 108;
    maxX = 96;
    maxY = 140;
  }

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const rawSpan = Math.max(maxX - minX, maxY - minY, 10);
  const span = rawSpan * 1.28;
  const vbX = +(cx - span / 2).toFixed(1);
  const vbY = +(cy - span / 2).toFixed(1);
  const vbS = +span.toFixed(1);

  return {
    markup: `<g fill="${fallbackFill}" fill-rule="evenodd">${motifTags.join("")}</g>`,
    viewBox: `${vbX} ${vbY} ${vbS} ${vbS}`
  };
}

// Анализ HEX-цвета (RGB, HSL, относительная яркость и цветовое семейство) для режима «Контрастность»
function analyzeHexColor(hex) {
  const clean = String(hex || "#232126").replace("#", "").trim();
  const num = parseInt(clean, 16) || 0;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
        break;
    }
    h *= 60;
  }

  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  // Тёплое красно-оранжево-коралловое семейство (включает красные, оранжевые, коралловые, пурпурно-красные тона)
  const isWarmRedOrange = s > 0.26 && l > 0.20 && l < 0.88 && (h <= 48 || h >= 325);
  return { r, g, b, h, s, l, lum, isWarmRedOrange };
}

// Проверка конфликта (недостаточного контраста) между двумя цветами:
// Если верхний элемент красный — нижний не может быть красным или оранжевым; близкие по тону или яркости цвета также конфликтуют
function areColorsConflicting(hexA, hexB) {
  if (!hexA || !hexB) return false;
  if (String(hexA).toUpperCase() === String(hexB).toUpperCase()) return true;

  const a = analyzeHexColor(hexA);
  const b = analyzeHexColor(hexB);

  // Прямое правило: красные/коралловые/оранжевые элементы не могут лежать друг на друге (например, красная бабочка на красном или оранжевом теле, красные волосы на красном фоне)
  if (a.isWarmRedOrange && b.isWarmRedOrange) return true;

  const rgbDist = Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);
  if (rgbDist < 112) return true;

  // Оба цвета насыщенные и близкие по цветовому тону Hue (< 52 градусов)
  if (a.s > 0.25 && b.s > 0.25 && a.l > 0.18 && a.l < 0.86 && b.l > 0.18 && b.l < 0.86) {
    const rawDiff = Math.abs(a.h - b.h);
    const hueDiff = Math.min(rawDiff, 360 - rawDiff);
    if (hueDiff < 52) return true;
  }

  // Оба цвета слишком тёмные или оба слишком светлые
  if (a.lum < 0.23 && b.lum < 0.23) return true;
  if (a.lum > 0.80 && b.lum > 0.80) return true;
  if (Math.abs(a.lum - b.lum) < 0.14 && rgbDist < 140) return true;

  return false;
}

// Подбор контрастного цвета из списка кандидатов, который не конфликтует ни с одним цветом из forbiddenList
function pickContrastingColor(candidates, forbiddenList, fallbackPool) {
  const pool = [...candidates, ...(fallbackPool || [])];
  const valid = pool.filter((cand) => forbiddenList.every((forb) => !areColorsConflicting(cand, forb)));
  if (valid.length > 0) {
    return valid[Math.floor(rand() * valid.length)];
  }
  // Если все кандидаты частично пересекаются, выбираем максимально далёкий по RGB/яркости
  let bestColor = pool[0] || "#232126";
  let bestScore = -1;
  pool.forEach((cand) => {
    const cInfo = analyzeHexColor(cand);
    const minDist = forbiddenList.reduce((acc, forb) => {
      const fInfo = analyzeHexColor(forb);
      const d = Math.hypot(cInfo.r - fInfo.r, cInfo.g - fInfo.g, cInfo.b - fInfo.b);
      const warmPenalty = cInfo.isWarmRedOrange && fInfo.isWarmRedOrange ? 0.25 : 1;
      return Math.min(acc, d * warmPenalty);
    }, 999);
    if (minDist > bestScore) {
      bestScore = minDist;
      bestColor = cand;
    }
  });
  return bestColor;
}

// Соответствие ключа цвета в state.colors и ключа секции замка в state.locks
const COLOR_KEY_TO_LOCK_KEY = {
  bg: "bg",
  skin: "face",
  ears: "ears",
  earrings: "earrings",
  eyes: "eyes",
  nose: "nose",
  mouth: "mouth",
  facialHair: "facialHair",
  hairShort: "hairShort",
  hairBack: "hairBack",
  hairBangs: "hairBangs",
  hairTop: "hairTop",
  bodyShape: "bodyShape",
  clothDetail: "clothDetail",
  clothPocket: "clothDetail",
  hands: "hands",
  glasses: "glasses",
  horns: "horns",
  hat: "hat",
  acc: "acc",
  particles: "particles"
};

// Проверка, зафиксирован ли цвет конкретного элемента (через индивидуальную галочку «Фикс цвета» или общий замок секции)
function isColorLocked(colorKey) {
  const secKey = COLOR_KEY_TO_LOCK_KEY[colorKey] || colorKey;
  return Boolean((state.colorLocks && state.colorLocks[colorKey]) || (state.locks && state.locks[secKey]));
}

// Политика контрастности верхлежащего элемента (state.contrastMode):
// Верхлежащие элементы диктуют ограничение цвета нижележащим слоям (с учётом зафиксированных галочкой цветов)
function enforceContrastPolicy() {
  if (!state.contrastMode) return;
  const activePal = PALETTES[state.activePalette] || PALETTES.A;

  // 1. Элементы одежды (clothDetail / clothPocket, например бабочка) лежат поверх тела (bodyShape):
  // Если бабочка красная, тело под ней не может быть красным или оранжевым
  if (state.clothDetail !== "none" && !isColorLocked("bodyShape")) {
    const upperClothColors = [state.colors.clothDetail, state.colors.clothPocket];
    if (upperClothColors.some((c) => areColorsConflicting(c, state.colors.bodyShape))) {
      state.colors.bodyShape = pickContrastingColor(activePal.bodies, upperClothColors, activePal.swatches);
    }
  }

  // 2. Черты лица (eyes, mouth, glasses, acc, facialHair) лежат поверх кожи (skin):
  const faceUpperColors = [state.colors.eyes, state.colors.mouth];
  if (state.glasses !== "none") faceUpperColors.push(state.colors.glasses);
  if (state.acc !== "none") faceUpperColors.push(state.colors.acc);
  if (state.facialHair !== "none") faceUpperColors.push(state.colors.facialHair);
  if (faceUpperColors.some((c) => areColorsConflicting(c, state.colors.skin))) {
    const newSkin = pickContrastingColor(activePal.skins, faceUpperColors, activePal.swatches);
    if (!isColorLocked("skin")) state.colors.skin = newSkin;
    if (!isColorLocked("ears")) state.colors.ears = state.colors.skin;
    if (!isColorLocked("hands")) state.colors.hands = state.colors.skin;
    if (!isColorLocked("nose")) state.colors.nose = adjustHexColor(state.colors.skin, -34);
  }

  // 3. Серьги (earrings) лежат поверх ушек (ears):
  if (state.earrings !== "none" && !isColorLocked("ears") && areColorsConflicting(state.colors.earrings, state.colors.ears)) {
    state.colors.ears = pickContrastingColor(activePal.skins, [state.colors.earrings], activePal.swatches);
  }

  // 4. Головной убор (hat) и рога (horns) лежат поверх волос (hairShort / hairBack / hairBangs / hairTop):
  const headGearColors = [];
  if (state.hat !== "none") headGearColors.push(state.colors.hat);
  if (state.horns !== "none") headGearColors.push(state.colors.horns);
  const activeHairColor = state.hairShort !== "none" ? state.colors.hairShort : state.colors.hairBack;
  if (headGearColors.length > 0 && headGearColors.some((c) => areColorsConflicting(c, activeHairColor))) {
    const newHair = pickContrastingColor(activePal.hairs, [...headGearColors, state.colors.skin], activePal.swatches);
    if (!isColorLocked("hairShort")) state.colors.hairShort = newHair;
    if (!isColorLocked("hairBack")) state.colors.hairBack = newHair;
    if (!isColorLocked("hairBangs")) state.colors.hairBangs = newHair;
    if (!isColorLocked("hairTop")) state.colors.hairTop = newHair;
    if (state.facialHair !== "none" && !isColorLocked("facialHair")) state.colors.facialHair = newHair;
  }

  // 5. Волосы, головной убор, рога, частицы, тело и лицо лежат поверх фона (bg):
  // Если волосы красные — фон не может быть красным
  if (!isColorLocked("bg")) {
    const finalHairColor = state.hairShort !== "none" ? state.colors.hairShort : state.colors.hairBack;
    const fgOverBg = [finalHairColor, state.colors.hairTop, state.colors.bodyShape, state.colors.skin];
    if (state.hat !== "none") fgOverBg.push(state.colors.hat);
    if (state.horns !== "none") fgOverBg.push(state.colors.horns);
    if (state.particles !== "none") fgOverBg.push(state.colors.particles);

    if (state.useCustomBg) {
      if (fgOverBg.some((fg) => areColorsConflicting(fg, state.colors.bg))) {
        state.colors.bg = pickContrastingColor(activePal.swatches, fgOverBg, activePal.bodies);
      }
    } else {
      const currentBgObj = BACKGROUNDS.find((b) => b.id === state.bg) || BACKGROUNDS[0];
      const bgSampleHexes = [`#${currentBgObj.core}`, `#${currentBgObj.mid}`, `#${currentBgObj.top}`];
      const hasBgConflict = fgOverBg.some((fg) => bgSampleHexes.some((bgHex) => areColorsConflicting(fg, bgHex)));
      if (hasBgConflict) {
        const nonConflictingBgs = BACKGROUNDS.filter((b) => {
          const samples = [`#${b.core}`, `#${b.mid}`, `#${b.top}`];
          return fgOverBg.every((fg) => samples.every((s) => !areColorsConflicting(fg, s)));
        });
        if (nonConflictingBgs.length > 0) {
          const chosenBg = nonConflictingBgs[Math.floor(rand() * nonConflictingBgs.length)];
          state.bg = chosenBg.id;
          state.colors.bg = `#${chosenBg.core}`;
        } else {
          state.useCustomBg = true;
          state.colors.bg = pickContrastingColor(activePal.swatches, fgOverBg, activePal.bodies);
        }
      }
    }
  }
}

// Генерация 3 взаимно контрастных цветов из активной палитры для режима «Три цвета»
function pickTriadColorsFromPalette() {
  const activePal = PALETTES[state.activePalette] || PALETTES.A;
  const pick = (arr) => arr[Math.floor(rand() * arr.length)];
  const c2 = pick(activePal.skins); // Светлый/базовый тон (кожа, ушки, руки, контрастные аксессуары на теле)
  const c3 = pickContrastingColor(activePal.hairs, [c2], activePal.bodies); // Контрастный тон (волосы, тело, черты лица)
  const c1 = pickContrastingColor(activePal.swatches, [c2, c3], activePal.accents); // Третий тон (фон и карман/вторичный акцент)
  state.triadColors = [c1, c2, c3];
  return state.triadColors;
}

// Применение режима «Три цвета» (state.threeColorMode) с сохранением цветов, зафиксированных галочкой «Фикс цвета»
function applyThreeColorsPolicy() {
  if (!state.threeColorMode) return;
  if (!Array.isArray(state.triadColors) || state.triadColors.length !== 3) {
    pickTriadColorsFromPalette();
  }
  const [c1, c2, c3] = state.triadColors;

  // При включённом режиме Контрастность убеждаемся, что все 3 цвета триады взаимно контрастны
  if (state.contrastMode && (areColorsConflicting(c1, c2) || areColorsConflicting(c2, c3) || areColorsConflicting(c1, c3))) {
    pickTriadColorsFromPalette();
  }
  const [colBg, colLight, colDark] = state.triadColors;

  if (!isColorLocked("bg")) {
    state.useCustomBg = true;
    state.colors.bg = colBg;
  }
  if (!isColorLocked("skin")) state.colors.skin = colLight;
  if (!isColorLocked("ears")) state.colors.ears = colLight;
  if (!isColorLocked("hands")) state.colors.hands = colLight;
  if (!isColorLocked("nose")) state.colors.nose = colDark;
  if (!isColorLocked("eyes")) state.colors.eyes = colDark;
  if (!isColorLocked("mouth")) state.colors.mouth = colDark;
  if (!isColorLocked("facialHair")) state.colors.facialHair = colDark;
  if (!isColorLocked("glasses")) state.colors.glasses = colDark;
  if (!isColorLocked("acc")) state.colors.acc = colDark;
  if (!isColorLocked("hairShort")) state.colors.hairShort = colDark;
  if (!isColorLocked("hairBack")) state.colors.hairBack = colDark;
  if (!isColorLocked("hairBangs")) state.colors.hairBangs = colDark;
  if (!isColorLocked("hairTop")) state.colors.hairTop = colDark;
  if (!isColorLocked("bodyShape")) state.colors.bodyShape = colDark;
  if (!isColorLocked("clothDetail")) state.colors.clothDetail = colLight;
  if (!isColorLocked("clothPocket")) state.colors.clothPocket = colBg;
  if (!isColorLocked("hat")) state.colors.hat = colLight;
  if (!isColorLocked("horns")) state.colors.horns = colLight;
  if (!isColorLocked("earrings")) state.colors.earrings = colLight;
  if (!isColorLocked("particles")) state.colors.particles = colLight;
}

// Применение выбранной палитры к цветам текущего Аргонёнка (с учётом галочек «Фикс цвета»)
function applyPaletteToAvatar(paletteKey) {
  const pal = PALETTES[paletteKey] || PALETTES["pal-01"];
  const pickColor = (arr) => arr[Math.floor(rand() * arr.length)];

  if (state.threeColorMode) {
    pickTriadColorsFromPalette();
    applyThreeColorsPolicy();
    return;
  }

  const chosenSkin = isColorLocked("skin") ? state.colors.skin : pickColor(pal.skins);
  const chosenHair = pickColor(pal.hairs);

  if (!isColorLocked("skin")) state.colors.skin = chosenSkin;
  if (!isColorLocked("ears")) state.colors.ears = chosenSkin;
  if (!isColorLocked("earrings")) state.colors.earrings = pickColor(pal.accents);
  if (!isColorLocked("eyes")) state.colors.eyes = pickColor(pal.eyes);
  if (!isColorLocked("nose")) state.colors.nose = adjustHexColor(state.colors.skin, -34);
  if (!isColorLocked("mouth")) state.colors.mouth = pickColor(pal.mouths);
  if (!isColorLocked("facialHair")) state.colors.facialHair = chosenHair;
  if (!isColorLocked("hairShort")) state.colors.hairShort = chosenHair;
  if (!isColorLocked("hairBack")) state.colors.hairBack = chosenHair;
  if (!isColorLocked("hairBangs")) state.colors.hairBangs = chosenHair;
  if (!isColorLocked("hairTop")) state.colors.hairTop = rand() > 0.75 ? pickColor(pal.hairs) : chosenHair;
  if (!isColorLocked("bodyShape")) state.colors.bodyShape = pickColor(pal.bodies);
  if (!isColorLocked("clothDetail")) state.colors.clothDetail = pickColor(pal.accents);
  if (!isColorLocked("clothPocket")) state.colors.clothPocket = pickColor(pal.accents);
  if (!isColorLocked("hands")) state.colors.hands = state.colors.skin;
  if (!isColorLocked("glasses")) state.colors.glasses = pickColor(pal.accents);
  if (!isColorLocked("horns")) state.colors.horns = pickColor(pal.swatches);
  if (!isColorLocked("hat")) state.colors.hat = pickColor(pal.swatches);
  if (!isColorLocked("acc")) state.colors.acc = pickColor(pal.accents);
  if (!isColorLocked("particles")) state.colors.particles = pickColor(pal.accents);

  if (state.contrastMode) {
    enforceContrastPolicy();
  }
}

// Отрисовка SVG на сцене и обновление статуса
function updateStage() {
  const mount = document.getElementById("svg-Mount");
  if (mount) {
    mount.innerHTML = buildSvgString();
  }

  const codeEl = document.getElementById("argon-code");
  if (codeEl) {
    const palName = PALETTES[state.activePalette]?.name || `Палитра ${state.activePalette}`;
    const faceLabel = OPTIONS.face.find((i) => i.id === state.face)?.label || "";
    const hairLabel =
      state.hairShort !== "none"
        ? OPTIONS.hairShort.find((i) => i.id === state.hairShort)?.label || ""
        : OPTIONS.hairBack.find((i) => i.id === state.hairBack)?.label || "";
    const modesTag = [
      state.contrastMode ? "Контраст" : "",
      state.threeColorMode ? "3 цвета" : "",
      state.gradientMode ? "Градиент" : ""
    ]
      .filter(Boolean)
      .join(" + ");
    codeEl.textContent = `${state.seed || "ARGON-01"} • ${palName}${modesTag ? ` (${modesTag})` : ""} • ${faceLabel} • ${hairLabel}`;
  }
  syncSeedUI();
}

// Синхронизация поля ввода сида с текущим state.seed
function syncSeedUI() {
  const inp = document.getElementById("inp-seed");
  if (inp && document.activeElement !== inp) {
    inp.value = state.seed || "ARGON-01";
  }
}

// Инициализация кнопок-опций с векторными силуэтами объектов в выбранном цвете группы
function renderOptionButtons(containerId, list, stateKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  list.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const isActive = stateKey === "bg" ? !state.useCustomBg && state.bg === item.id : state[stateKey] === item.id;
    btn.className = `chip-btn ${isActive ? "is-active" : ""}`;
    const thumbSvg = buildOptionSilhouetteSvg(stateKey, item);
    const localizedLabel = getLocalizedOptionLabel(stateKey, item);
    btn.innerHTML = `${thumbSvg}<span class="chip-label">${localizedLabel}</span>`;
    btn.addEventListener("click", () => {
      state[stateKey] = item.id;
      // При смене элемента сбрасываем его ручные правки перемещения и масштаба (возвращаем на точку спавна)
      resetTransformsForStateKey(stateKey);
      if (stateKey === "activePalette") {
        applyPaletteToAvatar(item.id);
        initAllControls();
        updateStage();
        return;
      }
      if (stateKey === "bg") {
        state.useCustomBg = false;
        state.colors.bg = `#${item.core}`;
        if (state.threeColorMode) {
          state.triadColors[0] = state.colors.bg;
          applyThreeColorsPolicy();
        } else if (state.contrastMode) {
          enforceContrastPolicy();
        }
        initAllControls();
        updateStage();
        return;
      }
      // При выборе короткой мужской стрижки отключаем длинную заднюю массу и чёлку по умолчанию, чтобы стрижка от висков была сразу видна
      if (stateKey === "hairShort" && item.id !== "none") {
        state.hairBack = "none";
        state.hairBangs = "none";
        resetTransformsForStateKey("hairBack");
        resetTransformsForStateKey("hairBangs");
        renderOptionButtons("opt-hair-back", OPTIONS.hairBack, "hairBack");
        renderOptionButtons("opt-hair-bangs", OPTIONS.hairBangs, "hairBangs");
      }
      // При выборе позы левой или правой кисти автоматически включаем отображение рук, если галочка была снята
      if ((stateKey === "handLeft" || stateKey === "handRight") && !state.handsEnabled) {
        state.handsEnabled = true;
        syncHandsCheckbox();
      }
      // При выборе пресета анимации рук автоматически включаем анимацию и движение рук
      if (stateKey === "handAnimPreset") {
        state.animEnabled = true;
        state.animHands = true;
        syncAnimControlsUI();
      }
      // При выборе пресета наклона головы (±7°) автоматически включаем анимацию и качание головы
      if (stateKey === "headAnimPreset") {
        state.animEnabled = true;
        state.animHead = true;
        syncAnimControlsUI();
      }
      if (state.contrastMode) {
        enforceContrastPolicy();
        initAllControls();
      } else {
        renderOptionButtons(containerId, list, stateKey);
      }
      updateStage();
    });
    container.appendChild(btn);
  });
}

// Применение выбранного цвета к целевому элементу с перекраской миниатюр группы и проверкой режимов Контрастность / Три цвета
function applyElementColor(targetKey, hexValue) {
  const cleanHex = String(hexValue).toUpperCase();
  const prevHex = String(state.colors[targetKey] || "").toUpperCase();
  state.colors[targetKey] = cleanHex;
  if (targetKey === "bg") {
    state.useCustomBg = true;
  }

  if (state.threeColorMode) {
    if (!Array.isArray(state.triadColors) || state.triadColors.length !== 3) {
      pickTriadColorsFromPalette();
    }
    const slotIdx = state.triadColors.findIndex((c) => String(c).toUpperCase() === prevHex);
    if (slotIdx !== -1) {
      state.triadColors[slotIdx] = cleanHex;
    } else if (targetKey === "bg" || targetKey === "clothPocket") {
      state.triadColors[0] = cleanHex;
    } else if (["skin", "ears", "hands", "clothDetail", "hat", "horns", "earrings", "particles"].includes(targetKey)) {
      state.triadColors[1] = cleanHex;
    } else {
      state.triadColors[2] = cleanHex;
    }
    applyThreeColorsPolicy();
  } else if (state.contrastMode) {
    enforceContrastPolicy();
  }

  // Перерисовываем все опции и свотчи, чтобы миниатюры групп сразу окрасились в выбранный цвет
  initAllControls();
  updateStage();
}

// Инициализация панелей выбора цвета (17 свотчей активной из 20 палитр + нативный color picker + Фикс цвета + индивидуальное отключение блика 45°)
function initColorBars() {
  const palKey = state.activePalette || "pal-01";
  const activeSwatches = (PALETTES[palKey] || PALETTES["pal-01"]).swatches;
  const glareCapableKeys = ["glasses", "earrings", "horns", "hat", "clothDetail", "particles"];
  const bars = document.querySelectorAll(".element-color-bar");
  bars.forEach((bar) => {
    const targetKey = bar.getAttribute("data-color-target");
    if (!targetKey) return;
    const currentHex = String(state.colors[targetKey] || "#232126").toUpperCase();
    bar.innerHTML = "";

    const swatchesGrid = document.createElement("div");
    swatchesGrid.className = "swatches-grid";

    activeSwatches.forEach((palHex, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isMatch = currentHex === palHex.toUpperCase();
      btn.className = `swatch-btn palette-${palKey}-swatch-${idx} ${isMatch ? "is-active" : ""}`;
      btn.setAttribute("aria-label", `Цвет ${palHex}`);
      btn.innerHTML = `<svg class="swatch-svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="${palHex}"/></svg>`;
      btn.addEventListener("click", () => {
        applyElementColor(targetKey, palHex);
      });
      swatchesGrid.appendChild(btn);
    });
    bar.appendChild(swatchesGrid);

    const pickerWrap = document.createElement("div");
    pickerWrap.className = "color-picker-wrap";

    const label = document.createElement("span");
    label.className = "color-picker-label";
    label.textContent = t("customColorLabel");

    const input = document.createElement("input");
    input.type = "color";
    input.className = "color-picker-input";
    input.value = currentHex.toLowerCase();
    input.setAttribute("aria-label", t("customColorAria"));
    input.addEventListener("input", (e) => {
      applyElementColor(targetKey, e.target.value);
    });

    const lockLabel = document.createElement("label");
    const isColLocked = Boolean(state.colorLocks && state.colorLocks[targetKey]);
    lockLabel.className = `color-lock-toggle ${isColLocked ? "is-locked" : ""}`;
    lockLabel.title = t("lockColorTitle");

    const lockChk = document.createElement("input");
    lockChk.type = "checkbox";
    lockChk.checked = isColLocked;
    lockChk.addEventListener("change", (e) => {
      if (!state.colorLocks) state.colorLocks = {};
      state.colorLocks[targetKey] = Boolean(e.target.checked);
      lockLabel.classList.toggle("is-locked", Boolean(state.colorLocks[targetKey]));
      syncColorLockAllButton();
    });

    const lockSpan = document.createElement("span");
    lockSpan.textContent = t("lockColorLabel");

    lockLabel.appendChild(lockChk);
    lockLabel.appendChild(lockSpan);

    pickerWrap.appendChild(label);
    pickerWrap.appendChild(input);
    pickerWrap.appendChild(lockLabel);

    // Если элемент поддерживает блик 45°, добавляем переключатель отключения/включения блика прямо в его панель
    if (glareCapableKeys.includes(targetKey)) {
      const glareLabel = document.createElement("label");
      const hasGlare = Boolean(state.glareTargets && state.glareTargets[targetKey]);
      glareLabel.className = `glare-lock-toggle ${hasGlare ? "is-active" : ""}`;
      glareLabel.setAttribute("data-glare-bar-target", targetKey);
      glareLabel.title = t("glarePillTitle");

      const glareChk = document.createElement("input");
      glareChk.type = "checkbox";
      glareChk.checked = hasGlare;
      glareChk.addEventListener("change", (e) => {
        if (!state.glareTargets) state.glareTargets = {};
        state.glareTargets[targetKey] = Boolean(e.target.checked);
        syncGlareControlsUI();
        updateStage();
      });

      const glareSpan = document.createElement("span");
      glareSpan.textContent = t("glarePillLabel");

      glareLabel.appendChild(glareChk);
      glareLabel.appendChild(glareSpan);
      pickerWrap.appendChild(glareLabel);
    }

    bar.appendChild(pickerWrap);
  });
  syncColorLockAllButton();
}

// Синхронизация кнопок отключения блика 45° под конкретный элемент (в панели анимации и в цветных барах)
function syncGlareControlsUI() {
  const buttons = document.querySelectorAll("#glare-controls .glare-toggle");
  buttons.forEach((btn) => {
    const layer = btn.getAttribute("data-glare-layer");
    if (!layer) return;
    btn.classList.toggle("is-active", Boolean(state.glareTargets && state.glareTargets[layer]));
  });
  const barPills = document.querySelectorAll(".glare-lock-toggle[data-glare-bar-target]");
  barPills.forEach((pill) => {
    const layer = pill.getAttribute("data-glare-bar-target");
    const active = Boolean(state.glareTargets && state.glareTargets[layer]);
    pill.classList.toggle("is-active", active);
    const chk = pill.querySelector('input[type="checkbox"]');
    if (chk) chk.checked = active;
  });
}

// Синхронизация общей кнопки «Фикс цвета: Все»
function syncColorLockAllButton() {
  const colorKeys = Object.keys(state.colors || {});
  const allLocked = colorKeys.length > 0 && colorKeys.every((k) => Boolean(state.colorLocks && state.colorLocks[k]));
  const btn = document.getElementById("btn-color-lock-all");
  if (btn) {
    btn.classList.toggle("btn-primary", allLocked);
    btn.textContent = allLocked ? t("colorUnlockAll") : t("colorLockAll");
  }
}

// Синхронизация кнопки и ползунка «Увеличить верх на n%» в секции формы головы
function syncFaceTopBoostUI() {
  const pct = Math.max(0, Math.min(50, Math.round(Number(state.faceTopBoostPct) || 0)));
  const btn = document.getElementById("btn-face-top-boost");
  const rng = document.getElementById("rng-face-top-boost");
  const lbl = document.getElementById("lbl-face-top-boost");
  if (btn) {
    btn.textContent = `${t("btnFaceBoostPrefix")} +${pct}%`;
  }
  if (rng) {
    rng.value = String(pct);
  }
  if (lbl) {
    lbl.textContent = `+${pct}%`;
  }
}

// Синхронизация переключателей анимации (шум, частицы, моргание глаз, ушки, наклон головы ±7°, блик 45°, руки)
function syncAnimControlsUI() {
  const chkEnabled = document.getElementById("chk-anim-enabled");
  const chkNoise = document.getElementById("chk-anim-noise");
  const chkParticles = document.getElementById("chk-anim-particles");
  const chkBlink = document.getElementById("chk-anim-blink");
  const chkEars = document.getElementById("chk-anim-ears");
  const chkHead = document.getElementById("chk-anim-head");
  const chkGlare = document.getElementById("chk-anim-glare");
  const chkHands = document.getElementById("chk-anim-hands");
  if (chkEnabled) chkEnabled.checked = Boolean(state.animEnabled);
  if (chkNoise) chkNoise.checked = Boolean(state.animNoise);
  if (chkParticles) chkParticles.checked = Boolean(state.animParticles);
  if (chkBlink) chkBlink.checked = Boolean(state.animBlink);
  if (chkEars) chkEars.checked = Boolean(state.animEars);
  if (chkHead) chkHead.checked = Boolean(state.animHead);
  if (chkGlare) chkGlare.checked = Boolean(state.animGlare);
  if (chkHands) chkHands.checked = Boolean(state.animHands);
  syncGlareControlsUI();
}

// Настройка переключателей зерна шума, бликов по элементам, режимов Контрастность / Три цвета, увеличения верха головы, анимации и сдвигов
function setupGrainControls() {
  const buttons = document.querySelectorAll("#grain-controls .grain-toggle");
  buttons.forEach((btn) => {
    const layer = btn.getAttribute("data-layer");
    btn.classList.toggle("is-active", Boolean(state.grain[layer]));
    btn.addEventListener("click", () => {
      state.grain[layer] = !state.grain[layer];
      btn.classList.toggle("is-active", Boolean(state.grain[layer]));
      updateStage();
    });
  });

  const meshButtons = document.querySelectorAll("#mesh-controls .mesh-toggle");
  meshButtons.forEach((btn) => {
    const layer = btn.getAttribute("data-mesh-layer");
    if (!layer) return;
    btn.classList.toggle("is-active", Boolean(state.mesh && state.mesh[layer]));
    btn.addEventListener("click", () => {
      if (!state.mesh) state.mesh = {};
      state.mesh[layer] = !state.mesh[layer];
      if (state.mesh[layer]) {
        state.gradientMode = true;
      }
      syncMeshToggleButtons();
      updateStage();
    });
  });

  const btnAllMesh = document.getElementById("btn-all-mesh");
  if (btnAllMesh) {
    btnAllMesh.addEventListener("click", () => {
      if (!state.mesh) state.mesh = {};
      const anyActive = MESH_KEYS.some((k) => Boolean(state.mesh[k]));
      const nextState = !anyActive;
      MESH_KEYS.forEach((k) => {
        state.mesh[k] = nextState;
      });
      state.gradientMode = nextState;
      syncMeshToggleButtons();
      updateStage();
    });
  }

  const btnRerollMesh = document.getElementById("btn-reroll-mesh");
  if (btnRerollMesh) {
    btnRerollMesh.addEventListener("click", () => {
      state.gradientMode = true;
      randomizeMeshPerDetail(true);
      syncMeshToggleButtons();
      updateStage();
    });
  }

  const glareButtons = document.querySelectorAll("#glare-controls .glare-toggle");
  glareButtons.forEach((btn) => {
    const layer = btn.getAttribute("data-glare-layer");
    if (!layer) return;
    btn.classList.toggle("is-active", Boolean(state.glareTargets && state.glareTargets[layer]));
    btn.addEventListener("click", () => {
      if (!state.glareTargets) state.glareTargets = {};
      state.glareTargets[layer] = !state.glareTargets[layer];
      syncGlareControlsUI();
      updateStage();
    });
  });

  const btnAllGrain = document.getElementById("btn-all-grain");
  if (btnAllGrain) {
    btnAllGrain.addEventListener("click", () => {
      const anyActive = Object.values(state.grain).some(Boolean);
      const nextState = !anyActive;
      Object.keys(state.grain).forEach((k) => {
        state.grain[k] = nextState;
      });
      syncGrainToggleButtons();
      updateStage();
    });
  }

  const btnColorLockAll = document.getElementById("btn-color-lock-all");
  if (btnColorLockAll) {
    btnColorLockAll.addEventListener("click", () => {
      if (!state.colorLocks) state.colorLocks = {};
      const colorKeys = Object.keys(state.colors || {});
      const allLocked = colorKeys.length > 0 && colorKeys.every((k) => Boolean(state.colorLocks[k]));
      const nextState = !allLocked;
      colorKeys.forEach((k) => {
        state.colorLocks[k] = nextState;
      });
      initColorBars();
    });
  }

  const resetOffsetsBtn = document.getElementById("btn-reset-offsets");
  if (resetOffsetsBtn) {
    resetOffsetsBtn.addEventListener("click", () => {
      resetAllPartTransforms();
      updateStage();
    });
  }

  const btnRerollNoise = document.getElementById("btn-reroll-noise");
  if (btnRerollNoise) {
    btnRerollNoise.addEventListener("click", () => {
      state.noiseMode = NOISE_MODES[Math.floor(Math.random() * NOISE_MODES.length)].id;
      state.geoCutout = GEO_CUTOUT_MODES[Math.floor(Math.random() * GEO_CUTOUT_MODES.length)].id;
      randomizeNoiseAndGeoPerDetail(true);
      renderOptionButtons("opt-noise-mode", NOISE_MODES, "noiseMode");
      renderOptionButtons("opt-geo-cutout", GEO_CUTOUT_MODES, "geoCutout");
      syncGrainToggleButtons();
      updateStage();
    });
  }

  const btnFaceBoost = document.getElementById("btn-face-top-boost");
  if (btnFaceBoost) {
    btnFaceBoost.addEventListener("click", () => {
      const cur = Math.round(Number(state.faceTopBoostPct) || 0);
      state.faceTopBoostPct = cur >= 50 ? 0 : Math.min(50, cur + 10);
      syncFaceTopBoostUI();
      updateStage();
    });
  }

  const rngFaceBoost = document.getElementById("rng-face-top-boost");
  if (rngFaceBoost) {
    rngFaceBoost.addEventListener("input", (e) => {
      state.faceTopBoostPct = Math.max(0, Math.min(50, Math.round(Number(e.target.value) || 0)));
      syncFaceTopBoostUI();
      updateStage();
    });
  }

  const chkAnimEnabled = document.getElementById("chk-anim-enabled");
  if (chkAnimEnabled) {
    chkAnimEnabled.addEventListener("change", (e) => {
      state.animEnabled = Boolean(e.target.checked);
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimNoise = document.getElementById("chk-anim-noise");
  if (chkAnimNoise) {
    chkAnimNoise.addEventListener("change", (e) => {
      state.animNoise = Boolean(e.target.checked);
      if (state.animNoise) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimParticles = document.getElementById("chk-anim-particles");
  if (chkAnimParticles) {
    chkAnimParticles.addEventListener("change", (e) => {
      state.animParticles = Boolean(e.target.checked);
      if (state.animParticles) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimBlink = document.getElementById("chk-anim-blink");
  if (chkAnimBlink) {
    chkAnimBlink.addEventListener("change", (e) => {
      state.animBlink = Boolean(e.target.checked);
      if (state.animBlink) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimEars = document.getElementById("chk-anim-ears");
  if (chkAnimEars) {
    chkAnimEars.addEventListener("change", (e) => {
      state.animEars = Boolean(e.target.checked);
      if (state.animEars) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimHead = document.getElementById("chk-anim-head");
  if (chkAnimHead) {
    chkAnimHead.addEventListener("change", (e) => {
      state.animHead = Boolean(e.target.checked);
      if (state.animHead) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimGlare = document.getElementById("chk-anim-glare");
  if (chkAnimGlare) {
    chkAnimGlare.addEventListener("change", (e) => {
      state.animGlare = Boolean(e.target.checked);
      if (state.animGlare) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkAnimHands = document.getElementById("chk-anim-hands");
  if (chkAnimHands) {
    chkAnimHands.addEventListener("change", (e) => {
      state.animHands = Boolean(e.target.checked);
      if (state.animHands) state.animEnabled = true;
      syncAnimControlsUI();
      updateStage();
    });
  }

  const chkContrast = document.getElementById("chk-contrast-mode");
  if (chkContrast) {
    chkContrast.checked = Boolean(state.contrastMode);
    chkContrast.addEventListener("change", (e) => {
      state.contrastMode = Boolean(e.target.checked);
      if (state.threeColorMode) {
        applyThreeColorsPolicy();
      } else if (state.contrastMode) {
        enforceContrastPolicy();
      }
      initAllControls();
      updateStage();
    });
  }

  const chkThreeColors = document.getElementById("chk-three-colors-mode");
  if (chkThreeColors) {
    chkThreeColors.checked = Boolean(state.threeColorMode);
    chkThreeColors.addEventListener("change", (e) => {
      state.threeColorMode = Boolean(e.target.checked);
      if (state.threeColorMode) {
        pickTriadColorsFromPalette();
        applyThreeColorsPolicy();
      } else if (state.contrastMode) {
        enforceContrastPolicy();
      }
      initAllControls();
      updateStage();
    });
  }

  const chkGradient = document.getElementById("chk-gradient-mode");
  if (chkGradient) {
    chkGradient.checked = Boolean(state.gradientMode);
    chkGradient.addEventListener("change", (e) => {
      state.gradientMode = Boolean(e.target.checked);
      updateStage();
    });
  }

  const syncHairBtn = document.getElementById("btn-sync-hair");
  if (syncHairBtn) {
    syncHairBtn.addEventListener("click", () => {
      const refColor = state.hairShort !== "none" ? state.colors.hairShort : state.colors.hairBack;
      state.colors.hairShort = refColor;
      state.colors.hairBack = refColor;
      state.colors.hairBangs = refColor;
      state.colors.hairTop = refColor;
      state.colors.facialHair = refColor;
      if (state.contrastMode) enforceContrastPolicy();
      initAllControls();
      updateStage();
    });
  }

  const chkHands = document.getElementById("chk-hands-enabled");
  if (chkHands) {
    chkHands.addEventListener("change", (e) => {
      state.handsEnabled = Boolean(e.target.checked);
      syncHandsCheckbox();
      updateStage();
    });
  }

  const syncHandsBtn = document.getElementById("btn-sync-hands");
  if (syncHandsBtn) {
    syncHandsBtn.addEventListener("click", () => {
      state.colors.hands = state.colors.skin;
      initAllControls();
      updateStage();
    });
  }

  const rerollHandsBtn = document.getElementById("btn-reroll-hands");
  if (rerollHandsBtn) {
    rerollHandsBtn.addEventListener("click", () => {
      delete state.partOffsets.handLeft;
      delete state.partOffsets.handRight;
      randomizeHandsOffset();
      syncScaleSliderUI();
      updateStage();
    });
  }
}

// Синхронизация состояния галочки «Включить руки» и визуальной активности блока поз
function syncHandsCheckbox() {
  const chkHands = document.getElementById("chk-hands-enabled");
  if (chkHands) {
    chkHands.checked = Boolean(state.handsEnabled);
  }
  const posesWrap = document.getElementById("hands-poses-wrap");
  if (posesWrap) {
    posesWrap.classList.toggle("is-disabled", !state.handsEnabled);
  }
}

// Стек истории сидов для кнопки «← Назад» в шапке
const seedHistory = [];

// Обновление доступности кнопки «← Назад» в шапке
function syncSeedHistoryUI() {
  const btnPrev = document.getElementById("btn-prev-seed");
  if (btnPrev) {
    btnPrev.disabled = seedHistory.length === 0;
  }
}

// Возврат предыдущего сида и состояния Аргонёнка по кнопке «← Назад»
function restorePreviousSeed() {
  if (seedHistory.length === 0) return;
  const prevSnap = seedHistory.pop();
  if (!prevSnap) return;
  Object.keys(prevSnap).forEach((k) => {
    state[k] = prevSnap[k];
  });
  syncSeedHistoryUI();
  initAllControls();
  syncGrainToggleButtons();
  syncMeshToggleButtons();
  syncLockButtons();
  syncSeedUI();
  updateStage();
}

// Случайная или детерминированная по сиду (seed) генерация Аргонёнка с учётом закреплённых замком категорий (state.locks), фиксации цвета элементов (state.colorLocks), 20 пресетов палитр и рандома шума
function randomizeArgon(customSeed) {
  // Сохраняем текущее состояние в историю сидов перед переходом к новому сиду
  seedHistory.push(JSON.parse(JSON.stringify(state)));
  if (seedHistory.length > 50) {
    seedHistory.shift();
  }
  syncSeedHistoryUI();

  const resolvedSeed = typeof customSeed === "string" && customSeed.trim() ? customSeed.trim() : generateRandomSeedCode();
  state.seed = resolvedSeed;
  const inpSeed = document.getElementById("inp-seed");
  if (inpSeed) {
    inpSeed.value = state.seed;
  }

  activeRng = createSeededRng(state.seed);
  try {
    const pick = (arr) => arr[Math.floor(rand() * arr.length)].id;
    const pickColor = (arr) => arr[Math.floor(rand() * arr.length)];
    const isLocked = (key) => Boolean(state.locks[key]);

    // При клике по кнопке рандома возвращаем все элементы на свои места без сохранения правок перемещения и масштаба
    resetAllPartTransforms();

    if (!isLocked("palette")) {
      state.activePalette = pick(PALETTE_MODES);
    }
    const activePal = PALETTES[state.activePalette] || PALETTES["pal-01"];

    if (!isLocked("anim")) {
      state.handAnimPreset = pick(HAND_ANIM_PRESETS);
      state.headAnimPreset = pick(HEAD_ANIM_PRESETS);
    }

    if (!isLocked("bg") && !isColorLocked("bg")) {
      state.useCustomBg = false;
      state.bg = pick(BACKGROUNDS);
      const bgObj = BACKGROUNDS.find((b) => b.id === state.bg) || BACKGROUNDS[0];
      state.colors.bg = `#${bgObj.core}`;
    }

    const skinChoices = activePal.skins;
    const hairChoices = activePal.hairs;
    const chosenSkin = isColorLocked("skin") ? state.colors.skin : pickColor(skinChoices);
    const chosenHair = pickColor(hairChoices);

    if (!isLocked("face")) {
      state.face = pick(OPTIONS.face);
    }
    if (!isColorLocked("skin")) {
      state.colors.skin = chosenSkin;
    }

    if (!isLocked("ears")) {
      state.ears = pick(OPTIONS.ears);
    }
    if (!isColorLocked("ears")) {
      state.colors.ears = chosenSkin;
    }

    if (!isLocked("earrings")) {
      state.earrings = rand() > 0.35 ? pick(OPTIONS.earrings) : "none";
    }
    if (!isColorLocked("earrings")) {
      state.colors.earrings = pickColor(activePal.accents);
    }

    if (!isLocked("eyes")) {
      state.eyes = pick(OPTIONS.eyes);
    }
    if (!isColorLocked("eyes")) {
      state.colors.eyes = pickColor(activePal.eyes);
    }

    if (!isLocked("nose")) {
      state.nose = pick(OPTIONS.nose);
    }
    if (!isColorLocked("nose")) {
      state.colors.nose = adjustHexColor(state.colors.skin, -34);
    }

    if (!isLocked("mouth")) {
      state.mouth = pick(OPTIONS.mouth);
    }
    if (!isColorLocked("mouth")) {
      state.colors.mouth = pickColor(activePal.mouths);
    }

    if (!isLocked("facialHair")) {
      state.facialHair = rand() > 0.55 ? pick(OPTIONS.facialHair) : "none";
    }
    if (!isColorLocked("facialHair")) {
      state.colors.facialHair = chosenHair;
    }

    // С вероятностью 35% выбираем короткую стрижку от висков, иначе комбинацию задних волос и чёлки (с учётом замков)
    const useShortHair = rand() < 0.35;
    if (!isLocked("hairShort") && !isLocked("hairBack") && !isLocked("hairBangs")) {
      if (useShortHair) {
        const shortList = OPTIONS.hairShort.filter((i) => i.id !== "none");
        state.hairShort = pick(shortList);
        state.hairBack = "none";
        state.hairBangs = "none";
      } else {
        state.hairShort = "none";
        state.hairBack = pick(OPTIONS.hairBack);
        state.hairBangs = pick(OPTIONS.hairBangs);
      }
    } else {
      if (!isLocked("hairShort")) {
        state.hairShort = useShortHair ? pick(OPTIONS.hairShort.filter((i) => i.id !== "none")) : "none";
      }
      if (!isLocked("hairBack")) {
        state.hairBack = state.hairShort !== "none" ? "none" : pick(OPTIONS.hairBack);
      }
      if (!isLocked("hairBangs")) {
        state.hairBangs = state.hairShort !== "none" ? "none" : pick(OPTIONS.hairBangs);
      }
    }
    if (!isColorLocked("hairShort")) state.colors.hairShort = chosenHair;
    if (!isColorLocked("hairBack")) state.colors.hairBack = chosenHair;
    if (!isColorLocked("hairBangs")) state.colors.hairBangs = chosenHair;

    if (!isLocked("hairTop")) {
      state.hairTop = pick(OPTIONS.hairTop);
    }
    if (!isColorLocked("hairTop")) {
      state.colors.hairTop = rand() > 0.75 ? pickColor(hairChoices) : chosenHair;
    }

    if (!isLocked("bodyShape")) {
      state.bodyShape = pick(OPTIONS.bodyShape);
    }
    if (!isColorLocked("bodyShape")) {
      state.colors.bodyShape = pickColor(activePal.bodies);
    }

    if (!isLocked("clothDetail")) {
      state.clothDetail = pick(OPTIONS.clothDetail);
    }
    if (!isColorLocked("clothDetail")) {
      state.colors.clothDetail = pickColor(activePal.accents);
    }
    if (!isColorLocked("clothPocket")) {
      state.colors.clothPocket = pickColor(activePal.accents);
    }

    if (!isLocked("hands")) {
      state.handLeft = pick(OPTIONS.handLeft);
      state.handRight = pick(OPTIONS.handRight);
      randomizeHandsOffset();
    }
    if (!isColorLocked("hands")) {
      state.colors.hands = state.colors.skin;
    }

    if (!isLocked("glasses")) {
      state.glasses = rand() > 0.5 ? pick(OPTIONS.glasses) : "none";
    }
    if (!isColorLocked("glasses")) {
      state.colors.glasses = pickColor(activePal.accents);
    }

    if (!isLocked("horns")) {
      state.horns = rand() > 0.55 ? pick(OPTIONS.horns.filter((i) => i.id !== "none")) : "none";
    }
    if (!isColorLocked("horns")) {
      state.colors.horns = pickColor(activePal.swatches);
    }

    if (!isLocked("hat")) {
      state.hat = rand() > 0.4 ? pick(OPTIONS.hat) : "none";
    }
    if (!isColorLocked("hat")) {
      state.colors.hat = pickColor(activePal.swatches);
    }

    if (!isLocked("acc")) {
      state.acc = pick(OPTIONS.acc);
    }
    if (!isColorLocked("acc")) {
      state.colors.acc = pickColor(activePal.accents);
    }

    if (!isLocked("particles")) {
      state.particles = rand() > 0.3 ? pick(OPTIONS.particles) : "none";
    }
    if (!isColorLocked("particles")) {
      state.colors.particles = pickColor(activePal.accents);
    }

    // Для конуса странника (bamboo / bambooXL), панамы (bucket), соломенной шляпы (straw) и мини-бини (beanie) по умолчанию ставим "Гладкий верх" (none), если верх не закреплён
    if (!isLocked("hairTop") && ["bamboo", "bambooXL", "bucket", "straw", "beanie"].includes(state.hat)) {
      state.hairTop = "none";
    }

    if (state.threeColorMode) {
      pickTriadColorsFromPalette();
      applyThreeColorsPolicy();
    } else if (state.contrastMode) {
      enforceContrastPolicy();
    }

    // Рандом по сетчатому градиенту (включён в генератор, настраивает узлы и части тела с учётом замка gradient)
    if (!isLocked("gradient")) {
      state.gradientMode = rand() > 0.25;
      randomizeMeshPerDetail(true);
    }

    // Рандом по шуму (текстура, гео-вычитание и индивидуальное зерно по деталям) теперь включён в общий рандом
    if (!isLocked("noise")) {
      state.noiseMode = pick(NOISE_MODES);
      state.geoCutout = pick(GEO_CUTOUT_MODES);
      randomizeNoiseAndGeoPerDetail(true);
    }
  } finally {
    activeRng = null;
  }

  initAllControls();
  syncGrainToggleButtons();
  syncMeshToggleButtons();
  syncLockButtons();
  updateStage();
}

// Визуальное окно поддержки во время формирования SVG/GIF (сборка начинается сразу при клике, а окно отображается минимум 3 секунды)
let activeDownloadCountdownTimer = null;
function triggerSupportCountdownBeforeDownload(formatLabel, downloadAction) {
  const modal = document.getElementById("download-support-modal");
  const lblFormat = document.getElementById("lbl-download-format");
  const lblTitle = document.getElementById("download-modal-title");
  const lblSubtitle = document.getElementById("download-modal-subtitle");
  const lblStatusText = document.getElementById("lbl-download-status-text");
  const lblSec = document.getElementById("lbl-download-countdown");
  const barFill = document.getElementById("bar-download-countdown");

  if (!modal) {
    downloadAction();
    return;
  }

  if (lblFormat) {
    lblFormat.textContent = `${t("dlDownloadingFmt")} ${formatLabel}`;
  }
  if (lblTitle) {
    lblTitle.textContent = formatLabel.includes("GIF") ? t("dlTitleGif") : t("dlTitleSvg");
  }
  if (lblSubtitle) {
    lblSubtitle.textContent = t("dlSubSvg");
  }
  if (lblStatusText) {
    lblStatusText.textContent = t("dlAutoStart");
  }

  if (activeDownloadCountdownTimer) {
    clearInterval(activeDownloadCountdownTimer);
    activeDownloadCountdownTimer = null;
  }

  const totalMs = 3000;
  const startedAt = Date.now();
  if (lblSec) lblSec.textContent = `3${t("dlSecUnit")}`;
  if (barFill) barFill.style.width = "100%";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  activeDownloadCountdownTimer = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const remainingMs = Math.max(0, totalMs - elapsed);
    const remainingSec = Math.ceil(remainingMs / 1000);
    const pct = Math.max(0, Math.min(100, (remainingMs / totalMs) * 100));

    if (lblSec) {
      lblSec.textContent = remainingSec > 0 ? `${remainingSec}${t("dlSecUnit")}` : t("dlLoading");
    }
    if (barFill) {
      barFill.style.width = `${pct.toFixed(1)}%`;
    }

    if (remainingMs <= 0) {
      clearInterval(activeDownloadCountdownTimer);
      activeDownloadCountdownTimer = null;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      downloadAction();
    }
  }, 50);
}

// Непосредственное скачивание векторного SVG
function performExportSvg() {
  const svgData = buildSvgString();
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `argonyata-${Date.now()}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Экспорт в векторный SVG (с 3-секундным окном «Поддержите пожалуйста»)
function exportSvg() {
  triggerSupportCountdownBeforeDownload("SVG", performExportSvg);
}

// Экспорт в четкий PNG (1200x1200) с сохранением всех градиентов и текстуры шума
function exportPng() {
  const svgData = buildSvgString();
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 1200;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 1200, 1200);
    URL.revokeObjectURL(url);

    canvas.toBlob((pngBlob) => {
      if (!pngBlob) return;
      const pngUrl = URL.createObjectURL(pngBlob);
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = `argonyata-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(pngUrl);
    }, "image/png");
  };
  img.src = url;
}

// Кодировщик анимированного GIF89a (256 цветов с адаптивной палитрой кадра + LZW 12-bit + бесконечный цикл NETSCAPE2.0)
function encodeGif89a(framesRgba, width, height, delayCs = 12) {
  const out = [];
  const writeByte = (b) => out.push(b & 0xff);
  const writeShort = (v) => {
    out.push(v & 0xff, (v >> 8) & 0xff);
  };
  const writeAscii = (str) => {
    for (let i = 0; i < str.length; i++) out.push(str.charCodeAt(i) & 0xff);
  };

  // 1. Формируем 256-цветную палитру: выбираем до 128 самых частых цветов из первого кадра (точные оттенки Аргонёнка) + равномерный RGB-куб
  const palette = [];
  const freqMap = new Map();
  const f0 = framesRgba[0];
  for (let i = 0; i < f0.length; i += 16) {
    const r = f0[i] & 0xf8;
    const g = f0[i + 1] & 0xf8;
    const b = f0[i + 2] & 0xf8;
    const key = (r << 16) | (g << 8) | b;
    freqMap.set(key, (freqMap.get(key) || 0) + 1);
  }
  const sortedKeys = Array.from(freqMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 128)
    .map((e) => e[0]);

  const seenColor = new Set();
  sortedKeys.forEach((key) => {
    seenColor.add(key);
    palette.push([(key >> 16) & 0xff, (key >> 8) & 0xff, key & 0xff]);
  });

  // Добиваем палитру универсальной сеткой 6x6x4 до 256 цветов
  for (let r = 0; r < 6 && palette.length < 256; r++) {
    for (let g = 0; g < 6 && palette.length < 256; g++) {
      for (let b = 0; b < 4 && palette.length < 256; b++) {
        const rv = Math.round((r * 255) / 5);
        const gv = Math.round((g * 255) / 5);
        const bv = Math.round((b * 255) / 3);
        const key = ((rv & 0xf8) << 16) | ((gv & 0xf8) << 8) | (bv & 0xf8);
        if (!seenColor.has(key)) {
          seenColor.add(key);
          palette.push([rv, gv, bv]);
        }
      }
    }
  }
  while (palette.length < 256) {
    palette.push([0, 0, 0]);
  }

  // Быстрый 15-битный кэш поиска ближайшего индекса палитры
  const lut15 = new Int16Array(32768).fill(-1);
  const findNearestIndex = (r, g, b) => {
    const k15 = ((r >> 3) << 10) | ((g >> 3) << 5) | (b >> 3);
    if (lut15[k15] !== -1) return lut15[k15];
    let bestIdx = 0;
    let bestDist = 1e9;
    for (let i = 0; i < 256; i++) {
      const pr = palette[i][0] - r;
      const pg = palette[i][1] - g;
      const pb = palette[i][2] - b;
      const d = pr * pr + pg * pg + pb * pb;
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
        if (d === 0) break;
      }
    }
    lut15[k15] = bestIdx;
    return bestIdx;
  };

  // Заголовок GIF89a + Logical Screen Descriptor
  writeAscii("GIF89a");
  writeShort(width);
  writeShort(height);
  writeByte(0xf7); // Global Color Table (256 цветов)
  writeByte(0);
  writeByte(0);

  // Global Color Table (768 байт)
  for (let i = 0; i < 256; i++) {
    writeByte(palette[i][0]);
    writeByte(palette[i][1]);
    writeByte(palette[i][2]);
  }

  // Netscape 2.0 расширение для бесконечного зацикливания
  writeByte(0x21);
  writeByte(0xff);
  writeByte(0x0b);
  writeAscii("NETSCAPE2.0");
  writeByte(0x03);
  writeByte(0x01);
  writeShort(0);
  writeByte(0x00);

  // Таблица словаря LZW (4096 * 256)
  const lzwNext = new Int32Array(4096 * 256);
  const pixelCount = width * height;
  const indexedFrame = new Uint8Array(pixelCount);

  for (let f = 0; f < framesRgba.length; f++) {
    const rgba = framesRgba[f];
    for (let p = 0, j = 0; p < pixelCount; p++, j += 4) {
      indexedFrame[p] = findNearestIndex(rgba[j], rgba[j + 1], rgba[j + 2]);
    }

    // Graphic Control Extension
    writeByte(0x21);
    writeByte(0xf9);
    writeByte(0x04);
    writeByte(0x04);
    writeShort(delayCs);
    writeByte(0x00);
    writeByte(0x00);

    // Image Descriptor
    writeByte(0x2c);
    writeShort(0);
    writeShort(0);
    writeShort(width);
    writeShort(height);
    writeByte(0x00);

    // LZW сжатие кадра (minCodeSize = 8)
    const minCodeSize = 8;
    writeByte(minCodeSize);

    const clearCode = 256;
    const eoiCode = 257;
    let nextCode = 258;
    let codeSize = 9;
    let maxCode = 512;

    lzwNext.fill(-1);

    const subBlock = [];
    let bitBuf = 0;
    let bitCount = 0;

    const flushSubBlock = () => {
      if (subBlock.length > 0) {
        writeByte(subBlock.length);
        for (let i = 0; i < subBlock.length; i++) writeByte(subBlock[i]);
        subBlock.length = 0;
      }
    };

    const emitCode = (code) => {
      bitBuf |= code << bitCount;
      bitCount += codeSize;
      while (bitCount >= 8) {
        subBlock.push(bitBuf & 0xff);
        if (subBlock.length === 255) flushSubBlock();
        bitBuf >>= 8;
        bitCount -= 8;
      }
    };

    emitCode(clearCode);
    let prefix = indexedFrame[0];

    for (let i = 1; i < pixelCount; i++) {
      const k = indexedFrame[i];
      const dictIdx = (prefix << 8) | k;
      const candidate = lzwNext[dictIdx];
      if (candidate !== -1) {
        prefix = candidate;
      } else {
        emitCode(prefix);
        if (nextCode < 4096) {
          lzwNext[dictIdx] = nextCode;
          if (nextCode === maxCode && codeSize < 12) {
            codeSize++;
            maxCode <<= 1;
          }
          nextCode++;
        } else {
          emitCode(clearCode);
          lzwNext.fill(-1);
          nextCode = 258;
          codeSize = 9;
          maxCode = 512;
        }
        prefix = k;
      }
    }

    emitCode(prefix);
    emitCode(eoiCode);
    if (bitCount > 0) {
      subBlock.push(bitBuf & 0xff);
    }
    flushSubBlock();
    writeByte(0x00); // Конец блоков кадра
  }

  writeByte(0x3b); // GIF Trailer
  return new Uint8Array(out);
}

// Непосредственная сборка и скачивание анимированной гифки 512×512 (сборка начинается мгновенно при клике, а во время формирования показывается «Ваша гиф формируется!» с просьбой поддержать)
let isExportingGif = false;
async function performExportGif() {
  if (isExportingGif) return;
  isExportingGif = true;

  const btnHeader = document.getElementById("btn-export-gif");
  const btnStage = document.getElementById("btn-export-gif-stage");
  const origHeaderText = btnHeader ? btnHeader.textContent : "Скачать GIF 512×512";
  const origStageText = btnStage ? btnStage.textContent : "Скачать GIF 512×512";

  const modal = document.getElementById("download-support-modal");
  const lblFormat = document.getElementById("lbl-download-format");
  const lblTitle = document.getElementById("download-modal-title");
  const lblSubtitle = document.getElementById("download-modal-subtitle");
  const lblStatusText = document.getElementById("lbl-download-status-text");
  const lblSec = document.getElementById("lbl-download-countdown");
  const barFill = document.getElementById("bar-download-countdown");

  if (activeDownloadCountdownTimer) {
    clearInterval(activeDownloadCountdownTimer);
    activeDownloadCountdownTimer = null;
  }

  let currentFrameDone = 0;
  const totalFrames = 20;
  let isEncodingDone = false;
  const minDisplayMs = 3000;
  const startedAt = Date.now();

  if (modal) {
    if (lblFormat) lblFormat.textContent = t("dlBuildingGif");
    if (lblTitle) lblTitle.textContent = t("dlTitleGif");
    if (lblSubtitle) {
      lblSubtitle.textContent = t("dlSubGif");
    }
    if (lblStatusText) lblStatusText.textContent = `${t("dlBuildingFrames")} (1/20):`;
    if (lblSec) lblSec.textContent = `3${t("dlSecUnit")}`;
    if (barFill) barFill.style.width = "100%";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  const minWaitPromise = new Promise((resolve) => {
    activeDownloadCountdownTimer = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const remainingMs = Math.max(0, minDisplayMs - elapsed);
      const remainingSec = Math.ceil(remainingMs / 1000);
      const timePct = Math.max(0, Math.min(100, (remainingMs / minDisplayMs) * 100));

      if (lblStatusText) {
        lblStatusText.textContent = isEncodingDone
          ? t("dlReadyDownloading")
          : `${t("dlBuildingFrames")} (${Math.min(totalFrames, currentFrameDone + 1)}/${totalFrames}):`;
      }
      if (lblSec) {
        if (remainingSec > 0) {
          lblSec.textContent = `${remainingSec}${t("dlSecUnit")}`;
        } else {
          lblSec.textContent = isEncodingDone ? t("dlLoading") : `${t("dlFrameWord")} ${currentFrameDone}/${totalFrames}`;
        }
      }
      if (barFill) {
        barFill.style.width = `${timePct.toFixed(1)}%`;
      }

      if (remainingMs <= 0) {
        clearInterval(activeDownloadCountdownTimer);
        activeDownloadCountdownTimer = null;
        resolve();
      }
    }, 50);
  });

  const setBtnStatus = (txt, disabled) => {
    if (btnHeader) {
      btnHeader.textContent = txt;
      btnHeader.disabled = disabled;
    }
    if (btnStage) {
      btnStage.textContent = txt;
      btnStage.disabled = disabled;
    }
  };

  try {
    const width = 512;
    const height = 512;
    const loopDurationSec = 2.4;
    const delayCs = 12; // 120ms на кадр (20 * 0.12 = 2.4s)

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const framesRgba = [];

    for (let f = 0; f < totalFrames; f++) {
      currentFrameDone = f;
      setBtnStatus(`GIF ${f + 1}/${totalFrames}...`, true);
      if (lblStatusText) {
        lblStatusText.textContent = `${t("dlBuildingFrames")} (${f + 1}/${totalFrames}):`;
      }
      const tSec = (f / totalFrames) * loopDurationSec;
      const svgData = buildSvgString(tSec);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          URL.revokeObjectURL(url);
          const imgData = ctx.getImageData(0, 0, width, height);
          framesRgba.push(imgData.data);
          resolve();
        };
        img.onerror = (err) => {
          URL.revokeObjectURL(url);
          reject(err);
        };
        img.src = url;
      });
    }

    currentFrameDone = totalFrames;
    setBtnStatus(t("dlBtnPacking"), true);
    if (lblStatusText) lblStatusText.textContent = t("dlPackingGif");
    await new Promise((r) => setTimeout(r, 15));

    const gifBytes = encodeGif89a(framesRgba, width, height, delayCs);
    const gifBlob = new Blob([gifBytes], { type: "image/gif" });
    isEncodingDone = true;

    // Дожидаемся окончания минимального 3-секундного показа окна поддержки, если сборка завершилась быстрее
    await minWaitPromise;

    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }

    const gifUrl = URL.createObjectURL(gifBlob);
    const link = document.createElement("a");
    link.href = gifUrl;
    link.download = `argonyata-512x512-${Date.now()}.gif`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(gifUrl);
  } catch (err) {
    console.error("Ошибка при создании GIF 512x512:", err);
    if (activeDownloadCountdownTimer) {
      clearInterval(activeDownloadCountdownTimer);
      activeDownloadCountdownTimer = null;
    }
    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }
  } finally {
    isExportingGif = false;
    setBtnStatus(origHeaderText, false);
    if (btnStage) btnStage.textContent = origStageText;
  }
}

// Экспорт GIF 512×512 (сборка анимации начинается сразу при клике одновременно с показом окна «Ваша гиф формируется!»)
function exportGif() {
  if (isExportingGif) return;
  performExportGif();
}

// Отрисовка всех элементов управления
function initAllControls() {
  renderOptionButtons("opt-palette", PALETTE_MODES, "activePalette");
  renderOptionButtons("opt-head-anim", HEAD_ANIM_PRESETS, "headAnimPreset");
  renderOptionButtons("opt-hand-anim", HAND_ANIM_PRESETS, "handAnimPreset");
  renderOptionButtons("opt-noise-mode", NOISE_MODES, "noiseMode");
  renderOptionButtons("opt-geo-cutout", GEO_CUTOUT_MODES, "geoCutout");
  renderOptionButtons("opt-bg", BACKGROUNDS, "bg");
  renderOptionButtons("opt-face", OPTIONS.face, "face");
  renderOptionButtons("opt-ears", OPTIONS.ears, "ears");
  renderOptionButtons("opt-earrings", OPTIONS.earrings, "earrings");
  renderOptionButtons("opt-eyes", OPTIONS.eyes, "eyes");
  renderOptionButtons("opt-nose", OPTIONS.nose, "nose");
  renderOptionButtons("opt-mouth", OPTIONS.mouth, "mouth");
  renderOptionButtons("opt-facial-hair", OPTIONS.facialHair, "facialHair");
  renderOptionButtons("opt-hair-short", OPTIONS.hairShort, "hairShort");
  renderOptionButtons("opt-hair-back", OPTIONS.hairBack, "hairBack");
  renderOptionButtons("opt-hair-bangs", OPTIONS.hairBangs, "hairBangs");
  renderOptionButtons("opt-hair-top", OPTIONS.hairTop, "hairTop");
  renderOptionButtons("opt-body", OPTIONS.bodyShape, "bodyShape");
  renderOptionButtons("opt-cloth-detail", OPTIONS.clothDetail, "clothDetail");
  renderOptionButtons("opt-hand-left", OPTIONS.handLeft, "handLeft");
  renderOptionButtons("opt-hand-right", OPTIONS.handRight, "handRight");
  renderOptionButtons("opt-glasses", OPTIONS.glasses, "glasses");
  renderOptionButtons("opt-horns", OPTIONS.horns, "horns");
  renderOptionButtons("opt-hat", OPTIONS.hat, "hat");
  renderOptionButtons("opt-acc", OPTIONS.acc, "acc");
  renderOptionButtons("opt-particles", OPTIONS.particles, "particles");

  syncHandsCheckbox();
  syncFaceTopBoostUI();
  syncAnimControlsUI();
  const chkContrastEl = document.getElementById("chk-contrast-mode");
  if (chkContrastEl) chkContrastEl.checked = Boolean(state.contrastMode);
  const chkThreeEl = document.getElementById("chk-three-colors-mode");
  if (chkThreeEl) chkThreeEl.checked = Boolean(state.threeColorMode);
  const chkGradEl = document.getElementById("chk-gradient-mode");
  if (chkGradEl) chkGradEl.checked = Boolean(state.gradientMode);
  syncMeshToggleButtons();
  initColorBars();
}

// Старт приложения
document.addEventListener("DOMContentLoaded", () => {
  activeRng = createSeededRng(state.seed);
  try {
    randomizeNoiseAndGeoPerDetail(false);
    randomizeMeshPerDetail(false);
    randomizeHandsOffset();
  } finally {
    activeRng = null;
  }

  // Привязываем кнопки переключения языков с флагами в шапке (по умолчанию английский "en")
  document.querySelectorAll("#lang-switcher .lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang") || "en";
      applyLocalization(lang);
    });
  });

  setupGrainControls();
  setupLockControls();
  setupStagePartClick();
  applyLocalization("en");
  updateStage();

  const btnScrollTop = document.getElementById("btn-scroll-top");
  if (btnScrollTop) {
    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const btnRandomHeader = document.getElementById("btn-random");
  if (btnRandomHeader) {
    btnRandomHeader.addEventListener("click", () => randomizeArgon());
  }
  const btnPrevSeed = document.getElementById("btn-prev-seed");
  if (btnPrevSeed) {
    btnPrevSeed.addEventListener("click", () => restorePreviousSeed());
  }
  syncSeedHistoryUI();
  const btnNewSeed = document.getElementById("btn-new-seed");
  if (btnNewSeed) {
    btnNewSeed.addEventListener("click", () => randomizeArgon());
  }
  const inpSeed = document.getElementById("inp-seed");
  const btnApplySeed = document.getElementById("btn-apply-seed");
  if (btnApplySeed && inpSeed) {
    btnApplySeed.addEventListener("click", () => {
      randomizeArgon(inpSeed.value.trim() || "ARGON-01");
    });
    inpSeed.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        randomizeArgon(inpSeed.value.trim() || "ARGON-01");
      }
    });
  }
  const btnCopySeed = document.getElementById("btn-copy-seed");
  if (btnCopySeed) {
    btnCopySeed.addEventListener("click", async () => {
      const seedText = String(state.seed || "ARGON-01");
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(seedText);
        }
      } catch (_err) {
        // Fallback при отсутствии доступа к буферу
      }
      btnCopySeed.textContent = t("copiedText");
      setTimeout(() => {
        btnCopySeed.textContent = t("btnCopySeed");
      }, 1200);
    });
  }
  const btnSvgHeader = document.getElementById("btn-export-svg");
  if (btnSvgHeader) btnSvgHeader.addEventListener("click", exportSvg);
  const btnPngHeader = document.getElementById("btn-export-png");
  if (btnPngHeader) btnPngHeader.addEventListener("click", exportPng);
  const btnGifHeader = document.getElementById("btn-export-gif");
  if (btnGifHeader) btnGifHeader.addEventListener("click", exportGif);
  const btnGifStage = document.getElementById("btn-export-gif-stage");
  if (btnGifStage) btnGifStage.addEventListener("click", exportGif);
});
