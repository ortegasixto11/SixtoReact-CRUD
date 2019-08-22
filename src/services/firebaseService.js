import { dbFirebase } from "../config/firebase"

export default {
    getAll(ref){
        return new Promise((resolve, reject) => {
            dbFirebase.ref(ref).on('value', (snapshot) => resolve(snapshot.val())) 
        })
    },
    get(ref, id){
        return new Promise((resolve, reject) => {
            dbFirebase.ref(`${ref}/${id}`).on('value', (snapshot) => resolve(snapshot.val()))
        })
    },
    create(ref, data){
        return dbFirebase.ref(ref).push(data)
    },
    update(ref, id, data){
        return dbFirebase.ref(`${ref}/${id}`).update(data)
    },
    delete(ref, id){
        return dbFirebase.ref(ref).child(id).remove()
    },
    deleteByProp(ref, prop, value){
        dbFirebase.ref(ref).orderByChild(prop).equalTo(value).on('value', (data) => {
            const items = data.val()
            for(let item in items){
                this.delete(ref, item)
            }
        })
    }
}