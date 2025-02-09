export const ADD_PRODUCT = 'ADD_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

const initialState = {
  users: [
    {
      id: 1,
      first_name: 'Ardyth',
      last_name: 'Drust',
      email: 'adrust0@rambler.ru',
      cc_number: '676117314174829095',
      cc_type: 'maestro',
      currency: 'Yuan Renminbi',
    },
    {
      id: 2,
      first_name: 'Shaine',
      last_name: 'Lumsdaine',
      email: 'slumsdaine1@freewebs.com',
      cc_number: '490594394939707081',
      cc_type: 'switch',
      currency: 'Yuan Renminbi',
    },
    {
      id: 3,
      first_name: 'Aubry',
      last_name: 'January',
      email: 'ajanuary2@cloudflare.com',
      cc_number: '3547996626310026',
      cc_type: 'jcb',
      currency: 'Naira',
    },
    {
      id: 4,
      first_name: 'Ulysses',
      last_name: 'Aucott',
      email: 'uaucott3@myspace.com',
      cc_number: '201812127840739',
      cc_type: 'diners-club-enroute',
      currency: 'Dollar',
    },
    {
      id: 5,
      first_name: 'Gill',
      last_name: 'Simoens',
      email: 'gsimoens4@mit.edu',
      cc_number: '5438953855356003',
      cc_type: 'diners-club-us-ca',
      currency: 'Yuan Renminbi',
    },
    {
      id: 6,
      first_name: 'Kristan',
      last_name: 'Filpi',
      email: 'kfilpi5@sohu.com',
      cc_number: '4041595866534',
      cc_type: 'visa',
      currency: 'Zloty',
    },
    {
      id: 7,
      first_name: 'Donnie',
      last_name: 'Klossek',
      email: 'dklossek6@yellowpages.com',
      cc_number: '3585902649176462',
      cc_type: 'jcb',
      currency: 'Baht',
    },
    {
      id: 8,
      first_name: 'Queenie',
      last_name: 'Baggallay',
      email: 'qbaggallay7@freewebs.com',
      cc_number: '3574164880264795',
      cc_type: 'jcb',
      currency: 'Yuan Renminbi',
    },
    {
      id: 9,
      first_name: 'Adriena',
      last_name: 'Shallo',
      email: 'ashallo8@soup.io',
      cc_number: '560223964442483997',
      cc_type: 'china-unionpay',
      currency: 'Hryvnia',
    },
    {
      id: 10,
      first_name: 'Honor',
      last_name: 'Vaadeland',
      email: 'hvaadeland9@nydailynews.com',
      cc_number: '5610625530382410',
      cc_type: 'bankcard',
      currency: 'Rupiah',
    },
    {
      id: 11,
      first_name: 'Lilly',
      last_name: 'Doniso',
      email: 'ldonisoa@godaddy.com',
      cc_number: '5610242808331721',
      cc_type: 'bankcard',
      currency: 'Afghani',
    },
    {
      id: 12,
      first_name: 'Micheal',
      last_name: 'Elcom',
      email: 'melcomb@newsvine.com',
      cc_number: '3585874129461567',
      cc_type: 'jcb',
      currency: 'Franc',
    },
    {
      id: 13,
      first_name: 'Oby',
      last_name: 'Wake',
      email: 'owakec@google.com.au',
      cc_number: '4905800510736151',
      cc_type: 'switch',
      currency: 'Euro',
    },
    {
      id: 14,
      first_name: 'Malynda',
      last_name: 'Farragher',
      email: 'mfarragherd@free.fr',
      cc_number: '3545746857064897',
      cc_type: 'jcb',
      currency: 'Peso',
    },
    {
      id: 15,
      first_name: 'Leonerd',
      last_name: 'Addionisio',
      email: 'laddionisioe@pen.io',
      cc_number: '3541197644293734',
      cc_type: 'jcb',
      currency: 'Koruna',
    },
    {
      id: 16,
      first_name: 'Shelden',
      last_name: 'Lyster',
      email: 'slysterf@unesco.org',
      cc_number: '374283884915729',
      cc_type: 'americanexpress',
      currency: 'Peso',
    },
    {
      id: 17,
      first_name: 'Emelita',
      last_name: 'Grindlay',
      email: 'egrindlayg@delicious.com',
      cc_number: '3572232581161123',
      cc_type: 'jcb',
      currency: 'Krona',
    },
    {
      id: 18,
      first_name: 'Joyan',
      last_name: 'Ambrogini',
      email: 'jambroginih@mediafire.com',
      cc_number: '56022508000102234',
      cc_type: 'china-unionpay',
      currency: 'Ruble',
    },
    {
      id: 19,
      first_name: 'Marcos',
      last_name: 'Crummey',
      email: 'mcrummeyi@washingtonpost.com',
      cc_number: '372301292660513',
      cc_type: 'americanexpress',
      currency: 'Rial',
    },
    {
      id: 20,
      first_name: 'Torrin',
      last_name: 'Champion',
      email: 'tchampionj@qq.com',
      cc_number: '6333539485155518238',
      cc_type: 'switch',
      currency: 'Yuan Renminbi',
    },
  ],
}

export default (state = initialState, action) => {
  const getClonedState = () => Object.assign({}, state)

  switch (action.type) {
    case ADD_PRODUCT:
      getClonedState().users.map((user) => {
        if (Number(user.id) === Number(action.payload.id)) {
          user.products = user.products || []
          user.products.push(action.payload.product)
        }
      })

      return {
        ...getClonedState(),
      }
    //
    case EDIT_PRODUCT:
      getClonedState().users.map((user) => {
        if (Number(user.id) === Number(action.payload.id)) {
          user.products = user.products || []
          user.products.map((product, index) => {
            if (product.id === action.payload.product.id) {
              user.products[index] = action.payload.product
            }
          })
        }
      })
      return {
        ...getClonedState(),
      }

    case DELETE_PRODUCT:
      getClonedState().users.map((user) => {
        if (Number(user.id) === Number(action.payload.id)) {
          user.products = user.products || []
          user.products.map((product, index) => {
            if (product.id === action.payload.productId) {
              user.products.splice(index, 1)
            }
          })
        }
      })
      return {
        ...getClonedState(),
      }

    default:
      return state
  }
}

export const addProduct = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload,
    })
  }
}

export const editProduct = (payload) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload,
    })
  }
}

export const deleteProduct = (payload) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload,
    })
  }
}
