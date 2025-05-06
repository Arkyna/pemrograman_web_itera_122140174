class Library:
    def __init__(self):
        self.__items = []  # private collection list

    def add_item(self, item):
        self.__items.append(item)

    def display_all_items(self):
        if not self.__items:
            print("Library is empty.")
        else:
            for item in self.__items:
                item.display_info()  # Polymorphism

    def search_by_title(self, keyword):
        result = [item for item in self.__items if keyword.lower() in item.title.lower()]
        return result

    def search_by_id(self, item_id):
        for item in self.__items:
            if item.item_id == item_id:
                return item
        return None
