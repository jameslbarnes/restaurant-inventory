const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const photos = (names) =>
  names.map((name) => ({
    name,
    src: `assets/photos/${name}.jpg`
  }));

const inventory = [
  {
    group: "priority",
    category: "Chairs & stools",
    recommendation: "Take",
    name: "Wood/bentwood bar-height chairs with arms",
    qty: "10 visible / likely 12-14",
    confidence: "Medium",
    low: 450,
    high: 1190,
    rationale:
      "Main clustered front-of-house seating. New commercial bentwood stools are expensive, but this is a bulk removal situation with unknown wear, so the range lands well below replacement cost.",
    photos: photos(["IMG_0174", "IMG_0182", "IMG_0259"])
  },
  {
    group: "priority",
    category: "Chairs & stools",
    recommendation: "Take",
    name: "Black bent-plywood chairs with chrome legs",
    qty: "8 visible / likely 10-12",
    confidence: "Medium",
    low: 200,
    high: 600,
    rationale:
      "Good utility value, but closeups show seat wear. Useful if you like the look; not worth stretching for as a resale item.",
    photos: photos(["IMG_0156", "IMG_0152", "IMG_0259"])
  },
  {
    group: "priority",
    category: "Chairs & stools",
    recommendation: "Take",
    name: "Brown arched-back wood armchairs with tan seats",
    qty: "2 visible / likely 3-4",
    confidence: "Medium",
    low: 80,
    high: 300,
    rationale:
      "Attractive individual pieces, but the count is low and several angles repeat the same chairs. Value is mostly use value.",
    photos: photos(["IMG_0141", "IMG_0150", "IMG_0259"])
  },
  {
    group: "priority",
    category: "Lounge",
    recommendation: "Take",
    name: "Orange upholstered tub/lounge chairs",
    qty: "3 visible / likely 4",
    confidence: "Medium",
    low: 225,
    high: 700,
    rationale:
      "These have the strongest style value among the loose chairs. Condition and odor matter; price should move down fast if upholstery needs cleaning.",
    photos: photos(["IMG_0166", "IMG_0182", "IMG_0259"])
  },
  {
    group: "priority",
    category: "Lounge",
    recommendation: "Take",
    name: "Gray/black upholstered barrel chairs",
    qty: "2 visible",
    confidence: "High",
    low: 150,
    high: 350,
    rationale:
      "Clearly visible pair. Good lounge value, but used upholstery should stay discounted unless condition is excellent.",
    photos: photos(["IMG_0168", "IMG_0197", "IMG_0259"])
  },
  {
    group: "priority",
    category: "Lounge",
    recommendation: "Take",
    name: "Black leather sofas",
    qty: "2 visible",
    confidence: "High",
    low: 500,
    high: 1200,
    rationale:
      "One appears full-size and one appears smaller. These are worth taking if leather is intact, but removal and unknown wear keep them below normal used retail pricing.",
    photos: photos(["IMG_0185", "IMG_0197", "IMG_0260"])
  },
  {
    group: "priority",
    category: "Lounge",
    recommendation: "Take",
    name: "Long black tufted bench/ottoman",
    qty: "1",
    confidence: "High",
    low: 200,
    high: 500,
    rationale:
      "Distinctive, visible, and useful. Its value depends on vinyl/leather condition and whether the legs are stable.",
    photos: photos(["IMG_0186", "IMG_0188", "IMG_0260"])
  },
  {
    group: "priority",
    category: "Tables",
    recommendation: "Take",
    name: "Rectangular wood coffee table",
    qty: "1",
    confidence: "High",
    low: 80,
    high: 200,
    rationale:
      "Useful with the lounge set, but common enough that it should be priced as an add-on rather than a driver of the deal.",
    photos: photos(["IMG_0188", "IMG_0260"])
  },
  {
    group: "priority",
    category: "Tables",
    recommendation: "Take",
    name: "Small round cocktail/side tables",
    qty: "4 visible / likely 5",
    confidence: "Medium",
    low: 160,
    high: 625,
    rationale:
      "Mixed pedestal and side-table pieces. Good practical value, but the mixed set should get a bundle discount.",
    photos: photos(["IMG_0144", "IMG_0172", "IMG_0211"])
  },
  {
    group: "priority",
    category: "Tables",
    recommendation: "Take",
    name: "White/square pedestal dining tables",
    qty: "3 visible / likely 4",
    confidence: "Medium",
    low: 180,
    high: 480,
    rationale:
      "Useful dining tables along the banquette wall. Confirm whether tops detach from bases before assigning the high end.",
    photos: photos(["IMG_0252", "IMG_0259"])
  },
  {
    group: "priority",
    category: "Tables",
    recommendation: "Take",
    name: "Rectangular wood tables by window",
    qty: "2 matching",
    confidence: "High",
    low: 200,
    high: 500,
    rationale:
      "Clearly visible matching pair. They are practical and easy to remove if legs detach cleanly.",
    photos: photos(["IMG_0139", "IMG_0183", "IMG_0261"])
  },
  {
    group: "priority",
    category: "Tables",
    recommendation: "Take",
    name: "Large dark rectangular table",
    qty: "1",
    confidence: "Medium",
    low: 100,
    high: 250,
    rationale:
      "Freestanding communal or conference-style table. Size and removal path need confirmation.",
    photos: photos(["IMG_0143"])
  },
  {
    group: "priority",
    category: "Booths",
    recommendation: "Try if removable",
    name: "Built-in / booth-style wood banquette seating",
    qty: "Multiple runs",
    confidence: "Medium",
    low: 750,
    high: 2500,
    rationale:
      "Worth trying now. The wood booth runs have real room value and match the dining set, but the price depends almost entirely on whether they detach in reusable sections without demolition damage.",
    photos: photos(["IMG_0252", "IMG_0259", "IMG_0262"])
  },
  {
    group: "priority",
    category: "Decor",
    recommendation: "Take if clean",
    name: "Large green area rug",
    qty: "1",
    confidence: "Medium",
    low: 100,
    high: 400,
    rationale:
      "The rug anchors the lounge zone, but restaurant rugs can carry odors and stains. Inspect before paying real money for it.",
    photos: photos(["IMG_0186", "IMG_0197", "IMG_0260"])
  },
  {
    group: "priority",
    category: "Lighting / decor",
    recommendation: "Take if easy",
    name: "Crystal-style chandelier",
    qty: "1 visible",
    confidence: "Medium",
    low: 150,
    high: 600,
    rationale:
      "Visible hanging crystal-style fixture. It is worth including if intact and easy to disconnect, but unbranded chandeliers have volatile resale value and removal/wiring risk should keep the offer conservative.",
    photos: photos(["IMG_0205"])
  },
  {
    group: "priority",
    category: "Patio",
    recommendation: "Take",
    name: "White outdoor picnic tables",
    qty: "9 visible / likely 10-11",
    confidence: "Medium",
    low: 700,
    high: 2200,
    rationale:
      "The original count was too low. The wide patio view shows a larger lower-yard cluster, and the covered deck adds more. Count is still conservative because some are partially cropped or overlap at the edge of the frame.",
    photos: photos(["IMG_0232", "IMG_0233", "IMG_0240", "IMG_0246"])
  },
  {
    group: "priority",
    category: "Patio",
    recommendation: "Take",
    name: "Outdoor square tables",
    qty: "3 visible",
    confidence: "High",
    low: 150,
    high: 450,
    rationale:
      "Three patio tables are visible. Condition exposure and surface wear keep the range modest.",
    photos: photos(["IMG_0241", "IMG_0242", "IMG_0247"])
  },
  {
    group: "priority",
    category: "Patio",
    recommendation: "Take",
    name: "Outdoor dining chairs",
    qty: "6 visible / likely 8",
    confidence: "Medium",
    low: 150,
    high: 480,
    rationale:
      "Mixed outdoor chairs around the patio tables. Count should be confirmed in person.",
    photos: photos(["IMG_0241", "IMG_0243", "IMG_0247"])
  },
  {
    group: "priority",
    category: "Decor",
    recommendation: "Take if cheap",
    name: "Loose front-of-house decor",
    qty: "Mixed lot",
    confidence: "Low",
    low: 150,
    high: 600,
    rationale:
      "Lanterns, vases, candles, plants, and small accents have bundle value, but should not drive the offer.",
    photos: photos(["IMG_0172", "IMG_0238", "IMG_0251"])
  },
  {
    group: "secondary",
    category: "Kitchen",
    recommendation: "Take if tested",
    name: "Commercial dishwasher / warewasher",
    qty: "1",
    confidence: "Medium",
    low: 100,
    high: 900,
    rationale:
      "Condition is everything. Auction value can be low if untested; working premium equipment can be meaningfully higher.",
    photos: photos(["IMG_0199", "IMG_0200"])
  },
  {
    group: "secondary",
    category: "Kitchen",
    recommendation: "Take only if tested",
    name: "PizzaMaster electric deck pizza oven",
    qty: "1 visible / likely double-deck",
    confidence: "Medium",
    low: 1500,
    high: 7500,
    rationale:
      "This is the most interesting kitchen upside item. Photos show a PizzaMaster deck oven, but not the exact model, voltage/phase, stone condition, control condition, or whether it reaches temperature. Treat it as a separate option, not as part of the core furniture offer.",
    upside:
      "If it is confirmed working, removable, and compatible with your electrical service, the practical use/resale value could move materially higher. Ask for a heat-up test, model plate photo, voltage/phase, and a clear removal path before assigning premium value.",
    photos: photos(["IMG_0200", "IMG_0202", "IMG_0203"])
  },
  {
    group: "secondary",
    category: "Kitchen",
    recommendation: "Take if tested",
    name: "Upright stainless reach-in refrigerator/freezer",
    qty: "1",
    confidence: "Medium",
    low: 500,
    high: 1500,
    rationale:
      "Worth money only if it reaches and holds temperature. Without a cold test, discount sharply.",
    photos: photos(["IMG_0210", "IMG_0224"])
  },
  {
    group: "secondary",
    category: "Kitchen",
    recommendation: "Take if cheap",
    name: "Stainless prep/sink/work tables, counters, wall shelves",
    qty: "4-6 pieces",
    confidence: "Medium",
    low: 500,
    high: 1500,
    rationale:
      "Reliable secondary value if they are loose and not heavily plumbed or built into the space.",
    photos: photos(["IMG_0200", "IMG_0202", "IMG_0203"])
  },
  {
    group: "secondary",
    category: "Storage",
    recommendation: "Take if cheap",
    name: "Wire shelving units",
    qty: "3-4",
    confidence: "Medium",
    low: 300,
    high: 800,
    rationale:
      "Useful and easy to move, but common. Bundle it into a broader clean-out number.",
    photos: photos(["IMG_0207", "IMG_0208", "IMG_0253"])
  },
  {
    group: "secondary",
    category: "Storage",
    recommendation: "Take if cheap",
    name: "Bun/sheet pan rack and rolling dish/glass racks",
    qty: "2-3",
    confidence: "Medium",
    low: 150,
    high: 500,
    rationale:
      "Easy to move and useful, but used values are modest unless the exact sizes match your use.",
    photos: photos(["IMG_0201", "IMG_0224", "IMG_0225"])
  },
  {
    group: "secondary",
    category: "Storage",
    recommendation: "Take if cheap",
    name: "Plastic dish/glass racks and crates",
    qty: "20+ pieces",
    confidence: "Low",
    low: 100,
    high: 300,
    rationale:
      "Bulk utility value. Do not let this inflate the offer much.",
    photos: photos(["IMG_0224", "IMG_0225"])
  },
  {
    group: "secondary",
    category: "Storage",
    recommendation: "Take if cheap",
    name: "Smallwares, glassware, and dishware",
    qty: "Mixed lot",
    confidence: "Low",
    low: 100,
    high: 500,
    rationale:
      "Some value exists, but the photos do not support precise itemization or condition checks.",
    photos: photos(["IMG_0223", "IMG_0251", "IMG_0207"])
  },
  {
    group: "secondary",
    category: "Storage",
    recommendation: "Avoid",
    name: "Ladders, cords, bins, cleaning supplies, and misc.",
    qty: "Mixed lot",
    confidence: "Low",
    low: 100,
    high: 300,
    rationale:
      "Useful only if you need it. Otherwise it quickly becomes sorting and disposal work.",
    photos: photos(["IMG_0212", "IMG_0213", "IMG_0227"])
  },
  {
    group: "secondary",
    category: "Office / AV",
    recommendation: "Take if tested",
    name: "Office electronics, POS, monitors, printer, rack gear",
    qty: "Mixed lot",
    confidence: "Low",
    low: 300,
    high: 1200,
    rationale:
      "Potential value if tested and unlocked. Otherwise, assume nuisance value.",
    photos: photos(["IMG_0215", "IMG_0218", "IMG_0219"])
  },
  {
    group: "secondary",
    category: "Audio / lighting",
    recommendation: "Take if tested",
    name: "Speakers, stand speaker, truss, projector/screen, ceiling fixtures",
    qty: "Mixed lot",
    confidence: "Low",
    low: 300,
    high: 1500,
    rationale:
      "Could be useful, but verification and safe removal matter. Treat as upside, not core value.",
    photos: photos(["IMG_0145", "IMG_0255", "IMG_0258"])
  },
  {
    group: "secondary",
    category: "Patio",
    recommendation: "Take if cheap",
    name: "Patio fixtures, TV, fans, planters, shelves, string lights",
    qty: "Mixed lot",
    confidence: "Low",
    low: 100,
    high: 700,
    rationale:
      "Some decorative and utility value, but many pieces may be mounted or weathered.",
    photos: photos(["IMG_0245", "IMG_0248", "IMG_0249"])
  },
  {
    group: "secondary",
    category: "Built-ins",
    recommendation: "Avoid",
    name: "Bar, counters, wall panels, cabinets, curtains",
    qty: "Mixed",
    confidence: "Low",
    low: 0,
    high: 1000,
    rationale:
      "Demo risk dominates. Only include if they are truly loose, wanted, and removal scope is narrow.",
    photos: photos(["IMG_0262", "IMG_0231", "IMG_0194"])
  }
];

