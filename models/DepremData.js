class DepremDataAFAD {
    constructor(eventID, province, district, date, magnitude, depth, latitude, longitude) {
      this.eventID = eventID;
      this.province = province;
      this.district = district;
      this.date = this.formatTime(date);
      this.magnitude = typeof magnitude === 'string' ? parseFloat(magnitude).toFixed(1) : magnitude;
      this.depth = depth;
      this.latitude = latitude;
      this.longitude = longitude;
    }
    formatTime = (timeStamp) => {
      const logTime = new Date(new Date(timeStamp).getTime() + (3 * 60 * 60 * 1000));
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

    // Modelin davranışlarını veya yöntemlerini tanımlayabilirsiniz
    method1() {
      // Method 1'in işlevselliği buraya yazılır
    }
  
    method2() {
      // Method 2'nin işlevselliği buraya yazılır
    }
  }
  
  export default DepremDataAFAD;
  // Modeli kullanarak yeni bir örnek oluşturabilirsiniz
  /*const myModel = new Model(value1, value2);
  
  // Örneğin özelliklerine veya yöntemlerine erişebilirsiniz
  console.log(myModel.param1);
  myModel.method1();*/