let season = prompt('Какой сейчас сезон?')

switch (season) {
    case 'зима':
        alert('Декабрь, Январь, Февраль')
        break;
    case 'весна':
        alert('Март, Апрель, Май')
        break;
    case 'лето':
        alert('Июнь, Июль, Август')
        break;
    case 'осень':
        alert('Сентябрь, Октябрь, Ноябрь')
        break;
    default:
        alert('Введите сезон правильно!')
        break;
}