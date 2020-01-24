'use strict';

window.renderStatistics = function (ctx, names, times) {
  var CLOUD_RADIUS = 20;
  var CLOUD_WIDTH = 420 - CLOUD_RADIUS * 2;
  var CLOUD_HEIGHT = 270 - CLOUD_RADIUS * 2;
  var CLOUD_HALF_RADIUS = CLOUD_RADIUS / 2;
  var CLOUD_X = 100;
  var CLOUD_Y = 10 + CLOUD_RADIUS;
  var GAP = 10;
  var ROW_GAP = 20;
  var FONT_GAP = 50;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;
  var BAR_DOWN = CLOUD_Y + CLOUD_HEIGHT - ROW_GAP;
  var BAR_MAX = 150;

  var renderCLoud = function (context, lineEndX, lineEndY, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(lineEndX, lineEndY);
    ctx.bezierCurveTo(lineEndX, lineEndY - CLOUD_HALF_RADIUS, lineEndX + CLOUD_HALF_RADIUS, lineEndY - CLOUD_RADIUS, lineEndX += CLOUD_RADIUS, lineEndY -= CLOUD_RADIUS);
    ctx.lineTo(lineEndX += CLOUD_WIDTH, lineEndY);
    ctx.bezierCurveTo(lineEndX + CLOUD_HALF_RADIUS, lineEndY, lineEndX + CLOUD_RADIUS, lineEndY + CLOUD_HALF_RADIUS, lineEndX += CLOUD_RADIUS, lineEndY += CLOUD_RADIUS);
    ctx.lineTo(lineEndX, lineEndY += CLOUD_HEIGHT);
    ctx.bezierCurveTo(lineEndX, lineEndY + CLOUD_HALF_RADIUS, lineEndX - CLOUD_HALF_RADIUS, lineEndY + CLOUD_RADIUS, lineEndX -= CLOUD_RADIUS, lineEndY += CLOUD_RADIUS);
    ctx.lineTo(lineEndX -= CLOUD_WIDTH, lineEndY);
    ctx.bezierCurveTo(lineEndX - CLOUD_HALF_RADIUS, lineEndY, lineEndX - CLOUD_RADIUS, lineEndY - CLOUD_HALF_RADIUS, lineEndX -= CLOUD_RADIUS, lineEndY -= CLOUD_RADIUS);
    ctx.closePath();
    ctx.fill();
  };

  renderCLoud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'RGBA(0, 0, 0, 0.7)');
  renderCLoud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y);
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP, CLOUD_Y + ROW_GAP);

  var getMaxTime = function (time) {
    var maxTime = time[0];
    for (var i = 1; i < time.length; i++) {
      if (time[i] > maxTime) {
        maxTime = time[i];
      }
    }
    return maxTime;
  };

  for (var i = 0; i < names.length; i++) {
    var BAR_HEIGHT = Math.round((BAR_MAX * times[i]) / getMaxTime(times));
    var BAR_Y = BAR_DOWN - BAR_HEIGHT;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(233, 100%, ' + (Math.floor(Math.random() * 70) + 20) + '%)'; // Ограничения диапазона рандомных чисел, что бы не получались черные или очень бледные цвета
    }
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, BAR_Y - ROW_GAP);
    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i, CLOUD_HEIGHT + CLOUD_RADIUS);
  }
};
