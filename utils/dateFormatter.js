const timeago = require("timeago.js");

module.exports = function formatFullDate(date) {
  if (!date) return { full: "N/A", relative: "N/A" };

  const full = new Date(date).toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const relative = timeago.format(date);

  return { full, relative };
};
