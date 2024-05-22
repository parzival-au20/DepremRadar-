class DepremDataKandilli {
    constructor(_id, title, date, mag, depth, coordinates ) {
        this._id = _id;
        this.title = title;
        const { district, province } = this.processCity(title);
        this.province = province;
        this.district = district;
        this.date = this.formatTime(date);
        this.mag = mag % 1 === 0 ? mag.toFixed(1) : mag;
        this.depth = depth;
        this.latitude = coordinates[0];
        this.longitude = coordinates[1];
      }
  
    // Modelin davranışlarını veya yöntemlerini tanımlayabilirsiniz
    method1() {
      // Method 1'in işlevselliği buraya yazılır
    }
  
    method2() {
      // Method 2'nin işlevselliği buraya yazılır
    }

    processCity = (cityString) => {
    const parts = cityString.split('('); // Şehir adı ve ilçe bilgisini ayır
    let district = parts[0].trim(); // Şehir adını al
    district = parts[0].length > 1 ? parts[0].replace('-', ' ') : ''
    let province = ''; // İl bilgisi için boş bir string tanımla
  
    // Eğer ilçe ve il bilgisi varsa, ilçe bilgisini ve parantez içindeki il bilgisini al
    if (parts.length > 1) {
      province = parts[1].length > 1 ? parts[1].replace(')', '') : ''; // Parantez içindeki il bilgisini al
    }
    return { district, province };
  };
  formatTime = (timeStamp) => {
    // Zaman damgasını boşluk veya nokta ile böl
    const [date, time] = timeStamp.split(' ');
    const [year, month, day] = date.split('.');
    const [hours, minutes, seconds] = time.split(':');

    // Yıl, ay ve gün bilgileriyle yeni bir tarih nesnesi oluştur
    const logTime = new Date(year, month - 1, day, hours, minutes, seconds);
    const currentTime = new Date();

    // Zaman farkını hesapla (milisaniye cinsinden)
    const timeDifference = currentTime - logTime;
  
    // Dakika cinsine dönüştür
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  
    // Farka göre zamanı formatla
    if (minutesDifference < 60) {
      // 1 saatten az ise dakika cinsinden göster
      return `${minutesDifference} dakika önce`;
    } else {
      // 1 saatten fazla ise saat cinsinden göster
      const hoursDifference = Math.floor(minutesDifference / 60);
      return `${hoursDifference} saat önce`;
    }
  };
  }
  
  export default DepremDataKandilli;
  // Modeli kullanarak yeni bir örnek oluşturabilirsiniz
  /*const myModel = new Model(value1, value2);
  
  // Örneğin özelliklerine veya yöntemlerine erişebilirsiniz
  console.log(myModel.param1);
  myModel.method1();*/