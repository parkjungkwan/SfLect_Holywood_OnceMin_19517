package com.once.web;

@FunctionalInterface
public interface IPredicate {
	public abstract boolean test(Object o);
}
