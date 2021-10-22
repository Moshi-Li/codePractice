class Node:
    def __init__(self, word, children=[]):
        self.word = word
        self.children = children


class Solution:
    def ladderLength(self, beginWord, endWord, wordList):
        def compare(wordA, wordB):
            if (wordA == wordB):
                return False
            else:
                for i in range(len(wordA)):
                    for j in range(len(wordB)):
                        if wordA == wordB:
                            return True

                return False

        def find(head, tail):
            if (head is tail):
                return 0
            elif len(head.children) == 0:
                return None

            distance = [x:build(x, tail) for x in head.children]

        wordMap = {}
        for wordA in wordList:
            node = Node(wordA)
            wordMap[wordA] = node
            children = []
            for wordB in wordList:
                if compare(wordA, wordB):
                    if wordMap.get(wordMap) != None:
                        children.append(wordMap.get(wordMap))
                    else:
                        childNode = Node(wordB)
                        wordMap[wordB] = childNode
                        children.append(childNode)

            node.children = children

        visitMap = {}
