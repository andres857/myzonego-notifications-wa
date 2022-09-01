class clients_Services {
    
    constructor(){
        this.currentConversations = 0
        this.availableConversations = 1000
        this.doneConversation = 0
    }

    getCurrentConversations() {
        return this.currentConversations
    }

    getAvailableConversations() {
        return this.availableConversations
    }

    getDoneConversations(){
        return this.doneConversation
    }

    newConversationStarted(){
        return {
            current: this.currentConversations = this.currentConversations + 1,
            available: this.availableConversations = this.availableConversations - 1, 
            done: this.doneConversation = this.doneConversation + 1
        }
    }

    conversationEnds(){
        return{
            current:this.currentConversations = this.currentConversations - 1
        }
    }
}

module.exports = clients_Services