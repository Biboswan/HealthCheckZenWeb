export class QuestionNode {
    constructor(q_id, yes_weight, no_weight, question_texts, parent = null) {
        this.yes = null;
        this.no = null;
        this.q_id = q_id;
        this.yes_weight = yes_weight;
        this.no_weight = no_weight;
        this.data = {
            question_texts
        }
        this.parent = parent;
    }

    setYes(node) {
        this.yes = node;
    }

    setNo(node) {
        this.no = node;
    }
}

export class QuestionTree {

    constructor() {
        this.root = null;
    }

    constructTree(preorderArr) {
        let { yes_weight, no_weight, q_id, question_texts } = preorderArr[0];
        this.root = new QuestionNode(q_id, yes_weight, no_weight, question_texts);
        const st = new Stack();
        st.push(this.root);
        let newNode,popedNode, temp2, temp3, i=1;
        let len = preorderArr.length;
        while(i<len) {
           popedNode = st.pop();
           temp2 = preorderArr[i];
           if (temp2) {
                if (!popedNode.yes) {
                    let { yes_weight, no_weight, q_id, question_texts } = temp2;
                    newNode = new QuestionNode(q_id, yes_weight, no_weight, question_texts, popedNode);
                    popedNode.setYes(newNode);
                    st.push(newNode);
                    i++;
                    continue;
                }
                if (!popedNode.no) {
                    let { yes_weight, no_weight, q_id, question_texts } = temp2;
                    newNode = new QuestionNode(q_id,  yes_weight, no_weight, question_texts, popedNode);
                    popedNode.setNo(newNode);
                    st.push(newNode);
                    i++;
                    continue;
                }
                st.push(popedNode.parent);
           } else {
                i++;
                temp3 = preorderArr[i];
                if (!temp3) {
                    i++;
                    st.push(popedNode.parent);
                } else {
                    let { yes_weight, no_weight, q_id, question_texts } = temp3;
                    newNode = new QuestionNode(q_id, yes_weight, no_weight, question_texts, popedNode );
                    popedNode.setNo(newNode);
                    st.push(newNode);
                    i++;
                }
           }
        }
    }

    findNode(node, q_id) {
        if (node) {
            if (node.q_id === q_id) {
                return node;
            }

            const nodeA = this.findNode(node.yes, q_id);
            const nodeB = this.findNode(node.no, q_id);
            return nodeA? nodeA : nodeB ? nodeB : null;
        }

        return null;
    }
}

export class Stack {
    constructor() {
        this.items = [];
    };

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
