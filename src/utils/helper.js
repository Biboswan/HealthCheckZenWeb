export class QuestionNode {
    constructor(q_id, weight, question_texts, parent = null) {
        this.yes = null;
        this.no = null;
        this.data = {
            weight,
            q_id,
            question_texts
        }
        this.parent = parent;
    }

    setYes(node) {
        this.yes = node;
    }

    setNode(node) {
        this.no = node;
    }
}

export class QuestionTree {

    constructor() {
        this.root = null;
    }

    constructTree(preorderArr) {
        let { weight, q_id, question_texts } = preorderArr[0];
        this.root = new QuestionNode(q_id, weight, question_texts);
        const st = new Stack();
        st.push(this.root);
        let newNode, temp2, temp3, i=1;
        let len = preorderArr.length;
        while(i<len) {
           popedNode = st.pop();
           temp2 = preorderArr[i];
           if (temp2) {
                if (!popedNode.yes) {
                    let { weight, q_id, question_texts } = temp2;
                    newNode = new QuestionNode(q_id, weight, question_texts, popedNode);
                    popedNode.setYes(newNode);
                    st.push(newNode);
                    i++;
                    continue;
                }
                if (!popedNode.no) {
                    let { weight, q_id, question_texts } = temp2;
                    newNode = new QuestionNode(q_id, weight, question_texts, popedNode);
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
                    let { weight, q_id, question_texts } = temp3;
                    newNode = new QuestionNode(q_id, weight, question_texts, popedNode );
                    popedNode.setNo(newNode);
                    st.push(newNode);
                    i++;
                }
           }
        }
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

const Tree = new QuestionTree();
