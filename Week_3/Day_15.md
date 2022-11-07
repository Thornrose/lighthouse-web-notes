# Friday Week 3

## REST
- (technically this is the last activity from yesterday, but what the heck)
- from compass, BREAD:
<table class="table table-bordered"><tr>
<th>Action</th>
<th>Application</th>
<th>Description</th>
<th>HTTP Method</th>
</tr>
<tr>
<td>Browse</td>
<td>collection</td>
<td>browse the collection</td>
<td>GET</td>
</tr>
<tr>
<td>Read</td>
<td>member</td>
<td>read a member of the collection</td>
<td>GET</td>
</tr>
<tr>
<td>Edit</td>
<td>member</td>
<td>edit a member of the collection</td>
<td>PUT / PATCH</td>
</tr>
<tr>
<td>Add</td>
<td>collection</td>
<td>add a new member to the collection</td>
<td>POST</td>
</tr>
<tr>
<td>Delete</td>
<td>member</td>
<td>delete a member of the collection</td>
<td>DELETE</td>
</tr>
</table>


- important note on representation and the use of the `Accept` Header.
- REST is basically explaining that what we just did with tinyApp, or at least the way we approached its organization, is a common structure.
- QUIZ NOTE: The endpoint itself is not considered a resource. a resource is an abstraction - for a document, image, or temporan service. an entity or collection of entities

## Actually Friday: Data Structures
- arrays and objects are data structures.
- the two have different qualities that make each of them good for organizing data in a certain way, to be accessible - arrays best for things that need to be kept in order, objects good for key lookup
- Tree structure is another type of data structure! At first glance, it just seems like a more visually appealing / easier to read structure when we are dealing with, let's say classes - lots of parent/children relationships. `relationships` is a good word here. tree structure is organized by relationships.
- trees are made of `nodes` representing key entities containing data about themselves
- connections between nodes are called `edges`
- topmost node = `root node`, bottom / endpoint nodes are called `leaf nodes`
- every node except for root has a single `parent node` above it, ever node that is not a leaf has at least one `child node`
- children with same parent are `siblings`
- `DOM` is a tree structure
- example file in one-offs: durian-tree

    - a note on class syntax: at least in javascript, does not need `;` after delaration, DOES need `;` between lines inside (not exactly like object)

- look at the `numberOfPeopleToCEO` function. the while loop is clever and makes perfect sense in a code context. I wouldn't have thought of it

- trees are good for HIERARCHICAL DATA STRUCTURE.

- other tree structure examples we'll be working with:
  - Browser DOM
    - node = HTMLElement
    - parent = parent element
    - children = child elements
    - data = attributes (id, class, etc)
  - The File System
    - node = directory or file
    - parent = parent directory `../`
    - children = all the sub-directories or files within this directory
    - data = contents of the file (if file) + metadata (permissions, etc)

## VAMPR
- who is a vampire's creator?
- how many vampires has a vampire created?
- How many vampires away from the original vampire is a vampire?
- Who is the more senior vampire out of two vampires? (Who is closer to the original vampire)
- Who is the closest common ancestor of two vampires?

- stretch  closestCommonAncestor: can't quite figure out. recursive solution is getting part of it right but not all. Revisit.

## Tree Traversal

- we usually only keep a reference to the root node, we don't have direct access to others?
- traversing through nodes can be seen as similar to looping through an array
- `breadth first` involves searching through nodes level by level - AKA `level order` traversal
  - start with root 
  - move to root's direct cheldren
  - then any children of those children and so on.
- `depth first` follows the line from root to final leaf, then the next line, then the next.
  - seach pattern makes "outline" of tree
- note the recursive nature of the tree - every node can be seen as a root node with children, even leaves are roots with 0 children.
- steps to set up depth-first traversal:
  - visit root node
  - get first unvisited child sub-tree of the current node
  - do step 1 with subtree
  - in other words:
    - `visit root node of tree`
    - `let subree = first unvisited child subtree of the root node`
    - `recursive case: if there's a subtree, traverse subtree`
    - `base case: if there's no subtree, do nothing`
- ok, important syntax for recursion here, in durian-tree example, employeesThatMakeOver method. 
  - defining a variable within a for loop which gets the recursive call attached to it.
  - then using `concat()` method to add to original array. See how this works? makes sense? 
    1. create a new employees array to hold every employee that makes over the specified amount
    2. if the current employee makes over that amount, add them to the array.
    3. call this method on all of the current employees subordinates and combine their results with the current results.
- was able to reproduce myself using totalEmployees method. Seems like that first if statment is key, as well as defining new variable inside for loop.
- this what we've done is called `preorder` traversal - DLR (Data, Left, Right)
- two other types: `Inorder` (LDR) and `Postorder` (LRD)

## tree Traversal w/ Vampr
- man, got really stuck on the first one there, looking for the name. REALLY cannot overstate the importance of creating new variable within the for loop. I don't fully grasp it still. but it always seems to work out better
- concat does not mutate original array. need to create new one OR overwrite old one with =