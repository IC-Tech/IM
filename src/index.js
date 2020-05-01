/* Copyright © Imesh Chamara 2020 */
'use strict';
import '../icApp/icApp.js'
import {IAR} from '../icApp/icApp-render.js'
import './style.scss'

window.ic = window.ic || []
window.ic.pageLoad = Date.now()

document.addEventListener('DOMContentLoaded', () => {
let icApp = ic.icApp
var _root_ = new icApp.e('#root')
var feel = [
	{n: 'Excited', c: 0},
	{n: 'Loving', c: 0},
	{n: 'Confident', c: 0},
	{n: 'Happy', c: 0},
	{n: 'Joyful', c: 0},
	{n: 'Proud', c: 0},
	{n: 'Clam', c: 1},
	{n: 'Optimistic', c: 1},
	{n: 'Grateful', c: 1},
	{n: 'Okay', c: 2},
	{n: 'Tired', c: 2},
	{n: 'Bored', c: 2},
	{n: 'Numb', c: 2},
	{n: 'Annoyed', c: 3},
	{n: 'Overwhelmed', c: 3},
	{n: 'Angry', c: 3},
	{n: 'Frustrated', c: 3},
	{n: 'Stressed', c: 3},
	{n: 'Anxious', c: 4},
	{n: 'Insecure', c: 4},
	{n: 'Afraid', c: 4},
	{n: 'Sad', c: 5},
	{n: 'Ashamed', c: 5},
	{n: 'Guilty', c: 5},
	{n: 'Depressed', c: 5},
]
class Site extends IAR {
	constructor() {
		super()
		this.data = {
			ui: 3,
		}
		this.feel = 0
		this.clf = this.clf.bind(this)
	}
	didMount() {
		console.log('icApp-render:speed - ' + (Date.now() - window.ic.pageLoad))
		var resize = a => {
			this.can = icApp.qs('canvas')
			this.can.width = document.body.offsetWidth > 400 ? 400 : document.body.offsetWidth
			this.can.height = (a = document.body.offsetHeight - 110) > 540 ? 540 : a
			this.can.style.width = this.can.width
			this.can.style.height = this.can.height
		}
		window.addEventListener('resize', resize)
		resize()
		this.upUI2 = a => {
			var b = ['Slightly', 'A little', 'Fairly', 'Very', 'Extremely']
			var _a = (a,b) => (a = icApp.ds(a)).txt == b ? 0 : a.txt = b
			_a({ty: 'fed', in: 0}, b[a = parseInt((a = a / (100 / b.length)) >= b.length ? b.length -1 : a)] + ' ' + feel[this.feel].n)
			_a({ty: 'fed', in: 1}, 'I\'m feeling ' + b[a] + ' ' + feel[this.feel].n)
		}
		this.ev = {
			md: a => {
				this.ani0.d.s = 1
				document.addEventListener('mousemove', this.ev.mm)
				this.ev.mm(a)
			},
			mm: a => {
				if(a.buttons == 0) return this.ev.mu(a)
				if(!a.defaultPrevented) a.preventDefault()
				this.ev.m(a.clientX, a.clientY)
			},
			mu: a => {
				this.ani0.d.s = 0
				if(!a.defaultPrevented) a.preventDefault()
				document.removeEventListener('mousemove', this.ev.mm)
			},
			ts: a => {
				if(!a.defaultPrevented) a.preventDefault()
				this.ani0.d.s = 1
				document.addEventListener('touchmove', this.ev.tm)
				this.ev.tm(a)
			},
			tm: a => {
				if(!a.defaultPrevented) a.preventDefault()
				this.ev.m(a.changedTouches[0].clientX, a.changedTouches[0].clientY)
			},
			te: a => {
				this.ani0.d.s = 0
				if(!a.defaultPrevented) a.preventDefault()
				if(a.changedTouches.length == 0) document.removeEventListener('touchmove', this.ev.tm)
			},
			m: (a,b) => {
				this.ani0.d.a = (a = [a,b])
				var c = this.can
				c = {
					w: c.width,
					h: c.height,
					x: c.offsetLeft,
					y: c.offsetTop
				}
				b = [a[0] - c.x, a[1] - c.y]
				this.ani0.d.b = b
				c.sh = c.h - (a = this.ani0.s).m * 2
				c.sh = c.sh > 500 ? 500 : c.sh
				a = (a.m + (a.ball * (c.sh / a.defaultSize)))
				var _a = a => a > 100 ? 100 : (a < 0 ? 0 : a)
				//b = _a(100 - parseInt(((b[1] - a) / (c.sh - a)) * 100)) || 0
				//set.v = _a(100 - parseInt(set._v = ((set.mp.y - a) / (set.sh - a)) * 100)) || 0
				b = ((b[1] - a) / (c.sh - a)) * 100
				b = [b, _a(100 - parseInt(b)) || 0]
				this.upUI2(b[1])
				this.ani0.d.c = b
			}
		}
		this.can.addEventListener('mousedown', this.ev.md, {passive: true})
		document.addEventListener('mouseup', this.ev.mu, {passive: true})
		this.can.addEventListener('touchstart', this.ev.ts, {passive: true})
		document.addEventListener('touchend', this.ev.te, {passive: true})
		this.ctx = this.can.getContext('2d')
		setInterval(a => [this.ani0.d.fps=this.ani0.d.f, this.ani0.d.f = 0], 1000)
		this.ani0 = {
			d: {a: 0, c: [50, 50], s: 0, fps: 0, f: 0, lp: 0, la: 0, sp: 0, dp: 0, t: 0},
			s: {duration: 100, m: 20, c: ['#232931','#FFBD69'], defaultSize: 500, ball: 20},
			f: a => {
				if(this.data.ui != 2) return requestAnimationFrame(this.ani0.f)
				var can = this.can, ctx = this.ctx, d = this.ani0.d, set = {}, s = this.ani0.s
				set = {
					w: can.width,
					h: can.height,
					x: can.offsetLeft,
					y: can.offsetTop
				}
				set.sw = set.w - s.m * 2
				set.sh = set.h - s.m * 2
				set.sh = set.sh > 500 ? 500 : set.sh
				var scale = set.sh / s.defaultSize
				set.ball = s.ball * scale
				var _a = a => a > 100 ? 100 : (a < 0 ? 0 : a)
				/*var logs = a => {
					if(logs.b) return
					var b = fs()
					var c = ctx.fillStyle
					fs('12px')
					if(ctx.fillStyle != '#fff') ctx.fillStyle = '#fff'
					ctx.fillText(a, 10, logs.a += 14)
					fs(b)
					if(ctx.fillStyle != c) ctx.fillStyle = c
				}
				logs.a = 0
				logs.b = 1*/
				function roundedRect(x, y, width, height, radius) {
					ctx.beginPath();
					ctx.moveTo(x, y + radius);
					ctx.lineTo(x, y + height - radius);
					ctx.arcTo(x, y + height, x + radius, y + height, radius);
					ctx.lineTo(x + width - radius, y + height);
					ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
					ctx.lineTo(x + width, y + radius);
					ctx.arcTo(x + width, y, x + width - radius, y, radius);
					ctx.lineTo(x + radius, y);
					ctx.arcTo(x, y, x, y + radius, radius);
				}
				var fs = a => {
					if(a) {
						var b  = ctx.font.split(' ')
						b = b.map(b => b.endsWith('px') ? a : b)
						ctx.font = b.join(' ')
					}
					else {
						ctx.font.split(' ').some(b => b.endsWith('px') ? a = b : 0)
						return a
					}
				}
				var button = (x,y,t,m,c,s=16,r=null) => {
					fs(s + 'px')
					a = (a = ctx.measureText(t)).actualBoundingBoxLeft + a.actualBoundingBoxRight
					x = x == 'center' ? ((can.width / 2) - ((a + m[1] * 2) / 2)) : x
					ctx.fillStyle = c[0]
					roundedRect(x, y, a + m[1] * 2, s + m[0] * 2, r ? r : ((s + m[0]) / 1.5))
					ctx.fill()
					ctx.fillStyle = c[1]
					ctx.fillText(t, x + m[1], y + m[0])
				}

				ctx.clearRect(0, 0, set.w, set.h)
				ctx.textBaseline = 'top'
				ctx.font = 40 * scale + "px 'Roboto'"
				ctx.fillStyle = s.c[1]
				ctx.shadowColor = `rgba(22, 22, 22, ${d.s == 1 ? '0.8' : '0.4'})`
				ctx.lineCap = 'round'

				a = (a = ctx.measureText(d.c[1] + '%')).actualBoundingBoxLeft + a.actualBoundingBoxRight
				ctx.fillText(d.c[1] + '%', set.sw - a, s.m * 2 + set.ball)
				fs(20 * scale + 'px')
				for(var a = 0, b = can.width / 2, c = set.ball + s.m; a<101; a++) {
					var _d = a == parseInt(a / 10) * 10
					var e = a * ((set.sh - c) / 100) + c
					ctx.fillRect(b - (_d ? 5 : 1) * scale, e,
					(_d ? 10 : 2) * scale, 2 * scale)
					;_d ? ctx.fillText((100 - a) + '%', s.m * scale, e - ((20 * scale) / 2)) : 0
				}
				//ctx.shadowBlur = d.s == 1 ? 10 : 16
				this.ani0.d.dp = (a = s.m + set.ball) + ((100 - (d.s == 1 ? _a(100 - d.c[0]) : d.c[1])) * ((set.sh - a) / 100))
				var a = this.ani0.d.dp - d.lp
				var b = d.la == 0 ? d.lp : d.sp + ((this.ani0.d.dp - d.sp) / s.duration) * (d.st > Date.now() ? s.duration - (d.st - Date.now()) : s.duration)

				if(this.ani0.d.ldp != this.ani0.d.dp) {
					this.ani0.d.st = Date.now() + s.duration
					this.ani0.d.sp = d.lp
				}
				this.ani0.d.la = a
				this.ani0.d.ldp = this.ani0.d.dp
				button('center', (this.ani0.d.lp = b) - set.ball, feel[this.feel].n, [10, 20].map(a => a * scale), [s.c[1], s.c[0]], set.ball * scale)
				this.ani0.d.f++
				requestAnimationFrame(this.ani0.f)
			}
		}
		this.ani0.f()
	}
	clf(a) {
		this.feel = ((a = new icApp.e(a.target)).d.ty == 'cfel' ? a : a.p).d.in || 0
		this.ani0.d.c = [50, 50]
		this.upUI2(50)
		this.update({ui: 2})
 }
	render() {
		return ([
			{s: {display: this.data.ui == 0 ? 'block' : 'none'}},
			{s: {display: this.data.ui == 1 ? 'block' : 'none'}, t:'div', cl: 'main', ch: [
				{t: 'span', cl: 'title', txt: 'How are you feeling, Imesh?'},
				{t: 'div', cl: 'ccho', ch: (a => {
					var b = [[],[],[]]
					a.forEach((a,c) => b[c - (parseInt(c / 3) * 3)].push(([a.i = c, a])[1]))
					return [b[1], b[0], b[2]]
				})(feel).map((a,b) => 
					({t: 'div', cl: ['cfel', 'ci' + b], ch: a.map((a,b) => 
						({t: 'button', d: {ty: 'cfel', in: a.i}, cl: ['cfeb', 'ci' + a.c], e: [['onclick', this.clf]], ch: [{t: 'span', txt: a.n}]})
					)})
				)}
			]},
			{s: {display: this.data.ui == 2 ? 'block' : 'none'}, t:'div', cl: 'main', ch: [
				{t: 'div', cl: 'crat', ch: [
					{t: 'span', d: {ty: 'fed', in: 0}, cl: 'title'},
					{t: 'canvas', cl: 'csli'},
					{t: 'button', cl: 'cb1', ch: [
						{t: 'span', d: {ty: 'fed', in: 1}}
					]}
				]}
			]},
			{s: {display: this.data.ui == 3 ? 'block' : 'none'}, t:'div', cl: ['main', 'land'], ch: [
				{t: 'span', txt: 'IM'},
				{t: 'div', cl: 'c1', s: {'background-image': 'url(/apple-touch-icon.png)'}},
				{t: 'div', cl: 'c2', ch: [
					{t: 'span', txt: (['Hello', 'Welcome', 'Have a nice day'])[parseInt(Math.random() * 3)]},
				]},
				{t: 'button', cl: 'cb1', e: [['onclick', a => this.update({ui:1})]], ch: [{t: 'span', txt: 'New'}]},
				{t: 'button', cl: 'cb1', ch: [{t: 'span', txt: 'Analysis'}]}
			]}
		])
	}
}
new Site().mount(_root_.v)
})
