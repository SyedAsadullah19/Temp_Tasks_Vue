const var1 = new Vue({
    el:'#app',
    data:{
        title:'',
        description:'',
        todo_que:[],
        class1:'invisible'
    },
    methods: {
        add_todo:function(){
            todo_ = {}
            todo_['title']=this.title
            todo_['description']=this.description
            this.todo_que.push(todo_)
            todo_={}
            this.title=''
            this.description=''
        },
        delete_todo:function(todo){
            let data = this.todo_que.indexOf(todo)
            this.todo_que.splice(data,1)
        },
        update_todo:function(){
            this.class1='visible'
        },
        save_todo:function(){
            this.class1='invisible'
        }
    },
})