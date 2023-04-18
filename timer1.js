//take the argv from the command line
const alarm = process.argv.slice(2);

for (let i = 0; i < alarm.length; i++) {
  const number = Number(alarm[i]); // convert argument to a number
  if (alarm[i] >= 0 && alarm[i] !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  }
  // convert to milliseconds
}



/*Edge Cases:
For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
Answer: No numbers are provided: If the args array is empty, the for...of loop doesn't execute at all, so there are no beeps scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
Answer:  An input is a negative number: The Number.isFinite() method checks if a number is finite (i.e., not NaN, Infinity, or -Infinity). This is a stricter check than Number.isNaN(), which would also skip values like undefined, null, and non-numeric strings. If the number is not finite or is negative, the loop skips it using continue.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
Answer: An input is not a number: If Number(arg) returns NaN (which can happen if the argument is not a valid number), the Number.isFinite() check will fail, so the loop will also skip it using continue. */