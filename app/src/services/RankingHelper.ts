import { Player } from '@/models/RankingModels'

/**
 * Refresh time interval (ms)
 */
export const refreshTime = 1000;

/**
 * Change Scores of every streamer (Random)
 * 
 * @param Array  arr
 * @param Number refreshTime
 */
 export async function changeRandomScore(arr: Player[], refreshTime: number) {
    const tickMaxium = 5000;
    return await new Promise((resolve) => {
        const randKey = Math.floor(Math.random() * arr.length);
        const countup = Math.floor(Math.random() * tickMaxium);
        let frame = 0;
        const timer = setInterval(() => {
            frame++;
            const progress = frame / 60;
            arr[randKey].scoreToDisplay = arr[randKey].score + Math.floor(countup * progress);
            if (progress === 1) {
                clearInterval(timer);
                arr[randKey].score = arr[randKey].scoreToDisplay;
                resolve(arr);
            }
        }, refreshTime / 60);
    });
}

export async function sortArr(arr: Player[]): Promise<Player[]> {
    let tmp;
    return await new Promise((resolve) => {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i].score < arr[j].score) {
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }

        let count = 1;

        // Reset ranking
        arr.forEach((val) => {
            val.rank = count++;
        })

        resolve(arr);
    });
}

/**
 * Swap animation
 *
 * @param Object target
 * @param Number swapHeight
 * @param Number duration
 */
 export function swapElement(target: any, swapHeight: number, duration: number) {
    // if ranking has any changed, swap element.
    requestAnimationFrame(() => {
        // swap the streamerEl to old position
        target.style.transform = "translateY(" + swapHeight + "px)";
        target.style.transition = "transform 0s";
        requestAnimationFrame(() => {
            // swap the streamerEl back to now postion
            target.style.transform = "";
            target.style.transition = "transform " + duration + "ms";
        });
    });
}
