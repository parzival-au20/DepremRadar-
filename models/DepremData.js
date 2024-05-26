class DepremDataAFAD {
    constructor(eventID, province, district, date, magnitude, depth, latitude, longitude) {
      this._id = eventID;
      this.title = district+" "+province;
      this.province = province.toLocaleUpperCase('tr-TR');;
      this.district = district.toLocaleUpperCase('tr-TR');;
      this.formattedDate = date;
      this.date = this.formatTime(date);
      this.mag = typeof magnitude === 'string' ? parseFloat(magnitude).toFixed(1) : magnitude;
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

  }
  
  export default DepremDataAFAD;