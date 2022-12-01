/**
 * Change Scores of every streamer (Random)
 * 
 * @param Array  arr
 * @param Number refreshTime
 */
 export async function changeRandomScore(arr: any, refreshTime: number) {
    return await new Promise((resolve) => {
        const randKey = Math.floor(Math.random() * arr.length);
        const countup = Math.floor(Math.random() * 1000);
        let frame = 0;
        const timer = setInterval(() => {
            frame++;
            const progress = frame / 60;
            arr[randKey].showScore = arr[randKey].score + Math.floor(countup * progress);
            if (progress === 1) {
                clearInterval(timer);
                arr[randKey].score = arr[randKey].showScore;
                resolve(arr);
            }
        }, refreshTime / 60);
    });
}