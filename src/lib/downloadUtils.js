/**
 * Simple and reliable file download utility
 * Works best for files inside /public folder
 */
export const handleDownload = (path, filename) => {
  const link = document.createElement("a");
  link.href = path;
  link.setAttribute("download", filename || "");
  link.setAttribute("target", "_blank"); // fallback behavior

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};