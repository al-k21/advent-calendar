const input = 361527;

const circle = getCircle(input);
const side = getSide(circle);
const distance = getDistance(circle, side);

console.log("This is your captcha: " + distance);

function getCircle(input) {

  let i = 1, circleNum = 0;
  while (i*i < input ) {
    i += 2; circleNum++;
  }

  return {circleNum, circleMaxNum:i};
}


function getSide(circle) {

  let point1, point2;
  let number = circle.circleMaxNum*circle.circleMaxNum;
  const sideWidth = circle.circleNum*2;

  // Save all corner point of a circle and
  // assign a corner > input as a side point
  const SE = number; if ( SE > input) { point1 = SE }; number -= sideWidth;
  const SW = number; if ( SW > input) { point1 = SW }; number -= sideWidth;
  const NW = number; if ( NW > input) { point1 = NW }; number -= sideWidth;
  const NE = number; if ( NE > input) { point1 = NE }; number -= sideWidth;
  point2 = point1 - sideWidth; // assign second side point1

  console.log(SE, SW, NW, NE);

  return {sideWidth, point1, point2};
}

function getDistance (circle, side) {

  const x = circle.circleNum;
  const y = input - (side.point1+side.point2)/2;

  return x+y;
}
