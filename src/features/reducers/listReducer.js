const  initialState = {}

export default (state = [], { type, payload }) => {
  switch (type ) {

  case "sort":
    return state.reverse()

    case "update": {
        let list = initialState
        if (payload.name) {
            list = list.filter(game => game.name.toLowerCase().includes(payload.name.toLowerCase()))
        }
        if (payload.score) {
            list = list.filter(game => game.rating > payload.score * 10)
        }
        if (payload.order) {
            if (payload.order === "first_release_date") {
                list.sort((a, b) => a.first_release_date - b.first_release_date)
            }
            else if (payload.order === "rating") {
                list.sort((a, b) => a.rating - b.rating)
            }
            else if (payload.order === "name") {
                list.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
            }
        }

        if (payload.sort === true) {
            // console.log('reversed', orderList)
            list = list.reverse()
        }
        // setModlist(list)
        return (list)
    }

    

  default:
    return state
  }
}

