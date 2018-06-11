class FakeDataManager {
    watchChanges = showAddress => {
        return showAddress;
    };

    showAddress = () => {
        const data = {
            docs: [
                {
                    firstName: 'Patty',
                    lastName: 'Murray',
                    street: '154 Russell Senate Office Building',
                    city: 'Washington DC',
                    state: 'WA',
                    zip: ' 20510',
                    phone: '202-224-2621',
                    website: 'https://www.murray.senate.gov/public',
                    email: '',
                    contact:
                        'http://www.murray.senate.gov/public/index.cfm/contactme',
                    _id: '5849dc86-72b9-4fe2-8a08-5d2f43cddb93',
                    _rev: '1-b8d1d561e7ba4b2db84814aa212cbad0'
                },
                {
                    firstName: 'Robert',
                    lastName: 'Aderholt',
                    street: '235 Cannon House Office Building;',
                    city: 'Washington DC',
                    state: 'AL',
                    zip: ' 20515-0104',
                    phone: '202-225-4876',
                    website: 'https://aderholt.house.gov',
                    email: '',
                    contact: '',
                    _id: 'f892d657-3115-44c5-813e-2056c08d158d',
                    _rev: '1-009c55df07da43bda463089f8ab15379'
                },
                {
                    firstName: 'Lamar',
                    lastName: 'Alexander',
                    street: '455 Dirksen Senate Office Building',
                    city: 'Washington DC',
                    state: 'TN',
                    zip: ' 20510',
                    phone: '202-224-4944',
                    website: 'https://www.alexander.senate.gov/public',
                    email: '',
                    contact:
                        'http://www.alexander.senate.gov/public/index.cfm?p=Email',
                    _id: 'bdad5eb1-ba0c-4df6-ab16-199c92454d3e',
                    _rev: '1-06ee3531f61e47efb6957da79f0bc599'
                },
                {
                    firstName: 'Tammy',
                    lastName: 'Baldwin',
                    street: '709 Hart Senate Office Building',
                    city: 'Washington DC',
                    state: 'WI',
                    zip: ' 20510',
                    phone: '202-224-5653',
                    website: 'https://www.baldwin.senate.gov',
                    email: '',
                    contact: 'https://www.baldwin.senate.gov/feedback',
                    _id: '4d29a806-7187-4f8d-85a9-a56e6e3228d6',
                    _rev: '1-95b02c43a46f4384b7730e3315a8c57c'
                },
                {
                    firstName: 'John',
                    lastName: 'Barrasso',
                    street: '307 Dirksen Senate Office Building',
                    city: 'Washington DC',
                    state: 'WY',
                    zip: ' 20510',
                    phone: '202-224-6441',
                    website: 'https://www.barrasso.senate.gov',
                    email: '',
                    contact:
                        'https://www.barrasso.senate.gov/public/index.cfm/contact-form',
                    _id: 'a12effc6-062c-41ac-a044-b2c3db68ad4d',
                    _rev: '1-ef2f284cc83148b4a4ef873555f22c32'
                },
                {
                    firstName: 'Joe',
                    lastName: 'Barton',
                    street: '2107 Rayburn House Office Building;',
                    city: 'Washington DC',
                    state: 'TX',
                    zip: ' 20515-4306',
                    phone: '202-225-2002',
                    website: 'https://joebarton.house.gov',
                    email: '',
                    contact: '',
                    _id: '5b5c7ab3-fc83-4391-8562-7cd7a5548641',
                    _rev: '1-5d8a9df3a182426eb3fe047d6072d40b'
                }
            ]
        };
        return new Promise(resolve => {
            resolve(data);
        });
    };
}

const instance = new FakeDataManager();

export default instance;