function midpoint(item) {
  return Math.round((item.low + item.high) / 2);
}

function recommendationClass(value) {
  const normalized = value.toLowerCase();
  if (normalized.includes("avoid")) return "avoid";
  if (normalized.includes("cheap") || normalized.includes("tested") || normalized.includes("clean")) return "cheap";
  return "take";
}

function confidenceClass(value) {
  return value.toLowerCase().split(" ")[0];
}

function bucketKey(item) {
  return `${item.group}:${item.category}`;
}

function buildBuckets() {
  const map = new Map();
  for (const item of inventory) {
    const key = bucketKey(item);
    if (!map.has(key)) {
      map.set(key, {
        key,
        category: item.category,
        group: item.group,
        items: [],
        low: 0,
        high: 0
      });
    }
    const b = map.get(key);
    b.items.push(item);
    b.low += item.low;
    b.high += item.high;
  }
  const buckets = [...map.values()];
  buckets.sort((a, b) => {
    if (a.group !== b.group) return a.group === "priority" ? -1 : 1;
    return (b.low + b.high) - (a.low + a.high);
  });
  return buckets;
}

const buckets = buildBuckets();
const activeKeys = new Set(buckets.filter((b) => b.group === "priority").map((b) => b.key));

function renderBuckets() {
  document.querySelector("#bucketChips").innerHTML = buckets
    .map((b) => {
      const checked = activeKeys.has(b.key);
      const optional = b.group === "secondary" ? `<span class="bucket-tag">Optional</span>` : "";
      return `
        <label class="bucket-chip${checked ? " active" : ""}" data-key="${b.key}">
          <input type="checkbox" ${checked ? "checked" : ""}>
          <span class="bucket-info">
            <span class="bucket-name">${b.category}${optional}</span>
            <span class="bucket-range">${money.format(b.low)}–${money.format(b.high)} · ${b.items.length} item${b.items.length === 1 ? "" : "s"}</span>
          </span>
        </label>
      `;
    })
    .join("");
}

