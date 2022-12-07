const intervalTime = 10;

const progressBars = document.getElementsByClassName("animated-progress-bar");
const progressSpans = document.getElementsByClassName("animated-progress-span");
const dataProgress = Array.from(progressBars).map(function (progressBar) {
  return Number(progressBar.max);
});
const maxDataProgress = Math.max(...dataProgress);

const progressBarAnimation = function (index = 0) {
  const progressBar = progressBars[index];
  const progressSpan = progressSpans[index];
  if (!progressBar) return;
  const maxProgressBar = progressBar.max;
  progressBar.max = maxDataProgress;

  const id = setInterval(function () {
    if (progressBar.value < maxProgressBar) {
      progressBar.value++;
      progressSpan.innerText = progressBar.value + "Pledges";
      let leftSpace = (progressBar.value * 100) / maxDataProgress;
      leftSpace = leftSpace < 50 ? 50 :leftSpace + 5;
      progressSpan.style.left = leftSpace+ "%";
    } else {
      clearInterval(id);
      progressBarAnimation(index + 1);
    }
  }, intervalTime);
};

progressBarAnimation();
