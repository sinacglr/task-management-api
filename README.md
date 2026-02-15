# Task Management API
Node.js ve Express kullanılarak geliştirilmiş, RESTful mimarisine uygun, Dockerize edilmiş ve testleri yazılmış bir Görev Yönetimi API servisi. 

## Kullanılan Teknolojiler
**Node.js**
**Jest & Supertest**
**Docker**

## Geliştirme Süreci
Proje gereksinimlerini analiz ettikten sonra, kodun sürdürülebilir olmasını hedefledim. Bu nedenle tüm kodları tek bir dosya içine yazmak yerine, OOP prensiplerine uygun katmanlı bir yapı (controller, service, routes) kurdum.
ID atama konusunda başta `array.length + 1` yöntemini düşündüm. Ancak veri silindiğinde ID çakışması olabileceğini fark ettim. Bu yüzden `Date.now()` kullanarak unique ID üretme kararı aldım.
Case metninde belirtilmese de, hatalı girilen bir görevin silinmesi gerekebileceğini düşünerek "delete" endpoint'ini de projeye ekledim.

## AI Araçlarının Kullanımı
Projenin klasör yapısının oluşturulması ve Dockerfile taslağının hazırlanmasında AI araçlarından faydalandım.

## Kurulum
### Seçenek 1: 
Bilgisayarınızda Node.js kurulu olmasına gerek yoktur. Aşaağıdaki kodları sırasıyla terminalde çalıştırın.
```bash
docker build -t task-api .
```
```bash
docker run -p 3000:3000 task-api
```
### Seçenek 2:
Bağımlılıkları yükleyin. Uygulamayı başlatıp testleri çalıştırın.
```bash
npm install
```
```bash
npm start
```
```bash
npm test
```

## Endpointler

| Metot | URL | Açıklama |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Tüm görevleri listeler |
| `POST` | `/tasks` | Yeni görev oluşturur |
| `DELETE`| `/tasks/:id` | ID'ye göre görevi siler |


