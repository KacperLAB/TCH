Obraz wykorzystujący metodę wieloetapowego budowania nie działał poprawnie.

Obrazy utworzone metodą "klasyczną" działały.

Zbudowanie obrazu na bazie "scratch" :
  docker build -f Dockerfile1 -t alpine --build-arg VERSION="123.321" .
  <VERSION> = można podać dowolną
Uruchomienie obrazu :
  docker run -d -p 8000:8080 --name node alpine

Zbudowanie obrazu na bazie nginx :
  docker build -f Dockerfile2 -t nginx .
Uruchomienie obrazu :
  docker run -d -p 80:80 --name ng nginx
  
Aplikacja działa w tle. W celu uzyskania odpowiedzi : curl localhost
