export default function handler(req, res) {
  // Tracking info
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ua = req.headers['user-agent'];
  const timestamp = new Date().toISOString();

  console.log("Tracking Info:", { ip, ua, timestamp });

  // Redirect to FB ad
  res.writeHead(302, {
    Location: "https://www.facebook.com/permalink.php?story_fbid=YOUR_FB_ID&id=YOUR_PAGE_ID"
  });
  res.end();
}
