function taumBday(blackGiftTotal, whiteGiftTotal, blackGiftPrice, whiteGiftPrice, tradePrice) {
    blackGiftTotal = blackGiftTotal
    whiteGiftTotal = whiteGiftTotal 
    blackGiftPrice = blackGiftPrice 
    whiteGiftPrice = whiteGiftPrice
    tradePrice = tradePrice;

    let blackGiftCost = (whiteGiftPrice + tradePrice) < blackGiftPrice ? whiteGiftPrice + tradePrice : blackGiftPrice;
    let whiteGiftCost = (blackGiftPrice + tradePrice) < whiteGiftPrice ? blackGiftPrice + tradePrice : whiteGiftPrice;

    let totalCost = blackGiftCost * blackGiftTotal + whiteGiftTotal * whiteGiftCost;
    
    if (!Number.isSafeInteger(totalCost)) {
        totalCost = BigInt(blackGiftCost) * BigInt(blackGiftTotal) + BigInt(whiteGiftTotal) * BigInt(whiteGiftCost);
        totalCost.toString();
    }

    return totalCost;
}

const b = 3;

const w = 5;

const bc = 3;

const wc = 4;

const z = 1;

const result = taumBday(b, w, bc, wc, z);

// Expect output 29 
console.log("🚀 ~ result:", result);