


  const API_Key = '1431d5a7ed4690b173e4493cdb77de3f';
  const API_Call = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_Key}`;

  const response = await fetch(API_Call);
  export const data = await response.json();
  console.log(data.list[0].main.temp);

  // ##### City #####
  export const city = data.city.name;

  // ##### Temperature #####
  export const curentTemp = Math.round((data.list[0].main.temp) - 273.15);
  export const temp = {
    temp1: Math.round((data.list[1].main.temp)-273.15),
    temp2: Math.round((data.list[2].main.temp)-273.15),
    temp3: Math.round((data.list[3].main.temp)-273.15),
    temp4: Math.round((data.list[4].main.temp)-273.15),
    temp5: Math.round((data.list[5].main.temp)-273.15),
    temp6: Math.round((data.list[6].main.temp)-273.15),
  }
  export const realFeel = Math.round((data.list[0].main.feels_like) - 273.15);

  // ##### Date #####
  export const time =
  {
    main_time: (data.list[0].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),
    time1: (data.list[1].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),
    time2: (data.list[2].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),
    time3: (data.list[3].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),
    time4: (data.list[4].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),
    time5: (data.list[5].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),
    time6: (data.list[6].dt_txt).split(' ')[1].split(':').slice(0,2).join(':'),

  };

  // ##### Weather Info #####
  export const windSpeed = data.list[0].wind.speed;