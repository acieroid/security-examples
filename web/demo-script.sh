# Performing a DNS query
dig wikipedia.org
# Starting a local server
nc -l -p 8000
Answer with: HTTP/1.1 200 OK
hello
^C
# Performing a HTTP GET request to a server
curl https://www.wikipedia.org
# Seeing only the headers of the answer
curl -I https://wikipedia.org
# See multiple requests
# Open browser tools and go to the network tab, then visit wikipedia.org
# Accessing media in browser
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
# Displaying origin
document.location.origin
# Changing origin
# Go from en.wikipedia.org to wikipedia.org: allowed
# Go from en.wikipedia.org to foo.org: forbidden

# Iframes
# Example on canvas
# Find iframe
document.getElementsByTagName('iframe')[1]
# Try to access it (blocked by SOP)
document.getElementsByTagName('iframe')[1].contentWindow.document