function updateTotal() {
  let low = 0;
  let high = 0;
  let count = 0;
  for (const b of buckets) {
    if (activeKeys.has(b.key)) {
      low += b.low;
      high += b.high;
      count += b.items.length;
    }
  }
  const mid = Math.round((low + high) / 2);
  document.querySelector("#totalMid").textContent = money.format(mid);
  document.querySelector("#totalRange").textContent =
    count === 0 ? "Nothing selected" : `${money.format(low)} – ${money.format(high)} range`;
  document.querySelector("#totalSummary").textContent =
    count === 0
      ? "Toggle a bucket to start"
      : `${count} item${count === 1 ? "" : "s"} in ${activeKeys.size} bucket${activeKeys.size === 1 ? "" : "s"}`;
}

function itemCard(item) {
  const primaryPhoto = item.photos[0];
  const evidence = item.photos
    .slice(0, 3)
    .map(
      (photo) => `
        <button type="button" data-image="${photo.src}" data-caption="${photo.name} - ${item.name}">
          <img src="${photo.src}" alt="${item.name} evidence ${photo.name}" loading="lazy">
          <span>${photo.name}</span>
        </button>`
    )
    .join("");
  const upside = item.upside
    ? `<div class="upside-note"><strong>Tested upside</strong><span>${item.upside}</span></div>`
    : "";

  return `
    <article class="item-card ${item.upside ? "featured-item" : ""}" data-bucket="${bucketKey(item)}" data-text="${`${item.name} ${item.qty} ${item.category} ${item.recommendation} ${item.rationale}`.toLowerCase()}">
      <button type="button" class="item-media" data-image="${primaryPhoto.src}" data-caption="${primaryPhoto.name} - ${item.name}">
        <img src="${primaryPhoto.src}" alt="${item.name} evidence ${primaryPhoto.name}" loading="lazy">
      </button>
      <div class="item-header">
        <div>
          <h3>${item.name}</h3>
          <div class="tag-row">
            <span class="tag">${item.category}</span>
            <span class="tag ${recommendationClass(item.recommendation)}">${item.recommendation}</span>
          </div>
        </div>
        <span class="confidence ${confidenceClass(item.confidence)}">${item.confidence}</span>
      </div>
      <div class="price-row">
        <div><span>Qty</span><strong>${item.qty}</strong></div>
        <div><span>Value range</span><strong>${money.format(item.low)}-${money.format(item.high)}</strong></div>
        <div><span>Midpoint</span><strong>${money.format(midpoint(item))}</strong></div>
      </div>
      <p>${item.rationale}</p>
      ${upside}
      <div class="evidence-row">${evidence}</div>
    </article>
  `;
}

