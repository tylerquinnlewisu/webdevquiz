

// Array of Objects 
const quiz = [

    /*  EXAM 1 */
    /* *-*-*-* */


    /* Exam 1 Concept 1 
    {
        q:'What is mean and how do you calculate it? ',
        options:['Essentially average: Add all data and divide by number of units','The middle value: Order the list and find the middle value.'],
        answer:0 
    },
    {
        q:'What is median and how do you calculate it? ',
        options:['Essentially average: Add all data and divide by number of units','The middle value: Order the list and find the middle value.'],
        answer:1 
    },
    {
        q:'Does the mean or median consider every value? ',
        options:['Mean','Median'],
        answer:0 
    },
    {
        q:'What does it look like to have data skewed right? ',
        options:['Data has heights at the left and balances out going right','Data has heights at the right and balances out going left'],
        answer:0 
    },
    {
        q:'What does it look like to have data skewed left? ',
        options:['Data has heights at the left and balances out going right','Data has heights at the right and balances out going left'],
        answer:1
    },
    {
        q:'Median >> Mean: Is the data skewed right or left? ',
        options:['Skewed Right','Skewed Left'],
        answer:1
    },
    {
        q:'Median << Mean: Is the data skewed right or left? ',
        options:['Skewed Right','Skewed Left'],
        answer:0
    },
    {
        q:'What does the 5-Number Summary consist of? ',
        options:['Interquartile Range (IQR), Minimum Quartile (Q1), Median (Q2), Quartile 3 (Q3), and Maximum Quartile (Q4)','Interquartile Range (IQR), Minimum Quartile (Q1), Mode (Q2), Mean (Q3), and Maximum Quartile (Q4)'],
        answer:0
    },
    {
        q:'In the 5-Number Summary, how do you calculate the Minimum Quartile (Q1)? ',
        options:['When the data is arranged in increasing order, solve this (L): (25/100) * (# of units). If it is a whole number, compute the average of (L) and (L + 1). If it is not a whole number, round L up and locate the value there.','When the data is arranged in increasing order, solve this (L): (75/100) * (# of units). If it is a whole number, compute the average of (L) and (L + 1). If it is not a whole number, round L up and locate the value there.'],
        answer:0
    },
    {
        q:'In the 5-Number Summary, how do you calculate (Q3)? ',
        options:['When the data is arranged in increasing order, solve this (L): (25/100) * (# of units). If it is a whole number, compute the average of (L) and (L + 1). If it is not a whole number, round L up and locate the value there.','When the data is arranged in increasing order, solve this (L): (75/100) * (# of units). If it is a whole number, compute the average of (L) and (L + 1). If it is not a whole number, round L up and locate the value there.'],
        answer:1
    },
    {
        q:'In the 5-Number Summary, how do you calculate the Interquartile Range (IQR)? ',
        options:['(Q3) - (Q1) = (IQR)','(Q1) - (Q3) = (IQR)'],
        answer:0
    },
    {
        q:'What is the IQR used to find? ',
        options:['Upper and Lower Bounds, Outliers','Mean, Median, Mode'],
        answer:0
    },
    {
        q:'How do you find outliers? ',
        options:['Q1 - 1.5(IQR) = Lower Limit; Q3 + 1.5(IQR) = Upper Limit','Q3 - 1.5(IQR) = Lower Limit; Q1 + 1.5(IQR) = Upper Limit'],
        answer:0
    },
    {
        q:'What is the difference between a sample and a population? ',
        options:['Population: An entire collection of individuals about which information is sought, Sample: A Subset of a population','Sample: An entire collection of individuals about which information is sought, Population: A Subset of a sample'],
        answer:0
    },
    {
        q:'What is statistics? ',
        options:['A procedure for collecting, describing, and drawing conclusions from info/data','Random guessing'],
        answer:0
    },
    {
        q:'What is a population? ',
        options:['An entire collection of individuals about which information is sought','A Subset of a sample'],
        answer:0
    },
    {
        q:'What is a sample? ',
        options:['A Subset of a population','An entire collection of individuals about which information is sought'],
        answer:0
    },
    {
        q:'What is the difference between a statistic and a parameter? ',
        options:['Statistic: Number describing a sample, Parameter: Number describing a population','Parameter: Number describing a sample, Statistic: Number describing a population'],
        answer:0
    },
    {
        q:'How do you calculate a population variance? ',
        options:['Find the mean, Then calculate the deviations (xi - mean), Square the deviations, Add up the squared deviations, Divide that by N','Find the mean, Then calculate the deviations (xi - mean), Square the deviations, Add up the squared deviations, Divide that by N - 1'],
        answer:0
    },
    {
        q:'How do you calculate a sample variance? ',
        options:['Find the mean, Then calculate the deviations (xi - mean), Square the deviations, Add up the squared deviations, Divide that by N','Find the mean, Then calculate the deviations (xi - mean), Square the deviations, Add up the squared deviations, Divide that by N - 1'],
        answer:1
    },
    {
        q:'Compute the sample variance of the following data set: {51,56,61,68} ',
        options:['50.6','52.7','51,9','39.5'],
        answer:1
    },
    {
        q:'How do you find the sample standard deviation? ',
        options:['Take the square root of the sample variance','Take the square root of the population variance'],
        answer:0
    },
    {
        q:'How do you find the population standard deviation? ',
        options:['Take the square root of the sample variance','Take the square root of the population variance'],
        answer:1
    },
    {
        q:'How do you find the coefficient of variation?',
        options:['Take the standard deviation over the mean','Take the standard deviation over the median'],
        answer:0
    },
    {
        q:'What does it mean for a statistic to be resistant?',
        options:['That statistic is not affected much by outliers','That statistic is greatly affected by outliers'],
        answer:0
    },
    {
        q:'What does it mean for a statistic to be resistant?',
        options:['That statistic is not affected much by outliers','That statistic is greatly affected by outliers'],
        answer:0
    },
    {
        q:'When is the coefficient of variation useful?',
        options:['It is used when comparing spreads of data sets whose values have different units (CV is unitless)','It is used when comparing spreads of data sets whose values have the same units (CV is unitless)' ],
        answer:0
    },
    {
        q:'What is the z-score of an individual data set?',
        options:['Tells how many standard deviations that data is from its population mean','Tells how many population variations that data is from its population mean' ],
        answer:0
    },
    {
        q:'What is the formula for z-score?',
        options:['((data value) - (population mean))/(population standard deviation)','((data value) - (population mean))/(population variation)' ],
        answer:0
    },
    {
        q:'Adult men have a mean height of 69.4 inches with a standard deviation of 3.1 inches. How tall is a 73 inches man relative to other men? What needs to be found? What does this mean?',
        options:['Z-Score: 1.16; His height is 1.16 standard deviations above the mean','Z-Score: 1.5; His height is 1.5 standard deviations above the mean' ],
        answer:0
    },
    */
    
    
    
    


    /* Exam 1 Concept 2 
    {
        q:'What is a discrete variable?',
        options:['A quantitative variable whose possible values can be clearly listed','A quantitative variable whose possible values could be any value in an interval'],
        answer:0
    },
    {
        q:'What is a continuous variable?',
        options:['A quantitative variable whose possible values can be clearly listed','A quantitative variable whose possible values could be any value in an interval'],
        answer:1
    },
    {
        q:'Which is a collection of discrete variables?',
        options:['Number of highlighters, Age at last birthday','Age w/out listing last birthday, height'],
        answer:0
    },
    {
        q:'Which is a collection of continuous variables?',
        options:['Number of highlighters, Age at last birthday','Age w/out listing last birthday, height'],
        answer:1
    },
    {
        q:'What are qualitative variables?',
        options:['Variables which classify individuals into categories/descriptions','Numerical variables'],
        answer:0
    },
    {
        q:'What are quantitative variables?',
        options:['Variables which classify individuals into categories/descriptions','Numerical variables'],
        answer:1
    },
    {
        q:'Which is a collection of qualitative variables?',
        options:['Hair color, college major','Score on a homework assignment, Number of pages in a book'],
        answer:0
    },
    {
        q:'Which is a collection of quantitative variables?',
        options:['Hair color, college major','Score on a homework assignment, Number of pages in a book'],
        answer:1
    },
    {
        q:'What are ordinal variables?',
        options:['Qualitative variables whose categories have a natural ordering','Qualitative variables whose categories have no natural ordering'],
        answer:0
    },
    {
        q:'What are nominal variables?',
        options:['Qualitative variables whose categories have a natural ordering','Qualitative variables whose categories have no natural ordering'],
        answer:1
    },
    {
        q:'Which is a nominal variable?',
        options:['Hair color','Class year'],
        answer:0
    },
    {
        q:'Which is an ordinal variable?',
        options:['Hair color','Class year'],
        answer:1
    },
    */
    
    
    

    /* Exam 1 Concept 3 
    {
        q:'What is a frequency distribution?',
        options:['A table which monitors frequency and relative frequency','A graphical representation of a distribution'],
        answer:0
    },
    {
        q:'What is frequency?',
        options:['The number of times a category/class occurs in the dataset','The number of times a category/class occurs outside the dataset'],
        answer:0
    },
    {
        q:'What is relative frequency?',
        options:['Frequency over the sum of all frequencies','Frequency over the standard deviation'],
        answer:0
    },
    {
        q:'Can a frequency distribution be used for qualitative or quantitative data?',
        options:['Both','Qualitative', 'Quantitative'],
        answer:0
    },
    {
        q:'Pertaining to graphical summaries of data, what is a bar graph?',
        options:['A graphical representation of a frequency (or relative frequency) distribution','A graphical representation of standard deviation'],
        answer:0
    },
    {
        q:'Pertaining to graphical summaries of data, what is a pie chart?',
        options:['Relative sizes of the sectors match the relative frequencies of the categories/classes','A graphical representation of a frequency (or relative frequency) distribution'],
        answer:0
    },
    {
        q:'Pertaining to graphical summaries of data, what is a histogram?',
        options:['Bar graph where the rectangles are touching and there are between 5 and 20 classes','Bar graph where the rectangles are not touching and there are between 1 and 4 classes'],
        answer:0
    },
    {
        q:'Can a histogram be used for qualitative or quantitative data?',
        options:['Both','Qualitative', 'Quantitative'],
        answer:2
    },
    {
        q:'Pertaining to graphical summaries of data, what is a boxplot?',
        options:['Graph that represents the five number summary','Bar graph where the rectangles are not touching and there are between 1 and 4 classes'],
        answer:0
    },
    {
        q:'Create a boxplot that represents the following dataset: [41, 42, 42, 44, 44, 45, 45, 46, 49, 49, 51, 51, 53, 56, 57, 59, 59, 65, 67, 71, 77, 100]',
        options:['See Example 4 from Notes 4 - Graphical Summaries of Data'],
        answer:0
    },
    */
    
    
    
    


    /* Exam 1 Concept 4 
    {
        q:'What is a correlation coefficient?',
        options:['A numerical measure of the strength of the linear relationship between two variables', 'Essentially average: Add all data and divide by number of units'],
        answer:0
    },
    {
        q:'What is the formula for correlation coefficient?',
        options:['(1 / n - 1) * ( (xi - xmean)/(xstandarddeviation) * (yi - ymean)/(ystandarddeviation) )', '((data value) - (population mean))/(population standard deviation)'],
        answer:0
    },
    {
        q:'Compute the correlation between size and selling prices of homes given the following data for size [2521, 2555, 2735, 2846, 3028, 3049, 3198, 3198] and selling price [400, 426, 428, 435, 469, 475, 488, 455]',
        options:['.9005918', '.753216'],
        answer:0
    },
    {
        q:'When two variables have a linear relationship, correlation coefficient r > 0 represents: ',
        options:['positive linear association', 'negative linear associateion'],
        answer:0
    },
    {
        q:'When two variables have a linear relationship, correlation coefficient r < 0 represents: ',
        options:['positive linear association', 'negative linear associateion'],
        answer:1
    },
    {
        q:'When two variables have a linear relationship, correlation coefficient r = 0 represents: ',
        options:['weak linear association', 'negative linear associateion'],
        answer:0
    },
    {
        q:'When two variables have a linear relationship, correlation coefficient r = 1 represents: ',
        options:['strong positive linear association', 'strong negative linear associateion'],
        answer:0
    },
    {
        q:'When two variables have a linear relationship, correlation coefficient r = -1 represents: ',
        options:['strong positive linear association', 'strong negative linear associateion'],
        answer:0
    },
    {
        q:'What is the least-squares regression line? ',
        options:['The least-squares regression line is the line that best demonstrates the relationship between two variables'],
        answer:0
    },
    {
        q:'What is the equation of the least-squares regression line? ',
        options:['y = mx + b; slope m is found by taking correlation coefficient r times sample standard deviation y over sample standard deviation x; slope b is found by taking sample mean y and subtracting slope times sample mean x'],
        answer:0
    },
    {
        q:'What is a residual plot? ',
        options:['A residual plot is a plot in which the residuals (difference between observed values y and y^) are plotted against the explanatory variable x'],
        answer:0
    },
    {
        q:'If a residual plot exhibits a pattern, that can suggest what type of relationship? ',
        options:['Nonlinear','Linear'],
        answer:0
    },
    {
        q:'If a residual plot exhibits no pattern, that can suggest what type of relationship? ',
        options:['Nonlinear','Linear'],
        answer:1
    },
    {
        q:'What is an outcome variable? ',
        options:['In respect to the least-squares regression line, it is the variable we are trying to predict','In respect to the least-squares regression line, it is the variable we are given to make predictions'],
        answer:0
    },
    {
        q:'What is an explanatory variable? ',
        options:['In respect to the least-squares regression line, it is the variable we are trying to predict','In respect to the least-squares regression line, it is the variable we are given to make predictions'],
        answer:1
    },
    {
        q:'True or False: We can use the least-squares regression line to predict the value of the outcome variable if given the value of the explanatory variable ',
        options:['True','False'],
        answer:0
    },
    {
        q:'The outcome variable is usually denoted by x or y? ',
        options:['y','x'],
        answer:0
    },
    {
        q:'The explanatory variable is usually denoted by x or y? ',
        options:['y','x'],
        answer:1
    },
    {
        q:'Given the correlation coefficient of .9005918, the mean of X is 2891.25, the mean of Y is 447, the standard deviation of X is 269.49357, and the standard deviation of y is 29.68405, what is the least-squares regression line? ',
        options:['.0992x + 160.1939','.0937x + 160.7572','.0911x + 160.1799'],
        answer:0
    },
    {
        q:'Given a point (x,y) on a scatterplot, and the least-squares regression line, the residual for the point (x,y) is what? ',
        options:['The difference between the observed and predicted y','The sum of the observed and predicted y'],
        answer:0
    },
    {
        q:'What is the coefficient of determination? ',
        options:['Correlation coefficient squared','Square root of correlation coefficient'],
        answer:0
    },
    */
    
    


    /* Exam 1 Concept 5 

    {
        q:'What is the probability of an event? ',
        options:['The proportion of times the event occurs in the long run as an experiment is repeated','An entire collection of data about which information is sought'],
        answer:0
    },
    {
        q:'What is the law of large numbers? ',
        options:['The proportion of times the event occurs in the long run as an experiment is repeated','As a probability experiment is repeated again and again, the proportion of times an event occurs will approach its probability'],
        answer:1
    },
    {
        q:'What is a sample space? ',
        options:['The proportion of times the event occurs in the long run as an experiment is repeated','Contans all possible outcomes of a probability experiment'],
        answer:1
    },
    {
        q:'What is the sample space for the toss of a coin? ',
        options:['{H,T}','{HT,HT}'],
        answer:0
    },
    {
        q:'What is the sample space for the roll of a die? ',
        options:['{1,2,3,4,5,6}','{123456}'],
        answer:0
    },
    {
        q:'What is the sample space for two tosses of a coin? ',
        options:['{HH,TT,HT,TH}','{H,T}'],
        answer:0
    },
    {
        q:'What is an event? ',
        options:['The proportion of times the event occurs in the long run as an experiment is repeated','An outcome and/or collection of outcomes from a sample space'],
        answer:1
    },
    {
        q:'If A denotes an event, what does P(A) denote? ',
        options:['The probability event A occurs','The probability event A does not occur'],
        answer:0
    },
    {
        q:'If a sample space has n equally likely outcomes, and event A has k outcomes, what is P(A)? ',
        options:['K/N','N/K'],
        answer:0
    },
    {
        q:'Given a family has three children, what is the sample space for sex of the children, probability of there being two girls, and probability that all three children are of the same gender? ',
        options:['See Example 2 from Notes Packet 7 - Basic Concepts of Probability'],
        answer:0
    },
    {
        q:'What is the General Addition Rule?',
        options:['P(A U B) = P(A) + P(B) - P(A n B)', 'P(A U B) = P(A) - P(B) + P(A n B)'],
        answer:0
    },
    {
        q:'When are two events mutually exclusive?',
        options:['When it is impossible for both events to occur', 'When it is guaranteed for both events to occur'],
        answer:0
    },
    {
        q:'What is the complement of an event A?',
        options:['The event that A does not occur', 'The event that A occurs'],
        answer:0
    },
    {
        q:'How is the complement of event A denoted?',
        options:['A^c', 'P(A)'],
        answer:0
    },
    {
        q:'How would the following be represented on Ven Diagrams? A^c, B^c, (A U B)^c',
        options:['See Exercise 1 from Notes Packet 7 - Basic Concepts of Probability'],
        answer:0
    },
    {
        q:'What is the Rule of Complements?',
        options:['P(A^c) = 1 - P(A)', 'P(A) = 1 / P(A^c)'],
        answer:0
    },
    {
        q:'How is conditional probability denoted?',
        options:['P(B|A): "probability of B given A)"', 'P(B|A): "probability of A given B)'],
        answer:0
    },
    {
        q:'What is Bayes Formula?',
        options:['P(B|A) = P(A n B)/P(A)', 'P(B|A) = P(A U B)/P(A)'],
        answer:0
    },
    {
        q:'Which General Multiplication Rule is True?',
        options:['P(A n B) = P(B|A) * P(A)', 'P(A U B) = P(B|A) * P(A)'],
        answer:0
    },
    {
        q:'When are two events independent?',
        options:['When the occurence of one does not affect the probabiltiy that the other event occurs', 'When the occurence of one does affect the probabiltiy that the other event occurs'],
        answer:0
    },
    */
    



    /* Exam 1 Concept 6 
    {
        q:'What is the Fundamental Principle of Counting?',
        options:['For two different operations occuring in m and n ways respectively, the total number of ways to perform the sequence of two operations is m times n', 'For two different operations occuring in m and n ways respectively, the total number of ways to perform the sequence of two operations is m plus n'],
        answer:0
    },
    {
        q:'License plates in Mississippi contain three letters followed by three digits. How many different license plates can be made?',
        options:['17,576,000', '17,376,000','17,476,000','17,776,000','17,176,000','17,676,000'],
        answer:0
    },
    {
        q:'What is (n!)?',
        options:['n! = n(n-1)(n-2)...', 'n! = n(n+1)(n+2)...'],
        answer:0
    },
    {
        q:'What is (0!)?',
        options:['1', '0'],
        answer:0
    },
    {
        q:'Five runners run a race. One will finish first, one will finish second... In how many orders can they finish?',
        options:['120', '140'],
        answer:0
    },
    {
        q:'Permutations are what?',
        options:['Another word for ordering. When counting the number of permutations, we are counting the number of ways things can be ordered', 'A distinct group of objects that can be selected without regard to order'],
        answer:0
    },
    {
        q:'Combinations are what?',
        options:['Another word for ordering. When counting the number of permutations, we are counting the number of ways things can be ordered', 'A distinct group of objects that can be selected without regard to order'],
        answer:1
    },
    {
        q:'The number of permutations of r objects chosen from n is what?',
        options:['nPr = (n!)/((n-r)!', 'nPr = (n!)/(r!(n-r)!)'],
        answer:0
    },
    {
        q:'The number of combinations of r objects chosen from n is what?',
        options:['nCr = (n!)/((n-r)!', 'nCr = (n!)/(r!(n-r)!)'],
        answer:1
    },
    {
        q:'Ten runners enter a race. First place wins gold; Second wins silver; Third wins bronze. In how many different ways can medals be awarded?',
        options:['720', '920','620'],
        answer:0
    },
    {
        q:'Thirty people attend an event. Five will be chosen to win random, indiscriminate, equivalent prizes. How many different groups of 5 people can be chosen?',
        options:['142,506', '142,309','142,204','142,405'],
        answer:0
    },
    */
    

    /* Exam 2 Notes 10 - Discrete Random Variables 
    {
        q:'What is a random variable?',
        options:['Assigns a numerical value to each outcome in a sample space.'],
        answer:0
    },
    {
        q:'How are random variables denoted?',
        options:['By capital letters'],
        answer:0
    },
    {
        q:'A probability distribution for a discrete random variable specifies what?',
        options:['The probability for each possible value of the random variable'],
        answer:0
    },
    {
        q:'For discrete random variables, probability distributions are also referred to as what?',
        options:['Probability mass functions','Probability density function'],
        answer:0
    },
    {
        q:'A fair coin is tossed twice. Let X be the number of heads that come up. What is the probability distribution of X?',
        options:['See Example 1 from Notes Packet 10 - Discrete Random Variables'],
        answer:0
    },
    {
        q:'A cumulative distribution function specifies the probability of what?',
        options:['That a random variable is less than or equal to a given value F(x) = P(X<=x)'],
        answer:0
    },
    {
        q:'An airport parking facility contains 1000 parking spaces. Of these, 142 are covered long-term spaces that cost $2 per hour, 378 are covered short-term spaces that cost $4.5 per hour, 423 are uncovered long-term spaces that cost $1.5 per hour, and 57 are uncovered short-term spaces that cost $4 per hour. Let X represent the hourly parking fee for the randomly sampled space. Provided this, find the probability distribution (probability mass function) of X. Then, find the cumulative distribution function F(x) of the random variable X.',
        options:['See Example 2 from Notes Packet 10 - Discrete Random Variables'],
        answer:0
    },
    {
        q:'Assuming X is a discrete random variable with probability mass function p(x) = P(X = x), what is the Mean of X formula?',
        options:['(Sum of all x) * P(X=x) (also known as the expected value of X (E(X))','(Sum of all x) * (x - mx)^2 * P(X=x)','Square Root of Variance'],
        answer:0
    },
    {
        q:'Assuming X is a discrete random variable with probability mass function p(x) = P(X = x), what is the Variance of X formula?',
        options:['(Sum of all x) * P(X=x) (also known as the expected value of X (E(X))','(Sum of all x) * (x - mx)^2 * P(X=x)'],
        answer:1
    },
    {
        q:'Assuming X is a discrete random variable with probability mass function p(x) = P(X = x), what is the Standard Deviation of X formula?',
        options:['(Sum of all x) * P(X=x) (also known as the expected value of X (E(X))','(Sum of all x) * (x - mx)^2 * P(X=x)','Square Root of Variance'],
        answer:2
    },
    {
        q:'What is the law of large numbers?',
        options:['As sample size grows larger, the sample mean approaches the population mean'],
        answer:0
    },
    {
        q:'A computer monitor is composed of a very large number of points of light called pixels. It is not uncommon for a few of those to be defective. Let X represent the number of defective pixels on a randomly chosen monitor. Given the probability distribution (x = 0,P(X=x) = .2; x = 1,P(X=x) = .5; x = 2,P(X=x) = .2; x = 3,P(X=x) = .1), what is the mean number of defective pixels?',
        options:['1.2','2.7','.4'],
        answer:0
    },
    {
        q:'A computer monitor is composed of a very large number of points of light called pixels. It is not uncommon for a few of those to be defective. Let X represent the number of defective pixels on a randomly chosen monitor. Given the probability distribution (x = 0,P(X=x) = .2; x = 1,P(X=x) = .5; x = 2,P(X=x) = .2; x = 3,P(X=x) = .1), what is the standard deviation in the number of defective pixels?',
        options:['.872','.7996','.342','.76'],
        answer:0
    },
    {
        q:'Discrete probability distributions are frequently represented by what?',
        options:['Histograms','Pie Charts'],
        answer:0
    },
    {
        q:'A computer monitor is composed of a very large number of points of light called pixels. It is not uncommon for a few of those to be defective. Let X represent the number of defective pixels on a randomly chosen monitor. Given the probability distribution (x = 0,P(X=x) = .2; x = 1,P(X=x) = .5; x = 2,P(X=x) = .2; x = 3,P(X=x) = .1), draw a Histogram for the probability distribution for X, where X represents the number of defective pixels on a randomly chosen monitor',
        options:['See Example 4 from Notes Packet 10 - Discrete Random Variables'],
        answer:0
    },
    */




    /* Exam 2 Notes 11 - Discrete Random Variables 

    {
        q:'What is a statistical inference?',
        options:['The process of drawing a sample from a population, analyzing the sample data, and learning about the population','The probability for each possible value of the random variable'],
        answer:0
    },
    {
        q:'Which is NOT one of the three key types of discrete distributions?',
        options:['Continuous','Bernoulli','Binomial','Poisson'],
        answer:0
    },
    {
        q:'A Bernoulli Distribution has how many potential outcomes?',
        options:['1','2'],
        answer:1
    },
    {
        q:'How is a Bernoulli Distributions success outcome denoted?',
        options:['p','1-p'],
        answer:0
    },
    {
        q:'How is a Bernoulli Distributions failure outcome denoted?',
        options:['p','1-p'],
        answer:1
    },
    {
        q:'For a successful Bernoulli trial, how is random variable X denoted?',
        options:['X=1','X=0'],
        answer:0
    },
    {
        q:'For a failed Bernoulli trial, how is random variable X denoted?',
        options:['X=1','X=0'],
        answer:1
    },
    {
        q:'The random variable X is said to have Bernoulli distribution with parameter p. How is this represented?',
        options:['X~Bernoulli(p)','X:Bernoulli(p)'],
        answer:0
    },
    {
        q:'Consider rolling a die. Let the random variable X be 1 if the die comes up 6 and X = 0 otherwise. What is the distribution of X?',
        options:['X~Bernoulli( (1/6) )','X~Bernoulli( 1 )'],
        answer:0
    },
    {
        q:'Find the mean of a general Bernoulli random variable.',
        options:['Mean = p','Mean = p(1-p)'],
        answer:0
    },
    {
        q:'Find the variance of a general Bernoulli random variable.',
        options:['Variance = p','Variance = p(1-p)'],
        answer:1
    },
    {
        q:'Consider rolling a die. Let the random variable X be 1 if the die comes up 6 and X = 0 otherwise. What is the mean and variance of the random variable?',
        options:['Mean = (1/6); Variance = (5/36)','Mean = (5/36); Variance = (1/6)'],
        answer:0
    },
    {
        q:'A Binomial Distribution undergoes what process?',
        options:['Conduct several Bernoulli trials and count the number of successes'],
        answer:0
    },
    {
        q:'A random variable that represents the number of successes in a series of trials has what type of probability distribution?',
        options:['Binomial Distribution','Bernoulli Distribution'],
        answer:0
    },
    {
        q:'The random variable X is said to have Binomial distribution with parameter p across n trials. How is this represented?',
        options:['X~Bin(n,p)','X:Bin(n,p)'],
        answer:0
    },
    {
        q:'A biased coin has probability .6 of coming up heads. The coin is tossed three times. Let X be the number of heads. Then, X~Bin(3,.6). Find P(X=2)',
        options:['.432','.442'],
        answer:0
    },
    {
        q:'What is the Binomial Distribution calculator formula? ',
        options:['binompdf(n,p,x)','binompdf(x,n,p)','binompdf(p,x,n)'],
        answer:0
    },
    {
        q:'What is the Cumulative Distribution Function calculator formula? ',
        options:['binomcdf(n,p,x)','binomcdf(x,n,p)','binomcdf(p,x,n)'],
        answer:0
    },
    {
        q:'Find the mean of a general Binomial random variable.',
        options:['Mean = np','Mean = np(1-p)'],
        answer:0
    },
    {
        q:'Find the variance of a general Binomial random variable.',
        options:['Variance = np','Variance = np(1-p)'],
        answer:1
    },
    {
        q:'If the probability (p) associated with a certain Bernoulli trial is not provided, how can it be estimated?',
        options:['x/n','n/x'],
        answer:0
    },
    {
        q:'The safety commissioner in a large city wants to estimate the proportion of buildings in the city that are in violation of fire codes. A random sample of 40 buildings is chosen for inspection, and 4 of them are found to have fire code violations. Estimate the proportion of buildings in the city that have fire code violations.',
        options:['.1','.2'],
        answer:0
    },
    {
        q:'A Poisson Distribution is used to describe what?',
        options:['Certain events that occur in time or space','A random variable that represents the number of successes in a series of trials'],
        answer:0
    },
    {
        q:'A Poisson Distribution describes discrete or continuous variables?',
        options:['Discrete','Continuous'],
        answer:0
    },
    {
        q:'How is Poisson Distribution represented?',
        options:['X~Poisson(λ)','X:Poisson(λ)'],
        answer:0
    },
    {
        q:'What is the Poisson Probability Mass Function?',
        options:['p(x) = P(X = x) = {e^-λ * (λ^x / x!), x is a non-negative integer; o, otherwise','p(x) = P(X = x) = {λ^e * (λ^x / x^2), x is a non-negative integer; o, otherwise'],
        answer:0
    },
    {
        q:'How do you find λ for Poisson Probability?',
        options:['λ = kt','λ = k/t'],
        answer:0
    },
    {
        q:'What is the Poisson Probability Function calculator formula? ',
        options:['poissonpdf(λ,x)','poissonpdf(x,λ)'],
        answer:0
    },
    {
        q:'The number of hits a certain website follows a Poisson distribution with 3 hits per minute. Let X be the number of hits in a 2-minute period. What is p(5)? ',
        options:['.16','.14'],
        answer:0
    },
    {
        q:'The number of hits a certain website follows a Poisson distribution with 3 hits per minute. Let X be the number of hits in a 2-minute period. What is P(X<3)? ',
        options:['.062','.62'],
        answer:0
    },
    {
        q:'The number of hits a certain website follows a Poisson distribution with 3 hits per minute. Let X be the number of hits in a 2-minute period. What is P(X>2)? ',
        options:['.938','.972'],
        answer:0
    },
    {
        q:'What method can be used to solve for the Poisson of an infinite sum? ',
        options:['Take 1 - (the complement)'],
        answer:0
    },
    {
        q:'Yeast cells are suspended in a liquid medium at a concentration of 4 particles per milliliter. A volume of 2 milliliters is withdrawn. What is the probability that exactly 6 particles are contained in this volume?',
        options:['.1221','.1211'],
        answer:0
    },
    {
        q:'What is the mean for Poisson random variables? ',
        options:['λ','square root of λ'],
        answer:0
    },
    {
        q:'What is the variance for Poisson random variables? ',
        options:['λ','square root of λ'],
        answer:0
    },
    {
        q:'What is the standard deviation for Poisson random variables? ',
        options:['λ','square root of λ'],
        answer:1
    },
    */


    /* Exam 2 Notes 12 - Continuous Random Variables */
    {
        q:'For a continuous random variable X, what is P(X = a), where a is any one number? ',
        options:['P(X = a) = 0','P(X = a) = 1'],
        answer:0
    },
    {
        q:'A continuous random variable is what? ',
        options:['A random variable whose probabilities are represented by areas under a curve','A random variable whose probabilities are represented by areas above a curve'],
        answer:0
    },
    {
        q:'A probability distribution for a continuous random variable is referred to as what? ',
        options:['Probability density function','Probability mass function'],
        answer:0
    },
    /*
    {
        q:'Let X be a continuous random variable with probability density function f(x). The cumulative distributive function of X is what function? ',
        options:['See Definition 1 in Notes 12 - Continuous Random Variables'],
        answer:0
    },
    */

]