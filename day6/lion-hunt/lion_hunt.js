const huntArea = "L L";
const huntAreaLength = huntArea.length;

let minimumDistance = 100;
let isZebraThere = false;
let isLionThere = false;

for (let start = 0; start < huntAreaLength; start++) {
    let lionSteps = 0;
    if (huntArea[start] === "L") {
        isLionThere = true;

        for (let current = start + 1; current < huntAreaLength; current++) {
            if (huntArea[current] === "Z") {
                isZebraThere = true;
								lionSteps = current - start;
                if (lionSteps < minimumDistance) {
                    minimumDistance = lionSteps;
                }
            }
        }
				lionSteps = 0;

				for(let current = start - 1; current >= 0; current++){
					if(huntArea[current] === "Z"){
						isZebraThere = true;
						lionSteps = start - current;
						if(lionSteps < minimumDistance){
							minimumDistance = lionSteps;
						}
					}
				}
    }
}

// if only lions exist or only zebras exist, return -1
if (!isLionThere || !isZebraThere) {
    minimumDistance = -1;
}

console.log(minimumDistance);