function renderItems() {
  document.querySelector("#itemList").innerHTML = inventory.map(itemCard).join("");
}

function applyVisibility() {
  const search = document.querySelector("#searchBox").value.trim().toLowerCase();
  document.querySelectorAll("#itemList .item-card").forEach((card) => {
    const inBucket = activeKeys.has(card.dataset.bucket);
    const matchesSearch = !search || card.dataset.text.includes(search);
    card.classList.toggle("hidden", !matchesSearch);
    card.classList.toggle("dimmed", !inBucket);
  });
}

function wireDialog() {
  const dialog = document.querySelector("#imageDialog");
  const dialogImage = document.querySelector("#dialogImage");
  const dialogCaption = document.querySelector("#dialogCaption");

  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-image]");
    if (!button) return;
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.caption;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });

  document.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

renderBuckets();
renderItems();
updateTotal();
applyVisibility();
wireDialog();

document.querySelector("#bucketChips").addEventListener("change", (event) => {
  const label = event.target.closest(".bucket-chip");
  if (!label) return;
  const key = label.dataset.key;
  if (event.target.checked) {
    activeKeys.add(key);
  } else {
    activeKeys.delete(key);
  }
  label.classList.toggle("active", event.target.checked);
  updateTotal();
  applyVisibility();
});

document.querySelector("#searchBox").addEventListener("input", applyVisibility);
