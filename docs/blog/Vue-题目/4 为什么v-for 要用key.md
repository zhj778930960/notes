# v-for 为什么要用key

- 必须用key, 且不能是index 和 random
- diff 算法中通过tag 和 key 来判断， 是不是同一个节点
- 减少渲染次数，提升渲染的性能