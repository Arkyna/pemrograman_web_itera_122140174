from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id          # protected
        self._title = title              # protected

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):  # property decorator
        return self._title

    @property
    def item_id(self):
        return self._item_id


class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self._author = author

    def display_info(self):  # override the parent abstract method
        print(f"[Book] ID: {self._item_id}, Title: {self._title}, Author: {self._author}")


class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self._issue_number = issue_number

    def display_info(self):  # override abstract method
        print(f"[Magazine] ID: {self._item_id}, Title: {self._title}, Issue: {self._issue_number}")
