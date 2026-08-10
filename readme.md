# Gün Projesi: Yeni İş

Yeni işinizde size verilen bilgisayarın kurulumunu yapmanız ve bazı görevleri tamamlamanız isteniyor. Bu görevlerin tamamlandığını raporlayan bir fonksiyonu güncelleyeceksiniz.

## Proje Tanımı

bilgisayarinHazirMi isimli bir fonksiyon hazırlanmış. Kurulum ve görev listenizdeki maddelerin durumunu raporlayacağız.

## Teknik Gereksinimler

**A) Temel Yazılım Kurulumları**:
- VSCode editörü
- Node.js
- Git
- Github Desktop 

**B) GitHub İşlemleri:**
- Hesap oluşturma
- Repoyu forklama: [https://github.com/Workintech/FSWeb-S2G4-JavaScript-tekrar](https://github.com/Workintech/FSWeb-S2G4-JavaScript-tekrar)
- `Github Desktop`a login olma
- Forkladığınız repoyu bilgisayara klonlama
- Çözümleri commit'leme

## Örnek Kullanım

```javascript
bilgisayarinHazirMi();

// Beklenen örnek çıktı:
{
    "computer": "mac",
    "demo_project_url": "https://github.com/EmreSahiner/FSWeb-S2G4-JavaScript-tekrar",
    "github": "https://github.com/Workintech",
    "node_version": "v16.13.0",
    "vscode_version": "1.84.2"
}
```

## İpuçları

**A) Versiyon Kontrolleri:**
- Node.js versiyonu için terminal komutu:
  ```bash
  node --version
  ```
- VSCode versiyonu için:
  - VSCode'u açın
  - Help > About menüsüne tıklayın
  - veya Mac'te Code > About Visual Studio Code

**B) GitHub İşlemleri:**
1. GitHub hesabı oluşturma:
   - github.com'a gidin
   - Sign Up'a tıklayın
   - Adımları takip edin

2. Repo forklama:
   - Verilen repo URL'ine gidin
   - Sağ üstteki "Fork" butonuna tıklayın

3. Repo klonlama:
   - Github Desktop'ı yükleyin
   - Login olun.
   - 'Clone Repository'i seçin
	- Arama yaparak projeyi bulun ve bilgisayarınızda uygun bir yere klonlayın
	- 'Open in Visual Studio Code' ile VS Code'da açın

## Önemli Noktalar

- İşletim sistemi adını küçük harflerle yazın
- URL'leri tam ve doğru şekilde girin(sonunda .git olmamalı)
- URL'in çalışır durumda olduğunu kontrol edin (repo public olmalı)
- Versiyon numaralarını tam olarak ve doğru formatta yazın
- Tüm görevleri sırasıyla tamamlayın

## Önemli Notlar

- Proje dizinindeki `user.json` dosyasını bulun ve `user_id` alanını NextGen proje ekranında görünen kendi `user_id` değeriniz ile güncelleyin.
- Geliştirme sırasında testleri izlemek için `npm test` komutunu kullanın.
- Testleri çalıştırıp skoru NextGen'e kaydetmek için `npm run sendresults` komutunu kullanın.
