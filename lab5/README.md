# Obraz wykorzystujący metodę wieloetapowego budowania nie działał poprawnie.

# Obrazy utworzone metodą "klasyczną" działały.

## Zbudowanie i uruchomienie obrazu na bazie "scratch" :  

docker build -f Dockerfile1 -t alpine --build-arg VERSION="123.321" .

VERSION - można podać dowolną

docker run -d -p 8000:8080 --name node alpine

## Zbudowanie i uruchomienie obrazu na bazie nginx :

docker build -f Dockerfile2 -t nginx .

docker run -d -p 80:80 --name ng nginx
  
## Aplikacja działa w tle. W celu uzyskania odpowiedzi : _curl localhost_ lub wprowadzic _localhost_ jako adres w przegladarce

## Zmiana portów na własne ryzyko ! -  te użyte przy uruchomieniu współpracują z tymi zdefiniowanymi w pliku konfiguracyjnym

## W zależności od urządzenia, wymagane może być pobranie innej wersji obrazu alpine i dokonanie zmian w pliku Dockerfile1

## W kalalogu zrzuty znajdują się zrzuty ekranu przedstawiające proces budowania, uruchamiania i testowania aplikacji

