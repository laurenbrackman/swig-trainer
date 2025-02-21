const flavorSecret = {12:1,16:1,24:1.5,32:2,44:3}

export function calculateRatios(category, size) {
    let baseFlavors = flavorSecret[size];
    let baseCreams = Math.floor(size / 10);
    let basePurees = Math.floor(size / 10)/4;
    let baseTopoff = 0;

    switch (category) {
        case "Frozen Cocoa":
            return [3, 5, 0.75, 8];
        case "Hot Cocoa":
            return [1.5, 2, 0.25, baseTopoff];
        case "Reviver":
            return [baseFlavors * 2, baseCreams + 1, basePurees + 0.25, baseTopoff];
        case "Refresher":
            return [baseFlavors * 2, baseCreams, basePurees * 2, baseTopoff];
        case "Blended Reviver":
        case "Blended Soda":
            let flavors = baseFlavors * 5;
            let creams = baseCreams + 1;
            let purees = ((basePurees * 4) + 1) * 0.5;
            if (size === 12) return [4, 1.5, 0.75, 4];
            if (size === 16) return [flavors, creams, purees, category === "Blended Soda" ? 6 : 4];
            if (size === 24) return [flavors, creams, purees, category === "Blended Soda" ? 9 : 6];
            if (size === 32) return [flavors, creams, purees, category === "Blended Soda" ? 12 : 8];
            if (size === 44) return [12.5, creams, purees, 16];
            return [flavors, creams, purees, topoff];
    }

    return [baseFlavors, baseCreams, basePurees, baseTopoff];
}