import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { YMaps, Map, Placemark, GeoObject, ObjectManager, Clusterer, Circle } from 'react-yandex-maps'

export default class BigMap extends Component {
    constructor() {
        super()
        this.state = {
            center: [53.899953, 27.539290],
            zoom: 11,
            controls: ['zoomControl'],
            coords: [], //подтвержденные координаты
            address: [],    //подтвержденные адреса
            tempCoords: '', //текущие координаты
            tempAddress: '',    //текущий адрес
            addressNumber: 0,   //индекс последнего подтвержденного адреса
            ymaps: null,
            equipment:
            {
                model: "Экскаватор гусеничный",
                quantity: 1,
                orderStartDate: '',
                orderEndDate: '',
                orderAddress: 'адрес',
                orderPrice: 80,
                serviceСommission: 7,
                totalPrice: 87
            }
        }
        // console.log(this.state.address)
        this.createTemplateLayoutFactory = ymaps => {
            this.setState({ ymaps: ymaps })
            console.log('ymaps:   ', ymaps)
        };
    }
    test() {
        for(var i = 0; i < 10000000000000000000000000000000000; i++) {
            console.log(i)
        }
        setTimeout(function () {
            alert('прошла 1с с клика')
        }, 1000)
    }
    mapClick(e) {
        if (this.state.addressNumber < 6) {
            let coords = e.get('coords')
            this.setState({ tempCoords: coords })
            this.state.tempAddress = this.state.ymaps.geocode(coords).then((el) => {
                let firstGeoObject = el.geoObjects.get(0)
                let tempAddress = firstGeoObject.properties._data.name
                this.setState({ tempAddress: tempAddress })
                console.log(
                    'address: ' + this.state.address + '          ' +
                    'tempAddress: ' + this.state.tempAddress
                )
            })
        }
    }
    getCoords(e) {
        let obj = e.currentTarget
        this.state.ymaps.geocode(obj.value).then(el => {
            let firstGeoObject = el.geoObjects.get(0)
            this.setState({ tempCoords: firstGeoObject.geometry._coordinates })
            this.setState({ tempAddress: (obj.id == ('address' + this.state.addressNumber)) ? obj.value : '' })
            console.log(
                'address: ' + this.state.address + '          ' +
                'tempAddress: ' + this.state.tempAddress + '          ' +
                'addressNumber: ' + this.state.addressNumber
            )
            this.setTempAddress()
        })
    }
    addAddress() {
        if (this.state.tempAddress !== '') {    //проверяем выбран ли адрес
            let address = this.state.address    //массив подтвержденных адресов
            let addressCurr = this.state.tempAddress    //строка с адресом текущего клика
            let coords = this.state.coords  //массив с подтвержденными координатами
            let coordsCurr = this.state.tempCoords  //массив с координатами текущего клика
            address.push(addressCurr)   //добавляем текущий адрес в список подтвержденных
            coords.push(coordsCurr) //добавляем текущие координаты в список подтвержденных
            this.setState({ address: address })
            this.setState({ coords: coords })

            if (this.state.addressNumber < 6 && this.state.tempAddress != 'undefined') { //проверяем кол-во подтвержденных адресов (макс. 7)
                this.setState({ addressNumber: this.state.addressNumber + 1 })
                this.setState({ tempAddress: '' })
                document.getElementById('address' + (this.state.addressNumber + 1)).classList.remove('none');
            }
            console.log(this.state.address, this.state.coords, 'AddressNumber:   ', this.state.addressNumber)
        } else {
            console.error('сначала выбираем адрес, потом жмякаем')
        }
    }
    setTempAddressNumber(e) {
        let obj = e.target
        let addressNumberNow = this.state.addressNumber
        addressNumberNow = +obj.id[obj.id.length - 1]
        this.setState({ addressNumber: addressNumberNow})  //ставим текущий адрес = выбранному input
        console.log('ID:   ', obj.id)
        console.log('ADDRESSNUMBER:   ', this.state.addressNumber)
    }
    render() {
        return (
            <div className="address-selection-block">
                <div className="address-selection-main-container">
                    <div className="address-units-container">
                        <p className="p-title">ВЫБЕРИТЕ МЕСТО ИСПОЛНЕНИЯ ЗАКАЗА</p>
                        <p className="p-title">ЗАКАЗ <strong></strong></p>
                        <input id="address0" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 0 && !this.state.address[0]) ? this.state.tempAddress : this.state.address[0]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />
                        <input className="none" id="address1" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 1 && !this.state.address[1]) ? this.state.tempAddress : this.state.address[1]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />
                        <input className="none" id="address2" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 2 && !this.state.address[2]) ? this.state.tempAddress : this.state.address[2]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />
                        <input className="none" id="address3" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 3 && !this.state.address[3]) ? this.state.tempAddress : this.state.address[3]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />
                        <input className="none" id="address4" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 4 && !this.state.address[4]) ? this.state.tempAddress : this.state.address[4]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />
                        <input className="none" id="address5" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 5 && !this.state.address[5]) ? this.state.tempAddress : this.state.address[5]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />
                        <input className="none" id="address6" type="text" placeholder="Поиск адреса"
                            value={(this.state.addressNumber === 6 && !this.state.address[6]) ? this.state.tempAddress : this.state.address[6]}
                            onChange={e => this.setState({ tempAddress: e.target.value })}
                            onClick={this.setTempAddressNumber.bind(this)}
                            onBlur={this.getCoords.bind(this)} />

                        <div className="order-params-container">
                            <span><strong>{this.state.equipment.model}</strong></span><br />
                            <span onClick={this.test}>Кол-во: <strong>{this.state.equipment.quantity}</strong></span><br />
                            <span>Дата начала: <strong>{this.state.equipment.orderStartDate}</strong></span><br />
                            <span>Дата окончания: <strong>{this.state.equipment.orderEndDate}</strong></span><br />
                            <span>Место выполнения работы: <strong>{this.state.equipment.orderAddress}</strong></span><br />
                            <span>Сумма заказа: <strong>{this.state.equipment.orderPrice + ' р. без НДС'}</strong></span><br />
                            <span>Комиссия сервиса: <strong>{this.state.equipment.serviceСommission + ' р. в т.ч. НДС'}</strong></span><br />
                            <span>Итого: <strong>{this.state.equipment.totalPrice + ' р.'}</strong></span><br />
                        </div>

                    </div>
                    <div className="bigMap-container" >
                        <YMaps
                            query={{
                                ns: 'use-load-option',
                                load: "package.full",
                                apikey: '45c5bae3-a422-4593-8d3a-7204d434cca5'  //Проблемы с картой? Начни здесь
                            }}
                        >
                            <Map onLoad={this.createTemplateLayoutFactory} defaultState={this.state} width='100%' onClick={this.mapClick.bind(this)}>
                                <Placemark
                                    geometry={this.state.tempCoords}
                                    properties={{ balloonContentBody: this.state.tempAddress }}
                                // options={{ balloonContentLayout: this.state.template }}
                                />
                                <Clusterer
                                    options={{
                                        preset: 'islands#invertedVioletClusterIcons',
                                        groupByCoordinates: false,
                                    }}>
                                    {this.state.coords.map((coords, index) => (
                                        <Placemark key={index} geometry={coords}
                                            properties={{ balloonContentBody: this.state.address[index] }}
                                        />
                                    ))}
                                </Clusterer>
                                {/* <Circle                     //окружность для поиска доступной техники
                                    geometry={[this.state.center, 10000]}
                                    options={{
                                        draggable: true,
                                        fillColor: '#DB709377',
                                        strokeColor: '#990066',
                                        strokeOpacity: 0.8,
                                        strokeWidth: 5,
                                    }}
                                /> */}
                            </Map>
                        </YMaps>
                    </div>
                </div>
                <div className="btn-wrap">
                    <div onClick={this.addAddress.bind(this)} className="btn">Добавить адрес</div>
                    <Link to={{ pathname: '/orderResponded' }} className="btn bigMap-next"><div>Далее</div></Link>
                </div>
            </div>
        )
    }
    // init() {

    //     var address1Elem = document.getElementById('address1');
    //     address1Elem.onblur = setAddress(address1Elem.value);

    //     var bigMap = new ymaps.Map("bigMap-container", {
    //         center: [53.889953, 27.539290],
    //         zoom: 10,
    //         controls: []
    //     }, {
    //             searchControlProvider: 'yandex#search'
    //         });
    //     var myPlacemark;
    //     bigMap.events.add('click', function (e) {
    //         var coords = e.get('coords');
    //         if (myPlacemark) {
    //             myPlacemark.geometry.setCoordinates(coords);
    //         }
    //         // Если нет – создаем.
    //         else {
    //             myPlacemark = createPlacemark(coords);
    //             bigMap.geoObjects.add(myPlacemark);
    //             // Слушаем событие окончания перетаскивания на метке.
    //             myPlacemark.events.add('dragend', function () {
    //                 getAddress(myPlacemark.geometry.getCoordinates());
    //             });
    //         }
    //         getAddress(coords);
    //     });
    //     function createPlacemark(coords) {
    //         return new ymaps.Placemark(coords, {
    //             // iconCaption: 'поиск...'
    //         }, {
    //                 // preset: 'islands#violetDotIconWithCaption',
    //                 draggable: true,
    //                 iconLayout: 'default#image',
    //                 iconImageHref: './images/point.svg',
    //                 iconImageSize: [40, 43],
    //                 iconImageOffset: [-20, -43],
    //             });
    //     }
    //     function getAddress(coords) {
    //         // myPlacemark.properties.set('iconCaption', 'поиск...');
    //         ymaps.geocode(coords).then(function (res) {
    //             var firstGeoObject = res.geoObjects.get(0);

    //             myPlacemark.properties
    //                 .set({

    //                     // Формируем строку с данными об объекте.
    //                     iconCaption: [
    //                         // Название населенного пункта или вышестоящее административно-территориальное образование.
    //                         firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
    //                         // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
    //                         firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
    //                         // firstGeoObject.getPremise()
    //                     ].filter(Boolean).join(', '),
    //                     // В качестве контента балуна задаем строку с адресом объекта.
    //                     balloonContent: firstGeoObject.getAddressLine()
    //                 });
    //             address1Elem.value = firstGeoObject.getAddressLine();
    //         });
    //     };
    //     function setAddress(param) {
    //         ymaps.geocode(param, {
    //             /**
    //              * Опции запроса
    //             //  * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode.xml
    //              */
    //             // Сортировка результатов от центра окна карты.
    //             // boundedBy: myMap.getBounds(),
    //             // strictBounds: true,
    //             // Вместе с опцией boundedBy будет искать строго внутри области, указанной в boundedBy.
    //             // Если нужен только один результат, экономим трафик пользователей.
    //             results: 1
    //         }).then(function (res) {
    //             // Выбираем первый результат геокодирования.
    //             var firstGeoObject = res.geoObjects.get(0),
    //                 // Координаты геообъекта.
    //                 coords = firstGeoObject.geometry.getCoordinates(),
    //                 // Область видимости геообъекта.
    //                 bounds = firstGeoObject.properties.get('boundedBy');

    //             firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
    //             // Получаем строку с адресом и выводим в иконке геообъекта.
    //             firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
    //             // Добавляем первый найденный геообъект на карту.
    //             bigMap.geoObjects.add(firstGeoObject);
    //             // Масштабируем карту на область видимости геообъекта.
    //             bigMap.setBounds(bounds, {
    //                 // Проверяем наличие тайлов на данном масштабе.
    //                 checkZoomRange: true
    //             });
    //         });
    //     }
    // }
    //<Map onClick={} defaultState={{ center: [53.899953, 27.539290], zoom: 11 }} width={document.getElementsByClassName('bigMap-container').offsetWidth + 'px'} height={document.getElementsByClassName('bigMap-container').offsetHeight + 'px'}>

}