class Solution:
    def findOrder(self, numCourses, prerequisites):
        coursePrerequisite = {}
        courseToUnlock = {}
        for item in prerequisites:
            if coursePrerequisite.get(item[1]) != None:
                coursePrerequisite.get(item[1]).append(item[0])
            else:
                coursePrerequisite[item[1]] = [item[0]]

            if courseToUnlock.get(item[0]) != None:

                courseToUnlock[item[0]] = courseToUnlock.get(item[0])+1
            else:
                courseToUnlock[item[0]] = 1

        finalResult = []
        levelResult = []
        for i in range(numCourses):
            if i not in courseToUnlock:
                finalResult.append(i)
                levelResult.append(i)

        while len(levelResult):
            nextLevel = []
            for item in levelResult:
                courseUnlocked = coursePrerequisite.get(
                    item) if coursePrerequisite.get(item) else []
                for course in courseUnlocked:
                    remianningCourseCount = courseToUnlock.get(course)
                    if remianningCourseCount == 1:
                        del courseToUnlock[course]
                        nextLevel.append(course)
                    else:
                        courseToUnlock[course] = remianningCourseCount - 1

            finalResult += nextLevel
            levelResult = nextLevel

        return finalResult if len(finalResult) == numCourses else []
