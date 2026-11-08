(()=>{var ax=Object.defineProperty;var Jn=(n,t)=>{for(var e in t)ax(n,e,{get:t[e],enumerable:!0})};var fp=0,Oh=1,dp=2;var bo=1,pp=2,yr=3,ps=0,In=1,Qn=2,Ii=0,_r=1,zh=2,Bh=3,kh=4,mp=5;var Ds=100,gp=101,xp=102,yp=103,_p=104,vp=200,Mp=201,bp=202,Sp=203,Vh=204,Hh=205,wp=206,Ap=207,Ep=208,Tp=209,Cp=210,Rp=211,Ip=212,Pp=213,Lp=214,Oa=0,za=1,Ba=2,fr=3,ka=4,Va=5,Ha=6,Ga=7,Gh=0,Dp=1,Np=2,ui=0,Wh=1,Xh=2,qh=3,Yh=4,$h=5,Zh=6,Jh=7;var Kh=300,ms=301,Ns=302,_l=303,vl=304,So=306,Wa=1e3,Ai=1001,Xa=1002,pn=1003,Up=1004;var wo=1005;var an=1006,Ml=1007;var gs=1008;var Vn=1009,jh=1010,Qh=1011,vr=1012,bl=1013,fi=1014,di=1015,pi=1016,Sl=1017,wl=1018,Mr=1020,tu=35902,eu=35899,nu=1021,iu=1022,ti=1023,Ei=1026,xs=1027,su=1028,Al=1029,ys=1030,El=1031;var Tl=1033,Ao=33776,Eo=33777,To=33778,Co=33779,Cl=35840,Rl=35841,Il=35842,Pl=35843,Ll=36196,Dl=37492,Nl=37496,Ul=37488,Fl=37489,Ro=37490,Ol=37491,zl=37808,Bl=37809,kl=37810,Vl=37811,Hl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,$l=37818,Zl=37819,Jl=37820,Kl=37821,jl=36492,Ql=36494,tc=36495,ec=36283,nc=36284,Io=36285,ic=36286;var to=2300,qa=2301,Na=2302,Ih=2303,Ph=2400,Lh=2401,Dh=2402;var Fp=3200;var ru=0,Op=1,Wi="",on="srgb",eo="srgb-linear",no="linear",Ne="srgb";var Ua=7680;var zp=519,Bp=512,kp=513,Vp=514,sc=515,Hp=516,Gp=517,rc=518,Wp=519,ou=35044;var au="300 es",hi=2e3,io=2001;function lx(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xp(){let n=so("canvas");return n.style.display="block",n}var Bd={},dr=null;function ro(...n){let t="THREE."+n.shift();dr?dr("log",t,...n):console.log(t,...n)}function qp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=qp(n);let t="THREE."+n.shift();if(dr)dr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ce(...n){n=qp(n);let t="THREE."+n.shift();if(dr)dr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){let t=n.join(" ");t in Bd||(Bd[t]=!0,ae(...n))}function Yp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var $p={[Oa]:za,[Ba]:Ha,[ka]:Ga,[fr]:Va,[za]:Oa,[Ha]:Ba,[Ga]:ka,[Va]:fr},Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fa=Math.PI/180,Ya=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function hx(n,t){return(n%t+t)%t}function oh(n,t,e){return(1-e)*n+e*t}function Si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fu=class fu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fu.prototype.isVector2=!0;var be=fu,Ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let h=i[s+0],l=i[s+1],m=i[s+2],f=i[s+3],d=r[o+0],x=r[o+1],p=r[o+2],M=r[o+3];if(f!==M||h!==d||l!==x||m!==p){let y=h*d+l*x+m*p+f*M;y<0&&(d=-d,x=-x,p=-p,M=-M,y=-y);let g=1-a;if(y<.9995){let I=Math.acos(y),F=Math.sin(I);g=Math.sin(g*I)/F,a=Math.sin(a*I)/F,h=h*g+d*a,l=l*g+x*a,m=m*g+p*a,f=f*g+M*a}else{h=h*g+d*a,l=l*g+x*a,m=m*g+p*a,f=f*g+M*a;let I=1/Math.sqrt(h*h+l*l+m*m+f*f);h*=I,l*=I,m*=I,f*=I}}t[e]=h,t[e+1]=l,t[e+2]=m,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],h=i[s+1],l=i[s+2],m=i[s+3],f=r[o],d=r[o+1],x=r[o+2],p=r[o+3];return t[e]=a*p+m*f+h*x-l*d,t[e+1]=h*p+m*d+l*f-a*x,t[e+2]=l*p+m*x+a*d-h*f,t[e+3]=m*p-a*f-h*d-l*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),m=a(s/2),f=a(r/2),d=h(i/2),x=h(s/2),p=h(r/2);switch(o){case"XYZ":this._x=d*m*f+l*x*p,this._y=l*x*f-d*m*p,this._z=l*m*p+d*x*f,this._w=l*m*f-d*x*p;break;case"YXZ":this._x=d*m*f+l*x*p,this._y=l*x*f-d*m*p,this._z=l*m*p-d*x*f,this._w=l*m*f+d*x*p;break;case"ZXY":this._x=d*m*f-l*x*p,this._y=l*x*f+d*m*p,this._z=l*m*p+d*x*f,this._w=l*m*f-d*x*p;break;case"ZYX":this._x=d*m*f-l*x*p,this._y=l*x*f+d*m*p,this._z=l*m*p-d*x*f,this._w=l*m*f+d*x*p;break;case"YZX":this._x=d*m*f+l*x*p,this._y=l*x*f+d*m*p,this._z=l*m*p-d*x*f,this._w=l*m*f-d*x*p;break;case"XZY":this._x=d*m*f-l*x*p,this._y=l*x*f-d*m*p,this._z=l*m*p+d*x*f,this._w=l*m*f+d*x*p;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],m=e[6],f=e[10],d=i+a+f;if(d>0){let x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(m-h)*x,this._y=(r-l)*x,this._z=(o-s)*x}else if(i>a&&i>f){let x=2*Math.sqrt(1+i-a-f);this._w=(m-h)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+l)/x}else if(a>f){let x=2*Math.sqrt(1+a-i-f);this._w=(r-l)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(h+m)/x}else{let x=2*Math.sqrt(1+f-i-a);this._w=(o-s)/x,this._x=(r+l)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,m=e._w;return this._x=i*m+o*a+s*l-r*h,this._y=s*m+o*h+r*a-i*l,this._z=r*m+o*l+i*h-s*a,this._w=o*m-i*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let h=1-e;if(a<.9995){let l=Math.acos(a),m=Math.sin(l);h=Math.sin(h*l)/m,e=Math.sin(e*l)/m,this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},du=class du{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*i),m=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+h*l+o*f-a*m,this.y=i+h*m+a*l-r*f,this.z=s+h*f+r*m-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-i*h,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ah.copy(this).projectOnVector(t),this.sub(ah)}reflect(t){return this.sub(ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};du.prototype.isVector3=!0;var j=du,ah=new j,kd=new Ci,pu=class pu{constructor(t,e,i,s,r,o,a,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,l)}set(t,e,i,s,r,o,a,h,l){let m=this.elements;return m[0]=t,m[1]=s,m[2]=a,m[3]=e,m[4]=r,m[5]=h,m[6]=i,m[7]=o,m[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],m=i[4],f=i[7],d=i[2],x=i[5],p=i[8],M=s[0],y=s[3],g=s[6],I=s[1],F=s[4],w=s[7],C=s[2],A=s[5],D=s[8];return r[0]=o*M+a*I+h*C,r[3]=o*y+a*F+h*A,r[6]=o*g+a*w+h*D,r[1]=l*M+m*I+f*C,r[4]=l*y+m*F+f*A,r[7]=l*g+m*w+f*D,r[2]=d*M+x*I+p*C,r[5]=d*y+x*F+p*A,r[8]=d*g+x*w+p*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],m=t[8];return e*o*m-e*a*l-i*r*m+i*a*h+s*r*l-s*o*h}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],m=t[8],f=m*o-a*l,d=a*h-m*r,x=l*r-o*h,p=e*f+i*d+s*x;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=f*M,t[1]=(s*l-m*i)*M,t[2]=(a*i-s*o)*M,t[3]=d*M,t[4]=(m*e-s*h)*M,t[5]=(s*r-a*e)*M,t[6]=x*M,t[7]=(i*h-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};pu.prototype.isMatrix3=!0;var pe=pu,lh=new pe,Vd=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ux(){let n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ne&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ne&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:t,whitePoint:i,transfer:no,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:Ne,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var we=ux();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $s,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$s===void 0&&($s=so("canvas")),$s.width=t.width,$s.height=t.height;let s=$s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$s}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fx=0,pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ch(s[o].image)):r.push(ch(s[o]))}else r=ch(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var dx=0,hh=new j,gn=class n extends Ti{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ai,s=Ai,r=an,o=gs,a=ti,h=Vn,l=n.DEFAULT_ANISOTROPY,m=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=rs(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Kh;gn.DEFAULT_ANISOTROPY=1;var mu=class mu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,h=t.elements,l=h[0],m=h[4],f=h[8],d=h[1],x=h[5],p=h[9],M=h[2],y=h[6],g=h[10];if(Math.abs(m-d)<.01&&Math.abs(f-M)<.01&&Math.abs(p-y)<.01){if(Math.abs(m+d)<.1&&Math.abs(f+M)<.1&&Math.abs(p+y)<.1&&Math.abs(l+x+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(l+1)/2,w=(x+1)/2,C=(g+1)/2,A=(m+d)/4,D=(f+M)/4,b=(p+y)/4;return F>w&&F>C?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=A/i,r=D/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=b/r),this.set(i,s,r,e),this}let I=Math.sqrt((y-p)*(y-p)+(f-M)*(f-M)+(d-m)*(d-m));return Math.abs(I)<.001&&(I=1),this.x=(y-p)/I,this.y=(f-M)/I,this.z=(d-m)/I,this.w=Math.acos((l+x+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mu.prototype.isVector4=!0;var Je=mu,Za=class extends Ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new gn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Za{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oo=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var yl=class yl{constructor(t,e,i,s,r,o,a,h,l,m,f,d,x,p,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,l,m,f,d,x,p,M,y)}set(t,e,i,s,r,o,a,h,l,m,f,d,x,p,M,y){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=h,g[2]=l,g[6]=m,g[10]=f,g[14]=d,g[3]=x,g[7]=p,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(s),l=Math.sin(s),m=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*m,x=o*f,p=a*m,M=a*f;e[0]=h*m,e[4]=-h*f,e[8]=l,e[1]=x+p*l,e[5]=d-M*l,e[9]=-a*h,e[2]=M-d*l,e[6]=p+x*l,e[10]=o*h}else if(t.order==="YXZ"){let d=h*m,x=h*f,p=l*m,M=l*f;e[0]=d+M*a,e[4]=p*a-x,e[8]=o*l,e[1]=o*f,e[5]=o*m,e[9]=-a,e[2]=x*a-p,e[6]=M+d*a,e[10]=o*h}else if(t.order==="ZXY"){let d=h*m,x=h*f,p=l*m,M=l*f;e[0]=d-M*a,e[4]=-o*f,e[8]=p+x*a,e[1]=x+p*a,e[5]=o*m,e[9]=M-d*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let d=o*m,x=o*f,p=a*m,M=a*f;e[0]=h*m,e[4]=p*l-x,e[8]=d*l+M,e[1]=h*f,e[5]=M*l+d,e[9]=x*l-p,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let d=o*h,x=o*l,p=a*h,M=a*l;e[0]=h*m,e[4]=M-d*f,e[8]=p*f+x,e[1]=f,e[5]=o*m,e[9]=-a*m,e[2]=-l*m,e[6]=x*f+p,e[10]=d-M*f}else if(t.order==="XZY"){let d=o*h,x=o*l,p=a*h,M=a*l;e[0]=h*m,e[4]=-f,e[8]=l*m,e[1]=d*f+M,e[5]=o*m,e[9]=x*f-p,e[2]=p*f-x,e[6]=a*m,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(px,t,mx)}lookAt(t,e,i){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ts.crossVectors(i,zn),ts.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ts.crossVectors(i,zn)),ts.normalize(),ra.crossVectors(zn,ts),s[0]=ts.x,s[4]=ra.x,s[8]=zn.x,s[1]=ts.y,s[5]=ra.y,s[9]=zn.y,s[2]=ts.z,s[6]=ra.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],m=i[1],f=i[5],d=i[9],x=i[13],p=i[2],M=i[6],y=i[10],g=i[14],I=i[3],F=i[7],w=i[11],C=i[15],A=s[0],D=s[4],b=s[8],R=s[12],N=s[1],O=s[5],Z=s[9],K=s[13],k=s[2],tt=s[6],B=s[10],q=s[14],Q=s[3],J=s[7],nt=s[11],it=s[15];return r[0]=o*A+a*N+h*k+l*Q,r[4]=o*D+a*O+h*tt+l*J,r[8]=o*b+a*Z+h*B+l*nt,r[12]=o*R+a*K+h*q+l*it,r[1]=m*A+f*N+d*k+x*Q,r[5]=m*D+f*O+d*tt+x*J,r[9]=m*b+f*Z+d*B+x*nt,r[13]=m*R+f*K+d*q+x*it,r[2]=p*A+M*N+y*k+g*Q,r[6]=p*D+M*O+y*tt+g*J,r[10]=p*b+M*Z+y*B+g*nt,r[14]=p*R+M*K+y*q+g*it,r[3]=I*A+F*N+w*k+C*Q,r[7]=I*D+F*O+w*tt+C*J,r[11]=I*b+F*Z+w*B+C*nt,r[15]=I*R+F*K+w*q+C*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],m=t[2],f=t[6],d=t[10],x=t[14],p=t[3],M=t[7],y=t[11],g=t[15],I=h*x-l*d,F=a*x-l*f,w=a*d-h*f,C=o*x-l*m,A=o*d-h*m,D=o*f-a*m;return e*(M*I-y*F+g*w)-i*(p*I-y*C+g*A)+s*(p*F-M*C+g*D)-r*(p*w-M*A+y*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],h=t[2],l=t[6],m=t[10];return e*(o*m-a*l)-i*(r*m-a*h)+s*(r*l-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],m=t[8],f=t[9],d=t[10],x=t[11],p=t[12],M=t[13],y=t[14],g=t[15],I=e*a-i*o,F=e*h-s*o,w=e*l-r*o,C=i*h-s*a,A=i*l-r*a,D=s*l-r*h,b=m*M-f*p,R=m*y-d*p,N=m*g-x*p,O=f*y-d*M,Z=f*g-x*M,K=d*g-x*y,k=I*K-F*Z+w*O+C*N-A*R+D*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/k;return t[0]=(a*K-h*Z+l*O)*tt,t[1]=(s*Z-i*K-r*O)*tt,t[2]=(M*D-y*A+g*C)*tt,t[3]=(d*A-f*D-x*C)*tt,t[4]=(h*N-o*K-l*R)*tt,t[5]=(e*K-s*N+r*R)*tt,t[6]=(y*w-p*D-g*F)*tt,t[7]=(m*D-d*w+x*F)*tt,t[8]=(o*Z-a*N+l*b)*tt,t[9]=(i*N-e*Z-r*b)*tt,t[10]=(p*A-M*w+g*I)*tt,t[11]=(f*w-m*A-x*I)*tt,t[12]=(a*R-o*O-h*b)*tt,t[13]=(e*O-i*R+s*b)*tt,t[14]=(M*F-p*C-y*I)*tt,t[15]=(m*C-f*F+d*I)*tt,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,h=t.z,l=r*o,m=r*a;return this.set(l*o+i,l*a-s*h,l*h+s*a,0,l*a+s*h,m*a+i,m*h-s*o,0,l*h-s*a,m*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,m=o+o,f=a+a,d=r*l,x=r*m,p=r*f,M=o*m,y=o*f,g=a*f,I=h*l,F=h*m,w=h*f,C=i.x,A=i.y,D=i.z;return s[0]=(1-(M+g))*C,s[1]=(x+w)*C,s[2]=(p-F)*C,s[3]=0,s[4]=(x-w)*A,s[5]=(1-(d+g))*A,s[6]=(y+I)*A,s[7]=0,s[8]=(p+F)*D,s[9]=(y-I)*D,s[10]=(1-(d+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),h=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let l=1/o,m=1/a,f=1/h;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=h,this}makePerspective(t,e,i,s,r,o,a=hi,h=!1){let l=this.elements,m=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),x=(i+s)/(i-s),p,M;if(h)p=r/(o-r),M=o*r/(o-r);else if(a===hi)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===io)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=m,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=x,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hi,h=!1){let l=this.elements,m=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),x=-(i+s)/(i-s),p,M;if(h)p=1/(o-r),M=o/(o-r);else if(a===hi)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===io)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=m,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=x,l[2]=0,l[6]=0,l[10]=p,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};yl.prototype.isMatrix4=!0;var $e=yl,Zs=new j,oi=new $e,px=new j(0,0,0),mx=new j(1,1,1),ts=new j,ra=new j,zn=new j,Gd=new $e,Wd=new Ci,os=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],m=s[9],f=s[2],d=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,x),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gx=0,Xd=new j,Js=new Ci,zi=new $e,oa=new j,qr=new j,xx=new j,yx=new Ci,qd=new j(1,0,0),Yd=new j(0,1,0),$d=new j(0,0,1),Zd={type:"added"},_x={type:"removed"},Ks={type:"childadded",child:null},uh={type:"childremoved",child:null},Rn=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new j,e=new os,i=new Ci,s=new j(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new pe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(qd,t)}rotateY(t){return this.rotateOnAxis(Yd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return Xd.copy(t).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qd,t)}translateY(t){return this.translateOnAxis(Yd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?oa.copy(t):oa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(qr,oa,this.up):zi.lookAt(oa,qr,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(zi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_x),uh.child=t,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,xx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,m=h.length;l<m;l++){let f=h[l];r(t.shapes,f)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),l=o(t.textures),m=o(t.images),f=o(t.shapes),d=o(t.skeletons),x=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),m.length>0&&(i.images=m),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),x.length>0&&(i.animations=x),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let h=[];for(let l in a){let m=a[l];delete m.metadata,h.push(m)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vx={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let y=e.getJointPose(M,i),g=this._getHandJoint(l,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let m=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=m.position.distanceTo(f.position),x=.02,p=.005;l.inputState.pinching&&d>x+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=x-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},aa={h:0,s:0,l:0};function fh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var he=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=we.workingColorSpace){if(t=hx(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fh(o,r,t+1/3),this.g=fh(o,r,t),this.b=fh(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let i=Zp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return we.workingToColorSpace(yn.copy(this),t),Math.round(Ce(yn.r*255,0,255))*65536+Math.round(Ce(yn.g*255,0,255))*256+Math.round(Ce(yn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),h,l,m=(a+o)/2;if(a===o)h=0,l=0;else{let f=o-a;switch(l=m<=.5?f/(o+a):f/(2-o-a),o){case i:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-i)/f+2;break;case r:h=(i-s)/f+4;break}h/=6}return t.h=h,t.s=l,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=on){we.workingToColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(aa);let i=oh(es.h,aa.h,e),s=oh(es.s,aa.s,e),r=oh(es.l,aa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new he;he.NAMES=Zp;var lo=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new j,Bi=new j,dh=new j,ki=new j,js=new j,Qs=new j,Jd=new j,ph=new j,mh=new j,gh=new j,xh=new Je,yh=new Je,_h=new Je,wi=class n{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Bi.subVectors(i,e),dh.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Bi),h=ai.dot(dh),l=Bi.dot(Bi),m=Bi.dot(dh),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,x=(l*h-a*m)*d,p=(o*m-a*h)*d;return r.set(1-x-p,p,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,i,s,r,o,a,h){return this.getBarycoord(t,e,i,s,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,ki.x),h.addScaledVector(o,ki.y),h.addScaledVector(a,ki.z),h)}static getInterpolatedAttribute(t,e,i,s,r,o){return xh.setScalar(0),yh.setScalar(0),_h.setScalar(0),xh.fromBufferAttribute(t,e),yh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xh,r.x),o.addScaledVector(yh,r.y),o.addScaledVector(_h,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Bi.subVectors(t,e),ai.cross(Bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ai.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,i),Qs.subVectors(r,i),ph.subVectors(t,i);let h=js.dot(ph),l=Qs.dot(ph);if(h<=0&&l<=0)return e.copy(i);mh.subVectors(t,s);let m=js.dot(mh),f=Qs.dot(mh);if(m>=0&&f<=m)return e.copy(s);let d=h*f-m*l;if(d<=0&&h>=0&&m<=0)return o=h/(h-m),e.copy(i).addScaledVector(js,o);gh.subVectors(t,r);let x=js.dot(gh),p=Qs.dot(gh);if(p>=0&&x<=p)return e.copy(r);let M=x*l-h*p;if(M<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Qs,a);let y=m*p-x*f;if(y<=0&&f-m>=0&&x-p>=0)return Jd.subVectors(r,s),a=(f-m)/(f-m+(x-p)),e.copy(s).addScaledVector(Jd,a);let g=1/(y+M+d);return o=M*g,a=d*g,e.copy(i).addScaledVector(js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),ca.subVectors(this.max,Yr),tr.subVectors(t.a,Yr),er.subVectors(t.b,Yr),nr.subVectors(t.c,Yr),ns.subVectors(er,tr),is.subVectors(nr,er),As.subVectors(tr,nr);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-As.z,As.y,ns.z,0,-ns.x,is.z,0,-is.x,As.z,0,-As.x,-ns.y,ns.x,0,-is.y,is.x,0,-As.y,As.x,0];return!vh(e,tr,er,nr,ca)||(e=[1,0,0,0,1,0,0,0,1],!vh(e,tr,er,nr,ca))?!1:(ha.crossVectors(ns,is),e=[ha.x,ha.y,ha.z],vh(e,tr,er,nr,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vi=[new j,new j,new j,new j,new j,new j,new j,new j],li=new j,la=new as,tr=new j,er=new j,nr=new j,ns=new j,is=new j,As=new j,Yr=new j,ca=new j,ha=new j,Es=new j;function vh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),h=t.dot(Es),l=e.dot(Es),m=i.dot(Es);if(Math.max(-Math.max(h,l,m),Math.min(h,l,m))>a)return!1}return!0}var rn=new j,ua=new be,Mx=0,je=class extends Ti{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var co=class extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ho=class extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Cn=class extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}},bx=new as,$r=new j,Mh=new j,ls=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):bx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(Mh)),this.expandByPoint($r.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sx=0,Kn=new $e,bh=new Rn,ir=new j,Bn=new as,Zr=new as,dn=new j,ln=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lx(t)?ho:co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,i){return Kn.makeTranslation(t,e,i),this.applyMatrix4(Kn),this}scale(t,e,i){return Kn.makeScale(t,e,i),this.applyMatrix4(Kn),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Bn.min,Zr.min),Bn.expandByPoint(dn),dn.addVectors(Bn.max,Zr.max),Bn.expandByPoint(dn)):(Bn.expandByPoint(Zr.min),Bn.expandByPoint(Zr.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],h=this.morphTargetsRelative;for(let l=0,m=a.count;l<m;l++)dn.fromBufferAttribute(a,l),h&&(ir.fromBufferAttribute(t,l),dn.add(ir)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new je(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],h=[];for(let b=0;b<i.count;b++)a[b]=new j,h[b]=new j;let l=new j,m=new j,f=new j,d=new be,x=new be,p=new be,M=new j,y=new j;function g(b,R,N){l.fromBufferAttribute(i,b),m.fromBufferAttribute(i,R),f.fromBufferAttribute(i,N),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,R),p.fromBufferAttribute(r,N),m.sub(l),f.sub(l),x.sub(d),p.sub(d);let O=1/(x.x*p.y-p.x*x.y);isFinite(O)&&(M.copy(m).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(O),y.copy(f).multiplyScalar(x.x).addScaledVector(m,-p.x).multiplyScalar(O),a[b].add(M),a[R].add(M),a[N].add(M),h[b].add(y),h[R].add(y),h[N].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let b=0,R=I.length;b<R;++b){let N=I[b],O=N.start,Z=N.count;for(let K=O,k=O+Z;K<k;K+=3)g(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let F=new j,w=new j,C=new j,A=new j;function D(b){C.fromBufferAttribute(s,b),A.copy(C);let R=a[b];F.copy(R),F.sub(C.multiplyScalar(C.dot(R))).normalize(),w.crossVectors(A,R);let O=w.dot(h[b])<0?-1:1;o.setXYZW(b,F.x,F.y,F.z,O)}for(let b=0,R=I.length;b<R;++b){let N=I[b],O=N.start,Z=N.count;for(let K=O,k=O+Z;K<k;K+=3)D(t.getX(K+0)),D(t.getX(K+1)),D(t.getX(K+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,x=i.count;d<x;d++)i.setXYZ(d,0,0,0);let s=new j,r=new j,o=new j,a=new j,h=new j,l=new j,m=new j,f=new j;if(t)for(let d=0,x=t.count;d<x;d+=3){let p=t.getX(d+0),M=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,y),m.subVectors(o,r),f.subVectors(s,r),m.cross(f),a.fromBufferAttribute(i,p),h.fromBufferAttribute(i,M),l.fromBufferAttribute(i,y),a.add(m),h.add(m),l.add(m),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let d=0,x=e.count;d<x;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),m.subVectors(o,r),f.subVectors(s,r),m.cross(f),i.setXYZ(d+0,m.x,m.y,m.z),i.setXYZ(d+1,m.x,m.y,m.z),i.setXYZ(d+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,h){let l=a.array,m=a.itemSize,f=a.normalized,d=new l.constructor(h.length*m),x=0,p=0;for(let M=0,y=h.length;M<y;M++){a.isInterleavedBufferAttribute?x=h[M]*a.data.stride+a.offset:x=h[M]*m;for(let g=0;g<m;g++)d[p++]=l[x++]}return new je(d,m,f)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let h=s[a],l=t(h,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let h=[],l=r[a];for(let m=0,f=l.length;m<f;m++){let d=l[m],x=t(d,i);h.push(x)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let l=i[h];t.data.attributes[h]=l.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],m=[];for(let f=0,d=l.length;f<d;f++){let x=l[f];m.push(x.toJSON(t.data))}m.length>0&&(s[h]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let m=s[l];this.setAttribute(l,m.clone(e))}let r=t.morphAttributes;for(let l in r){let m=[],f=r[l];for(let d=0,x=f.length;d<x;d++)m.push(f[d].clone(e));this.morphAttributes[l]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,m=o.length;l<m;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new j,uo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sh=new j,wx=new j,Ax=new pe,ci=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sh.subVectors(i,e).cross(wx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Sh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ax.getNormalMatrix(t),s=this.coplanarPoint(Sh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ex=0,Ri=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=_r,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Hh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let h=r[a];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cs=class extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sr,Jr=new j,rr=new j,or=new j,ar=new be,Kr=new be,Jp=new $e,fa=new j,jr=new j,da=new j,Kd=new be,wh=new be,jd=new be,Is=class extends Rn{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new ln;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ka(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new uo(i,3,0,!1)),sr.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=sr,this.material=t,this.center=new be(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Jp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;pa(fa.set(-.5,-.5,0),or,o,rr,s,r),pa(jr.set(.5,-.5,0),or,o,rr,s,r),pa(da.set(.5,.5,0),or,o,rr,s,r),Kd.set(0,0),wh.set(1,0),jd.set(1,1);let a=t.ray.intersectTriangle(fa,jr,da,!1,Jr);if(a===null&&(pa(jr.set(-.5,.5,0),or,o,rr,s,r),wh.set(0,1),a=t.ray.intersectTriangle(fa,da,jr,!1,Jr),a===null))return;let h=t.ray.origin.distanceTo(Jr);h<t.near||h>t.far||e.push({distance:h,point:Jr.clone(),uv:wi.getInterpolation(Jr,fa,jr,da,Kd,wh,jd,new be),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(n,t,e,i,s,r){ar.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Kr.x=r*ar.x-s*ar.y,Kr.y=s*ar.x+r*ar.y):Kr.copy(ar),n.copy(t),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(Jp)}var Hi=new j,Ah=new j,ma=new j,ga=new j,gr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ah.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(Ah);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=ga.dot(this.direction),h=-ga.dot(ma),l=ga.lengthSq(),m=Math.abs(1-o*o),f,d,x,p;if(m>0)if(f=o*h-a,d=o*a-h,p=r*m,f>=0)if(d>=-p)if(d<=p){let M=1/m;f*=M,d*=M,x=f*(f+o*d+2*a)+d*(o*f+d+2*h)+l}else d=r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*h)+l;else d=-r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*h)+l;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-h),r),x=-f*f+d*(d+2*h)+l):d<=p?(f=0,d=Math.min(Math.max(-r,-h),r),x=d*(d+2*h)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-h),r),x=-f*f+d*(d+2*h)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ah).addScaledVector(ma,d),x}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,h,l=1/this.direction.x,m=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),m>=0?(r=(t.min.y-d.y)*m,o=(t.max.y-d.y)*m):(r=(t.max.y-d.y)*m,o=(t.min.y-d.y)*m),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,h=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,h=(t.min.z-d.z)*f),i>h||a>s)||((a>i||i!==i)&&(i=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,h=a.x,l=a.y,m=a.z,f=t.x-o.x,d=t.y-o.y,x=t.z-o.z,p=e.x-o.x,M=e.y-o.y,y=e.z-o.z,g=i.x-o.x,I=i.y-o.y,F=i.z-o.z,w=Math.abs(h),C=Math.abs(l),A=Math.abs(m),D,b,R,N,O,Z,K,k,tt,B,q,Q;if(w>=C&&w>=A?(R=h,Z=f,tt=p,Q=g,h>=0?(D=l,b=m,N=d,O=x,K=M,k=y,B=I,q=F):(D=m,b=l,N=x,O=d,K=y,k=M,B=F,q=I)):C>=A?(R=l,Z=d,tt=M,Q=I,l>=0?(D=m,b=h,N=x,O=f,K=y,k=p,B=F,q=g):(D=h,b=m,N=f,O=x,K=p,k=y,B=g,q=F)):(R=m,Z=x,tt=y,Q=F,m>=0?(D=h,b=l,N=f,O=d,K=p,k=M,B=g,q=I):(D=l,b=h,N=d,O=f,K=M,k=p,B=I,q=g)),R===0)return null;let J=D/R,nt=b/R,it=1/R,St=N-J*Z,Tt=O-nt*Z,Ht=K-J*tt,qt=k-nt*tt,Ut=B-J*Q,W=q-nt*Q,Y=Ut*qt-W*Ht,ut=St*W-Tt*Ut,mt=Ht*Tt-qt*St;if(s){if(Y<0||ut<0||mt<0)return null}else if((Y<0||ut<0||mt<0)&&(Y>0||ut>0||mt>0))return null;let yt=Y+ut+mt;if(yt===0)return null;let It=it*(Y*Z+ut*tt+mt*Q);return(yt>0?It<0:It>0)?null:this.at(It/yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qd=new $e,Ts=new gr,xa=new ls,tp=new j,ya=new j,_a=new j,va=new j,Eh=new j,Ma=new j,ep=new j,ba=new j,De=class extends Rn{constructor(t=new ln,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ma.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let m=a[h],f=r[h];m!==0&&(Eh.fromBufferAttribute(f,t),o?Ma.addScaledVector(Eh,m):Ma.addScaledVector(Eh.sub(e),m))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(xa.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(xa,tp)===null||Ts.origin.distanceToSquared(tp)>(t.far-t.near)**2))&&(Qd.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Qd),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,m=r.attributes.uv1,f=r.attributes.normal,d=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let y=d[p],g=o[y.materialIndex],I=Math.max(y.start,x.start),F=Math.min(a.count,Math.min(y.start+y.count,x.start+x.count));for(let w=I,C=F;w<C;w+=3){let A=a.getX(w),D=a.getX(w+1),b=a.getX(w+2);s=Sa(this,g,t,i,l,m,f,A,D,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let y=p,g=M;y<g;y+=3){let I=a.getX(y),F=a.getX(y+1),w=a.getX(y+2);s=Sa(this,o,t,i,l,m,f,I,F,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let y=d[p],g=o[y.materialIndex],I=Math.max(y.start,x.start),F=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let w=I,C=F;w<C;w+=3){let A=w,D=w+1,b=w+2;s=Sa(this,g,t,i,l,m,f,A,D,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let y=p,g=M;y<g;y+=3){let I=y,F=y+1,w=y+2;s=Sa(this,o,t,i,l,m,f,I,F,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Tx(n,t,e,i,s,r,o,a){let h;if(t.side===In?h=i.intersectTriangle(o,r,s,!0,a):h=i.intersectTriangle(s,r,o,t.side===ps,a),h===null)return null;ba.copy(a),ba.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ba);return l<e.near||l>e.far?null:{distance:l,point:ba.clone(),object:n}}function Sa(n,t,e,i,s,r,o,a,h,l){n.getVertexPosition(a,ya),n.getVertexPosition(h,_a),n.getVertexPosition(l,va);let m=Tx(n,t,e,i,ya,_a,va,ep);if(m){let f=new j;wi.getBarycoord(ep,ya,_a,va,f),s&&(m.uv=wi.getInterpolatedAttribute(s,a,h,l,f,new be)),r&&(m.uv1=wi.getInterpolatedAttribute(r,a,h,l,f,new be)),o&&(m.normal=wi.getInterpolatedAttribute(o,a,h,l,f,new j),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let d={a,b:h,c:l,normal:new j,materialIndex:0};wi.getNormal(ya,_a,va,d.normal),m.face=d,m.barycoord=f}return m}var ja=class extends gn{constructor(t=null,e=1,i=1,s,r,o,a,h,l=pn,m=pn,f,d){super(null,o,a,h,l,m,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=new ls,Cx=new be(.5,.5),wa=new j,fo=class{constructor(t=new ci,e=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],m=r[4],f=r[5],d=r[6],x=r[7],p=r[8],M=r[9],y=r[10],g=r[11],I=r[12],F=r[13],w=r[14],C=r[15];if(s[0].setComponents(l-o,x-m,g-p,C-I).normalize(),s[1].setComponents(l+o,x+m,g+p,C+I).normalize(),s[2].setComponents(l+a,x+f,g+M,C+F).normalize(),s[3].setComponents(l-a,x-f,g-M,C-F).normalize(),i)s[4].setComponents(h,d,y,w).normalize(),s[5].setComponents(l-h,x-d,g-y,C-w).normalize();else if(s[4].setComponents(l-h,x-d,g-y,C-w).normalize(),e===hi)s[5].setComponents(l+h,x+d,g+y,C+w).normalize();else if(e===io)s[5].setComponents(h,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=Cx.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(wa.x=s.normal.x>0?t.max.x:t.min.x,wa.y=s.normal.y>0?t.max.y:t.min.y,wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qa=new j,tl=new j,np=new $e,Qr=new gr,Aa=new ls,Th=new j,ip=new j,el=class extends Rn{constructor(t=new ln,e=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Qa.fromBufferAttribute(e,s-1),tl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Qa.distanceTo(tl);t.setAttribute("lineDistance",new Cn(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;np.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,m=i.index,d=i.attributes.position;if(m!==null){let x=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let M=x,y=p-1;M<y;M+=l){let g=m.getX(M),I=m.getX(M+1),F=Ea(this,t,Qr,h,g,I,M);F&&e.push(F)}if(this.isLineLoop){let M=m.getX(p-1),y=m.getX(x),g=Ea(this,t,Qr,h,M,y,p-1);g&&e.push(g)}}else{let x=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let M=x,y=p-1;M<y;M+=l){let g=Ea(this,t,Qr,h,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Ea(this,t,Qr,h,p-1,x,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ea(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Qa.fromBufferAttribute(a,s),tl.fromBufferAttribute(a,r),e.distanceSqToSegment(Qa,tl,Th,ip)>i)return;Th.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Th);if(!(l<t.near||l>t.far))return{distance:l,point:ip.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var sp=new j,rp=new j,Ls=class extends el{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)sp.fromBufferAttribute(e,s),rp.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sp.distanceTo(rp);t.setAttribute("lineDistance",new Cn(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xr=class extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},op=new $e,Nh=new gr,Ta=new ls,Ca=new j,po=class extends Rn{constructor(t=new ln,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;op.copy(s).invert(),Nh.copy(t.ray).applyMatrix4(op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),x=Math.min(l.count,o.start+o.count);for(let p=d,M=x;p<M;p++){let y=l.getX(p);Ca.fromBufferAttribute(f,y),ap(Ca,y,h,s,t,e,this)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let p=d,M=x;p<M;p++)Ca.fromBufferAttribute(f,p),ap(Ca,p,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ap(n,t,e,i,s,r,o){let a=Nh.distanceSqToPoint(n);if(a<e){let h=new j;Nh.closestPointToPoint(n,h),h.applyMatrix4(i);let l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mo=class extends gn{constructor(t=[],e=ms,i,s,r,o,a,h,l,m){super(t,e,i,s,r,o,a,h,l,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jn=class extends gn{constructor(t,e,i,s,r,o,a,h,l){super(t,e,i,s,r,o,a,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends gn{constructor(t,e,i=fi,s,r,o,a=pn,h=pn,l,m=Ei,f=1){if(m!==Ei&&m!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,h,m,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},nl=class extends hs{constructor(t,e=fi,i=ms,s,r,o=pn,a=pn,h,l=Ei){let m={width:t,height:t,depth:1},f=[m,m,m,m,m,m];super(t,t,e,i,s,r,o,a,h,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},go=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class n extends ln{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],l=[],m=[],f=[],d=0,x=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Cn(l,3)),this.setAttribute("normal",new Cn(m,3)),this.setAttribute("uv",new Cn(f,2));function p(M,y,g,I,F,w,C,A,D,b,R){let N=w/D,O=C/b,Z=w/2,K=C/2,k=A/2,tt=D+1,B=b+1,q=0,Q=0,J=new j;for(let nt=0;nt<B;nt++){let it=nt*O-K;for(let St=0;St<tt;St++){let Tt=St*N-Z;J[M]=Tt*I,J[y]=it*F,J[g]=k,l.push(J.x,J.y,J.z),J[M]=0,J[y]=0,J[g]=A>0?1:-1,m.push(J.x,J.y,J.z),f.push(St/D),f.push(1-nt/b),q+=1}}for(let nt=0;nt<b;nt++)for(let it=0;it<D;it++){let St=d+it+tt*nt,Tt=d+it+tt*(nt+1),Ht=d+(it+1)+tt*(nt+1),qt=d+(it+1)+tt*nt;h.push(St,Tt,qt),h.push(Tt,Ht,qt),Q+=6}a.addGroup(x,Q,R),x+=Q,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ra=new j,Ia=new j,Ch=new j,Pa=new wi,xo=class extends ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Fa*e),o=t.getIndex(),a=t.getAttribute("position"),h=o?o.count:a.count,l=[0,0,0],m=["a","b","c"],f=new Array(3),d={},x=[];for(let p=0;p<h;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:M,b:y,c:g}=Pa;if(M.fromBufferAttribute(a,l[0]),y.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Pa.getNormal(Ch),f[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,f[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let I=0;I<3;I++){let F=(I+1)%3,w=f[I],C=f[F],A=Pa[m[I]],D=Pa[m[F]],b=`${w}_${C}`,R=`${C}_${w}`;R in d&&d[R]?(Ch.dot(d[R].normal)<=r&&(x.push(A.x,A.y,A.z),x.push(D.x,D.y,D.z)),d[R]=null):b in d||(d[b]={index0:l[I],index1:l[F],normal:Ch.clone()})}}for(let p in d)if(d[p]){let{index0:M,index1:y}=d[p];Ra.fromBufferAttribute(a,M),Ia.fromBufferAttribute(a,y),x.push(Ra.x,Ra.y,Ra.z),x.push(Ia.x,Ia.y,Ia.z)}this.setAttribute("position",new Cn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var yo=class n extends ln{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),h=Math.floor(s),l=a+1,m=h+1,f=t/a,d=e/h,x=[],p=[],M=[],y=[];for(let g=0;g<m;g++){let I=g*d-o;for(let F=0;F<l;F++){let w=F*f-r;p.push(w,-I,0),M.push(0,0,1),y.push(F/a),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<a;I++){let F=I+l*g,w=I+l*(g+1),C=I+1+l*(g+1),A=I+1+l*g;x.push(F,w,A),x.push(w,C,A)}this.setIndex(x),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(M,3)),this.setAttribute("uv",new Cn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Us(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(lp(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(lp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=Us(n[e]);for(let s in i)t[s]=i[s]}return t}function lp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Rx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var Kp={clone:Us,merge:bn},Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new he().setHex(s.value);break;case"v2":this.uniforms[i].value=new be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new j().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},il=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var sl=class extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rl=class extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Rh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var us=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends us{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],h=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lh:r=t,a=2*e-i;break;case Dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Lh:o=t,h=2*i-e;break;case Dh:o=1,h=i+s[1]-s[0];break;default:o=t-1,h=e}let l=(i-e)*.5,m=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(h-i),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,m=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,x=this._weightNext,p=(i-e)/(s-e),M=p*p,y=M*p,g=-d*y+2*d*M-d*p,I=(1+d)*y+(-1.5-2*d)*M+(-.5+d)*p+1,F=(-1-x)*y+(1.5+x)*M+.5*p,w=x*y-x*M;for(let C=0;C!==a;++C)r[C]=g*o[m+C]+I*o[l+C]+F*o[h+C]+w*o[f+C];return r}},al=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,m=(i-e)/(s-e),f=1-m;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[h+d]*m;return r}},ll=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},cl=class extends us{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,m=this.inTangents,f=this.outTangents;if(!m||!f){let p=(i-e)/(s-e),M=1-p;for(let y=0;y!==a;++y)r[y]=o[l+y]*M+o[h+y]*p;return r}let d=a*2,x=t-1;for(let p=0;p!==a;++p){let M=o[l+p],y=o[h+p],g=x*d+p*2,I=f[g],F=f[g+1],w=t*d+p*2,C=m[w],A=m[w+1],D=Dx(i,e,I,C,s);r[p]=jp(D,M,F,A,y)}return r}};function jp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Lx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Dx(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=jp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let h=Lx(r,t,e,i,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-a/h))}return r}var kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Rh(t.settings)&&(i.settings={inTangents:lr(t.settings.inTangents,Array),outTangents:lr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case qa:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break;case Ih:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return Ih}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Rh(this.settings)&&(cp(this.settings.inTangents,t),cp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let h=i[a];if(typeof h=="number"&&isNaN(h)){ce("KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){ce("KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(s!==void 0&&cx(s))for(let a=0,h=s.length;a!==h;++a){let l=s[a];if(isNaN(l)){ce("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Na,r=t.length-1,o=1;for(let a=1;a<r;++a){let h=!1,l=t[a],m=t[a+1];if(l!==m&&(a!==1||l!==t[0]))if(s)h=!0;else{let f=a*i,d=f-i,x=f+i;for(let p=0;p!==i;++p){let M=e[f+p];if(M!==e[d+p]||M!==e[x+p]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let x=0;x!==i;++x)e[d+x]=e[f+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,h=o*i,l=0;l!==i;++l)e[h+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Rh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=qa;var fs=class extends kn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=to;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};hl.prototype.ValueTypeName="color";var ul=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};ul.prototype.ValueTypeName="number";var fl=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(i-e)/(s-e),l=t*a;for(let m=l+a;l!==m;l+=4)Ci.slerpFlat(r,0,o,l-a,o,l,h);return r}},_o=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends kn{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=to;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};dl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,a),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,f){return l.push(m,f),this},this.removeHandler=function(m){let f=l.indexOf(m);return f!==-1&&l.splice(f,2),this},this.getHandler=function(m){for(let f=0,d=l.length;f<d;f+=2){let x=l[f],p=l[f+1];if(x.global&&(x.lastIndex=0),x.test(m))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qp=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var La=new j,Da=new Ci,bi=new j,vo=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Da,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(La,Da,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Da,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new j,hp=new be,up=new be,_n=class extends vo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,hp,up),e.subVectors(up,hp)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*i/l,s*=o.width/h,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Mo=class extends vo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=m*this.view.offsetY,h=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var cr=-90,hr=1,gl=class extends Rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(cr,hr,t,e);s.layers=this.layers,this.add(s);let r=new _n(cr,hr,t,e);r.layers=this.layers,this.add(r);let o=new _n(cr,hr,t,e);o.layers=this.layers,this.add(o);let a=new _n(cr,hr,t,e);a.layers=this.layers,this.add(a);let h=new _n(cr,hr,t,e);h.layers=this.layers,this.add(h);let l=new _n(cr,hr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,h]=e;for(let l of e)this.remove(l);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,h,l,m]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(f,d,x),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},xl=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var cu="\\[\\]\\.:\\/",Nx=new RegExp("["+cu+"]","g"),hu="[^"+cu+"]",Ux="[^"+cu.replace("\\.","")+"]",Fx=/((?:WC+[\/:])*)/.source.replace("WC",hu),Ox=/(WCOD+)?/.source.replace("WCOD",Ux),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),kx=new RegExp("^"+Fx+Ox+zx+Bx+"$"),Vx=["material","materials","bones","map"],Uh=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nx,"")}static parseTrackName(t){let e=kx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let h=i(a.children);if(h)return h}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===l){l=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Uh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NS=new Float32Array(1);var gu=class gu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};gu.prototype.isMatrix2=!0;var Fh=gu;function uu(n,t,e,i){let s=Hx(i);switch(e){case nu:return n*t;case su:return n*t/s.components*s.byteLength;case Al:return n*t/s.components*s.byteLength;case ys:return n*t*2/s.components*s.byteLength;case El:return n*t*2/s.components*s.byteLength;case iu:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case Tl:return n*t*4/s.components*s.byteLength;case Ao:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case To:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(n,16)*Math.max(t,8)/4;case Cl:case Il:return Math.max(n,8)*Math.max(t,8)/2;case Ll:case Dl:case Ul:case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nl:case Ro:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jl:case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Io:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hx(n){switch(n){case Vn:case jh:return{byteLength:1,components:1};case vr:case Qh:case pi:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case fi:case bl:case di:return{byteLength:4,components:1};case tu:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Wx(n){let t=new WeakMap;function e(a,h){let l=a.array,m=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(h,d),n.bufferData(h,l,m),a.onUploadCallback();let x;if(l instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)x=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)x=n.SHORT;else if(l instanceof Uint32Array)x=n.UNSIGNED_INT;else if(l instanceof Int32Array)x=n.INT;else if(l instanceof Int8Array)x=n.BYTE;else if(l instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:x,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,h,l){let m=h.array,f=h.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,m);else{f.sort((x,p)=>x.start-p.start);let d=0;for(let x=1;x<f.length;x++){let p=f[d],M=f[x];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++d,f[d]=M)}f.length=d+1;for(let x=0,p=f.length;x<p;x++){let M=f[x];n.bufferSubData(l,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(n.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=t.get(a);(!m||m.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:Xx,alphahash_pars_fragment:qx,alphamap_fragment:Yx,alphamap_pars_fragment:$x,alphatest_fragment:Zx,alphatest_pars_fragment:Jx,aomap_fragment:Kx,aomap_pars_fragment:jx,batching_pars_vertex:Qx,batching_vertex:ty,begin_vertex:ey,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:hy,color_pars_fragment:uy,color_pars_vertex:fy,color_vertex:dy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:xy,displacementmap_vertex:yy,emissivemap_fragment:_y,emissivemap_pars_fragment:vy,colorspace_fragment:My,colorspace_pars_fragment:by,envmap_fragment:Sy,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ay,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Oy,envmap_vertex:Ty,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:Iy,fog_pars_fragment:Py,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Dy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Uy,lights_pars_begin:Fy,lights_toon_fragment:zy,lights_toon_pars_fragment:By,lights_phong_fragment:ky,lights_phong_pars_fragment:Vy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:qy,lightprobes_pars_fragment:Yy,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Jy,logdepthbuf_vertex:Ky,map_fragment:jy,map_pars_fragment:Qy,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:s_,morphcolor_vertex:r_,morphnormal_vertex:o_,morphtarget_pars_vertex:a_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:h_,normal_pars_fragment:u_,normal_pars_vertex:f_,normal_vertex:d_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:x_,iridescence_pars_fragment:y_,opaque_fragment:__,packing:v_,premultiplied_alpha_fragment:M_,project_vertex:b_,dithering_fragment:S_,dithering_pars_fragment:w_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:C_,shadowmap_vertex:R_,shadowmask_pars_fragment:I_,skinbase_vertex:P_,skinning_pars_vertex:L_,skinning_vertex:D_,skinnormal_vertex:N_,specularmap_fragment:U_,specularmap_pars_fragment:F_,tonemapping_fragment:O_,tonemapping_pars_fragment:z_,transmission_fragment:B_,transmission_pars_fragment:k_,uv_pars_fragment:V_,uv_pars_vertex:H_,uv_vertex:G_,worldpos_vertex:W_,background_vert:X_,background_frag:q_,backgroundCube_vert:Y_,backgroundCube_frag:$_,cube_vert:Z_,cube_frag:J_,depth_vert:K_,depth_frag:j_,distance_vert:Q_,distance_frag:tv,equirect_vert:ev,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:sv,meshbasic_vert:rv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:hv,meshnormal_vert:uv,meshnormal_frag:fv,meshphong_vert:dv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:xv,meshtoon_frag:yv,points_vert:_v,points_frag:vv,shadow_vert:Mv,shadow_frag:bv,sprite_vert:Sv,sprite_frag:wv},kt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Li={basic:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:bn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:bn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new he(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:bn([kt.points,kt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:bn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:bn([kt.common,kt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:bn([kt.sprite,kt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:bn([kt.common,kt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:bn([kt.lights,kt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Li.physical={uniforms:bn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var oc={r:0,b:0,g:0},Av=new $e,bm=new pe;bm.set(-1,0,0,0,1,0,0,0,1);function Ev(n,t,e,i,s,r){let o=new he(0),a=s===!0?0:1,h,l,m=null,f=0,d=null;function x(I){let F=I.isScene===!0?I.background:null;if(F&&F.isTexture){let w=I.backgroundBlurriness>0;F=t.get(F,w)}return F}function p(I){let F=!1,w=x(I);w===null?y(o,a):w&&w.isColor&&(y(w,1),F=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(I,F){let w=x(F);w&&(w.isCubeTexture||w.mapping===So)?(l===void 0&&(l=new De(new Ke(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Us(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bm),l.material.toneMapped=we.getTransfer(w.colorSpace)!==Ne,(m!==w||f!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,m=w,f=w.version,d=n.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new De(new yo(2,2),new Mn({name:"BackgroundMaterial",uniforms:Us(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=we.getTransfer(w.colorSpace)!==Ne,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||f!==w.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,m=w,f=w.version,d=n.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function y(I,F){I.getRGB(oc,lu(n)),e.buffers.color.setClear(oc.r,oc.g,oc.b,F,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(I,F=1){o.set(I),a=F,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(I){a=I,y(o,a)},render:p,addToRenderList:M,dispose:g}}function Tv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(O,Z,K,k,tt){let B=!1,q=f(O,k,K,Z);r!==q&&(r=q,l(r.object)),B=x(O,k,K,tt),B&&p(O,k,K,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,w(O,Z,K,k),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function h(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function m(O){return n.deleteVertexArray(O)}function f(O,Z,K,k){let tt=k.wireframe===!0,B=i[Z.id];B===void 0&&(B={},i[Z.id]=B);let q=O.isInstancedMesh===!0?O.id:0,Q=B[q];Q===void 0&&(Q={},B[q]=Q);let J=Q[K.id];J===void 0&&(J={},Q[K.id]=J);let nt=J[tt];return nt===void 0&&(nt=d(h()),J[tt]=nt),nt}function d(O){let Z=[],K=[],k=[];for(let tt=0;tt<e;tt++)Z[tt]=0,K[tt]=0,k[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:K,attributeDivisors:k,object:O,attributes:{},index:null}}function x(O,Z,K,k){let tt=r.attributes,B=Z.attributes,q=0,Q=K.getAttributes();for(let J in Q)if(Q[J].location>=0){let it=tt[J],St=B[J];if(St===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(St=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(St=O.instanceColor)),it===void 0||it.attribute!==St||St&&it.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function p(O,Z,K,k){let tt={},B=Z.attributes,q=0,Q=K.getAttributes();for(let J in Q)if(Q[J].location>=0){let it=B[J];it===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(it=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(it=O.instanceColor));let St={};St.attribute=it,it&&it.data&&(St.data=it.data),tt[J]=St,q++}r.attributes=tt,r.attributesNum=q,r.index=k}function M(){let O=r.newAttributes;for(let Z=0,K=O.length;Z<K;Z++)O[Z]=0}function y(O){g(O,0)}function g(O,Z){let K=r.newAttributes,k=r.enabledAttributes,tt=r.attributeDivisors;K[O]=1,k[O]===0&&(n.enableVertexAttribArray(O),k[O]=1),tt[O]!==Z&&(n.vertexAttribDivisor(O,Z),tt[O]=Z)}function I(){let O=r.newAttributes,Z=r.enabledAttributes;for(let K=0,k=Z.length;K<k;K++)Z[K]!==O[K]&&(n.disableVertexAttribArray(K),Z[K]=0)}function F(O,Z,K,k,tt,B,q){q===!0?n.vertexAttribIPointer(O,Z,K,tt,B):n.vertexAttribPointer(O,Z,K,k,tt,B)}function w(O,Z,K,k){M();let tt=k.attributes,B=K.getAttributes(),q=Z.defaultAttributeValues;for(let Q in B){let J=B[Q];if(J.location>=0){let nt=tt[Q];if(nt===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(nt=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(nt=O.instanceColor)),nt!==void 0){let it=nt.normalized,St=nt.itemSize,Tt=t.get(nt);if(Tt===void 0)continue;let Ht=Tt.buffer,qt=Tt.type,Ut=Tt.bytesPerElement,W=qt===n.INT||qt===n.UNSIGNED_INT||nt.gpuType===bl;if(nt.isInterleavedBufferAttribute){let Y=nt.data,ut=Y.stride,mt=nt.offset;if(Y.isInstancedInterleavedBuffer){for(let yt=0;yt<J.locationSize;yt++)g(J.location+yt,Y.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let yt=0;yt<J.locationSize;yt++)y(J.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let yt=0;yt<J.locationSize;yt++)F(J.location+yt,St/J.locationSize,qt,it,ut*Ut,(mt+St/J.locationSize*yt)*Ut,W)}else{if(nt.isInstancedBufferAttribute){for(let Y=0;Y<J.locationSize;Y++)g(J.location+Y,nt.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Y=0;Y<J.locationSize;Y++)y(J.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let Y=0;Y<J.locationSize;Y++)F(J.location+Y,St/J.locationSize,qt,it,St*Ut,St/J.locationSize*Y*Ut,W)}}else if(q!==void 0){let it=q[Q];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(J.location,it);break;case 3:n.vertexAttrib3fv(J.location,it);break;case 4:n.vertexAttrib4fv(J.location,it);break;default:n.vertexAttrib1fv(J.location,it)}}}}I()}function C(){R();for(let O in i){let Z=i[O];for(let K in Z){let k=Z[K];for(let tt in k){let B=k[tt];for(let q in B)m(B[q].object),delete B[q];delete k[tt]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;let Z=i[O.id];for(let K in Z){let k=Z[K];for(let tt in k){let B=k[tt];for(let q in B)m(B[q].object),delete B[q];delete k[tt]}}delete i[O.id]}function D(O){for(let Z in i){let K=i[Z];for(let k in K){let tt=K[k];if(tt[O.id]===void 0)continue;let B=tt[O.id];for(let q in B)m(B[q].object),delete B[q];delete tt[O.id]}}}function b(O){for(let Z in i){let K=i[Z],k=O.isInstancedMesh===!0?O.id:0,tt=K[k];if(tt!==void 0){for(let B in tt){let q=tt[B];for(let Q in q)m(q[Q].object),delete q[Q];delete tt[B]}delete K[k],Object.keys(K).length===0&&delete i[Z]}}}function R(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:I}}function Cv(n,t,e){let i;function s(h){i=h}function r(h,l){n.drawArrays(i,h,l),e.update(l,i,1)}function o(h,l,m){m!==0&&(n.drawArraysInstanced(i,h,l,m),e.update(l,i,m))}function a(h,l,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,m);let d=0;for(let x=0;x<m;x++)d+=l[x];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ti&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let b=D===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Vn&&D!==di&&!b&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",m=h(l);m!==l&&(ae("WebGLRenderer:",l,"not supported, using",m,"instead."),l=m);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:x,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:w,maxSamples:C,samples:A}}function Iv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ci,a=new pe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let x=f.length!==0||d||i!==0||s;return s=d,i=f.length,x},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=m(f,d,0)},this.setState=function(f,d,x){let p=f.clippingPlanes,M=f.clipIntersection,y=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!y)r?m(null):l();else{let I=r?0:i,F=I*4,w=g.clippingState||null;h.value=w,w=m(p,d,F,x);for(let C=0;C!==F;++C)w[C]=e[C];g.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(f,d,x,p){let M=f!==null?f.length:0,y=null;if(M!==0){if(y=h.value,p!==!0||y===null){let g=x+M*4,I=d.matrixWorldInverse;a.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let F=0,w=x;F!==M;++F,w+=4)o.copy(f[F]).applyMatrix4(I,a),o.normal.toArray(y,w),y[w+3]=o.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}var Sr=4,Pv=6,Lv=20,Dv=256,Po=new Mo,tm=new he,xu=null,yu=0,_u=0,vu=!1,Nv=new j,Fs=new j,lc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Nv}=r;xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xu,yu,_u),this._renderer.xr.enabled=vu,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:pi,format:ti,colorSpace:eo,depthBuffer:!1},s=em(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Uv(r)),this._blurMaterial=Ov(r,t,e),this._ggxMaterial=Fv(r,t,e)}return s}_compileMaterial(t){let e=new De(new ln,t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,i,s,r){let h=new _n(90,1,e,i),l=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,x=f.toneMapping;f.getClearColor(tm),f.toneMapping=ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new Ke,new vn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,y=M.material,g=!1,I=t.background;I?I.isColor&&(y.color.copy(I),t.background=null,g=!0):(y.color.copy(tm),g=!0);for(let F=0;F<6;F++){let w=F%3;w===0?(h.up.set(0,l[F],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+m[F],r.y,r.z)):w===1?(h.up.set(0,0,l[F]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+m[F],r.z)):(h.up.set(0,l[F],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+m[F]));let C=this._cubeSize;br(s,w*C,F>2?C:0,C,C),f.setRenderTarget(s),g&&f.render(M,h),f.render(t,h)}f.toneMapping=x,f.autoClear=d,t.background=I}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ms||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let h=this._cubeSize;br(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,Po)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let h=o.uniforms,l=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-m*m),d=l*1.25,x=f*d,{_lodMax:p}=this,M=this._sizeLods[i],y=3*M*(i>p-Sr?i-p+Sr:0),g=4*(this._cubeSize-M);h.envMap.value=t.texture,h.roughness.value=x,h.mipInt.value=p-e,br(r,y,g,3*M,2*M),s.setRenderTarget(r),s.render(a,Po),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=p-i,br(t,y,g,3*M,2*M),s.setRenderTarget(t),s.render(a,Po)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,h=this._lodMeshes[s];h.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let m=this._sizeLods[s],f=3*m*(s>this._lodMax-Sr?s-this._lodMax+Sr:0),d=4*(this._cubeSize-m);br(e,f,d,3*m,2*m),o.setRenderTarget(e),o.render(h,Po)}};function Uv(n){let t=[],e=[],i=n,s=n-Sr+1+Pv;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),h=-a,l=1+a,m=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,d=6,x=3,p=new Float32Array(x*d*f),M=new Float32Array(x*d*f);for(let g=0;g<f;g++){let I=g%3*2/3-1,F=g>2?0:-1,w=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];p.set(w,x*d*g);for(let C=0;C<d;C++){let A=m[C*2]*2-1,D=m[C*2+1]*2-1;g===0?Fs.set(1,D,A):g===1?Fs.set(-A,1,-D):g===2?Fs.set(-A,D,1):g===3?Fs.set(-1,D,-A):g===4?Fs.set(-A,-1,D):Fs.set(A,D,-1),Fs.toArray(M,(g*d+C)*x)}}let y=new ln;y.setAttribute("position",new je(p,x)),y.setAttribute("outputDirection",new je(M,x)),e.push(new De(y,null)),i>Sr&&i--}return{lodMeshes:e,sizeLods:t}}function em(n,t,e){let i=new Ln(n,t,e);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Fv(n,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ov(n,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function nm(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function im(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var cc=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ii});r.uniforms.tEquirect.value=e;let o=new De(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=an),new gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function zv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,x=!1){return d==null?null:x?o(d):r(d)}function r(d){if(d&&d.isTexture){let x=d.mapping;if(x===_l||x===vl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let M=new cc(p.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",l),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let x=d.mapping,p=x===_l||x===vl,M=x===ms||x===Ns;if(p||M){let y=e.get(d),g=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new lc(n)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{let I=d.image;return p&&I&&I.height>0||M&&I&&h(I)?(i===null&&(i=new lc(n)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",m),y.texture):null}}}return d}function a(d,x){return x===_l?d.mapping=ms:x===vl&&(d.mapping=Ns),d}function h(d){let x=0,p=6;for(let M=0;M<p;M++)d[M]!==void 0&&x++;return x===p}function l(d){let x=d.target;x.removeEventListener("dispose",l);let p=t.get(x);p!==void 0&&(t.delete(x),p.dispose())}function m(d){let x=d.target;x.removeEventListener("dispose",m);let p=e.get(x);p!==void 0&&(e.delete(x),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Bv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function kv(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let x=r.get(d);x&&(t.remove(x),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function h(f){let d=f.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER)}function l(f){let d=[],x=f.index,p=f.attributes.position,M=0;if(p===void 0)return;if(x!==null){let I=x.array;M=x.version;for(let F=0,w=I.length;F<w;F+=3){let C=I[F+0],A=I[F+1],D=I[F+2];d.push(C,A,A,D,D,C)}}else{let I=p.array;M=p.version;for(let F=0,w=I.length/3-1;F<w;F+=3){let C=F+0,A=F+1,D=F+2;d.push(C,A,A,D,D,C)}}let y=new(p.count>=65535?ho:co)(d,1);y.version=M;let g=r.get(f);g&&t.remove(g),r.set(f,y)}function m(f){let d=r.get(f);if(d){let x=f.index;x!==null&&d.version<x.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:h,getWireframeAttribute:m}}function Vv(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,x){x!==0&&(n.drawElementsInstanced(i,d,r,f*o,x),e.update(d,i,x))}function m(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,x);let M=0;for(let y=0;y<x;y++)M+=d[y];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=m}function Hv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gv(n,t,e){let i=new WeakMap,s=new Je;function r(o,a,h){let l=o.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=m!==void 0?m.length:0,d=i.get(a);if(d===void 0||d.count!==f){let R=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let x=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],I=a.morphAttributes.color||[],F=0;x===!0&&(F=1),p===!0&&(F=2),M===!0&&(F=3);let w=a.attributes.position.count*F,C=1;w>t.maxTextureSize&&(C=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let A=new Float32Array(w*C*4*f),D=new oo(A,w,C,f);D.type=di,D.needsUpdate=!0;let b=F*4;for(let N=0;N<f;N++){let O=y[N],Z=g[N],K=I[N],k=w*C*4*N;for(let tt=0;tt<O.count;tt++){let B=tt*b;x===!0&&(s.fromBufferAttribute(O,tt),A[k+B+0]=s.x,A[k+B+1]=s.y,A[k+B+2]=s.z,A[k+B+3]=0),p===!0&&(s.fromBufferAttribute(Z,tt),A[k+B+4]=s.x,A[k+B+5]=s.y,A[k+B+6]=s.z,A[k+B+7]=0),M===!0&&(s.fromBufferAttribute(K,tt),A[k+B+8]=s.x,A[k+B+9]=s.y,A[k+B+10]=s.z,A[k+B+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:D,size:new be(w,C)},i.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let M=0;M<l.length;M++)x+=l[M];let p=a.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Wv(n,t,e,i,s){let r=new WeakMap;function o(l){let m=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==m&&(t.update(d),r.set(d,m)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==m&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,m))),l.isSkinnedMesh){let x=l.skeleton;r.get(x)!==m&&(x.update(),r.set(x,m))}return d}function a(){r=new WeakMap}function h(l){let m=l.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:a}}var Xv={[Wh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function qv(n,t,e,i,s,r){let o=new Ln(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,l=new ln;l.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Cn([0,2,0,0,2,0],2));let m=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new De(l,m),d=new Mo(-1,1,1,-1,0,1),x=null,p=null,M=!1,y,g=null,I=[],F=!1;this.setSize=function(w,C){o.setSize(w,C),a!==null&&a.setSize(w,C),h!==null&&h.setSize(w,C);for(let A=0;A<I.length;A++){let D=I[A];D.setSize&&D.setSize(w,C)}},this.setEffects=function(w){I=w,F=I.length>0&&I[0].isRenderPass===!0;let C=o.width,A=o.height;I.length>0&&a===null&&(a=new Ln(C,A,{type:pi,depthBuffer:!1,stencilBuffer:!1}),h=new Ln(C,A,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<I.length;D++){let b=I[D];b.setSize&&b.setSize(C,A)}},this.begin=function(w,C){if(M||w.toneMapping===ui&&I.length===0)return!1;if(g=C,C!==null){let A=C.width,D=C.height;(o.width!==A||o.height!==D)&&this.setSize(A,D)}return F===!1&&w.setRenderTarget(o),y=w.toneMapping,w.toneMapping=ui,!0},this.hasRenderPass=function(){return F},this.end=function(w,C){w.toneMapping=y,M=!0;let A=o,D=a;for(let b=0;b<I.length;b++){let R=I[b];R.enabled!==!1&&(R.render(w,D,A,C),R.needsSwap!==!1&&(A=D,D=D===a?h:a))}if(x!==w.outputColorSpace||p!==w.toneMapping){x=w.outputColorSpace,p=w.toneMapping,m.defines={},we.getTransfer(x)===Ne&&(m.defines.SRGB_TRANSFER="");let b=Xv[p];b&&(m.defines[b]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(g),w.render(f,d),g=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),l.dispose(),m.dispose()}}var Sm=new gn,Su=new hs(1,1),wm=new oo,Am=new Ja,Em=new mo,sm=[],rm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function Ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=sm[s];if(r===void 0&&(r=new Float32Array(s),sm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fc(n,t){let e=rm[t];e===void 0&&(e=new Int32Array(t),rm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function Zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function Jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function Kv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;lm.set(i),n.uniformMatrix2fv(this.addr,!1,lm),hn(e,i)}}function jv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;am.set(i),n.uniformMatrix3fv(this.addr,!1,am),hn(e,i)}}function Qv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;om.set(i),n.uniformMatrix4fv(this.addr,!1,om),hn(e,i)}}function tM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function eM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function nM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function iM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function sM(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function rM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function oM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function aM(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function lM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=e.isReversedDepthBuffer()?rc:sc,r=Su):r=Sm,e.setTexture2D(t||r,s)}function cM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Am,s)}function hM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Em,s)}function uM(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wm,s)}function fM(n){switch(n){case 5126:return Yv;case 35664:return $v;case 35665:return Zv;case 35666:return Jv;case 35674:return Kv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return rM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function dM(n,t){n.uniform1fv(this.addr,t)}function pM(n,t){let e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function mM(n,t){let e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function gM(n,t){let e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function xM(n,t){let e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yM(n,t){let e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _M(n,t){let e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vM(n,t){n.uniform1iv(this.addr,t)}function MM(n,t){n.uniform2iv(this.addr,t)}function bM(n,t){n.uniform3iv(this.addr,t)}function SM(n,t){n.uniform4iv(this.addr,t)}function wM(n,t){n.uniform1uiv(this.addr,t)}function AM(n,t){n.uniform2uiv(this.addr,t)}function EM(n,t){n.uniform3uiv(this.addr,t)}function TM(n,t){n.uniform4uiv(this.addr,t)}function CM(n,t,e){let i=this.cache,s=t.length,r=fc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Su:o=Sm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function RM(n,t,e){let i=this.cache,s=t.length,r=fc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Am,r[o])}function IM(n,t,e){let i=this.cache,s=t.length,r=fc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Em,r[o])}function PM(n,t,e){let i=this.cache,s=t.length,r=fc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wm,r[o])}function LM(n){switch(n){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return yM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return MM;case 35668:case 35672:return bM;case 35669:case 35673:return SM;case 5125:return wM;case 36294:return AM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return PM}}var wu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fM(e.type)}},Au=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LM(e.type)}},Eu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function cm(n,t){n.seq.push(t),n.map[t.id]=t}function DM(n,t,e){let i=n.name,s=i.length;for(Mu.lastIndex=0;;){let r=Mu.exec(i),o=Mu.lastIndex,a=r[1],h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){cm(e,l===void 0?new wu(a,n,t):new Au(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Eu(a),cm(e,f)),e=f}}}var wr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);DM(a,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function hm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var NM=37297,UM=0;function FM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var um=new pe;function OM(n){we._getMatrix(um,we.workingColorSpace,n);let t=`mat3( ${um.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(n)){case no:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function fm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+FM(n.getShaderSource(t),a)}else return r}function zM(n,t){let e=OM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var BM={[Wh]:"Linear",[Xh]:"Reinhard",[qh]:"Cineon",[Yh]:"ACESFilmic",[Zh]:"AgX",[Jh]:"Neutral",[$h]:"Custom"};function kM(n,t){let e=BM[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ac=new j;function VM(){we.getLuminanceCoefficients(ac);let n=ac.x.toFixed(4),t=ac.y.toFixed(4),e=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function GM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function WM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Do(n){return n!==""}function dm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(n){return n.replace(XM,YM)}var qM=new Map;function YM(n,t){let e=_e[t];if(e===void 0){let i=qM.get(t);if(i!==void 0)e=_e[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tu(e)}var $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(n){return n.replace($M,ZM)}function ZM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var JM={[bo]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function KM(n){return JM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jM={[ms]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE_UV"};function QM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":jM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var tb={[Ns]:"ENVMAP_MODE_REFRACTION"};function eb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":tb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nb={[Gh]:"ENVMAP_BLENDING_MULTIPLY",[Dp]:"ENVMAP_BLENDING_MIX",[Np]:"ENVMAP_BLENDING_ADD"};function ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nb[n.combine]||"ENVMAP_BLENDING_NONE"}function sb(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function rb(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,h=KM(e),l=QM(e),m=eb(e),f=ib(e),d=sb(e),x=HM(e),p=GM(r),M=s.createProgram(),y,g,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Do).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(y=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+m:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?_e.tonemapping_pars_fragment:"",e.toneMapping!==ui?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,zM("linearToOutputTexel",e.outputColorSpace),VM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),o=Tu(o),o=dm(o,e),o=pm(o,e),a=Tu(a),a=dm(a,e),a=pm(a,e),o=mm(o),a=mm(a),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let F=I+y+o,w=I+g+a,C=hm(s,s.VERTEX_SHADER,F),A=hm(s,s.FRAGMENT_SHADER,w);s.attachShader(M,C),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(O){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(M)||"",K=s.getShaderInfoLog(C)||"",k=s.getShaderInfoLog(A)||"",tt=Z.trim(),B=K.trim(),q=k.trim(),Q=!0,J=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,C,A);else{let nt=fm(s,C,"vertex"),it=fm(s,A,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+tt+`
`+nt+`
`+it)}else tt!==""?ae("WebGLProgram: Program Info Log:",tt):(B===""||q==="")&&(J=!1);J&&(O.diagnostics={runnable:Q,programLog:tt,vertexShader:{log:B,prefix:y},fragmentShader:{log:q,prefix:g}})}s.deleteShader(C),s.deleteShader(A),b=new wr(s,M),R=WM(s,M)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,NM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=A,this}var ob=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ru(t),e.set(t,i)),i}},Ru=class{constructor(t){this.id=ob++,this.code=t,this.usedTimes=0}};function ab(n){return n===ys||n===Ro||n===Io}function lb(n,t,e,i,s,r){let o=new ao,a=new Cu,h=new Set,l=[],m=new Map,f=i.logarithmicDepthBuffer,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return h.add(b),b===0?"uv":`uv${b}`}function M(b,R,N,O,Z,K){let k=O.fog,tt=Z.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Q=t.get(b.envMap||B,q),J=Q&&Q.mapping===So?Q.image.height:null,nt=x[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ae("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let it=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,St=it!==void 0?it.length:0,Tt=0;tt.morphAttributes.position!==void 0&&(Tt=1),tt.morphAttributes.normal!==void 0&&(Tt=2),tt.morphAttributes.color!==void 0&&(Tt=3);let Ht,qt,Ut,W;if(nt){let ze=Li[nt];Ht=ze.vertexShader,qt=ze.fragmentShader}else{Ht=b.vertexShader,qt=b.fragmentShader;let ze=a.getVertexShaderStage(b),Se=a.getFragmentShaderStage(b);a.update(b,ze,Se),Ut=ze.id,W=Se.id}let Y=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),mt=Z.isInstancedMesh===!0,yt=Z.isBatchedMesh===!0,It=!!b.map,le=!!b.matcap,Lt=!!Q,ct=!!b.aoMap,Qt=!!b.lightMap,Dt=!!b.bumpMap&&b.wireframe===!1,re=!!b.normalMap,ge=!!b.displacementMap,ye=!!b.emissiveMap,oe=!!b.metalnessMap,Oe=!!b.roughnessMap,H=b.anisotropy>0,He=b.clearcoat>0,ve=b.dispersion>0,U=b.retroreflectivity>0,v=b.iridescence>0,$=b.sheen>0,st=b.transmission>0,ht=H&&!!b.anisotropyMap,At=He&&!!b.clearcoatMap,Pt=He&&!!b.clearcoatNormalMap,ft=He&&!!b.clearcoatRoughnessMap,pt=v&&!!b.iridescenceMap,Rt=v&&!!b.iridescenceThicknessMap,Yt=$&&!!b.sheenColorMap,Ft=$&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,te=!!b.specularColorMap,se=!!b.specularIntensityMap,fe=st&&!!b.transmissionMap,G=st&&!!b.thicknessMap,wt=!!b.gradientMap,dt=!!b.alphaMap,Et=b.alphaTest>0,Ct=!!b.alphaHash,gt=!!b.extensions,ee=ui;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ee=n.toneMapping);let $t={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:Ht,fragmentShader:qt,defines:b.defines,customVertexShaderID:Ut,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:yt,batchingColor:yt&&Z._colorsTexture!==null,instancing:mt,instancingColor:mt&&Z.instanceColor!==null,instancingMorph:mt&&Z.morphTexture!==null,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:le,envMap:Lt,envMapMode:Lt&&Q.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:Qt,bumpMap:Dt,normalMap:re,displacementMap:ge,emissiveMap:ye,normalMapObjectSpace:re&&b.normalMapType===Op,normalMapTangentSpace:re&&b.normalMapType===ru,packedNormalMap:re&&b.normalMapType===ru&&ab(b.normalMap.format),metalnessMap:oe,roughnessMap:Oe,anisotropy:H,anisotropyMap:ht,clearcoat:He,clearcoatMap:At,clearcoatNormalMap:Pt,clearcoatRoughnessMap:ft,dispersion:ve,retroreflection:U,iridescence:v,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:$,sheenColorMap:Yt,sheenRoughnessMap:Ft,specularMap:Nt,specularColorMap:te,specularIntensityMap:se,transmission:st,transmissionMap:fe,thicknessMap:G,gradientMap:wt,opaque:b.transparent===!1&&b.blending===_r&&b.alphaToCoverage===!1,alphaMap:dt,alphaTest:Et,alphaHash:Ct,combine:b.combine,mapUv:It&&p(b.map.channel),aoMapUv:ct&&p(b.aoMap.channel),lightMapUv:Qt&&p(b.lightMap.channel),bumpMapUv:Dt&&p(b.bumpMap.channel),normalMapUv:re&&p(b.normalMap.channel),displacementMapUv:ge&&p(b.displacementMap.channel),emissiveMapUv:ye&&p(b.emissiveMap.channel),metalnessMapUv:oe&&p(b.metalnessMap.channel),roughnessMapUv:Oe&&p(b.roughnessMap.channel),anisotropyMapUv:ht&&p(b.anisotropyMap.channel),clearcoatMapUv:At&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(b.sheenRoughnessMap.channel),specularMapUv:Nt&&p(b.specularMap.channel),specularColorMapUv:te&&p(b.specularColorMap.channel),specularIntensityMapUv:se&&p(b.specularIntensityMap.channel),transmissionMapUv:fe&&p(b.transmissionMap.channel),thicknessMapUv:G&&p(b.thicknessMap.channel),alphaMapUv:dt&&p(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(re||H),vertexNormals:!!tt.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!tt.attributes.uv&&(It||dt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||tt.attributes.normal===void 0&&re===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Tt,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===Ne,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===Ne,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qn,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:gt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&b.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=h.has(1),$t.vertexUv2s=h.has(2),$t.vertexUv3s=h.has(3),h.clear(),$t}function y(b){let R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)R.push(N),R.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(g(R,b),I(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function g(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numSunLights),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numSunLightShadows),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function I(b,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function F(b){let R=x[b.type],N;if(R){let O=Li[R];N=Kp.clone(O.uniforms)}else N=b.uniforms;return N}function w(b,R){let N=m.get(R);return N!==void 0?++N.usedTimes:(N=new rb(n,R,b,s),l.push(N),m.set(R,N)),N}function C(b){if(--b.usedTimes===0){let R=l.indexOf(b);l[R]=l[l.length-1],l.pop(),m.delete(b.cacheKey),b.destroy()}}function A(b){a.remove(b)}function D(){a.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:F,acquireProgram:w,releaseProgram:C,releaseShaderCache:A,programs:l,dispose:D}}function cb(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,h){n.get(o)[a]=h}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function hb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function xm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ym(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let x=0;return d.isInstancedMesh&&(x+=2),d.isSkinnedMesh&&(x+=1),x}function a(d,x,p,M,y,g){let I=n[t];return I===void 0?(I={id:d.id,object:d,geometry:x,material:p,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:y,group:g},n[t]=I):(I.id=d.id,I.object=d,I.geometry=x,I.material=p,I.materialVariant=o(d),I.groupOrder=M,I.renderOrder=d.renderOrder,I.z=y,I.group=g),t++,I}function h(d,x,p,M,y,g,I){I.reversedDepth===!0&&(y=-y);let F=a(d,x,p,M,y,g);p.transmission>0?i.push(F):p.transparent===!0?s.push(F):e.push(F)}function l(d,x,p,M,y,g){let I=a(d,x,p,M,y,g);p.transmission>0?i.unshift(I):p.transparent===!0?s.unshift(I):e.unshift(I)}function m(d,x){e.length>1&&e.sort(d||hb),i.length>1&&i.sort(x||xm),s.length>1&&s.sort(x||xm)}function f(){for(let d=t,x=n.length;d<x;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:h,unshift:l,finish:f,sort:m}}function ub(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ym,n.set(i,[o])):s>=r.length?(o=new ym,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new he};break;case"SpotLight":e={position:new j,direction:new j,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function db(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var pb=0;function mb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function gb(n){let t=new fb,e=db(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);let s=new j,r=new $e,o=new $e;function a(l){let m=0,f=0,d=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let x=0,p=0,M=0,y=0,g=0,I=0,F=0,w=0,C=0,A=0,D=0,b=0,R=0,N=0;l.sort(mb);for(let Z=0,K=l.length;Z<K;Z++){let k=l[Z],tt=k.color,B=k.intensity,q=k.distance,Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ys?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)m+=tt.r*B,f+=tt.g*B,d+=tt.b*B;else if(k.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(k.sh.coefficients[J],B);N++}else if(k.isSunLight){let J=t.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let nt=k.shadow,it=e.get(k);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[p]=it,i.sunShadowMap[p]=Q;let St=nt.getViewportCount();for(let Tt=0;Tt<St;Tt++)i.sunShadowMatrix[M+Tt]=nt.getMatrix(Tt),i.sunShadowCascade[M+Tt]=nt._cascadeData[Tt];M+=St,p++}i.sun[x]=J,x++}else if(k.isDirectionalLight){let J=t.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let nt=k.shadow,it=e.get(k);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,i.directionalShadow[y]=it,i.directionalShadowMap[y]=Q,i.directionalShadowMatrix[y]=k.shadow.matrix,C++}i.directional[y]=J,y++}else if(k.isSpotLight){let J=t.get(k);J.position.setFromMatrixPosition(k.matrixWorld),J.color.copy(tt).multiplyScalar(B),J.distance=q,J.coneCos=Math.cos(k.angle),J.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),J.decay=k.decay,i.spot[I]=J;let nt=k.shadow;if(k.map&&(i.spotLightMap[b]=k.map,b++,nt.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[I]=nt.matrix,k.castShadow){let it=e.get(k);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,i.spotShadow[I]=it,i.spotShadowMap[I]=Q,D++}I++}else if(k.isRectAreaLight){let J=t.get(k);J.color.copy(tt).multiplyScalar(B),J.halfWidth.set(k.width*.5,0,0),J.halfHeight.set(0,k.height*.5,0),i.rectArea[F]=J,F++}else if(k.isPointLight){let J=t.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),J.distance=k.distance,J.decay=k.decay,k.castShadow){let nt=k.shadow,it=e.get(k);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,i.pointShadow[g]=it,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=k.shadow.matrix,A++}i.point[g]=J,g++}else if(k.isHemisphereLight){let J=t.get(k);J.skyColor.copy(k.color).multiplyScalar(B),J.groundColor.copy(k.groundColor).multiplyScalar(B),i.hemi[w]=J,w++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=f,i.ambient[2]=d;let O=i.hash;(O.sunLength!==x||O.directionalLength!==y||O.pointLength!==g||O.spotLength!==I||O.rectAreaLength!==F||O.hemiLength!==w||O.numSunShadows!==p||O.numDirectionalShadows!==C||O.numPointShadows!==A||O.numSpotShadows!==D||O.numSpotMaps!==b||O.numLightProbes!==N)&&(i.sun.length=x,i.directional.length=y,i.spot.length=I,i.rectArea.length=F,i.point.length=g,i.hemi.length=w,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,O.sunLength=x,O.directionalLength=y,O.pointLength=g,O.spotLength=I,O.rectAreaLength=F,O.hemiLength=w,O.numSunShadows=p,O.numDirectionalShadows=C,O.numPointShadows=A,O.numSpotShadows=D,O.numSpotMaps=b,O.numLightProbes=N,i.version=pb++)}function h(l,m){let f=0,d=0,x=0,p=0,M=0,y=0,g=m.matrixWorldInverse;for(let I=0,F=l.length;I<F;I++){let w=l[I];if(w.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(g),f++}else if(w.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(w.isSpotLight){let C=i.spot[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(w.isRectAreaLight){let C=i.rectArea[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){let C=i.point[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),x++}else if(w.isHemisphereLight){let C=i.hemi[y];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(g),y++}}}return{setup:a,setupView:h,state:i}}function _m(n){let t=new gb(n),e=[],i=[],s=[];function r(d){f.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function h(d){s.push(d)}function l(){t.setup(e)}function m(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:m,pushLight:o,pushShadow:a,pushLightProbeGrid:h}}function xb(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _m(n),t.set(s,[a])):r>=o.length?(a=new _m(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vb=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],Mb=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],vm=new $e,Lo=new j,bu=new j;function bb(n,t,e){let i=new fo,s=new be,r=new be,o=new Je,a=new sl,h=new rl,l={},m=e.maxTextureSize,f={[ps]:In,[In]:ps,[Qn]:Qn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:yb,fragmentShader:_b}),x=d.clone();x.defines.HORIZONTAL_PASS=1;let p=new ln;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new De(p,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let g=this.type;this.render=function(A,D,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||A.length===0)return;this.type===pp&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);let R=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Ii),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let K=g!==this.type;K&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(tt=>tt.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,tt=A.length;k<tt;k++){let B=A[k],q=B.shadow;if(q===void 0){ae("WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Q=q.getFrameExtents();s.multiply(Q),r.copy(q.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/Q.x),s.x=r.x*Q.x,q.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/Q.y),s.y=r.y*Q.y,q.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=J,q.map===null||K===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===yr){if(B.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ln(s.x,s.y,{format:ys,type:pi,minFilter:an,magFilter:an,generateMipmaps:!1}),q.map.texture.name=B.name+".shadowMap",q.map.depthTexture=new hs(s.x,s.y,di),q.map.depthTexture.name=B.name+".shadowMapDepth",q.map.depthTexture.format=Ei,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=pn,q.map.depthTexture.magFilter=pn}else B.isPointLight?(q.map=new cc(s.x),q.map.depthTexture=new nl(s.x,fi)):(q.map=new Ln(s.x,s.y),q.map.depthTexture=new hs(s.x,s.y,fi)),q.map.depthTexture.name=B.name+".shadowMap",q.map.depthTexture.format=Ei,this.type===bo?(q.map.depthTexture.compareFunction=J?rc:sc,q.map.depthTexture.minFilter=an,q.map.depthTexture.magFilter=an):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=pn,q.map.depthTexture.magFilter=pn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let nt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();B.isPointLight!==!0&&q.updateMatrices(B,b);for(let it=0;it<nt;it++){let St=q.getCamera(it);if(B.isPointLight){let Tt=q.camera,Ht=q.matrix,qt=B.distance||Tt.far;qt!==Tt.far&&(Tt.far=qt,Tt.updateProjectionMatrix()),Lo.setFromMatrixPosition(B.matrixWorld),Tt.position.copy(Lo),bu.copy(Tt.position),bu.add(vb[it]),Tt.up.copy(Mb[it]),Tt.lookAt(bu),Tt.updateMatrixWorld(),Ht.makeTranslation(-Lo.x,-Lo.y,-Lo.z),vm.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(vm,Tt.coordinateSystem,Tt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,it),n.clear();else{it===0&&(n.setRenderTarget(q.map),n.clear());let Tt=q.getViewport(it);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),Z.viewport(o)}i=q.getFrustum(it),w(D,b,St,B,this.type)}q.isPointLightShadow!==!0&&this.type===yr&&I(q,b),q.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(R,N,O)};function I(A,D){let b=t.update(M);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ln(s.x,s.y,{format:ys,type:pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,b,d,M,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value.set(A.map.width,A.map.height),x.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,b,x,M,null)}function F(A,D,b,R){let N=null,O=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)N=O;else if(N=b.isPointLight===!0?h:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let Z=N.uuid,K=D.uuid,k=l[Z];k===void 0&&(k={},l[Z]=k);let tt=k[K];tt===void 0&&(tt=N.clone(),k[K]=tt,D.addEventListener("dispose",C)),N=tt}if(N.visible=D.visible,N.wireframe=D.wireframe,R===yr?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:f[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let Z=n.properties.get(N);Z.light=b}return N}function w(A,D,b,R,N){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===yr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let K=t.update(A),k=A.material;if(Array.isArray(k)){let tt=K.groups;for(let B=0,q=tt.length;B<q;B++){let Q=tt[B],J=k[Q.materialIndex];if(J&&J.visible){let nt=F(A,J,R,N);A.onBeforeShadow(n,A,D,b,K,nt,Q),n.renderBufferDirect(b,null,K,nt,A,Q),A.onAfterShadow(n,A,D,b,K,nt,Q)}}}else if(k.visible){let tt=F(A,k,R,N);A.onBeforeShadow(n,A,D,b,K,tt,null),n.renderBufferDirect(b,null,K,tt,A,null),A.onAfterShadow(n,A,D,b,K,tt,null)}}let Z=A.children;for(let K=0,k=Z.length;K<k;K++)w(Z[K],D,b,R,N)}function C(A){A.target.removeEventListener("dispose",C);for(let b in l){let R=l[b],N=A.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function Sb(n,t){function e(){let G=!1,wt=new Je,dt=null,Et=new Je(0,0,0,0);return{setMask:function(Ct){dt!==Ct&&!G&&(n.colorMask(Ct,Ct,Ct,Ct),dt=Ct)},setLocked:function(Ct){G=Ct},setClear:function(Ct,gt,ee,$t,ze){ze===!0&&(Ct*=$t,gt*=$t,ee*=$t),wt.set(Ct,gt,ee,$t),Et.equals(wt)===!1&&(n.clearColor(Ct,gt,ee,$t),Et.copy(wt))},reset:function(){G=!1,dt=null,Et.set(-1,0,0,0)}}}function i(){let G=!1,wt=!1,dt=null,Et=null,Ct=null;return{setReversed:function(gt){if(wt!==gt){let ee=t.get("EXT_clip_control");gt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),wt=gt;let $t=Ct;Ct=null,this.setClear($t)}},getReversed:function(){return wt},setTest:function(gt){gt?Y(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(gt){dt!==gt&&!G&&(n.depthMask(gt),dt=gt)},setFunc:function(gt){if(wt&&(gt=$p[gt]),Et!==gt){switch(gt){case Oa:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case fr:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=gt}},setLocked:function(gt){G=gt},setClear:function(gt){Ct!==gt&&(Ct=gt,wt&&(gt=1-gt),n.clearDepth(gt))},reset:function(){G=!1,dt=null,Et=null,Ct=null,wt=!1}}}function s(){let G=!1,wt=null,dt=null,Et=null,Ct=null,gt=null,ee=null,$t=null,ze=null;return{setTest:function(Se){G||(Se?Y(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(Se){wt!==Se&&!G&&(n.stencilMask(Se),wt=Se)},setFunc:function(Se,An,Un){(dt!==Se||Et!==An||Ct!==Un)&&(n.stencilFunc(Se,An,Un),dt=Se,Et=An,Ct=Un)},setOp:function(Se,An,Un){(gt!==Se||ee!==An||$t!==Un)&&(n.stencilOp(Se,An,Un),gt=Se,ee=An,$t=Un)},setLocked:function(Se){G=Se},setClear:function(Se){ze!==Se&&(n.clearStencil(Se),ze=Se)},reset:function(){G=!1,wt=null,dt=null,Et=null,Ct=null,gt=null,ee=null,$t=null,ze=null}}}let r=new e,o=new i,a=new s,h=new WeakMap,l=new WeakMap,m={},f={},d={},x=new WeakMap,p=[],M=null,y=!1,g=null,I=null,F=null,w=null,C=null,A=null,D=null,b=new he(0,0,0),R=0,N=!1,O=null,Z=null,K=null,k=null,tt=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Q=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=Q>=1):J.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=Q>=2);let nt=null,it={},St=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),Ht=new Je().fromArray(St),qt=new Je().fromArray(Tt);function Ut(G,wt,dt,Et){let Ct=new Uint8Array(4),gt=n.createTexture();n.bindTexture(G,gt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<dt;ee++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(wt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return gt}let W={};W[n.TEXTURE_2D]=Ut(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(fr),Dt(!1),re(Oh),Y(n.CULL_FACE),ct(Ii);function Y(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function ut(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function mt(G,wt){return d[G]!==wt?(n.bindFramebuffer(G,wt),d[G]=wt,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=wt),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function yt(G,wt){let dt=p,Et=!1;if(G){dt=x.get(wt),dt===void 0&&(dt=[],x.set(wt,dt));let Ct=G.textures;if(dt.length!==Ct.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,ee=Ct.length;gt<ee;gt++)dt[gt]=n.COLOR_ATTACHMENT0+gt;dt.length=Ct.length,Et=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,Et=!0);Et&&n.drawBuffers(dt)}function It(G){return M!==G?(n.useProgram(G),M=G,!0):!1}let le={[Ds]:n.FUNC_ADD,[gp]:n.FUNC_SUBTRACT,[xp]:n.FUNC_REVERSE_SUBTRACT};le[yp]=n.MIN,le[_p]=n.MAX;let Lt={[vp]:n.ZERO,[Mp]:n.ONE,[bp]:n.SRC_COLOR,[Vh]:n.SRC_ALPHA,[Cp]:n.SRC_ALPHA_SATURATE,[Ep]:n.DST_COLOR,[wp]:n.DST_ALPHA,[Sp]:n.ONE_MINUS_SRC_COLOR,[Hh]:n.ONE_MINUS_SRC_ALPHA,[Tp]:n.ONE_MINUS_DST_COLOR,[Ap]:n.ONE_MINUS_DST_ALPHA,[Rp]:n.CONSTANT_COLOR,[Ip]:n.ONE_MINUS_CONSTANT_COLOR,[Pp]:n.CONSTANT_ALPHA,[Lp]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(G,wt,dt,Et,Ct,gt,ee,$t,ze,Se){if(G===Ii){y===!0&&(ut(n.BLEND),y=!1);return}if(y===!1&&(Y(n.BLEND),y=!0),G!==mp){if(G!==g||Se!==N){if((I!==Ds||C!==Ds)&&(n.blendEquation(n.FUNC_ADD),I=Ds,C=Ds),Se)switch(G){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFunc(n.ONE,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ce("WebGLState: Invalid blending: ",G);break}else switch(G){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bh:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",G);break}F=null,w=null,A=null,D=null,b.set(0,0,0),R=0,g=G,N=Se}return}Ct=Ct||wt,gt=gt||dt,ee=ee||Et,(wt!==I||Ct!==C)&&(n.blendEquationSeparate(le[wt],le[Ct]),I=wt,C=Ct),(dt!==F||Et!==w||gt!==A||ee!==D)&&(n.blendFuncSeparate(Lt[dt],Lt[Et],Lt[gt],Lt[ee]),F=dt,w=Et,A=gt,D=ee),($t.equals(b)===!1||ze!==R)&&(n.blendColor($t.r,$t.g,$t.b,ze),b.copy($t),R=ze),g=G,N=!1}function Qt(G,wt){G.side===Qn?ut(n.CULL_FACE):Y(n.CULL_FACE);let dt=G.side===In;wt&&(dt=!dt),Dt(dt),G.blending===_r&&G.transparent===!1?ct(Ii):ct(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Et=G.stencilWrite;a.setTest(Et),Et&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ye(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function re(G){G!==fp?(Y(n.CULL_FACE),G!==Z&&(G===Oh?n.cullFace(n.BACK):G===dp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),Z=G}function ge(G){G!==K&&(q&&n.lineWidth(G),K=G)}function ye(G,wt,dt){G?(Y(n.POLYGON_OFFSET_FILL),(k!==wt||tt!==dt)&&(k=wt,tt=dt,o.getReversed()&&(wt=-wt),n.polygonOffset(wt,dt))):ut(n.POLYGON_OFFSET_FILL)}function oe(G){G?Y(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function Oe(G){G===void 0&&(G=n.TEXTURE0+B-1),nt!==G&&(n.activeTexture(G),nt=G)}function H(G,wt,dt){dt===void 0&&(nt===null?dt=n.TEXTURE0+B-1:dt=nt);let Et=it[dt];Et===void 0&&(Et={type:void 0,texture:void 0},it[dt]=Et),(Et.type!==G||Et.texture!==wt)&&(nt!==dt&&(n.activeTexture(dt),nt=dt),n.bindTexture(G,wt||W[G]),Et.type=G,Et.texture=wt)}function He(){let G=it[nt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ve(){try{n.compressedTexImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function v(){try{n.texSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function $(){try{n.texSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function st(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function ht(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function At(){try{n.texStorage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function Pt(){try{n.texStorage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function ft(){try{n.texImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function pt(){try{n.texImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Rt(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function Yt(G,wt){f[G]!==wt&&(n.pixelStorei(G,wt),f[G]=wt)}function Ft(G){Ht.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ht.copy(G))}function Nt(G){qt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),qt.copy(G))}function te(G,wt){let dt=l.get(wt);dt===void 0&&(dt=new WeakMap,l.set(wt,dt));let Et=dt.get(G);Et===void 0&&(Et=n.getUniformBlockIndex(wt,G.name),dt.set(G,Et))}function se(G,wt){let Et=l.get(wt).get(G);h.get(wt)!==Et&&(n.uniformBlockBinding(wt,Et,G.__bindingPointIndex),h.set(wt,Et))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},f={},nt=null,it={},d={},x=new WeakMap,p=[],M=null,y=!1,g=null,I=null,F=null,w=null,C=null,A=null,D=null,b=new he(0,0,0),R=0,N=!1,O=null,Z=null,K=null,k=null,tt=null,Ht.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ut,bindFramebuffer:mt,drawBuffers:yt,useProgram:It,setBlending:ct,setMaterial:Qt,setFlipSided:Dt,setCullFace:re,setLineWidth:ge,setPolygonOffset:ye,setScissorTest:oe,activeTexture:Oe,bindTexture:H,unbindTexture:He,compressedTexImage2D:ve,compressedTexImage3D:U,texImage2D:ft,texImage3D:pt,pixelStorei:Yt,getParameter:Rt,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:At,texStorage3D:Pt,texSubImage2D:v,texSubImage3D:$,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:Ft,viewport:Nt,reset:fe}}function wb(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,m=new WeakMap,f=new Set,d,x=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,v){return p?new OffscreenCanvas(U,v):so("canvas")}function y(U,v,$){let st=1,ht=ve(U);if((ht.width>$||ht.height>$)&&(st=$/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let At=Math.floor(st*ht.width),Pt=Math.floor(st*ht.height);d===void 0&&(d=M(At,Pt));let ft=v?M(At,Pt):d;return ft.width=At,ft.height=Pt,ft.getContext("2d").drawImage(U,0,0,At,Pt),ae("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+At+"x"+Pt+")."),ft}else return"data"in U&&ae("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),U;return U}function g(U){return U.generateMipmaps}function I(U){n.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(U,v,$,st,ht,At=!1){if(U!==null){if(n[U]!==void 0)return n[U];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Pt;st&&(Pt=t.get("EXT_texture_norm16"),Pt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=v;if(v===n.RED&&($===n.FLOAT&&(ft=n.R32F),$===n.HALF_FLOAT&&(ft=n.R16F),$===n.UNSIGNED_BYTE&&(ft=n.R8),$===n.UNSIGNED_SHORT&&Pt&&(ft=Pt.R16_EXT),$===n.SHORT&&Pt&&(ft=Pt.R16_SNORM_EXT)),v===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.R8UI),$===n.UNSIGNED_SHORT&&(ft=n.R16UI),$===n.UNSIGNED_INT&&(ft=n.R32UI),$===n.BYTE&&(ft=n.R8I),$===n.SHORT&&(ft=n.R16I),$===n.INT&&(ft=n.R32I)),v===n.RG&&($===n.FLOAT&&(ft=n.RG32F),$===n.HALF_FLOAT&&(ft=n.RG16F),$===n.UNSIGNED_BYTE&&(ft=n.RG8),$===n.UNSIGNED_SHORT&&Pt&&(ft=Pt.RG16_EXT),$===n.SHORT&&Pt&&(ft=Pt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.RG8UI),$===n.UNSIGNED_SHORT&&(ft=n.RG16UI),$===n.UNSIGNED_INT&&(ft=n.RG32UI),$===n.BYTE&&(ft=n.RG8I),$===n.SHORT&&(ft=n.RG16I),$===n.INT&&(ft=n.RG32I)),v===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),$===n.UNSIGNED_INT&&(ft=n.RGB32UI),$===n.BYTE&&(ft=n.RGB8I),$===n.SHORT&&(ft=n.RGB16I),$===n.INT&&(ft=n.RGB32I)),v===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),$===n.UNSIGNED_INT&&(ft=n.RGBA32UI),$===n.BYTE&&(ft=n.RGBA8I),$===n.SHORT&&(ft=n.RGBA16I),$===n.INT&&(ft=n.RGBA32I)),v===n.RGB&&($===n.UNSIGNED_SHORT&&Pt&&(ft=Pt.RGB16_EXT),$===n.SHORT&&Pt&&(ft=Pt.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ft=n.R11F_G11F_B10F)),v===n.RGBA){let pt=At?no:we.getTransfer(ht);$===n.FLOAT&&(ft=n.RGBA32F),$===n.HALF_FLOAT&&(ft=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ft=pt===Ne?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&Pt&&(ft=Pt.RGBA16_EXT),$===n.SHORT&&Pt&&(ft=Pt.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(U,v){let $;return U?v===null||v===fi||v===Mr?$=n.DEPTH24_STENCIL8:v===di?$=n.DEPTH32F_STENCIL8:v===vr&&($=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===Mr?$=n.DEPTH_COMPONENT24:v===di?$=n.DEPTH_COMPONENT32F:v===vr&&($=n.DEPTH_COMPONENT16),$}function A(U,v){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==pn&&U.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function D(U){let v=U.target;v.removeEventListener("dispose",D),R(v),v.isVideoTexture&&m.delete(v),v.isHTMLTexture&&f.delete(v)}function b(U){let v=U.target;v.removeEventListener("dispose",b),O(v)}function R(U){let v=i.get(U);if(v.__webglInit===void 0)return;let $=U.source,st=x.get($);if(st){let ht=st[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&N(U),Object.keys(st).length===0&&x.delete($)}i.remove(U)}function N(U){let v=i.get(U);n.deleteTexture(v.__webglTexture);let $=U.source,st=x.get($);delete st[v.__cacheKey],o.memory.textures--}function O(U){let v=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(v.__webglFramebuffer[st]))for(let ht=0;ht<v.__webglFramebuffer[st].length;ht++)n.deleteFramebuffer(v.__webglFramebuffer[st][ht]);else n.deleteFramebuffer(v.__webglFramebuffer[st]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[st])}else{if(Array.isArray(v.__webglFramebuffer))for(let st=0;st<v.__webglFramebuffer.length;st++)n.deleteFramebuffer(v.__webglFramebuffer[st]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let st=0;st<v.__webglColorRenderbuffer.length;st++)v.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[st]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let $=U.textures;for(let st=0,ht=$.length;st<ht;st++){let At=i.get($[st]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),o.memory.textures--),i.remove($[st])}i.remove(U)}let Z=0;function K(){Z=0}function k(){return Z}function tt(U){Z=U}function B(){let U=Z;return U>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,U}function q(U){let v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function Q(U,v){let $=i.get(U);if(U.isVideoTexture&&H(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){let st=U.image;if(st===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ut($,U,v);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+v)}function J(U,v){let $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ut($,U,v);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+v)}function nt(U,v){let $=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ut($,U,v);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+v)}function it(U,v){let $=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){mt($,U,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+v)}let St={[Wa]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Xa]:n.MIRRORED_REPEAT},Tt={[pn]:n.NEAREST,[Up]:n.NEAREST_MIPMAP_NEAREST,[wo]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},Ht={[Bp]:n.NEVER,[Wp]:n.ALWAYS,[kp]:n.LESS,[sc]:n.LEQUAL,[Vp]:n.EQUAL,[rc]:n.GEQUAL,[Hp]:n.GREATER,[Gp]:n.NOTEQUAL};function qt(U,v){if(v.type===di&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Ml||v.magFilter===wo||v.magFilter===gs||v.minFilter===an||v.minFilter===Ml||v.minFilter===wo||v.minFilter===gs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,St[v.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,St[v.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,St[v.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Tt[v.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Tt[v.minFilter]),v.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==wo&&v.minFilter!==gs||v.type===di&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ut(U,v){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",D));let st=v.source,ht=x.get(st);ht===void 0&&(ht={},x.set(st,ht));let At=q(v);if(At!==U.__cacheKey){ht[At]===void 0&&(ht[At]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ht[At].usedTimes++;let Pt=ht[U.__cacheKey];Pt!==void 0&&(ht[U.__cacheKey].usedTimes--,Pt.usedTimes===0&&N(v)),U.__cacheKey=At,U.__webglTexture=ht[At].texture}return $}function W(U,v,$){return Math.floor(Math.floor(U/$)/v)}function Y(U,v,$,st){let At=U.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,$,st,v.data);else{At.sort((Yt,Ft)=>Yt.start-Ft.start);let Pt=0;for(let Yt=1;Yt<At.length;Yt++){let Ft=At[Pt],Nt=At[Yt],te=Ft.start+Ft.count,se=W(Nt.start,v.width,4),fe=W(Ft.start,v.width,4);Nt.start<=te+1&&se===fe&&W(Nt.start+Nt.count-1,v.width,4)===se?Ft.count=Math.max(Ft.count,Nt.start+Nt.count-Ft.start):(++Pt,At[Pt]=Nt)}At.length=Pt+1;let ft=e.getParameter(n.UNPACK_ROW_LENGTH),pt=e.getParameter(n.UNPACK_SKIP_PIXELS),Rt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Yt=0,Ft=At.length;Yt<Ft;Yt++){let Nt=At[Yt],te=Math.floor(Nt.start/4),se=Math.ceil(Nt.count/4),fe=te%v.width,G=Math.floor(te/v.width),wt=se,dt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),e.pixelStorei(n.UNPACK_SKIP_ROWS,G),e.texSubImage2D(n.TEXTURE_2D,0,fe,G,wt,dt,$,st,v.data)}U.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ft),e.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt)}}function ut(U,v,$){let st=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=n.TEXTURE_3D);let ht=Ut(U,v),At=v.source;e.bindTexture(st,U.__webglTexture,n.TEXTURE0+$);let Pt=i.get(At);if(At.version!==Pt.__version||ht===!0){if(e.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let dt=we.getPrimaries(we.workingColorSpace),Et=v.colorSpace===Wi?null:we.getPrimaries(v.colorSpace),Ct=v.colorSpace===Wi||dt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let pt=y(v.image,!1,s.maxTextureSize);pt=He(v,pt);let Rt=r.convert(v.format,v.colorSpace),Yt=r.convert(v.type),Ft=w(v.internalFormat,Rt,Yt,v.normalized,v.colorSpace,v.isVideoTexture);qt(st,v);let Nt,te=v.mipmaps,se=v.isVideoTexture!==!0,fe=Pt.__version===void 0||ht===!0,G=At.dataReady,wt=A(v,pt);if(v.isDepthTexture)Ft=C(v.format===xs,v.type),fe&&(se?e.texStorage2D(n.TEXTURE_2D,1,Ft,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Ft,pt.width,pt.height,0,Rt,Yt,null));else if(v.isDataTexture)if(te.length>0){se&&fe&&e.texStorage2D(n.TEXTURE_2D,wt,Ft,te[0].width,te[0].height);for(let dt=0,Et=te.length;dt<Et;dt++)Nt=te[dt],se?G&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Nt.width,Nt.height,Rt,Yt,Nt.data):e.texImage2D(n.TEXTURE_2D,dt,Ft,Nt.width,Nt.height,0,Rt,Yt,Nt.data);v.generateMipmaps=!1}else se?(fe&&e.texStorage2D(n.TEXTURE_2D,wt,Ft,pt.width,pt.height),G&&Y(v,pt,Rt,Yt)):e.texImage2D(n.TEXTURE_2D,0,Ft,pt.width,pt.height,0,Rt,Yt,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ft,te[0].width,te[0].height,pt.depth);for(let dt=0,Et=te.length;dt<Et;dt++)if(Nt=te[dt],v.format!==ti)if(Rt!==null)if(se){if(G)if(v.layerUpdates.size>0){let Ct=uu(Nt.width,Nt.height,v.format,v.type);for(let gt of v.layerUpdates){let ee=Nt.data.subarray(gt*Ct/Nt.data.BYTES_PER_ELEMENT,(gt+1)*Ct/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,gt,Nt.width,Nt.height,1,Rt,ee)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Nt.width,Nt.height,pt.depth,Rt,Nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Ft,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Nt.width,Nt.height,pt.depth,Rt,Yt,Nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Ft,Nt.width,Nt.height,pt.depth,0,Rt,Yt,Nt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&fe&&e.texStorage2D(n.TEXTURE_2D,wt,Ft,te[0].width,te[0].height);for(let dt=0,Et=te.length;dt<Et;dt++)Nt=te[dt],v.format!==ti?Rt!==null?se?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,Nt.width,Nt.height,Rt,Nt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Ft,Nt.width,Nt.height,0,Nt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Nt.width,Nt.height,Rt,Yt,Nt.data):e.texImage2D(n.TEXTURE_2D,dt,Ft,Nt.width,Nt.height,0,Rt,Yt,Nt.data)}else if(v.isDataArrayTexture)if(se){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ft,pt.width,pt.height,pt.depth),G)if(v.layerUpdates.size>0){let dt=uu(pt.width,pt.height,v.format,v.type);for(let Et of v.layerUpdates){let Ct=pt.data.subarray(Et*dt/pt.data.BYTES_PER_ELEMENT,(Et+1)*dt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,pt.width,pt.height,1,Rt,Yt,Ct)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Yt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,pt.width,pt.height,pt.depth,0,Rt,Yt,pt.data);else if(v.isData3DTexture)se?(fe&&e.texStorage3D(n.TEXTURE_3D,wt,Ft,pt.width,pt.height,pt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Yt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,pt.width,pt.height,pt.depth,0,Rt,Yt,pt.data);else if(v.isFramebufferTexture){if(fe)if(se)e.texStorage2D(n.TEXTURE_2D,wt,Ft,pt.width,pt.height);else{let dt=pt.width,Et=pt.height;for(let Ct=0;Ct<wt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Ft,dt,Et,0,Rt,Yt,null),dt>>=1,Et>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let dt=n.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),pt.parentNode!==dt){dt.appendChild(pt),f.add(v),dt.onpaint=Et=>{let Ct=Et.changedElements;for(let gt of f)Ct.includes(gt.image)&&(gt.needsUpdate=!0)},dt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pt);else{let Ct=n.RGBA,gt=n.RGBA,ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,gt,ee,pt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(te.length>0){if(se&&fe){let dt=ve(te[0]);e.texStorage2D(n.TEXTURE_2D,wt,Ft,dt.width,dt.height)}for(let dt=0,Et=te.length;dt<Et;dt++)Nt=te[dt],se?G&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Rt,Yt,Nt):e.texImage2D(n.TEXTURE_2D,dt,Ft,Rt,Yt,Nt);v.generateMipmaps=!1}else if(se){if(fe){let dt=ve(pt);e.texStorage2D(n.TEXTURE_2D,wt,Ft,dt.width,dt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,Yt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Ft,Rt,Yt,pt);g(v)&&I(st),Pt.__version=At.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function mt(U,v,$){if(v.image.length!==6)return;let st=Ut(U,v),ht=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+$);let At=i.get(ht);if(ht.version!==At.__version||st===!0){e.activeTexture(n.TEXTURE0+$);let Pt=we.getPrimaries(we.workingColorSpace),ft=v.colorSpace===Wi?null:we.getPrimaries(v.colorSpace),pt=v.colorSpace===Wi||Pt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,Yt=v.image[0]&&v.image[0].isDataTexture,Ft=[];for(let gt=0;gt<6;gt++)!Rt&&!Yt?Ft[gt]=y(v.image[gt],!0,s.maxCubemapSize):Ft[gt]=Yt?v.image[gt].image:v.image[gt],Ft[gt]=He(v,Ft[gt]);let Nt=Ft[0],te=r.convert(v.format,v.colorSpace),se=r.convert(v.type),fe=w(v.internalFormat,te,se,v.normalized,v.colorSpace),G=v.isVideoTexture!==!0,wt=At.__version===void 0||st===!0,dt=ht.dataReady,Et=A(v,Nt);qt(n.TEXTURE_CUBE_MAP,v);let Ct;if(Rt){G&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,fe,Nt.width,Nt.height);for(let gt=0;gt<6;gt++){Ct=Ft[gt].mipmaps;for(let ee=0;ee<Ct.length;ee++){let $t=Ct[ee];v.format!==ti?te!==null?G?dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,0,0,$t.width,$t.height,te,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,fe,$t.width,$t.height,0,$t.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,0,0,$t.width,$t.height,te,se,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee,fe,$t.width,$t.height,0,te,se,$t.data)}}}else{if(Ct=v.mipmaps,G&&wt){Ct.length>0&&Et++;let gt=ve(Ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,fe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Yt){G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ft[gt].width,Ft[gt].height,te,se,Ft[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,Ft[gt].width,Ft[gt].height,0,te,se,Ft[gt].data);for(let ee=0;ee<Ct.length;ee++){let ze=Ct[ee].image[gt].image;G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,0,0,ze.width,ze.height,te,se,ze.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,fe,ze.width,ze.height,0,te,se,ze.data)}}else{G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,te,se,Ft[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,te,se,Ft[gt]);for(let ee=0;ee<Ct.length;ee++){let $t=Ct[ee];G?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,0,0,te,se,$t.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ee+1,fe,te,se,$t.image[gt])}}}g(v)&&I(n.TEXTURE_CUBE_MAP),At.__version=ht.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function yt(U,v,$,st,ht,At){let Pt=r.convert($.format,$.colorSpace),ft=r.convert($.type),pt=w($.internalFormat,Pt,ft,$.normalized,$.colorSpace),Rt=i.get(v),Yt=i.get($);if(Yt.__renderTarget=v,!Rt.__hasExternalTextures){let Ft=Math.max(1,v.width>>At),Nt=Math.max(1,v.height>>At);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,At,pt,Ft,Nt,v.depth,0,Pt,ft,null):e.texImage2D(ht,At,pt,Ft,Nt,0,Pt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,ht,Yt.__webglTexture,0,oe(v)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,ht,Yt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(U,v,$){if(n.bindRenderbuffer(n.RENDERBUFFER,U),v.depthBuffer){let st=v.depthTexture,ht=st&&st.isDepthTexture?st.type:null,At=C(v.stencilBuffer,ht),Pt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Oe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(v),At,v.width,v.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(v),At,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,At,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,U)}else{let st=v.textures;for(let ht=0;ht<st.length;ht++){let At=st[ht],Pt=r.convert(At.format,At.colorSpace),ft=r.convert(At.type),pt=w(At.internalFormat,Pt,ft,At.normalized,At.colorSpace);Oe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(v),pt,v.width,v.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(v),pt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(U,v,$){let st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=i.get(v.depthTexture);if(ht.__renderTarget=v,(!ht.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),ht.__webglTexture===void 0){ht.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),qt(n.TEXTURE_CUBE_MAP,v.depthTexture);let Rt=r.convert(v.depthTexture.format),Yt=r.convert(v.depthTexture.type),Ft;v.depthTexture.format===Ei?Ft=n.DEPTH_COMPONENT24:v.depthTexture.format===xs&&(Ft=n.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Ft,v.width,v.height,0,Rt,Yt,null)}}else Q(v.depthTexture,0);let At=ht.__webglTexture,Pt=oe(v),ft=st?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,pt=v.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ei)Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ft,At,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,ft,At,0);else if(v.depthTexture.format===xs)Oe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ft,At,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,ft,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(U){let v=i.get(U),$=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){let st=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){let ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=st}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if($)for(let st=0;st<6;st++)le(v.__webglFramebuffer[st],U,st);else{let st=U.texture.mipmaps;st&&st.length>0?le(v.__webglFramebuffer[0],U,0):le(v.__webglFramebuffer,U,0)}else if($){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=n.createRenderbuffer(),It(v.__webglDepthbuffer[st],U,!1);else{let ht=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,At)}}else{let st=U.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),It(v.__webglDepthbuffer,U,!1);else{let ht=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(U,v,$){let st=i.get(U);v!==void 0&&yt(st.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Lt(U)}function Qt(U){let v=U.texture,$=i.get(U),st=i.get(v);U.addEventListener("dispose",b);let ht=U.textures,At=U.isWebGLCubeRenderTarget===!0,Pt=ht.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=v.version,o.memory.textures++),At){$.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer[ft]=[];for(let pt=0;pt<v.mipmaps.length;pt++)$.__webglFramebuffer[ft][pt]=n.createFramebuffer()}else $.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)$.__webglFramebuffer[ft]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let ft=0,pt=ht.length;ft<pt;ft++){let Rt=i.get(ht[ft]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Oe(U)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let pt=ht[ft];$.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ft]);let Rt=r.convert(pt.format,pt.colorSpace),Yt=r.convert(pt.type),Ft=w(pt.internalFormat,Rt,Yt,pt.normalized,pt.colorSpace,U.isXRRenderTarget===!0),Nt=oe(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Ft,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,$.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),It($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),qt(n.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)yt($.__webglFramebuffer[ft][pt],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else yt($.__webglFramebuffer[ft],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(v)&&I(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ft=0,pt=ht.length;ft<pt;ft++){let Rt=ht[ft],Yt=i.get(Rt),Ft=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ft=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ft,Yt.__webglTexture),qt(Ft,Rt),yt($.__webglFramebuffer,U,Rt,n.COLOR_ATTACHMENT0+ft,Ft,0),g(Rt)&&I(Ft)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,st.__webglTexture),qt(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)yt($.__webglFramebuffer[pt],U,v,n.COLOR_ATTACHMENT0,ft,pt);else yt($.__webglFramebuffer,U,v,n.COLOR_ATTACHMENT0,ft,0);g(v)&&I(ft),e.unbindTexture()}U.depthBuffer&&Lt(U)}function Dt(U){let v=U.textures;for(let $=0,st=v.length;$<st;$++){let ht=v[$];if(g(ht)){let At=F(U),Pt=i.get(ht).__webglTexture;e.bindTexture(At,Pt),I(At),e.unbindTexture()}}}let re=[],ge=[];function ye(U){if(U.samples>0){if(Oe(U)===!1){let v=U.textures,$=U.width,st=U.height,ht=n.COLOR_BUFFER_BIT,At=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(U),ft=v.length>1;if(ft)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let pt=U.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);let Yt=i.get(v[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,$,st,0,0,$,st,ht,n.NEAREST),h===!0&&(re.length=0,ge.length=0,re.push(n.COLOR_ATTACHMENT0+Rt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(re.push(At),ge.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);let Yt=i.get(v[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){let v=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function oe(U){return Math.min(s.maxSamples,U.samples)}function Oe(U){let v=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(U){let v=o.render.frame;m.get(U)!==v&&(m.set(U,v),U.update())}function He(U,v){let $=U.colorSpace,st=U.format,ht=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==eo&&$!==Wi&&(we.getTransfer($)===Ne?(st!==ti||ht!==Vn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",$)),v}function ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=K,this.getTextureUnits=k,this.setTextureUnits=tt,this.setTexture2D=Q,this.setTexture2DArray=J,this.setTexture3D=nt,this.setTextureCube=it,this.rebindTextures=ct,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ab(n,t){function e(i,s=Wi){let r,o=we.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jh)return n.BYTE;if(i===Qh)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===nu)return n.ALPHA;if(i===iu)return n.RGB;if(i===ti)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===su)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===ys)return n.RG;if(i===El)return n.RG_INTEGER;if(i===Tl)return n.RGBA_INTEGER;if(i===Ao||i===Eo||i===To||i===Co)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Rl||i===Il||i===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ro||i===Ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Dl)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ul)return r.COMPRESSED_R11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ro)return r.COMPRESSED_RG11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zl||i===Bl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Zl||i===Jl||i===Kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jl||i===Ql||i===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jl)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ec||i===nc||i===Io||i===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new go(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mn({vertexShader:Eb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pu=class extends Ti{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",h=1,l=null,m=null,f=null,d=null,x=null,p=null,M=typeof XRWebGLBinding<"u",y=new Iu,g={},I=e.getContextAttributes(),F=null,w=null,C=[],A=[],D=new be,b=null,R=null,N=new _n;N.viewport=new Je;let O=new _n;O.viewport=new Je;let Z=[N,O],K=new xl,k=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=C[W];return Y===void 0&&(Y=new mr,C[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=C[W];return Y===void 0&&(Y=new mr,C[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=C[W];return Y===void 0&&(Y=new mr,C[W]=Y),Y.getHandSpace()};function B(W){let Y=A.indexOf(W.inputSource);if(Y===-1)return;let ut=C[Y];ut!==void 0&&(ut.update(W.inputSource,W.frame,l||o),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let W=0;W<C.length;W++){let Y=A[W];Y!==null&&(A[W]=null,C[W].disconnect(Y))}k=null,tt=null,y.reset();for(let W in g)delete g[W];if(t.setRenderTarget(F),x=null,d=null,f=null,s=null,w=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),R!==null){let W=R.camera;W.fov=R.fov,W.zoom=R.zoom,W.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),I.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,mt=null,yt=null;I.depth&&(yt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=I.stencil?xs:Ei,mt=I.stencil?Mr:fi);let It={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ln(d.textureWidth,d.textureHeight,{format:ti,type:Vn,depthTexture:new hs(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Ln(x.framebufferWidth,x.framebufferHeight,{format:ti,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(W){for(let Y=0;Y<W.removed.length;Y++){let ut=W.removed[Y],mt=A.indexOf(ut);mt>=0&&(A[mt]=null,C[mt].disconnect(ut))}for(let Y=0;Y<W.added.length;Y++){let ut=W.added[Y],mt=A.indexOf(ut);if(mt===-1){for(let It=0;It<C.length;It++)if(It>=A.length){A.push(ut),mt=It;break}else if(A[It]===null){A[It]=ut,mt=It;break}if(mt===-1)break}let yt=C[mt];yt&&yt.connect(ut)}}let J=new j,nt=new j;function it(W,Y,ut){J.setFromMatrixPosition(Y.matrixWorld),nt.setFromMatrixPosition(ut.matrixWorld);let mt=J.distanceTo(nt),yt=Y.projectionMatrix.elements,It=ut.projectionMatrix.elements,le=yt[14]/(yt[10]-1),Lt=yt[14]/(yt[10]+1),ct=(yt[9]+1)/yt[5],Qt=(yt[9]-1)/yt[5],Dt=(yt[8]-1)/yt[0],re=(It[8]+1)/It[0],ge=le*Dt,ye=le*re,oe=mt/(-Dt+re),Oe=oe*-Dt;if(Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Oe),W.translateZ(oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let H=le+oe,He=Lt+oe,ve=ge-Oe,U=ye+(mt-Oe),v=ct*Lt/He*H,$=Qt*Lt/He*H;W.projectionMatrix.makePerspective(ve,U,v,$,H,He),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function St(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Y=W.near,ut=W.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(ut=y.depthFar)),K.near=O.near=N.near=Y,K.far=O.far=N.far=ut,(k!==K.near||tt!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),k=K.near,tt=K.far),K.layers.mask=W.layers.mask|6,N.layers.mask=K.layers.mask&-5,O.layers.mask=K.layers.mask&-3;let mt=W.parent,yt=K.cameras;St(K,mt);for(let It=0;It<yt.length;It++)St(yt[It],mt);yt.length===2?it(K,N,O):K.projectionMatrix.copy(N.projectionMatrix),R===null&&W.isPerspectiveCamera&&(R={camera:W,fov:W.fov,zoom:W.zoom}),Tt(W,K,mt)};function Tt(W,Y,ut){ut===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ya*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&x===null))return h},this.setFoveation=function(W){h=W,d!==null&&(d.fixedFoveation=W),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(W){return g[W]};let Ht=null;function qt(W,Y){if(m=Y.getViewerPose(l||o),p=Y,m!==null){let ut=m.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let mt=!1;ut.length!==K.cameras.length&&(K.cameras.length=0,mt=!0);for(let Lt=0;Lt<ut.length;Lt++){let ct=ut[Lt],Qt=null;if(x!==null)Qt=x.getViewport(ct);else{let re=f.getViewSubImage(d,ct);Qt=re.viewport,Lt===0&&(t.setRenderTargetTextures(w,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(w))}let Dt=Z[Lt];Dt===void 0&&(Dt=new _n,Dt.layers.enable(Lt),Dt.viewport=new Je,Z[Lt]=Dt),Dt.matrix.fromArray(ct.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(ct.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Lt===0&&(K.matrix.copy(Dt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),mt===!0&&K.cameras.push(Dt)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let Lt=f.getDepthInformation(ut[0]);Lt&&Lt.isValid&&Lt.texture&&y.init(Lt,s.renderState)}if(yt&&yt.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let Lt=0;Lt<ut.length;Lt++){let ct=ut[Lt].camera;if(ct){let Qt=g[ct];Qt||(Qt=new go,g[ct]=Qt);let Dt=f.getCameraImage(ct);Qt.sourceTexture=Dt}}}}for(let ut=0;ut<C.length;ut++){let mt=A[ut],yt=C[ut];mt!==null&&yt!==void 0&&yt.update(mt,Y,l||o)}Ht&&Ht(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),p=null}let Ut=new Mm;Ut.setAnimationLoop(qt),this.setAnimationLoop=function(W){Ht=W},this.dispose=function(){}}},Cb=new $e,Tm=new pe;Tm.set(-1,0,0,0,1,0,0,0,1);function Rb(n,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,lu(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,I,F,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(y,g):g.isMeshLambertMaterial?(r(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(y,g),f(y,g)):g.isMeshPhongMaterial?(r(y,g),m(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(y,g),d(y,g),g.isMeshPhysicalMaterial&&x(y,g,w)):g.isMeshMatcapMaterial?(r(y,g),p(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&a(y,g)):g.isPointsMaterial?h(y,g,I,F):g.isSpriteMaterial?l(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===In&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===In&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let I=t.get(g),F=I.envMap,w=I.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Tm),y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function a(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,I,F){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=F*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function f(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function d(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.retroreflectivity>0&&(y.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function p(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let I=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ib(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,C){let A=C.program;i.uniformBlockBinding(w,A)}function l(w,C){let A=s[w.id];A===void 0&&(y(w),A=m(w),s[w.id]=A,w.addEventListener("dispose",I));let D=C.program;i.updateUBOMapping(w,D);let b=t.render.frame;r[w.id]!==b&&(d(w),r[w.id]=b)}function m(w){let C=f();w.__bindingPointIndex=C;let A=n.createBuffer(),D=w.__size,b=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,D,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,A),A}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let C=s[w.id],A=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let b=0,R=A.length;b<R;b++){let N=A[b];if(Array.isArray(N))for(let O=0,Z=N.length;O<Z;O++)x(N[O],b,O,D);else x(N,b,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(w,C,A,D){if(M(w,C,A,D)===!0){let b=w.__offset,R=w.value;if(Array.isArray(R)){let N=0;for(let O=0;O<R.length;O++){let Z=R[O],K=g(Z);p(Z,w.__data,N),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,w.__data)}}function p(w,C,A){typeof w=="number"||typeof w=="boolean"?C[0]=w:w.isMatrix3?(C[0]=w.elements[0],C[1]=w.elements[1],C[2]=w.elements[2],C[3]=0,C[4]=w.elements[3],C[5]=w.elements[4],C[6]=w.elements[5],C[7]=0,C[8]=w.elements[6],C[9]=w.elements[7],C[10]=w.elements[8],C[11]=0):ArrayBuffer.isView(w)?C.set(new w.constructor(w.buffer,w.byteOffset,C.length)):w.toArray(C,A)}function M(w,C,A,D){let b=w.value,R=C+"_"+A;if(D[R]===void 0)return typeof b=="number"||typeof b=="boolean"?D[R]=b:ArrayBuffer.isView(b)?D[R]=b.slice():D[R]=b.clone(),!0;{let N=D[R];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return D[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(N.equals(b)===!1)return N.copy(b),!0}}return!1}function y(w){let C=w.uniforms,A=0,D=16;for(let R=0,N=C.length;R<N;R++){let O=Array.isArray(C[R])?C[R]:[C[R]];for(let Z=0,K=O.length;Z<K;Z++){let k=O[Z],tt=Array.isArray(k.value)?k.value:[k.value];for(let B=0,q=tt.length;B<q;B++){let Q=tt[B],J=g(Q),nt=A%D,it=nt%J.boundary,St=nt+it;A+=it,St!==0&&D-St<J.storage&&(A+=D-St),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=J.storage}}}let b=A%D;return b>0&&(A+=D-b),w.__size=A,w.__cache={},this}function g(w){let C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",w),C}function I(w){let C=w.target;C.removeEventListener("dispose",I);let A=o.indexOf(C.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function F(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:h,update:l,dispose:F}}var Pb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function Lb(){return Pi===null&&(Pi=new ja(Pb,16,16,ys,pi),Pi.name="DFG_LUT",Pi.minFilter=an,Pi.magFilter=an,Pi.wrapS=Ai,Pi.wrapT=Ai,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var hc=class{constructor(t={}){let{canvas:e=Xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:x=Vn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let M=x,y=new Set([Tl,El,Al]),g=new Set([Vn,fi,vr,Mr,Sl,wl]),I=new Uint32Array(4),F=new Int32Array(4),w=new j,C=null,A=null,D=[],b=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,Z=null,K=null,k=null,tt=null;this._outputColorSpace=on;let B=0,q=0,Q=null,J=-1,nt=null,it=new Je,St=new Je,Tt=null,Ht=new he(0),qt=0,Ut=e.width,W=e.height,Y=1,ut=null,mt=null,yt=new Je(0,0,Ut,W),It=new Je(0,0,Ut,W),le=!1,Lt=new fo,ct=!1,Qt=!1,Dt=new $e,re=new j,ge=new Je,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Oe(){return Q===null?Y:1}let H=i;function He(E,V){return e.getContext(E,V)}let ve,U,v,$,st,ht,At,Pt,ft,pt,Rt,Yt,Ft,Nt,te,se,fe,G,wt,dt,Et,Ct,gt;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:m,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",An,!1),H===null){let V="webgl2";if(H=He(V,E),H===null)throw He(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(E){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",An,!1),ce("WebGLRenderer: "+E.message),E}function ee(){ve=new Bv(H),ve.init(),Et=new Ab(H,ve),U=new Rv(H,ve,t,Et),v=new Sb(H,ve),U.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),K=H.createFramebuffer(),k=H.createFramebuffer(),tt=H.createFramebuffer(),$=new Hv(H),st=new cb,ht=new wb(H,ve,v,st,U,Et,$),At=new zv(N),Pt=new Wx(H),Ct=new Tv(H,Pt),ft=new kv(H,Pt,$,Ct),pt=new Wv(H,ft,Pt,Ct,$),G=new Gv(H,U,ht),te=new Iv(st),Rt=new lb(N,At,ve,U,Ct,te),Yt=new Rb(N,st),Ft=new ub,Nt=new xb(ve),fe=new Ev(N,At,v,pt,p,h),se=new bb(N,pt,U),gt=new Ib(H,$,U,v),wt=new Cv(H,ve,$),dt=new Vv(H,ve,$),$.programs=Rt.programs,N.capabilities=U,N.extensions=ve,N.properties=st,N.renderLists=Ft,N.shadowMap=se,N.state=v,N.info=$}M!==Vn&&(R=new qv(M,e.width,e.height,a,s,r));let $t=new Pu(N,H);this.xr=$t,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(Ut,W,!1))},this.getSize=function(E){return E.set(Ut,W)},this.setSize=function(E,V,ot=!0){if($t.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ut=E,W=V,e.width=Math.floor(E*Y),e.height=Math.floor(V*Y),ot===!0&&(e.style.width=E+"px",e.style.height=V+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Ut*Y,W*Y).floor()},this.setDrawingBufferSize=function(E,V,ot){Ut=E,W=V,Y=ot,e.width=Math.floor(E*ot),e.height=Math.floor(V*ot),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(M===Vn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(yt)},this.setViewport=function(E,V,ot,et){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,V,ot,et),v.viewport(it.copy(yt).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,V,ot,et){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,V,ot,et),v.scissor(St.copy(It).multiplyScalar(Y).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){v.setScissorTest(le=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,ot=!0){let et=0;if(E){let X=!1;if(Q!==null){let Bt=Q.texture.format;X=y.has(Bt)}if(X){let Bt=Q.texture.type,Xt=g.has(Bt),Ot=fe.getClearColor(),Jt=fe.getClearAlpha(),Gt=Ot.r,de=Ot.g,xe=Ot.b;Xt?(I[0]=Gt,I[1]=de,I[2]=xe,I[3]=Jt,H.clearBufferuiv(H.COLOR,0,I)):(F[0]=Gt,F[1]=de,F[2]=xe,F[3]=Jt,H.clearBufferiv(H.COLOR,0,F))}else et|=H.COLOR_BUFFER_BIT}V&&(et|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&H.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),Z=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",An,!1),fe.dispose(),Ft.dispose(),Nt.dispose(),st.dispose(),At.dispose(),pt.dispose(),Ct.dispose(),gt.dispose(),Rt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Xn),$t.removeEventListener("sessionend",Ki),_t.stop()};function ze(E){E.preventDefault(),ro("WebGLRenderer: Context Lost."),O=!0}function Se(){ro("WebGLRenderer: Context Restored."),O=!1;let E=$.autoReset,V=se.enabled,ot=se.autoUpdate,et=se.needsUpdate,X=se.type;ee(),$.autoReset=E,se.enabled=V,se.autoUpdate=ot,se.needsUpdate=et,se.type=X}function An(E){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Un(E){let V=E.target;V.removeEventListener("dispose",Un),Vc(V)}function Vc(E){Hc(E),st.remove(E)}function Hc(E){let V=st.get(E).programs;V!==void 0&&(V.forEach(function(ot){Rt.releaseProgram(ot)}),E.isShaderMaterial&&Rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,ot,et,X,Bt){V===null&&(V=ye);let Xt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ot=Wc(E,V,ot,et,X);v.setMaterial(et,Xt);let Jt=ot.index,Gt=1;if(et.wireframe===!0){if(Jt=ft.getWireframeAttribute(ot),Jt===void 0)return;Gt=2}let de=ot.drawRange,xe=ot.attributes.position,Zt=de.start*Gt,Ie=(de.start+de.count)*Gt;Bt!==null&&(Zt=Math.max(Zt,Bt.start*Gt),Ie=Math.min(Ie,(Bt.start+Bt.count)*Gt)),Jt!==null?(Zt=Math.max(Zt,0),Ie=Math.min(Ie,Jt.count)):xe!=null&&(Zt=Math.max(Zt,0),Ie=Math.min(Ie,xe.count));let Ge=Ie-Zt;if(Ge<0||Ge===1/0)return;Ct.setup(X,et,Ot,ot,Jt);let Ve,Ue=wt;if(Jt!==null&&(Ve=Pt.get(Jt),Ue=dt,Ue.setIndex(Ve)),X.isMesh)et.wireframe===!0?(v.setLineWidth(et.wireframeLinewidth*Oe()),Ue.setMode(H.LINES)):Ue.setMode(H.TRIANGLES);else if(X.isLine){let nn=et.linewidth;nn===void 0&&(nn=1),v.setLineWidth(nn*Oe()),X.isLineSegments?Ue.setMode(H.LINES):X.isLineLoop?Ue.setMode(H.LINE_LOOP):Ue.setMode(H.LINE_STRIP)}else X.isPoints?Ue.setMode(H.POINTS):X.isSprite&&Ue.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let nn=X._multiDrawStarts,Vt=X._multiDrawCounts,en=X._multiDrawCount,Ae=Jt?Pt.get(Jt).bytesPerElement:1,En=st.get(et).currentProgram.getUniforms();for(let qn=0;qn<en;qn++)En.setValue(H,"_gl_DrawID",qn),Ue.render(nn[qn]/Ae,Vt[qn])}else if(X.isInstancedMesh)Ue.renderInstances(Zt,Ge,X.count);else if(ot.isInstancedBufferGeometry){let nn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Vt=Math.min(ot.instanceCount,nn);Ue.renderInstances(Zt,Ge,Vt)}else Ue.render(Zt,Ge)};function Ji(E,V,ot,et){Z!==null&&E.isNodeMaterial&&Z.setObject(et,E),ct===!0&&te.setState(E,ot,!1),E.transparent===!0&&E.side===Qn&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,ws(E,V,et),E.side=ps,E.needsUpdate=!0,ws(E,V,et),E.side=Qn):ws(E,V,et)}this.compile=function(E,V,ot=null){ot===null&&(ot=E),Z!==null&&Z.renderStart(E,V,ot),A=Nt.get(ot),A.init(V),b.push(A),ot.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),E!==ot&&E.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights(),Z!==null&&Z.updateLights(A.state.lightsArray),Qt=this.localClippingEnabled,ct=te.init(this.clippingPlanes,Qt),ct===!0&&te.setGlobalState(this.clippingPlanes,V),Z!==null&&se.render(A.state.shadowsArray,ot,V);let et=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Bt=X.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){let Ot=Bt[Xt];Ji(Ot,ot,V,X),et.add(Ot)}else Ji(Bt,ot,V,X),et.add(Bt)}),A=b.pop(),Z!==null&&Z.renderEnd(),et},this.compileAsync=function(E,V,ot=null){let et=this.compile(E,V,ot);return new Promise(X=>{function Bt(){if(et.forEach(function(Xt){let Jt=st.get(Xt).currentProgram;(Jt===void 0||Jt.isReady())&&et.delete(Xt)}),et.size===0){X(E);return}setTimeout(Bt,10)}ve.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ss=null;function Vs(E){Ss&&Ss(E)}function Xn(){_t.stop()}function Ki(){_t.start()}let _t=new Mm;_t.setAnimationLoop(Vs),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){Ss=E,$t.setAnimationLoop(E),E===null?_t.stop():_t.start()},$t.addEventListener("sessionstart",Xn),$t.addEventListener("sessionend",Ki),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;Z!==null&&Z.renderStart(E,V);let ot=$t.enabled===!0&&$t.isPresenting===!0,et=R!==null&&(Q===null||ot)&&R.begin(N,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(V),V=$t.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,V,Q),A=Nt.get(E,b.length),A.init(V),A.state.textureUnits=ht.getTextureUnits(),b.push(A),Dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Lt.setFromProjectionMatrix(Dt,hi,V.reversedDepth),Qt=this.localClippingEnabled,ct=te.init(this.clippingPlanes,Qt),C=Ft.get(E,D.length),C.init(),D.push(C),$t.enabled===!0&&$t.isPresenting===!0){let Xt=N.xr.getDepthSensingMesh();Xt!==null&&Mt(Xt,V,-1/0,N.sortObjects)}Mt(E,V,0,N.sortObjects),C.finish(),Z!==null&&Z.updateLights(A.state.lightsArray),N.sortObjects===!0&&C.sort(ut,mt),oe=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,oe&&fe.addToRenderList(C,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&te.beginShadows();let X=A.state.shadowsArray;if(se.render(X,E,V),ct===!0&&te.endShadows(),(et&&R.hasRenderPass())===!1){let Xt=C.opaque,Ot=C.transmissive;if(A.setupLights(),V.isArrayCamera){let Jt=V.cameras;if(Ot.length>0)for(let Gt=0,de=Jt.length;Gt<de;Gt++){let xe=Jt[Gt];Me(Xt,Ot,E,xe)}oe&&fe.render(E);for(let Gt=0,de=Jt.length;Gt<de;Gt++){let xe=Jt[Gt];Qo(C,E,xe,xe.viewport)}}else Ot.length>0&&Me(Xt,Ot,E,V),oe&&fe.render(E),Qo(C,E,V)}Q!==null&&q===0&&(ht.updateMultisampleRenderTarget(Q),ht.updateRenderTargetMipmap(Q)),et&&R.end(N),E.isScene===!0&&E.onAfterRender(N,E,V),Ct.resetDefaultState(),J=-1,nt=null,b.pop(),b.length>0?(A=b[b.length-1],ht.setTextureUnits(A.state.textureUnits),ct===!0&&te.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?C=D[D.length-1]:C=null,Z!==null&&Z.renderEnd()};function Mt(E,V,ot,et){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)ot=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Lt)){et&&ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);let Xt=pt.update(E),Ot=E.material;Ot.visible&&C.push(E,Xt,Ot,ot,ge.z,null,V)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Lt))){let Xt=pt.update(E),Ot=E.material;if(et&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ge.copy(E.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ge.copy(Xt.boundingSphere.center)),ge.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ot)){let Jt=Xt.groups;for(let Gt=0,de=Jt.length;Gt<de;Gt++){let xe=Jt[Gt],Zt=Ot[xe.materialIndex];Zt&&Zt.visible&&C.push(E,Xt,Zt,ot,ge.z,xe,V)}}else Ot.visible&&C.push(E,Xt,Ot,ot,ge.z,null,V)}}let Bt=E.children;for(let Xt=0,Ot=Bt.length;Xt<Ot;Xt++)Mt(Bt[Xt],V,ot,et)}function Qo(E,V,ot,et){let{opaque:X,transmissive:Bt,transparent:Xt}=E;A.setupLightsView(ot),ct===!0&&te.setGlobalState(N.clippingPlanes,ot),et&&v.viewport(it.copy(et)),X.length>0&&si(X,V,ot),Bt.length>0&&si(Bt,V,ot),Xt.length>0&&si(Xt,V,ot),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Me(E,V,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[et.id]===void 0){let Zt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[et.id]=new Ln(1,1,{generateMipmaps:!0,type:Zt?pi:Vn,minFilter:gs,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Bt=A.state.transmissionRenderTarget[et.id],Xt=et.viewport||it;Bt.setSize(Xt.z*N.transmissionResolutionScale,Xt.w*N.transmissionResolutionScale);let Ot=N.getRenderTarget(),Jt=N.getActiveCubeFace(),Gt=N.getActiveMipmapLevel();N.setRenderTarget(Bt),N.getClearColor(Ht),qt=N.getClearAlpha(),qt<1&&N.setClearColor(16777215,.5),N.clear(),oe&&fe.render(ot);let de=N.toneMapping;N.toneMapping=ui;let xe=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),A.setupLightsView(et),ct===!0&&te.setGlobalState(N.clippingPlanes,et),si(E,ot,et),ht.updateMultisampleRenderTarget(Bt),ht.updateRenderTargetMipmap(Bt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ie=0,Ge=V.length;Ie<Ge;Ie++){let Ve=V[Ie],{object:Ue,geometry:nn,material:Vt,group:en}=Ve;if(Vt.side===Qn&&Ue.layers.test(et.layers)){let Ae=Vt.side;Vt.side=In,Vt.needsUpdate=!0,Oi(Ue,ot,et,nn,Vt,en),Vt.side=Ae,Vt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ht.updateMultisampleRenderTarget(Bt),ht.updateRenderTargetMipmap(Bt))}N.setRenderTarget(Ot,Jt,Gt),N.setClearColor(Ht,qt),xe!==void 0&&(et.viewport=xe),N.toneMapping=de}function si(E,V,ot){let et=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Bt=E.length;X<Bt;X++){let Xt=E[X],{object:Ot,geometry:Jt,group:Gt}=Xt,de=Xt.material;de.allowOverride===!0&&et!==null&&(de=et),Ot.layers.test(ot.layers)&&Oi(Ot,V,ot,Jt,de,Gt)}}function Oi(E,V,ot,et,X,Bt){Z!==null&&X.isNodeMaterial&&Z.setObject(E,X),E.onBeforeRender(N,V,ot,et,X,Bt),E.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(N,V,ot,et,E,Bt),X.transparent===!0&&X.side===Qn&&X.forceSinglePass===!1?(X.side=In,X.needsUpdate=!0,N.renderBufferDirect(ot,V,et,X,E,Bt),X.side=ps,X.needsUpdate=!0,N.renderBufferDirect(ot,V,et,X,E,Bt),X.side=Qn):N.renderBufferDirect(ot,V,et,X,E,Bt),E.onAfterRender(N,V,ot,et,X,Bt)}function ws(E,V,ot){V.isScene!==!0&&(V=ye);let et=st.get(E),X=A.state.lights,Bt=A.state.shadowsArray,Xt=X.state.version,Ot=Rt.getParameters(E,X.state,Bt,V,ot,A.state.lightProbeGridArray),Jt=Rt.getProgramCacheKey(Ot),Gt=et.programs;et.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,et.fog=V.fog;let de=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;et.envMap=At.get(E.envMap||et.environment,de),et.envMapRotation=et.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Un),Gt=new Map,et.programs=Gt);let xe=Gt.get(Jt);if(xe!==void 0){if(et.currentProgram===xe&&et.lightsStateVersion===Xt)return ta(E,Ot),xe}else Ot.uniforms=Rt.getUniforms(E),Z!==null&&E.isNodeMaterial&&Z.build(E,ot,Ot),E.onBeforeCompile(Ot,N),xe=Rt.acquireProgram(Ot,Jt),Gt.set(Jt,xe),et.uniforms=Ot.uniforms;let Zt=et.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Zt.clippingPlanes=te.uniform),ta(E,Ot),et.needsLights=Pn(E),et.lightsStateVersion=Xt,et.needsLights&&(Zt.ambientLightColor.value=X.state.ambient,Zt.lightProbe.value=X.state.probe,Zt.sunLights.value=X.state.sun,Zt.sunLightShadows.value=X.state.sunShadow,Zt.directionalLights.value=X.state.directional,Zt.directionalLightShadows.value=X.state.directionalShadow,Zt.spotLights.value=X.state.spot,Zt.spotLightShadows.value=X.state.spotShadow,Zt.rectAreaLights.value=X.state.rectArea,Zt.ltc_1.value=X.state.rectAreaLTC1,Zt.ltc_2.value=X.state.rectAreaLTC2,Zt.pointLights.value=X.state.point,Zt.pointLightShadows.value=X.state.pointShadow,Zt.hemisphereLights.value=X.state.hemi,Zt.sunShadowMatrix.value=X.state.sunShadowMatrix,Zt.sunShadowCascade.value=X.state.sunShadowCascade,Zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Zt.spotLightMatrix.value=X.state.spotLightMatrix,Zt.spotLightMap.value=X.state.spotLightMap,Zt.pointShadowMatrix.value=X.state.pointShadowMatrix),et.lightProbeGrid=A.state.lightProbeGridArray.length>0,et.currentProgram=xe,et.uniformsList=null,xe}function Hs(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=wr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function ta(E,V){let ot=st.get(E);ot.outputColorSpace=V.outputColorSpace,ot.batching=V.batching,ot.batchingColor=V.batchingColor,ot.instancing=V.instancing,ot.instancingColor=V.instancingColor,ot.instancingMorph=V.instancingMorph,ot.skinning=V.skinning,ot.morphTargets=V.morphTargets,ot.morphNormals=V.morphNormals,ot.morphColors=V.morphColors,ot.morphTargetsCount=V.morphTargetsCount,ot.numClippingPlanes=V.numClippingPlanes,ot.numIntersection=V.numClipIntersection,ot.vertexAlphas=V.vertexAlphas,ot.vertexTangents=V.vertexTangents,ot.toneMapping=V.toneMapping}function Gc(E,V){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;w.setFromMatrixPosition(V.matrixWorld);for(let ot=0,et=E.length;ot<et;ot++){let X=E[ot];if(X.texture!==null&&X.boundingBox.containsPoint(w))return X}return null}function Wc(E,V,ot,et,X){V.isScene!==!0&&(V=ye),ht.resetTextureUnits();let Bt=V.fog,Xt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?V.environment:null,Ot=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:we.workingColorSpace,Jt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Gt=At.get(et.envMap||Xt,Jt),de=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,xe=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Zt=!!ot.morphAttributes.position,Ie=!!ot.morphAttributes.normal,Ge=!!ot.morphAttributes.color,Ve=ui;et.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ve=N.toneMapping);let Ue=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,nn=Ue!==void 0?Ue.length:0,Vt=st.get(et),en=A.state.lights;if(ct===!0&&(Qt===!0||E!==nt)){let Be=E===nt&&et.id===J;te.setState(et,E,Be)}let Ae=!1;et.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==en.state.version||Vt.outputColorSpace!==Ot||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Gt||et.fog===!0&&Vt.fog!==Bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==te.numPlanes||Vt.numIntersection!==te.numIntersection)||Vt.vertexAlphas!==de||Vt.vertexTangents!==xe||Vt.morphTargets!==Zt||Vt.morphNormals!==Ie||Vt.morphColors!==Ge||Vt.toneMapping!==Ve||Vt.morphTargetsCount!==nn||!!Vt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ae=!0):(Ae=!0,Vt.__version=et.version);let En=Vt.currentProgram;Ae===!0&&(En=ws(et,V,X),Z&&et.isNodeMaterial&&Z.onUpdateProgram(et,En,Vt));let qn=!1,Fn=!1,ri=!1,Pe=En.getUniforms(),Ye=Vt.uniforms;if(v.useProgram(En.program)&&(qn=!0,Fn=!0,ri=!0),et.id!==J&&(J=et.id,Fn=!0),Vt.needsLights){let Be=Gc(A.state.lightProbeGridArray,X);Vt.lightProbeGrid!==Be&&(Vt.lightProbeGrid=Be,Fn=!0)}if(qn||nt!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Pe.setValue(H,"projectionMatrix",E.projectionMatrix),Pe.setValue(H,"viewMatrix",E.matrixWorldInverse);let _i=Pe.map.cameraPosition;_i!==void 0&&_i.setValue(H,re.setFromMatrixPosition(E.matrixWorld)),U.logarithmicDepthBuffer&&Pe.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Pe.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),nt!==E&&(nt=E,Fn=!0,ri=!0)}if(Vt.needsLights&&(en.state.sunShadowMap.length>0&&Pe.setValue(H,"sunShadowMap",en.state.sunShadowMap,ht),en.state.directionalShadowMap.length>0&&Pe.setValue(H,"directionalShadowMap",en.state.directionalShadowMap,ht),en.state.spotShadowMap.length>0&&Pe.setValue(H,"spotShadowMap",en.state.spotShadowMap,ht),en.state.pointShadowMap.length>0&&Pe.setValue(H,"pointShadowMap",en.state.pointShadowMap,ht)),X.isSkinnedMesh){Pe.setOptional(H,X,"bindMatrix"),Pe.setOptional(H,X,"bindMatrixInverse");let Be=X.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Pe.setValue(H,"boneTexture",Be.boneTexture,ht))}X.isBatchedMesh&&(Pe.setOptional(H,X,"batchingTexture"),Pe.setValue(H,"batchingTexture",X._matricesTexture,ht),Pe.setOptional(H,X,"batchingIdTexture"),Pe.setValue(H,"batchingIdTexture",X._indirectTexture,ht),Pe.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&Pe.setValue(H,"batchingColorTexture",X._colorsTexture,ht));let Yn=ot.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&G.update(X,ot,En),(Fn||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Pe.setValue(H,"receiveShadow",X.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&V.environment!==null&&(Ye.envMapIntensity.value=V.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Lb()),Fn){if(Pe.setValue(H,"toneMappingExposure",N.toneMappingExposure),Vt.needsLights&&ea(Ye,ri),Bt&&et.fog===!0&&Yt.refreshFogUniforms(Ye,Bt),Yt.refreshMaterialUniforms(Ye,et,Y,W,A.state.transmissionRenderTarget[E.id]),Vt.needsLights&&Vt.lightProbeGrid){let Be=Vt.lightProbeGrid;Ye.probesSH.value=Be.texture,Ye.probesMin.value.copy(Be.boundingBox.min),Ye.probesMax.value.copy(Be.boundingBox.max),Ye.probesResolution.value.copy(Be.resolution)}wr.upload(H,Hs(Vt),Ye,ht)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(wr.upload(H,Hs(Vt),Ye,ht),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Pe.setValue(H,"center",X.center),Pe.setValue(H,"modelViewMatrix",X.modelViewMatrix),Pe.setValue(H,"normalMatrix",X.normalMatrix),Pe.setValue(H,"modelMatrix",X.matrixWorld),et.uniformsGroups!==void 0){let Be=et.uniformsGroups;for(let _i=0,vi=Be.length;_i<vi;_i++){let ji=Be[_i];gt.update(ji,En),gt.bind(ji,En)}}return En}function ea(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.sunLights.needsUpdate=V,E.sunLightShadows.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Pn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,V,ot){let et=st.get(E);et.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),st.get(E.texture).__webglTexture=V,st.get(E.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ot,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let ot=st.get(E);ot.__webglFramebuffer=V,ot.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,ot=0){Q=E,B=V,q=ot;let et=null,X=!1,Bt=!1;if(E){let Ot=st.get(E);if(Ot.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Ot.__webglFramebuffer),it.copy(E.viewport),St.copy(E.scissor),Tt=E.scissorTest,v.viewport(it),v.scissor(St),v.setScissorTest(Tt),J=-1;return}else if(Ot.__webglFramebuffer===void 0)ht.setupRenderTarget(E);else if(Ot.__hasExternalTextures)ht.rebindTextures(E,st.get(E.texture).__webglTexture,st.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let de=E.depthTexture;if(Ot.__boundDepthTexture!==de){if(de!==null&&st.has(de)&&(E.width!==de.image.width||E.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(E)}}let Jt=E.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Bt=!0);let Gt=st.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[V])?et=Gt[V][ot]:et=Gt[V],X=!0):E.samples>0&&ht.useMultisampledRTT(E)===!1?et=st.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?et=Gt[ot]:et=Gt,it.copy(E.viewport),St.copy(E.scissor),Tt=E.scissorTest}else it.copy(yt).multiplyScalar(Y).floor(),St.copy(It).multiplyScalar(Y).floor(),Tt=le;if(ot!==0&&(et=K),v.bindFramebuffer(H.FRAMEBUFFER,et)&&v.drawBuffers(E,et),v.viewport(it),v.scissor(St),v.setScissorTest(Tt),X){let Ot=st.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,ot)}else if(Bt){let Ot=V;for(let Jt=0;Jt<E.textures.length;Jt++){let Gt=st.get(E.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,Gt.__webglTexture,ot,Ot)}}else if(E!==null&&ot!==0){let Ot=st.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,ot)}J=-1};function zr(E){let V=st.get(E);return(V.__readFormat!==E.format||V.__readType!==E.type)&&(V.__readFormat=E.format,V.__readType=E.type,V.__formatReadable=U.textureFormatReadable(E.format),V.__typeReadable=U.textureTypeReadable(E.type)),V}this.readRenderTargetPixels=function(E,V,ot,et,X,Bt,Xt,Ot=0){if(!(E&&E.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=st.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Xt!==void 0&&(Jt=Jt[Xt]),Jt){v.bindFramebuffer(H.FRAMEBUFFER,Jt);try{let Gt=E.textures[Ot],de=Gt.format,xe=Gt.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot);let Zt=zr(Gt);if(Zt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-et&&ot>=0&&ot<=E.height-X&&H.readPixels(V,ot,et,X,Et.convert(de),Et.convert(xe),Bt)}finally{let Gt=Q!==null?st.get(Q).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,V,ot,et,X,Bt,Xt,Ot=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=st.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Xt!==void 0&&(Jt=Jt[Xt]),Jt)if(V>=0&&V<=E.width-et&&ot>=0&&ot<=E.height-X){v.bindFramebuffer(H.FRAMEBUFFER,Jt);let Gt=E.textures[Ot],de=Gt.format,xe=Gt.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot);let Zt=zr(Gt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.bufferData(H.PIXEL_PACK_BUFFER,Bt.byteLength,H.STREAM_READ),H.readPixels(V,ot,et,X,Et.convert(de),Et.convert(xe),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ge=Q!==null?st.get(Q).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Ge);let Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Yp(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Bt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ie),H.deleteSync(Ve),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,ot=0){let et=Math.pow(2,-ot),X=Math.floor(E.image.width*et),Bt=Math.floor(E.image.height*et),Xt=V!==null?V.x:0,Ot=V!==null?V.y:0;ht.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,ot,0,0,Xt,Ot,X,Bt),v.unbindTexture()},this.copyTextureToTexture=function(E,V,ot=null,et=null,X=0,Bt=0){let Xt,Ot,Jt,Gt,de,xe,Zt,Ie,Ge,Ve=E.isCompressedTexture?E.mipmaps[Bt]:E.image;if(ot!==null)Xt=ot.max.x-ot.min.x,Ot=ot.max.y-ot.min.y,Jt=ot.isBox3?ot.max.z-ot.min.z:1,Gt=ot.min.x,de=ot.min.y,xe=ot.isBox3?ot.min.z:0;else{let Ye=Math.pow(2,-X);Xt=Math.floor(Ve.width*Ye),Ot=Math.floor(Ve.height*Ye),E.isDataArrayTexture?Jt=Ve.depth:E.isData3DTexture?Jt=Math.floor(Ve.depth*Ye):Jt=1,Gt=0,de=0,xe=0}et!==null?(Zt=et.x,Ie=et.y,Ge=et.z):(Zt=0,Ie=0,Ge=0);let Ue=Et.convert(V.format),nn=Et.convert(V.type),Vt;V.isData3DTexture?(ht.setTexture3D(V,0),Vt=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ht.setTexture2DArray(V,0),Vt=H.TEXTURE_2D_ARRAY):(ht.setTexture2D(V,0),Vt=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let en=v.getParameter(H.UNPACK_ROW_LENGTH),Ae=v.getParameter(H.UNPACK_IMAGE_HEIGHT),En=v.getParameter(H.UNPACK_SKIP_PIXELS),qn=v.getParameter(H.UNPACK_SKIP_ROWS),Fn=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Gt),v.pixelStorei(H.UNPACK_SKIP_ROWS,de),v.pixelStorei(H.UNPACK_SKIP_IMAGES,xe);let ri=E.isDataArrayTexture||E.isData3DTexture,Pe=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let Ye=st.get(E),Yn=st.get(V),Be=st.get(Ye.__renderTarget),_i=st.get(Yn.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Be.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let vi=0;vi<Jt;vi++)ri&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,st.get(E).__webglTexture,X,xe+vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,st.get(V).__webglTexture,Bt,Ge+vi)),H.blitFramebuffer(Gt,de,Xt,Ot,Zt,Ie,Xt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||st.has(E)){let Ye=st.get(E),Yn=st.get(V);v.bindFramebuffer(H.READ_FRAMEBUFFER,k),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,tt);for(let Be=0;Be<Jt;Be++)ri?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,X,xe+Be):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,X),Pe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yn.__webglTexture,Bt,Ge+Be):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yn.__webglTexture,Bt),X!==0?H.blitFramebuffer(Gt,de,Xt,Ot,Zt,Ie,Xt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):Pe?H.copyTexSubImage3D(Vt,Bt,Zt,Ie,Ge+Be,Gt,de,Xt,Ot):H.copyTexSubImage2D(Vt,Bt,Zt,Ie,Gt,de,Xt,Ot);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pe?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Vt,Bt,Zt,Ie,Ge,Xt,Ot,Jt,Ue,nn,Ve.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Vt,Bt,Zt,Ie,Ge,Xt,Ot,Jt,Ue,Ve.data):H.texSubImage3D(Vt,Bt,Zt,Ie,Ge,Xt,Ot,Jt,Ue,nn,Ve):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Bt,Zt,Ie,Xt,Ot,Ue,nn,Ve.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Bt,Zt,Ie,Ve.width,Ve.height,Ue,Ve.data):H.texSubImage2D(H.TEXTURE_2D,Bt,Zt,Ie,Xt,Ot,Ue,nn,Ve);v.pixelStorei(H.UNPACK_ROW_LENGTH,en),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ae),v.pixelStorei(H.UNPACK_SKIP_PIXELS,En),v.pixelStorei(H.UNPACK_SKIP_ROWS,qn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Fn),Bt===0&&V.generateMipmaps&&H.generateMipmap(Vt),v.unbindTexture()},this.initRenderTarget=function(E){st.get(E).__webglFramebuffer===void 0&&ht.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ht.setTextureCube(E,0):E.isData3DTexture?ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ht.setTexture2DArray(E,0):ht.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){B=0,q=0,Q=null,v.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Db=["top","side","bottom"],Nb={slab_bottom:1,slab_top:1,stairs:1},Cm=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function Ub(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Cm[n.facing|0]]:n.shape==="pole"?[[.32,0,.32,.68,1,.68]]:null}function Rm(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let R of t){if(!R||typeof R.id!="string")throw new Error("block without id");if(!Number.isInteger(R.n)||R.n<0||R.n>255)throw new Error("bad n for "+R.id);if(i[R.n])throw new Error("duplicate n "+R.n+" ("+R.id+")");if(s[R.id])throw new Error("duplicate id "+R.id);let N=R.colors||{},O=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},R);if(O.placeable=O.n!==0&&!O.liquid,O.colors={top:N.top||"#888888",side:N.side||N.top||"#888888",bottom:N.bottom||N.top||"#888888"},O.opaque=O.solid&&!O.transparent&&!O.cutout&&!Nb[O.shape],O.tile={},O.tileOf&&s[O.tileOf])O.tile=Object.assign({},s[O.tileOf].tile);else if(O.n!==0){let Z={};for(let K of Db){let k=O.colors[K]+"|"+(O.pattern==="grass"||O.pattern==="log"||O.pattern==="lamp"||O.pattern==="table"||O.pattern==="stele"||O.pattern==="torch"||O.pattern==="bed"||O.pattern==="snow"||O.pattern==="lantern"||O.pattern==="bookshelf"||O.pattern==="hay"||O.pattern==="barrel"||O.pattern==="chest"||O.pattern==="farmland"?K:"");Z[k]===void 0&&(Z[k]=r.length,r.push({block:O.id,face:K,color:O.colors[K],pattern:O.pattern,accent:O.accent||null,top:O.colors.top})),O.tile[K]=Z[k]}}i[O.n]=O,s[O.id]=O}if(!s.air)throw new Error("registry needs air");for(let R of e){if(s[R.id])throw new Error("duplicate id "+R.id);s[R.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},R)}for(let R in s){let N=s[R].drops;if(N&&N!=="self"&&!s[N])throw new Error(R+" drops unknown "+N)}let o=R=>(typeof R=="number"?i[R]:s[R])||null,a=new Uint8Array(256),h=new Uint8Array(256),l=new Uint8Array(256),m=new Uint8Array(256),f=new Uint8Array(256),d=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8,pole:9},p=new Uint8Array(256),M=new Array(256).fill(null),y=new Uint8Array(256),g=new Uint8Array(256),I=new Uint8Array(256),F=new Uint8Array(256),w=new Uint8Array(256),C=new Int16Array(256).fill(-1),A=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((R,N)=>{R&&(y[N]=R.solid?1:0,g[N]=R.opaque?1:0,I[N]=R.transparent?1:0,F[N]=R.emissive?1:0,w[N]=R.liquid?1:0,a[N]=R.light!=null?R.light:R.emissive?15:0,h[N]=R.liquid?2:0,l[N]=x[R.shape]||0,m[N]=R.cutout?1:0,f[N]=R.climbable?1:0,d[N]=R.plant?1:0,p[N]=R.facing|0,R.solid&&(M[N]=Ub(R)),N&&(C[N]=R.tile.top,A[N]=R.tile.side,D[N]=R.tile.bottom))});let b=(n&&n.blueprints||[]).map(R=>Object.assign({kind:"blueprint"},R));return{blocks:i.filter(Boolean),items:e.map(R=>s[R.id]),blueprints:b,tiles:r,get:o,toolOf:R=>{let N=R&&s[R];return N&&N.kind==="item"&&N.tool&&typeof N.tool=="object"?N.tool:null},num:R=>{let N=s[R];if(!N||N.kind!=="block")throw new Error("no block "+R);return N.n},name:R=>{let N=o(R);return N?N.name_zh:String(R)},maxStack:R=>{let N=s[R];return N?N.maxStack:64},dropOf:R=>{let N=i[R];return!N||!N.drops?null:N.drops==="self"?N.id:N.drops},breakTime:R=>{let N=i[R];return!N||N.hardness<0?1/0:.25+N.hardness*.55},flat:{solid:y,opaque:g,trans:I,emit:F,liquid:w,tileTop:C,tileSide:A,tileBottom:D,lightEmit:a,attn:h,shape:l,cutout:m,climb:f,plant:d,facing:p,boxes:M}}}var Xi=n=>Math.floor(n/16);var me=(n,t,e)=>(t*16+e)*16+n;var Di=(n,t)=>n+","+t,Im=n=>n.split(",").map(Number);function Lu(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Xi(n),s=Xi(e);return{cx:i,cz:s,i:me(n-i*16,t,e-s*16)}}function Pm(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Hn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var _s=(n,t,e)=>Hn(n,t,0,e);function Fb(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Du=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Ob=.5*(Math.sqrt(3)-1),No=(3-Math.sqrt(3))/6;function Ni(n){let t=Fb(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*Ob,a=Math.floor(s+o),h=Math.floor(r+o),l=(a+h)*No,m=s-(a-l),f=r-(h-l),d=m>f?1:0,x=1-d,p=m-d+No,M=f-x+No,y=m-1+2*No,g=f-1+2*No,I=a&255,F=h&255,w=0,C,A;return C=.5-m*m-f*f,C>0&&(A=Du[i[I+i[F]]&7],C*=C,w+=C*C*(A[0]*m+A[1]*f)),C=.5-p*p-M*M,C>0&&(A=Du[i[I+d+i[F+x]]&7],C*=C,w+=C*C*(A[0]*p+A[1]*M)),C=.5-y*y-g*g,C>0&&(A=Du[i[I+1+i[F+1]]&7],C*=C,w+=C*C*(A[0]*y+A[1]*g)),70*w}}function qi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let h=0;h<i;h++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Nu(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),h=t(e-r),l=t(i-o),m=t(s-a),f=(x,p,M)=>Hn(n,r+x,o+p,a+M),d=(x,p,M)=>x+(p-x)*M;return d(d(d(f(0,0,0),f(1,0,0),h),d(f(0,1,0),f(1,1,0),h),l),d(d(f(0,0,1),f(1,0,1),h),d(f(0,1,1),f(1,1,1),h),l),m)}}var Er=160,mi=18,Uu=[[0,1],[-1,0],[0,-1],[1,0]];function Lm(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var zb=(n,t,e)=>e&1?[t,n]:[n,t];function Dm(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(h,l){let m=h+","+l;if(i.has(m))return i.get(m);let f=null,d=x=>Hn(n+909,h,x,l);if(d(0)<.45&&e&&e.houses&&e.houses.length){let x=Math.floor((h+.2+d(1)*.6)*Er),p=Math.floor((l+.2+d(2)*.6)*Er),M=t.biomeOf(x,p),y=t.height(x,p),g=(M==="plains"||M==="desert")&&Math.hypot(x,p)>110;if(g&&y>s+1)for(let I=0;I<16&&g;I++)for(let F of[7,14]){let w=t.height(x+Math.round(Math.cos(I*.39)*F),p+Math.round(Math.sin(I*.39)*F));(Math.abs(w-y)>3||w<=s)&&(g=!1)}else g=!1;if(g){let I=[],F=[],w=3+Math.floor(d(3)*4),C=(A,D,b,R)=>{let N=r[A];if(!N)return null;let[O,Z]=zb(N.size[0],N.size[2],R),K={tpl:A,rot:R,x0:D-(O>>1),z0:b-(Z>>1),y,w:O,d:Z,h:N.size[1]};return I.push(K),K};C("well",x,p,0),C("lamp_post",x+3,p+3,0),C("lamp_post",x-3,p-3,0);for(let A=0;A<w;A++){let D=A/w*Math.PI*2+d(10+A)*.5,b=9+d(20+A)*3,R=x+Math.round(Math.cos(D)*b),N=p+Math.round(Math.sin(D)*b),O=x-R,Z=p-N,K=0,k=-1/0;Uu.forEach((it,St)=>{let Tt=it[0]*O+it[1]*Z;Tt>k&&(k=Tt,K=St)});let tt=e.houses[Math.floor(d(30+A)*e.houses.length)],B=C(tt,R,N,K);if(!B)continue;let q=r[tt],[Q,J]=Lm(q.door[0],q.door[1],q.size[0],q.size[2],K),nt={x:B.x0+Q+Uu[K][0],z:B.z0+J+Uu[K][1]};F.push({ax:x,az:p,bx:nt.x,bz:nt.z})}f={id:m,x,z:p,y,biome:M,structures:I,paths:F,villagers:2+Math.floor(d(4)*3)}}}return i.set(m,f),f}function a(h,l,m,f){let d=[];for(let x=Math.floor((l-mi)/Er);x<=Math.floor((f+mi)/Er);x++)for(let p=Math.floor((h-mi)/Er);p<=Math.floor((m+mi)/Er);p++){let M=o(p,x);M&&M.x+mi>=h&&M.x-mi<=m&&M.z+mi>=l&&M.z-mi<=f&&d.push(M)}return d}return{plan:o,around:a,chunk:(h,l)=>a(h*16,l*16,h*16+16-1,l*16+16-1)}}function Nm(n,t,e,i,s,r,o){let a=t*16,h=e*16,l=(p,M)=>p>=a&&p<a+16&&M>=h&&M<h+16,m=i.biome==="desert",f=m?s.desert||{}:{},d=p=>{let M=s.palette[p];if(!M)return null;let y=f[M]||M;return r.byId(y)},x=m?r.byId("sandstone"):r.byId("cobblestone");for(let p of i.paths){let M=Math.max(Math.abs(p.bx-p.ax),Math.abs(p.bz-p.az));for(let y=0;y<=M;y++){let g=Math.round(p.ax+(p.bx-p.ax)*y/M),I=Math.round(p.az+(p.bz-p.az)*y/M);if(!l(g,I))continue;let F=o.height(g,I),w=me(g-a,F,I-h);n[w]&&n[w]!==r.water&&(n[w]=r.path);for(let C=F+1;C<Math.min(64,F+4);C++){let A=me(g-a,C,I-h);(n[A]===r.leaves||n[A]===r.log||C===F+1)&&(n[A]=0)}}}for(let p of i.structures){let M=s.templates[p.tpl];if(!M)continue;let[y,,g]=M.size;for(let I=0;I<g;I++)for(let F=0;F<y;F++){let[w,C]=Lm(F,I,y,g,p.rot),A=p.x0+w,D=p.z0+C;if(!l(A,D))continue;let b=A-a,R=D-h;for(let N=p.y-1;N>Math.max(0,p.y-8);N--){let O=me(b,N,R);if(n[O]&&n[O]!==r.water)break;n[O]=x}for(let N=p.y+M.size[1];N<Math.min(64,p.y+M.size[1]+3);N++)n[me(b,N,R)]=0;M.layers.forEach((N,O)=>{let Z=(N[I]||"")[F];if(!Z||Z===" ")return;let K=p.y+O;K>=64||(n[me(b,K,R)]=Z==="."?0:d(Z)||0)})}}}var vs=192;function Um(n,t,e){let i=e&&e.ruins,s=new Map;function r(a,h){let l=a+","+h;if(s.has(l))return s.get(l);let m=null;if(i){let f=p=>_s(n+9001+p*31,a,h),d=a*vs+24+Math.floor(f(2)*(vs-48)),x=h*vs+24+Math.floor(f(3)*(vs-48));if(f(1)<i.chance&&Math.hypot(d,x)>140){let p=i.byBiome[t.biomeOf(d,x)],M=Array.isArray(p)?p[Math.floor(f(4)*p.length)]:p,y=M&&i.templates[M];if(y&&!(t.villages&&t.villages.around(d-40,x-40,d+40,x+40).length)){let g=y.layers[0][0].length,I=y.layers[0].length;m={id:l,kind:M,x:d-(g>>1),z:x-(I>>1),y:t.height(d,x)+(y.yoff||0),w:g,d:I,h:y.layers.length}}}}return s.set(l,m),m}function o(a,h,l,m){let f=[];for(let d=Math.floor((h-32)/vs);d<=Math.floor((m+32)/vs);d++)for(let x=Math.floor((a-32)/vs);x<=Math.floor((l+32)/vs);x++){let p=r(x,d);p&&p.x<=l&&p.x+p.w>a&&p.z<=m&&p.z+p.d>h&&f.push(p)}return f}return{around:o,chunk:(a,h)=>o(a*16,h*16,a*16+16-1,h*16+16-1),at:(a,h)=>o(Math.floor(a),Math.floor(h),Math.floor(a),Math.floor(h))[0]||null}}function Fm(n,t,e,i,s,r){let o=s.ruins.templates[i.kind],a=s.ruins.palette,h=t*16,l=e*16,m=o.foundation?r(o.foundation):0,f=r("water");o.layers.forEach((d,x)=>d.forEach((p,M)=>{for(let y=0;y<p.length;y++){let g=p[y];if(g===" ")continue;let I=i.x+y-h,F=i.z+M-l,w=i.y+x;if(!(I<0||I>=16||F<0||F>=16||w<=0||w>=64)&&(n[me(I,w,F)]=g==="."?0:r(a[g]),x===0&&m))for(let C=w-1,A=0;C>0&&A<8;C--,A++){let D=n[me(I,C,F)];if(D&&D!==f)break;n[me(I,C,F)]=m}}}))}function Om(n,t,e){let i=(Math.imul(n,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791))>>>0||1;return()=>{i=i+1831565813>>>0;let s=i;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function zm(n,t,e,i){let s=n.createInventory(27);for(let r of t||[])if(e()<r.p){let o=r.min+Math.floor(e()*(r.max-r.min+1));if(o>0){let a;do a=Math.floor(e()*27);while(s.slots[a]&&s.slots.some(h=>!h));s.slots[a]||(s.slots[a]={id:r.id,count:Math.min(o,i?i(r.id):64)})}}return s}var Dn=24;var km={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730",bamboo:"\u7AF9\u6797"},Bm=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],Tr=112;function Vm(n,t,e){let i=B=>t.num(B),s=B=>{try{return i(B)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{bamboo:s("bamboo"),tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ni(n),h=Ni(n+101),l=Ni(n+202),m=Ni(n+303),f=Ni(n+404),d=Nu(n+505),x=Nu(n+606);function p(B,q){let Q=qi(a,B/190,q/190,3),J=qi(h,B/55,q/55,4),nt=Math.max(0,qi(l,B/130,q/130,2)-.1),it=27+Q*9+J*6+nt*nt*75;return Math.max(4,Math.min(54,Math.floor(it)))}let M=Ni(n+808);function y(B,q){let Q=p(B,q),J=qi(M,B/900,q/900,2),nt=Math.min(1,Math.max(0,(Math.hypot(B,q)-240)/80)),it=Math.min(1,Math.max(0,(-.18-J)/.17)),St=it*it*(3-2*it)*nt;return St>0&&(Q=Math.round(Q*(1-St)+(Dn-14)*St)),Q<Dn-1?Math.max(3,Math.floor(Dn-1-(Dn-1-Q)*1.8)):Q}function g(B,q){let Q=(_s(n+3,B,q)-.5)*.025;return{t:qi(m,B/420,q/420,2)+Q,u:qi(f,B/380,q/380,2)-Q}}function I(B,q,Q=y(B,q)){if(Q<Dn-1)return"ocean";let{t:J,u:nt}=g(B,q);return J<-.3?"snow":J>.28&&nt<.05?"desert":nt>.12?J>.25&&nt>.3&&Math.hypot(B-F,q-w)>200?"bamboo":"forest":"plains"}let F=0,w=0,C=null;function A(){if(C)return C;let B=(q,Q)=>{let J=y(q,Q);return J>=Dn+2&&Math.abs(y(q+1,Q)-J)<2&&Math.abs(y(q,Q+1)-J)<2};for(let q=0;q<400;q+=2)for(let Q=0;Q<Math.max(1,q*2);Q++){let J=Q/Math.max(1,q*2)*Math.PI*2,nt=Math.round(Math.cos(J)*q),it=Math.round(Math.sin(J)*q);if(B(nt,it)&&B(nt+3,it+2))return C={x:nt+.5,y:y(nt,it)+1,z:it+.5,stele:{x:nt+3,y:y(nt+3,it+2)+1,z:it+2},portal:{x:nt-3,y:Math.max(Dn+1,y(nt-3,it+2))+1,z:it+2}},C}return C={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},C}function D(B,q){let Q=[],J=B*16,nt=q*16,it=Math.floor((J-80)/Tr),St=Math.floor((J+16+80)/Tr),Tt=Math.floor((nt-80)/Tr),Ht=Math.floor((nt+16+80)/Tr);for(let qt=Tt;qt<=Ht;qt++)for(let Ut=it;Ut<=St;Ut++){let W=It=>Hn(n+707,Ut,It,qt);if(W(0)>.25)continue;let Y=(Ut+W(1))*Tr,ut=(qt+W(2))*Tr,mt=W(3)*Math.PI,yt=40+W(4)*30;Q.push({ax:Y-Math.cos(mt)*yt/2,az:ut-Math.sin(mt)*yt/2,dx:Math.cos(mt)*yt,dz:Math.sin(mt)*yt,len:yt,floor:7+Math.floor(W(5)*6),w:1.6+W(6)*1.2})}return Q}function b(B,q){let Q=new Uint8Array(16384),J=B*16,nt=q*16,it=18,St=new Int16Array(it*it);for(let Y=-1;Y<=16;Y++)for(let ut=-1;ut<=16;ut++)St[(Y+1)*it+ut+1]=y(J+ut,nt+Y);let Tt=A(),Ht=new Array(256);for(let Y=0;Y<16;Y++)for(let ut=0;ut<16;ut++){let mt=J+ut,yt=nt+Y,It=St[(Y+1)*it+ut+1],le=Math.max(Math.abs(St[(Y+1)*it+ut]-It),Math.abs(St[(Y+1)*it+ut+2]-It),Math.abs(St[Y*it+ut+1]-It),Math.abs(St[(Y+2)*it+ut+1]-It))>=3,Lt=Ht[Y*16+ut]=I(mt,yt,It),ct=It<=Dn+1,Qt,Dt;Lt==="ocean"||ct||Lt==="desert"?(Qt=r.sand,Dt=r.sand):le?(Qt=r.stone,Dt=r.stone):Lt==="snow"?(Qt=r.snow,Dt=r.dirt):(Qt=r.grass,Dt=r.dirt);for(let re=0;re<=It;re++){let ge;if(re===0?ge=r.bedrock:re===It?ge=Qt:re>=It-3?ge=Dt:Lt==="desert"&&re>=It-7?ge=r.sandstone:ge=r.stone,ge===r.stone&&le&&re>=It-4){let ye=Hn(n,mt,re,yt);ye<.06?ge=r.coal:ye<.09?ge=r.iron:ye<.096&&(ge=r.ruby)}Q[me(ut,re,Y)]=ge}for(let re=It+1;re<=Dn;re++)Q[me(ut,re,Y)]=re===Dn&&Lt==="snow"?r.ice:r.water}R(Q,B,q,St,it);for(let Y=0;Y<Bm.length;Y++){let ut=Bm[Y],mt=r[ut.ore];for(let yt=0;yt<ut.count;yt++){let It=Qt=>Hn(n+31*Y+Qt,B*977+yt,Qt,q*131+yt);if(It(9)>ut.chance)continue;let le=Math.floor(It(1)*16),Lt=ut.y0+Math.floor(It(2)*(ut.y1-ut.y0)),ct=Math.floor(It(3)*16);for(let Qt=0;Qt<ut.size;Qt++){le>=0&&le<16&&ct>=0&&ct<16&&Lt>0&&Lt<64&&Q[me(le,Lt,ct)]===r.stone&&(Q[me(le,Lt,ct)]=mt);let Dt=Math.floor(It(10+Qt)*6);Dt===0?le++:Dt===1?le--:Dt===2?Lt++:Dt===3?Lt--:Dt===4?ct++:ct--}}}let qt=e?k.chunk(B,q):[];N(Q,B,q,St,it,Ht,Tt,qt);for(let Y of qt)Nm(Q,B,q,Y,e,r,K);if(tt)for(let Y of tt.chunk(B,q))Fm(Q,B,q,Y,e,r.byId);let Ut=Tt.stele;if(Math.floor(Ut.x/16)===B&&Math.floor(Ut.z/16)===q){let Y=Ut.x-J,ut=Ut.z-nt;Q[me(Y,Ut.y,ut)]=r.stele,Q[me(Y,Ut.y+1,ut)]=r.stele}let W=Tt.portal;if(r.portal&&W&&Math.floor(W.x/16)===B&&Math.floor(W.z/16)===q){let Y=W.x-J,ut=W.z-nt;for(let mt=Math.max(1,W.y-3);mt<W.y;mt++)(!Q[me(Y,mt,ut)]||Q[me(Y,mt,ut)]===r.water)&&(Q[me(Y,mt,ut)]=r.stone);Q[me(Y,W.y,ut)]=r.portal,Q[me(Y,W.y+1,ut)]=r.portal}return Q}function R(B,q,Q,J,nt){let it=q*16,St=Q*16,Tt=4,Ht=16/Tt+1,qt=64/Tt+1,Ut=new Float32Array(Ht*Ht*qt);for(let ut=0;ut<qt;ut++)for(let mt=0;mt<Ht;mt++)for(let yt=0;yt<Ht;yt++){let It=it+yt*Tt,le=ut*Tt,Lt=St+mt*Tt,ct=d(It/22,le/14,Lt/22)-.5,Qt=x(It/22,le/14,Lt/22)-.5;Ut[(ut*Ht+mt)*Ht+yt]=ct*ct+Qt*Qt}let W=(ut,mt,yt)=>Ut[(mt*Ht+yt)*Ht+ut],Y=D(q,Q);for(let ut=0;ut<16;ut++)for(let mt=0;mt<16;mt++){let yt=J[(ut+1)*nt+mt+1],It=yt<=Dn+1,le=It?yt-5:yt,Lt=mt>>2,ct=ut>>2,Qt=(mt&3)/Tt,Dt=(ut&3)/Tt;for(let ye=3;ye<=le;ye++){let oe=ye>>2,Oe=(ye&3)/Tt,H=W(Lt,oe,ct)+(W(Lt+1,oe,ct)-W(Lt,oe,ct))*Qt,He=W(Lt,oe,ct+1)+(W(Lt+1,oe,ct+1)-W(Lt,oe,ct+1))*Qt,ve=W(Lt,oe+1,ct)+(W(Lt+1,oe+1,ct)-W(Lt,oe+1,ct))*Qt,U=W(Lt,oe+1,ct+1)+(W(Lt+1,oe+1,ct+1)-W(Lt,oe+1,ct+1))*Qt;if((H+(He-H)*Dt)*(1-Oe)+(ve+(U-ve)*Dt)*Oe<.008){let $=me(mt,ye,ut);B[$]!==r.bedrock&&B[$]!==r.water&&(B[$]=0)}}if(!Y.length||It)continue;let re=it+mt,ge=St+ut;for(let ye of Y){let oe=Math.max(0,Math.min(1,((re-ye.ax)*ye.dx+(ge-ye.az)*ye.dz)/(ye.len*ye.len))),Oe=ye.ax+ye.dx*oe,H=ye.az+ye.dz*oe,He=Math.hypot(re-Oe,ge-H),ve=ye.w*Math.sin(Math.PI*oe);if(He<ve)for(let U=ye.floor+Math.floor(He*2);U<=yt;U++){let v=me(mt,U,ut);B[v]!==r.water&&(B[v]=0)}}}}function N(B,q,Q,J,nt,it,St,Tt){let Ht=q*16,qt=Q*16;for(let Ut=0;Ut<16;Ut++)for(let W=0;W<16;W++){let Y=Ht+W,ut=qt+Ut,mt=J[(Ut+1)*nt+W+1],yt=it[Ut*16+W];if(mt+1>=64||Math.hypot(Y-St.x,ut-St.z)<48)continue;let It=B[me(W,mt,Ut)],le=me(W,mt+1,Ut);if(B[le])continue;let Lt=_s(n+11,Y,ut),ct=_s(n+13,Y,ut);It===r.grass?Lt<.012&&o.length?B[le]=o[Math.floor(ct*o.length)]:Lt<(yt==="plains"?.1:.05)&&r.tallgrass?B[le]=r.tallgrass:yt==="forest"&&Lt<.08&&r.fern?B[le]=r.fern:yt==="forest"&&Lt<.084&&r.mushR&&(B[le]=ct<.5?r.mushR:r.mushB):It===r.sand&&yt==="desert"&&mt>Dn+1&&Lt<.008&&r.deadbush&&(B[le]=r.deadbush)}for(let Ut=2;Ut<14;Ut++)for(let W=2;W<14;W++){let Y=Ht+W,ut=qt+Ut,mt=J[(Ut+1)*nt+W+1],yt=it[Ut*16+W],It=B[me(W,mt,Ut)];if(Math.abs(Y-St.x)<7&&Math.abs(ut-St.z)<7||Tt.some(Qt=>Math.abs(Y-Qt.x)<mi+2&&Math.abs(ut-Qt.z)<mi+2))continue;let le=_s(n+7,Y,ut),Lt=_s(n+9,Y,ut);if(yt==="desert"&&It===r.sand&&mt>Dn+1&&le<.008&&r.cactus){let Qt=1+Math.floor(Lt*3);for(let Dt=mt+1;Dt<=mt+Qt&&Dt<64;Dt++)B[me(W,Dt,Ut)]=r.cactus;continue}if(yt==="snow"&&It===r.snow&&le<.02){Z(B,W,Ut,mt,5+Math.floor(Lt*3));continue}if(yt==="bamboo"&&It===r.grass&&r.bamboo&&le<.07){for(let Qt=mt+1;Qt<=mt+4+Math.floor(Lt*5)&&Qt<64;Qt++){let Dt=me(W,Qt,Ut);if(B[Dt]&&B[Dt]!==r.tallgrass)break;B[Dt]=r.bamboo}continue}let ct=yt==="forest"?.035:yt==="plains"?.003:0;It===r.grass&&le<ct&&O(B,W,Ut,mt,Y,ut,4+Math.floor(Lt*2))}}function O(B,q,Q,J,nt,it,St){let Tt=J+St;if(!(Tt+2>=64)){for(let Ht=Tt-2;Ht<=Tt+1;Ht++){let qt=Ht>=Tt?1:2;for(let Ut=-qt;Ut<=qt;Ut++)for(let W=-qt;W<=qt;W++){if(qt===2&&Math.abs(W)===2&&Math.abs(Ut)===2&&Hn(n,nt+W,Ht,it+Ut)<.6)continue;let Y=me(q+W,Ht,Q+Ut);B[Y]===r.air&&(B[Y]=r.leaves)}}B[me(q,J,Q)]=r.dirt;for(let Ht=J+1;Ht<=Tt;Ht++)B[me(q,Ht,Q)]=r.log}}function Z(B,q,Q,J,nt){let it=J+nt;if(!(it+2>=64)){for(let St=J+2;St<=it+1;St++){let Tt=it+1-St,Ht=Tt>=4?2:Tt>=1?1:0;for(let qt=-Ht;qt<=Ht;qt++)for(let Ut=-Ht;Ut<=Ht;Ut++){if(Ht===2&&Math.abs(Ut)+Math.abs(qt)>3)continue;let W=me(q+Ut,St,Q+qt);B[W]===r.air&&(B[W]=r.sleaves)}}B[me(q,J,Q)]=r.dirt;for(let St=J+1;St<=it;St++)B[me(q,St,Q)]=r.slog}}{let B=A();F=B.x,w=B.z}let K={height:y,baseHeight:p,biomeOf:I,climate:g,genChunk:b,findSpawn:A,SEA:Dn},k=Dm(n,K,e);K.villages=k;let tt=e&&e.ruins?Um(n,K,e):null;return K.ruins=tt,K}function Ou(n,t,e,i,s,r,o){let a=i/2,h=n-a,l=n+a,m=t,f=t+s,d=e-a,x=e+a,p=Math.floor(h),M=Math.floor(l-1e-6),y=Math.floor(m),g=Math.floor(f-1e-6),I=Math.floor(d),F=Math.floor(x-1e-6),w=!1;for(let C=y;C<=g;C++)for(let A=I;A<=F;A++)for(let D=p;D<=M;D++){let b=r(D,C,A);if(!b)continue;let R=b===!0?kb:b;for(let N of R){let O=D+N[0],Z=C+N[1],K=A+N[2],k=D+N[3],tt=C+N[4],B=A+N[5];if(!(k<=h+1e-6||O>=l-1e-6||tt<=m+1e-6||Z>=f-1e-6||B<=d+1e-6||K>=x-1e-6)){if(!o)return!0;w=!0,o.push([O,Z,K,k,tt,B])}}}return w}var kb=[[0,0,0,1,1,1]],Uo=(n,t,e,i,s,r)=>Ou(n,t,e,i,s,r,null),Hm=(n,t,e=.6,i=1.8)=>!Uo(n.x,n.y,n.z,e,i,t);function dc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,h=r/2,l=!1,m=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(f/.3)),x=e/d,p=[];for(let M=0;M<d;M++){let y=t.y*x;y&&(p.length=0,Ou(n.x,n.y+y,n.z,r,o,i,p)?(y<0?(n.y=Math.max(...p.map(g=>g[4])),l=!0):n.y=Math.min(...p.map(g=>g[1]))-o,t.y=0):n.y+=y);for(let g of["x","z"]){let I=t[g]*x;if(!I)continue;let F={x:n.x,y:n.y,z:n.z};if(F[g]+=I,p.length=0,!Ou(F.x,F.y,F.z,r,o,i,p)){n[g]=F[g];continue}if(a&&(l||s.grounded)){let C=Math.max(...p.map(A=>A[4]));if(C-n.y>0&&C-n.y<=1.01&&!Uo(F.x,C,F.z,r,o,i)&&!Uo(n.x,C,n.z,r,o,i)){m+=C-n.y,n.y=C,n[g]=F[g];continue}}let w=g==="x"?0:2;n[g]=I>0?Math.min(...p.map(C=>C[w]))-h-1e-4:Math.max(...p.map(C=>C[w+3]))+h+1e-4,Uo(n.x,n.y,n.z,r,o,i)&&(n[g]=F[g]-I),t[g]=0}}return!l&&t.y<=0&&Uo(n.x,n.y-.02,n.z,r,o,i)&&(l=!0),{onGround:l,stepped:m}}function Vb(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],h=null;for(let l of r){let m=[e+l[0],i+l[1],s+l[2]],f=[e+l[3],i+l[4],s+l[5]],d=0,x=1/0,p=-1,M=!0;for(let y=0;y<3&&M;y++){if(Math.abs(a[y])<1e-12){(o[y]<m[y]||o[y]>f[y])&&(M=!1);continue}let g=(m[y]-o[y])/a[y],I=(f[y]-o[y])/a[y];g>I&&([g,I]=[I,g]),g>d&&(d=g,p=y),I<x&&(x=I),d>x&&(M=!1)}if(M&&(!h||d<h.t)){let y=[0,0,0];p>=0&&(y[p]=-Math.sign(a[p])),h={t:d,face:p>=0?y:null}}}return h}function Cr(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),h=Math.floor(n.z),l=Math.sign(t.x),m=Math.sign(t.y),f=Math.sign(t.z),d=l?Math.abs(1/t.x):1/0,x=m?Math.abs(1/t.y):1/0,p=f?Math.abs(1/t.z):1/0,M=l?(l>0?o+1-n.x:n.x-o)*d:1/0,y=m?(m>0?a+1-n.y:n.y-a)*x:1/0,g=f?(f>0?h+1-n.z:n.z-h)*p:1/0,I=[0,0,0],F=0;for(;F<=e;){let w=i(o,a,h);if(w&&s(w)){let C=r&&r(w);if(!C)return{x:o,y:a,z:h,n:w,face:I,dist:F};let A=Vb(n,t,o,a,h,C);if(A&&A.t<=e)return{x:o,y:a,z:h,n:w,face:A.face||I,dist:A.t}}M<y&&M<g?(o+=l,F=M,M+=d,I=[-l,0,0]):y<g?(a+=m,F=y,y+=x,I=[0,-m,0]):(h+=f,F=g,g+=p,I=[0,0,-f])}return null}var Gu={};Jn(Gu,{ACC:()=>Xm,BOOST:()=>zu,BRAKE:()=>Ym,CONN:()=>gi,DECAY:()=>$m,DIR:()=>Oo,FRIC:()=>qm,MAX:()=>Fo,OPP:()=>Ir,SLOPE_G:()=>Bu,UP:()=>Ui,blockId:()=>zo,connect:()=>mc,isStraight:()=>ku,linked:()=>Zm,mount:()=>Vu,next:()=>Bo,pos:()=>gc,shapeOf:()=>Rr,step:()=>Hu});var gi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Ui={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Oo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Ir={n:"s",s:"n",e:"w",w:"e"},Hb=["ns","ew","ne","nw","se","sw"],Gm={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},Xm=3,Fo=6,zu=11,qm=.8,Ym=6,$m=1.5,Bu=2.5,ku=n=>n==="ns"||n==="ew"||!!Ui[n],zo=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),pc=(n,t)=>gi[n].find(e=>e!==t);function Rr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":Hb.find(e=>gi[e].includes(n)&&gi[e].includes(t))||null}function Bo(n,t,e,i,s,r){let[o,a]=Oo[s];for(let h of Ui[r]===s?[1]:[0,-1]){let l=n(t+o,e+h,i+a);if(l&&gi[l.shape].includes(Ir[s])&&Ui[l.shape]===Ir[s]==(h===-1))return{x:t+o,y:e+h,z:i+a,r:l}}return null}function Zm(n,t,e,i){let s=n(t,e,i);return s?gi[s.shape].filter(r=>Bo(n,t,e,i,r,s.shape)):[]}function Wm(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===Ir[e]?"asc_"+e:null}return n.length===2?Rr(n[0].d,n[1].d):Rr(n[0].d)}function mc(n,t,e,i,s,r="n"){let o=[];for(let l of["n","e","s","w"]){let[m,f]=Oo[l],d=Ir[l];for(let x of[0,1,-1]){let p=t+m,M=e+x,y=i+f,g=n(p,M,y);if(!g)continue;if(gi[g.shape].includes(d)&&Ui[g.shape]===d==(x===-1)){o.push({d:l,dy:x,pri:0});break}let I=Zm(n,p,M,y);if(I.length>=2)continue;let F=null;if(x===-1?F=!I.length||I[0]===l?"asc_"+d:null:Ui[g.shape]&&I.includes(Ui[g.shape])||(F=I.length?Rr(I[0],d):Rr(d)),F&&(!g.powered||ku(F))){o.push({d:l,dy:x,pri:1,ns:F,at:[p,M,y]});break}}}o.sort((l,m)=>l.pri-m.pri);let a=[];for(let l of o){if(a.length===2)break;let m=Wm(a.concat([l]));!m||s&&!ku(m)||a.push(l)}return{shape:a.length?Wm(a):Rr(r),updates:a.filter(l=>l.pri===1).map(l=>[l.at[0],l.at[1],l.at[2],l.ns])}}function Vu(n,t,e,i,s,r,o=()=>!1){let a=gi[n],h=m=>Oo[m][0]*s+Oo[m][1]*r+(o(m)?.01:0),l=h(a[0])>=h(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:l===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function Hu(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,gi[s.shape].includes(n.from)||(n.from=gi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=pc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,zu)),e>.1?n.v<Fo&&(n.v=Math.min(Fo,n.v+Xm*t)):e<-.1?n.v=Math.max(0,n.v-Ym*t):n.v=Math.max(0,n.v-qm*t),n.v>Fo&&!s.powered&&(n.v=Math.max(Fo,n.v-$m*t)),Ui[s.shape]&&(n.v+=(pc(s.shape,n.from)===Ui[s.shape]?-Bu:Bu)*t,n.v<0&&(n.from=pc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=pc(s.shape,n.from),o=Bo(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=Ir[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,zu));else{n.s=1,n.v=0;break}}return n}function gc(n){let t=gi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=Gm[e],r=Gm[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[h,l,m]=a<.5?[s,o,a*2]:[o,r,a*2-1],f=h[0]+(l[0]-h[0])*m,d=h[1]+(l[1]-h[1])*m,x=Ui[n.shape],p=x?x==="n"?1-d:x==="s"?d:x==="e"?f:1-f:0,M=x?i===x?1:-1:0;return{x:n.x+f,y:n.y+p,z:n.z+d,yaw:Math.atan2(-(l[0]-h[0]),-(l[1]-h[1])),pitch:Math.atan2(M,1)*(x?1:0)}}var $u={};Jn($u,{WINDOW:()=>Gb,create:()=>Wu,reel:()=>qu,roll:()=>Yu,tick:()=>Xu});var Gb=1.3,Jm=n=>3+n()*6;function Wu(n=Math.random){return{phase:"wait",t:0,biteAt:Jm(n),rnd:n}}function Xu(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=Jm(n.rnd),"escape"):null}var qu=n=>n&&n.phase==="bite"?"catch":"early";function Yu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function Km(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function jm(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function Qm(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var t0=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function e0(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function n0(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[me(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var i0=n=>btoa(String.fromCharCode.apply(null,n)),s0=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var Xb=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],xc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=Xb(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,s0(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=n0(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[h,l]=Im(r);for(let[m,f]of[...this.portals])Math.floor(f.x/16)===h&&Math.floor(f.z/16)===l&&this.portals.delete(m);for(let m=0;m<256;m++){let f=this.reg.get(a[m]);if(f&&(f.interact==="portal"||f.interact==="shadow_portal")){let d=h*16+m%16,x=l*16+Math.floor(m/16);this.portals.set(d+","+x,{x:d,z:x,name:f.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],h=o*4,l=.95+(o*2654435761>>>28)/16*.1;r.data[h]=a[0]*l,r.data[h+1]=a[1]*l,r.data[h+2]=a[2]*l,r.data[h+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,h=i-o/2/s,l=e+r/2/s,m=i+o/2/s;for(let f=Math.floor(h/16);f<=Math.floor(m/16);f++)for(let d=Math.floor(a/16);d<=Math.floor(l/16);d++){let x=this.tile(Di(d,f));x&&t.drawImage(x,Math.round((d*16-a)*s),Math.round((f*16-h)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:h}}explored(t,e){return this.tops.has(Di(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=i0(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function Zu(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var ju={};Jn(ju,{ARENA_R:()=>ko,H0:()=>xi,LAIR:()=>yi,findFrame:()=>Ku,makeShadowTerrain:()=>Ju});var xi=22,yi={x:0,z:40},ko=14;function Ju(n,t){let e=f=>t.num(f),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ni(n+11),r=Ni(n+23),o=(f,d)=>f<d?1:f<d+8?1-(f-d)/8:0;function a(f,d){let x=xi+qi(s,f/64,d/64,3)*10,p=Math.max(o(Math.hypot(f-.5,d-.5),9),o(Math.hypot(f-yi.x,d-yi.z),ko+2));return x=x*(1-p)+xi*p,Math.max(6,Math.min(54,Math.round(x)))}let h=new Set;for(let f=0;f<8;f++)h.add(Math.round(yi.x+Math.cos(f*Math.PI/4)*ko)+","+Math.round(yi.z+Math.sin(f*Math.PI/4)*ko));function l(f,d){let x=new Uint8Array(16384),p=f*16,M=d*16;for(let y=0;y<16;y++)for(let g=0;g<16;g++){let I=p+g,F=M+y,w=a(I,F),C=Math.hypot(I-.5,F-.5),A=Math.hypot(I-yi.x,F-yi.z);for(let D=0;D<=w;D++){let b=D===0?i.bedrock:D===w?i.moss:i.stone;if(b===i.stone){let R=Hn(n,I,D,F);D<16&&R<.014?b=i.ore:R>.995&&(b=i.vein)}x[me(g,D,y)]=b}if(C>6&&Math.abs(r(I/30,F/30))<.035&&(x[me(g,w,y)]=i.vein),A<ko-1&&(x[me(g,w,y)]=(Math.floor(I)+Math.floor(F))%2?i.bricks:i.stone),h.has(I+","+F)){for(let D=w+1;D<=w+4;D++)x[me(g,D,y)]=i.bricks;x[me(g,w+5,y)]=i.vein}if(F===0&&I>=-1&&I<=2)for(let D=xi+1;D<=xi+5;D++){let b=I>=0&&I<=1&&D>=xi+2&&D<=xi+4;x[me(g,D,y)]=b?i.portal:i.frame}}return x}let m={x:1,y:xi+1,z:2.5,stele:{x:1,y:xi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:l,findSpawn:()=>m,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function Ku(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let h=-4;h<=1;h++){let l=t+o[0]*a,m=i+o[1]*a,f=e+h,d=(M,y)=>[l+o[0]*M,f+y,m+o[1]*M],x=[];for(let M=0;M<2;M++)for(let y=0;y<3;y++)x.push(d(M,y));if(!x.every(M=>r(n(M[0],M[1],M[2]))))continue;let p=[];for(let M=0;M<3;M++)p.push(d(-1,M),d(2,M));for(let M=0;M<2;M++)p.push(d(M,-1),d(M,3));if(p.every(M=>n(M[0],M[1],M[2])===s)&&p.some(M=>M[0]===t&&M[1]===e&&M[2]===i))return x}return null}var Mc={};Jn(Mc,{HOTBAR:()=>Qu,SIZE:()=>yc,add:()=>Sn,canAdd:()=>Ho,count:()=>ei,craft:()=>ef,craftable:()=>vc,createInventory:()=>Vo,deserialize:()=>_c,moveBetween:()=>nf,moveSlot:()=>tf,remove:()=>Os,serialize:()=>Go,takeFromSlot:()=>Gn});var yc=36,Qu=9;function Vo(n=36){return{slots:new Array(n).fill(null)}}function Sn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function ei(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Os(n,t,e){if(ei(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Gn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function tf(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Ho(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return Sn(s,t,e,i)===0}var Go=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function _c(n,t=36){let e=Vo(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function vc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(ei(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function ef(n,t,e=()=>64,i){let s=vc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Os(n,o,t.in[o]);return Sn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function nf(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function qb(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Pr=(n,t)=>n.owned.includes(t),r0=(n,t)=>n?t?2:1:0;function Nn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function zs(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function o0(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function a0(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Pr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(zs(n,e.price),n.owned.push(e.id),{ok:!0}):Ho(t,e.id,e.qty,i)?(zs(n,e.price),Sn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var l0=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function c0(n){let t=qb(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function u0(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function f0(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Nn(n,s),canSpend:s=>n.coins>=s,spend:async s=>zs(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function d0(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var cf={};Jn(cf,{createStory:()=>sf,currentMain:()=>of,dailyPicks:()=>p0,dailyProgress:()=>lf,restartTutorial:()=>rf,skipTutorial:()=>bc,tick:()=>af});function sf(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function p0(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var rf=n=>{n.tut={step:0,base:null,done:!1}},bc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},of=(n,t)=>t.main[n.main]||null;function af(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=p0(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(h=>h.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var lf=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Xo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Wo=100,m0={choice:25,typed:40},Zb=5,hf=100;function g0(){return{phase:0,hp:Wo,retry:[],done:!1}}function x0(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Wo,n.hp+Zb),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?m0.typed:m0.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Xo.length-1?(n.phase++,n.hp=Wo,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var uf=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function Kb(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new jn(n);return e.colorSpace=on,e}function y0(){let n=new mn,t=[],e=(a,h)=>{let l=new vn({color:a});return l.userData.base=new he(a),l.userData.role=h,t.push(l),l},i=(a,h,l,m,f,d,x,p,M=n)=>{let y=new De(new Ke(a,h,l),e(m,f));return y.position.set(d,x,p),M.add(y),y},s=uf[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new De(new Ke(1.15,.72,.02),new vn({map:Kb(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let h=new mn;return h.position.set(a*1,1.9,.2),n.add(h),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,h).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,h),h});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function _0(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function v0(n,t){let e=uf[Math.min(uf.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function jb(){return new Map}function M0(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function ff(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Qb(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function b0(n){let t=jb();for(let e in n||{})t.set(e,Qb(n[e]));return t}var Sc=16;var GE=18;var $i=32;function S0(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Qe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],bt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function tS(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function jt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Yi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let h=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(h)*s*(.6+t()*.5),i+Math.sin(h)*s*(.6+t()*.5)])}jt(n,o)}var eS=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function nS(n,t){let e=Qe(t.color),i=S0(tS(t.block+t.face)),s=$i;if(eS.has(t.pattern)){iS(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=bt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Qe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=bt(e,1.12);for(let f=0;f<4;f++)Yi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=bt(e,.96);for(let f=0;f<4;f++)Yi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let f=Qe(t.top);n.fillStyle=bt(f);let d=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)d.push([x,8+Math.round(i()*5)]);jt(n,d)}if(o==="stone"||o==="bedrock")for(let f=0;f<5;f++)n.fillStyle=bt(e,i()<.5?.9:1.08),Yi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let f=0;f<4;f++)n.fillStyle=bt(e,.92),Yi(n,i,i()*s,i()*s,5);n.fillStyle=bt(a);for(let f=0;f<5;f++)Yi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let f=0;f<26;f++)n.fillStyle=bt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let f=3;f<s;f+=7)n.fillStyle=bt(e,.82),n.fillRect(f,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=bt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let f=0;f<9;f++)n.fillStyle=bt(e,i()<.5?.78:1.15),Yi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let f=7;f<s;f+=8)n.fillStyle=bt(e,.78),n.fillRect(0,f,s,1);n.fillStyle=bt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=bt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=bt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=bt([185,182,174]),jt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=bt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",jt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=bt(e,1.18,.72);for(let f=6;f<s;f+=10)n.fillRect(4+Math.floor(i()*10),f,10,2)}if(o==="gold"&&(n.fillStyle=bt(e,1.15),jt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=bt(e,.9),jt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=bt(Qe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=bt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=bt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=bt(Qe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=bt(Qe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=bt(a),n.fillRect(14,0,4,4)):(n.fillStyle=bt(Qe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=bt(a),n.fillRect(0,0,s,10),n.fillStyle=bt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=bt(Qe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=bt(a),n.fillRect(0,0,9,14))),o==="wool")for(let f=0;f<7;f++)n.fillStyle=bt(e,i()<.5?.94:1.04),Yi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=bt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(a,1.3),jt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=bt(Qe("#EFEBDD"),1,.8),jt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=bt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let f=8;f<s;f+=9)n.fillStyle=bt(e,.9),n.fillRect(0,f,s,2);if(o==="cactus")if(t.face==="side"){for(let f=4;f<s;f+=8)n.fillStyle=bt(e,.82),n.fillRect(f,0,2,s);n.fillStyle=bt(Qe("#EFEBDD"),1,.7);for(let f=0;f<6;f++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=bt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="bamboo")if(t.face==="side"){n.fillStyle=bt(e,.8),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s),n.fillStyle=bt(e,1.25);for(let f of[9,24])n.fillRect(0,f,s,3)}else n.fillStyle=bt(e,1.2),n.fillRect(8,8,s-16,s-16);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",jt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",jt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=bt(e,1.1),jt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=bt(e,.92),jt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=bt(e,.78);for(let f=0;f<s;f+=8){n.fillRect(0,f+7,s,1);let d=f/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,f,1,8)}}if(o==="mossy"){n.fillStyle=bt(a);for(let f=0;f<6;f++)Yi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=bt(e,.6),jt(n,[[4,2],[12,14],[10,15],[3,4]]),jt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=bt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=bt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=bt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=bt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=bt(e,1.08),jt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=bt(Qe("#D9CBB5"));for(let f=0;f<s;f+=8){n.fillRect(0,f+6,s,2);let d=f/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,f,2,6)}}if(o==="checker"&&(n.fillStyle=bt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let f=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let x=3;for(;x<s-4;){let p=3+Math.floor(i()*3);n.fillStyle=f[Math.floor(i()*f.length)],n.fillRect(x,d+Math.floor(i()*3),p,11),x+=p+1}}n.fillStyle=bt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let f=7;f<s;f+=8)n.fillStyle=bt(e,.8),n.fillRect(0,f,s,1);if(o==="hay")if(t.face==="side"){for(let f=3;f<s;f+=5)n.fillStyle=bt(e,.88),n.fillRect(f,0,1,s);n.fillStyle=bt(Qe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=bt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let f=5;f<s;f+=6)n.fillStyle=bt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=bt(Qe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=bt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=bt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=bt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),jt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let f=7;f<s;f+=8)n.fillStyle=bt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=bt(Qe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=bt(Qe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=bt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=bt(e),n.fillRect(0,0,s,s),n.fillStyle=bt(Qe("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let f=7;f<s;f+=8)n.fillStyle=bt(e,.85),n.fillRect(0,f,s,1);t.face==="side"&&(n.fillStyle=bt(a),n.fillRect(0,11,s,3),n.fillStyle=bt(Qe("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let f=3;f<s;f+=6)n.fillStyle=bt(e,.72),n.fillRect(0,f,s,2);if(o==="furnace"){for(let f=0;f<4;f++)n.fillStyle=bt(e,i()<.5?.9:1.08),Yi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=bt(a),n.fillRect(8,15,s-16,11),n.fillStyle=bt(Qe("#E0352B"),1,.85),jt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=bt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=bt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=bt(a),jt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let h=n.getImageData(0,0,s,s),l=h.data;for(let f=0;f<l.length;f+=4){let d=1+(i()-.5)*.09;l[f]=Math.min(255,l[f]*d),l[f+1]=Math.min(255,l[f+1]*d),l[f+2]=Math.min(255,l[f+2]*d)}n.putImageData(h,0,0);let m=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=m,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function w0(n){let t=document.createElement("canvas");t.width=t.height=$i*Sc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=$i;let a=o.getContext("2d",{willReadFrequently:!0});nS(a,s),e.drawImage(o,r%Sc*$i,Math.floor(r/Sc)*$i),i[r]=o}),{canvas:t,tileCanvas:i}}function A0(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="pole"){r.drawImage(t.tileCanvas[i.tile.side],14,2,20,44),e[i.id]=s.toDataURL();continue}if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",jt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",jt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/$i,h=(l,m,f,d,x,p,M,y)=>{r.setTransform(m*a,f*a,d*a,x*a,p,M),r.drawImage(o[l],0,0),y&&(r.fillStyle=`rgba(20,24,20,${y})`,r.fillRect(0,0,$i,$i))};h(i.tile.top,20,10,-20,10,24,4,0),h(i.tile.side,20,10,0,22,4,14,.12),h(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,h="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,jt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",jt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,jt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",jt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,jt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",jt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,jt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[l,m]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(l,m,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let l=0;l<4;l++)jt(r,[[0,-18+l*5],[-5,-14+l*5],[0,-12+l*5]]),jt(r,[[0,-18+l*5],[5,-14+l*5],[0,-12+l*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let l of[-8,0,8])r.fillRect(l-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,jt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,jt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,jt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,jt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),jt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",jt(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),jt(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",jt(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,jt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",jt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=h,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,jt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",jt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let l of[-8,8])r.beginPath(),r.arc(l,10,4,0,7),r.fill()}else if(o==="saddle")r.fillStyle=a,jt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3);else if(o==="paper"){r.fillStyle=a,jt(r,[[-13,-16],[11,-17],[14,15],[-12,16]]),r.fillStyle="rgba(20,24,20,.16)";for(let l=0;l<4;l++)r.fillRect(-8,-9+l*6,16,2)}else o==="book"?(r.fillStyle=a,jt(r,[[-15,-15],[13,-17],[15,15],[-13,17]]),r.fillStyle="#EFEBDD",jt(r,[[10,-14],[14,-14],[15,13],[11,14]]),r.fillStyle="#E1C04F",jt(r,[[-8,-6],[6,-7],[6,-2],[-8,-1]])):o==="bow"?(r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.arc(-10,-10,24,-.15,Math.PI/2+.15),r.stroke(),r.strokeStyle="#EFEBDD",r.lineWidth=1.5,r.beginPath(),r.moveTo(13,-14),r.lineTo(-14,13),r.stroke()):o==="arrow"?(r.rotate(-Math.PI/4),r.fillStyle="#8C6640",r.fillRect(-1.5,-14,3,30),r.fillStyle=a,jt(r,[[0,-22],[6,-13],[-6,-13]]),r.fillStyle="#F4EFE2",jt(r,[[-1,10],[-7,18],[-1,16]]),jt(r,[[1,10],[7,18],[1,16]])):o==="meat"?(r.fillStyle=a,r.beginPath(),r.ellipse(-3,2,13,10,-.4,0,7),r.fill(),r.fillStyle="#EFEBDD",r.fillRect(7,-12,5,12),r.beginPath(),r.arc(11,-13,4,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.22)",r.beginPath(),r.ellipse(-7,-1,5,3,-.4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,jt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",jt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:h,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&jt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&jt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),jt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=h,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",jt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",jt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function E0(){let n=S0(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=$i;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,h=6+n()*20,l=n()*Math.PI;jt(r,[[a,h],[a+Math.cos(l)*9,h+Math.sin(l)*9],[a+Math.cos(l+.3)*6,h+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}function iS(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Qe(t.accent):e,a=(h,l,m)=>{n.fillStyle=m,n.fillRect(h,s-l,2,l)};if(r==="flower"){a(15,18,bt(e)),n.fillStyle=bt(e,1.1),jt(n,[[16,26],[9,20],[15,22]]),jt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=bt(o);for(let h=0;h<5;h++){let l=h/5*Math.PI*2;jt(n,[[16,9],[16+Math.cos(l)*7,9+Math.sin(l)*7],[16+Math.cos(l+.6)*7,9+Math.sin(l+.6)*7]])}n.fillStyle=bt(Qe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let h=0;h<6;h++){let l=4+h*4+Math.floor(i()*2),m=14+Math.floor(i()*14);n.fillStyle=bt(e,i()<.5?.9:1.1),jt(n,[[l,s],[l+3,s],[l+1+(r==="fern"?2:0),s-m]])}else if(r==="deadbush")n.strokeStyle=bt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=bt(e),n.fillRect(14,18,4,14),n.fillStyle=bt(o),jt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=bt(Qe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=bt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=bt(e,1.12);for(let h=3;h<s;h+=7)n.fillRect(5,h,s-10,3)}else if(r==="wheat"){let h=Number(t.block.split("_")[1])||0,l=[8,14,21,28][h];for(let m=0;m<5;m++){let f=5+m*5;n.fillStyle=bt(e),n.fillRect(f,s-l,2,l),h===3&&(n.fillStyle=bt(o),jt(n,[[f-2,s-l+9],[f+1,s-l-1],[f+4,s-l+9]]))}}else if(r==="rail"){let h=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],l={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[h];n.save(),n.translate(s/2,s/2),n.rotate(l*Math.PI/2),n.translate(-s/2,-s/2);let m=bt(Qe("#8C6640")),f=bt(e),d=s*.33,x=s*.67;if(h==="ns"||h==="ew"){n.fillStyle=m;for(let p=2;p<s;p+=6)n.fillRect(4,p,s-8,3);n.fillStyle=f,n.fillRect(d-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=bt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=m,n.lineWidth=3;for(let p=0;p<5;p++){let M=Math.PI/2+(p+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(M)*(s-x-4),Math.sin(M)*(s-x-4)),n.lineTo(s+Math.cos(M)*(s-d+4),Math.sin(M)*(s-d+4)),n.stroke()}n.strokeStyle=f;for(let p of[s-d,s-x])n.beginPath(),n.arc(s,0,p,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=bt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var T0=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,C0=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function sS(n,t){let e=Xi(n),i=Xi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,h=(i+r)*16,l=n<a?a-n:n>=a+16?n-(a+16-1):0,m=t<h?h-t:t>=h+16?t-(h+16-1):0;Math.max(l,m)<=14&&s.push([e+o,i+r])}return s}function I0(n){let t=new jn(n);t.magFilter=an,t.minFilter=an,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new j(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Mn({uniforms:e,vertexShader:T0,fragmentShader:C0}),s=new Mn({uniforms:e,vertexShader:T0,fragmentShader:C0,transparent:!0,depthWrite:!1,side:Qn});return{opaque:i,trans:s,uniforms:e,tex:t}}function R0(n){let t=new ln;return t.setAttribute("position",new je(n.pos,3)),t.setAttribute("uv",new je(n.uv,2)),t.setAttribute("light",new je(n.light,1)),t.setAttribute("lt",new je(n.lt,2,!0)),t.setIndex(new je(n.index,1)),t.computeBoundingSphere(),t}var wc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Di(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new De(R0(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new De(R0(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Xi(t),s=Xi(e),r=Pm(i,s,this.rd);for(let h of r){if(this.inflight>=this.maxInflight)break;let l=Di(h.cx,h.cz);if(this.chunks.has(l))continue;let m={cx:h.cx,cz:h.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,m),this.inflight++,this.worker.postMessage({type:"load",cx:h.cx,cz:h.cz,rev:m.meshRev})}let o=this.rd+1.5,a=[];for(let[h,l]of this.chunks){let m=l.cx-i,f=l.cz-s;if(m*m+f*f>o*o){for(let d of["o","t"])l[d]&&(this.scene.remove(l[d]),l[d].geometry.dispose());this.chunks.delete(h),a.push(h)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(h=>{let[l,m]=h.split(",").map(Number);return Math.abs(l-i)>this.rd+3||Math.abs(m-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(h=>h.state==="ready").length}ready(t,e){let i=this.chunks.get(Di(Xi(t),Xi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Lu(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Di(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Lu(t,e,i);if(!r)return!1;let o=Di(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,M0(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let h=Math.floor(t),l=Math.floor(i);for(let[m,f]of sS(h,l))this.dirtyMesh.add(Di(m,f));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var df="hw_world",qo=null;function P0(n){n!==df&&(df=n,qo=null)}function L0(){return qo||(qo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(df,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),qo)}function pf(n,t){return L0().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var mf=n=>pf("readonly",t=>t.get(n)),Ac=n=>pf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function gf(n){let t=await L0();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function xf(n){let t={};for(let e of n){let i=await mf(e);i!==void 0&&(t[e]=i)}await pf("readwrite",e=>e.clear()),await Ac(t)}function P(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Zi=n=>document.querySelector(n);function oS(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function N0(n,t,e,i,s,r){if(!t||!t.id)return null;let o=oS(t,e,i,s,r),a=n.get("ke_log"),h=Array.isArray(a)?a:[];if(h.push(o),n.set("ke_log",h),t.local)return o;if(e){let f=n.get("ke_correct"),d=Array.isArray(f)?f:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let l=n.get("ke_mistakes")||{},m=l[t.id]&&!l[t.id].d?l[t.id]:null;return e?m&&(m.c++,m.u=s,m.c>=3&&(l[t.id]={d:1,w:m.w,t:m.t,u:s})):l[t.id]={c:0,w:((l[t.id]||{}).w||0)+1,t:s,u:s},(!e||m)&&n.set("ke_mistakes",l),o}var D0=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function U0(n,t=Date.now()){let e=D0(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&D0(new Date(s.t))===e&&i++;return i}function F0(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],h=[];for(let x of n)e[x]&&!e[x].d?o.push(x):t.has(x)||i.has(x)?h.push(x):a.push(x);let l=x=>{for(let p=x.length-1;p>0;p--){let M=Math.floor(r()*(p+1));[x[p],x[M]]=[x[M],x[p]]}return x};[o,a,h].forEach(l);let m=[],f=(x,p)=>{for(;p-- >0&&x.length;)m.push(x.pop())},d=Math.round(s*.7);return f(o,Math.ceil(d/2)),f(a,d-m.length),f(o,d-m.length),f(h,s-m.length),f(a,s-m.length),f(o,s-m.length),m}var aS="../../",lS=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],_f=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Ec=null,vf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),yf=null,z0=n=>{yf=n},B0=()=>U0(vf().get("ke_log"));function Mf(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{N0(vf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(yf)try{yf(t,n)}catch{}}function bf(n,t,e){try{let i=vf(),s=i.get("ke_learned")||{},r=new Set;for(let l in s)s[l]&&s[l].at&&(n.sets&&n.sets[l]||[]).forEach(m=>r.add(m));let o=n.list(t).filter(l=>l.type!=="speak").map(l=>l.id),a=F0(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),h=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(h.length)return h}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function cS(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Sf(){return Ec||(Ec=(async()=>{for(let t of lS)await cS(aS+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Ec=null,n})),Ec}async function k0(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=P("div",{class:"panel quiz"});n.append(r),r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),P("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await Sf()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,h=[],l=0,m=0,f=0;function d(){n.hidden=!0,n.innerHTML="",i&&i()}function x(){h=bf(o,{modules:["words","phrases","grammar","patterns"],types:_f,lv:1},s),h.length||(h=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),l=0,m=0,f=0,p()}function p(){r.innerHTML="";let g=h[l],I=a.isTyped(g);n._q=g;let F=P("div",{class:"fb"}),w=P("div",{class:"q-body"});r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",P("small",{},`\u7B2C ${l+1} / ${h.length} \u984C`)),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),P("div",{class:"q-type"},(a.TYPES[g.type]||"\u984C\u76EE")+(I?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),P("div",{class:"q-prompt"+(g.en?" en":"")},g.prompt),g.sub?P("div",{class:"q-sub"},g.sub):null,w,F);let C=!1,A=(D,b)=>{if(C)return;C=!0,Mf(g,D,b);let R=r0(D,I);e&&e(D),D&&(f++,m+=R,t&&t(R)),F.className="fb "+(D?"ok":"bad"),F.append(P("div",{},D?`\u7B54\u5C0D\u4E86\uFF01 +${R} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",D?null:P("b",{class:"en"},g.answer)),!D&&g.why?P("div",{class:"why"},g.why):null,P("button",{class:"btn",onclick:M},l+1<h.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(g.input==="type"){let D=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{C||!D.value.trim()||A(o.check(g,D.value).ok,D.value)};D.addEventListener("keydown",R=>{R.stopPropagation(),R.key==="Enter"&&b()}),w.append(P("div",{class:"typerow"},D,P("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>D.focus(),50)}else{let D=P("div",{class:"opts"});(g.options||[]).forEach(b=>D.append(P("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:R=>{if(C)return;let N=o.check(g,b).ok;R.currentTarget.classList.add(N?"ok":"bad"),A(N,b)}},b))),w.append(D)}}function M(){l++,l<h.length?p():y()}function y(){r.innerHTML="",r.append(P("div",{class:"p-head"},P("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),P("p",{class:"big"},`\u7B54\u5C0D ${f} / ${h.length} \u984C\uFF0C\u62FF\u5230 ${m} \u91D1\u5E63`),P("div",{class:"row"},P("button",{class:"btn",onclick:x},"\u518D\u4F86\u4E00\u56DE"),P("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}x()}var O0=new Set(_f);async function Yo(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:h=null}){n.innerHTML="",n.hidden=!1;let l=P("div",{class:"panel quiz"});n.append(l),l.append(P("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let m;try{m=await Sf()}catch{l.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let f=window.KE,d=h,x=i?new Set(i.filter(w=>O0.has(w))):O0;if(!d)for(let w of t){let C=m.byId[w];if(C&&x.has(C.type)){d=m.get(w);break}}let p=!!d&&!h;d||(d=bf(m,{modules:s||["words","phrases","grammar","patterns"],types:i?[...x]:_f,lv:1},1)[0]||m.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let M=f.isTyped(d);n._q=d,l.innerHTML="";let y=P("div",{class:"fb"}),g=P("div",{class:"q-body"});l.append(P("div",{class:"p-head"},P("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),P("div",{class:"q-type"},h?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(p?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":f.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),P("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?P("div",{class:"q-sub"},d.sub):null,g,y);let I=!1,F=(w,C)=>{I||(I=!0,Mf(d,w,C,a),y.className="fb "+(w?"ok":"bad"),y.append(P("div",{},w?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",w?null:P("b",{class:"en"},d.answer)),!w&&d.why?P("div",{class:"why"},d.why):null,P("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(w,M,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let w=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),C=()=>{I||!w.value.trim()||F(m.check(d,w.value).ok,w.value)};w.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&C()}),g.append(P("div",{class:"typerow"},w,P("button",{class:"btn",onclick:C},"\u9001\u51FA"))),setTimeout(()=>w.focus(),50)}else{let w=P("div",{class:"opts"});(d.options||[]).forEach(C=>w.append(P("button",{class:"opt"+(/[a-z]/i.test(C)?" en":""),onclick:A=>{if(I)return;let D=m.check(d,C).ok;A.currentTarget.classList.add(D?"ok":"bad"),F(D,C)}},C))),g.append(w)}}async function V0(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=P("div",{class:"panel quiz"});n.append(i),i.append(P("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Sf()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=bf(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,h=0,l=()=>{i.innerHTML="";let m=o[a];n._q=m;let f=P("div",{class:"fb"}),d=P("div",{class:"q-body"});i.append(P("div",{class:"p-head"},P("h2",{},t.title_zh+" ",P("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),P("div",{class:"q-type"},r.TYPES[m.type]||"\u984C\u76EE"),P("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?P("div",{class:"q-sub"},m.sub):null,d,f);let x=!1,p=(M,y)=>{x||(x=!0,Mf(m,M,y),M&&h++,f.className="fb "+(M?"ok":"bad"),f.append(P("div",{},M?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",M?null:P("b",{class:"en"},m.answer)),!M&&m.why?P("div",{class:"why"},m.why):null,P("button",{class:"btn",onclick:()=>{a++,a<o.length?l():(n.hidden=!0,n.innerHTML="",e&&e(h,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(m.input==="type"){let M=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),y=()=>{x||!M.value.trim()||p(s.check(m,M.value).ok,M.value)};M.addEventListener("keydown",g=>{g.stopPropagation(),g.key==="Enter"&&y()}),d.append(P("div",{class:"typerow"},M,P("button",{class:"btn",onclick:y},"\u9001\u51FA"))),setTimeout(()=>M.focus(),50)}else{let M=P("div",{class:"opts"});(m.options||[]).forEach(y=>M.append(P("button",{class:"opt"+(/[a-z]/i.test(y)?" en":""),onclick:g=>{if(x)return;let I=s.check(m,y).ok;g.currentTarget.classList.add(I?"ok":"bad"),p(I,y)}},y))),d.append(M)}};l()}function H0(n,t,e){let[i,s]=String(n).split(",").map(Number),r=m=>Hn(4242,i|0,t*7+m,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,h=Math.floor(r(2)*a.length),l=(h+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[h],a[l]]}}function G0(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Pr(n,e.blueprint)?{ok:!1,reason:"owned"}:(zs(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Ho(t,e.give,e.count,i)?(zs(n,e.price),Sn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var wf=(n,t,e)=>!!(n&&n[t.id]===e);function W0(n,t,e,i,s,r,o=()=>64){if(wf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Nn(s,t.reward.coins|0);let a={};for(let h in t.reward.items||{}){let l=Sn(r,h,t.reward.items[h],o);l&&(a[h]=l)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Lr(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Af={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Tc=n=>n==="creative"?"creative":"survival",X0=n=>Af[Tc(n)].db;function q0(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Y0(n){let t=Tc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function $0(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Z0=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Uf={};Jn(Uf,{BREED_CAP:()=>Df,LOVE_MS:()=>K0,MAX_STAGE:()=>dS,STAGE_SECONDS:()=>fS,armorMax:()=>J0,armorPoints:()=>$o,canTill:()=>Tf,eat:()=>Lf,equip:()=>pS,findMate:()=>Nf,harvest:()=>Cf,nearWater:()=>Rf,reduceDamage:()=>Pf,stageAt:()=>Ef,wearArmor:()=>If});var fS=60,dS=3;function Ef(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var Tf=(n,t)=>(n==="grass"||n==="dirt")&&t;function Cf(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function Rf(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let h of[0,-1])if(t(n(e+a,i+h,s+o)))return!0;return!1}function $o(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var J0=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function If(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?J0(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var Pf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function pS(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Lf(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var K0=3e4,Df=12;function Nf(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<K0&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Bf={};Jn(Bf,{apply:()=>Ic,duck:()=>Ms,muted:()=>Zo,rainLevel:()=>zf,scene:()=>Of,setVolume:()=>Pc,sfx:()=>tn,state:()=>mS,toggleMute:()=>Ff,unlock:()=>Rc});var qe=null,Bs=null,Cc=null,Dr=null,Wn=()=>window.HIAudio||null,Q0=()=>Wn()?Wn().get():{muted:!1,music:.35,sfx:.7};function Rc(){try{Wn()&&Wn().unlock()}catch{}if(!qe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;qe=new n,Bs=qe.createGain(),Bs.connect(qe.destination),Cc=qe.createBuffer(1,qe.sampleRate,qe.sampleRate);let t=Cc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}qe.state==="suspended"&&qe.resume(),Ic()}function Ic(){if(Bs){let n=Q0();Bs.gain.setTargetAtTime(n.muted?0:n.sfx,qe.currentTime,.03)}}var Zo=()=>Q0().muted;function Ff(){return Wn()&&Wn().toggle(),Ic(),Zo()}function Pc(n){Wn()&&Wn().set(n),Ic()}function Of(n){try{Wn()&&Wn().scene(n)}catch{}}function Ms(n){let t=Wn();t&&(n&&Ms.id==null?Ms.id=t.duckStart():!n&&Ms.id!=null&&(t.duckEnd(Ms.id),Ms.id=null))}function tg(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function ni(n,t,e,i,s,r,o){let a=qe.createOscillator(),h=qe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),tg(h,e,i,s,r),a.connect(h),h.connect(Bs),a.start(e),a.stop(e+i+r+.05)}function bs(n,t,e,i,s,r=1){let o=qe.createBufferSource(),a=qe.createBiquadFilter(),h=qe.createGain();o.buffer=Cc,a.type=n,a.frequency.value=t,a.Q.value=r,tg(h,e,.004,i,s),o.connect(a),a.connect(h),h.connect(Bs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var j0={wood:(n,t)=>{ni("sine",190*t,n,.003,.16,.12,95*t),bs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{bs("highpass",1800*t,n,.1,.06),ni("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{bs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{ni("sine",1900*t,n,.002,.08,.25,1500*t),bs("highpass",4200,n,.06,.12)},soft:(n,t)=>{bs("bandpass",850*t,n,.09,.1,.8)}};function tn(n,t="soft"){if(!qe||Zo())return;let e=qe.currentTime+.005,i=j0[t]||j0.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{bs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":ni("sine",880,e,.002,.07,.08,1320);break;case"chest":ni("triangle",160,e,.02,.07,.3,120),ni("sine",330,e+.12,.005,.05,.15);break;case"door":ni("sawtooth",120,e,.03,.04,.3,160),bs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>bs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":ni("triangle",659,e,.005,.08,.15),ni("triangle",988,e+.1,.005,.08,.25);break;case"coin":ni("sine",1319,e,.002,.08,.08),ni("sine",1976,e+.07,.002,.08,.22);break;case"hurt":ni("triangle",300,e,.005,.1,.18,200);break;default:break}}function zf(n){if(qe){if(!Dr&&n>.01){let t=qe.createBufferSource(),e=qe.createBiquadFilter(),i=qe.createBiquadFilter(),s=qe.createGain();t.buffer=Cc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Bs),t.start(),Dr={s:t,g:s}}Dr&&Dr.g.gain.setTargetAtTime(.06*n,qe.currentTime,.4)}}var mS=()=>({ctx:qe?qe.state:"none",hi:Wn()?Wn().state():null,rain:Dr?+Dr.g.gain.value.toFixed(3):0});var Xf={};Jn(Xf,{HI_SCENE:()=>Vf,createWeather:()=>Hf,precipFor:()=>Wf,sceneFor:()=>kf,soundOf:()=>Nr,stepWeather:()=>Gf});function Nr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function kf({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Vf={calm:"hub",night:"night",cave:"cave"};function Hf(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function Gf(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function Wf(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var gS=[1,2,4,6,8];function Lc(n,t){if(t&&(t.type==="rod"||t.type==="bow")&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/gS[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Ur(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function eg(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Kf={};Jn(Kf,{collect:()=>Zf,createFurnace:()=>qf,dismantle:()=>Jf,start:()=>Yf,tick:()=>$f});function qf(){return{fuel:0,jobs:[],done:{}}}function Yf(n,t,e,i=4){if(ei(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(ei(t,"coal")<1)return{ok:!1,reason:"fuel"};Os(t,"coal",1),n.fuel+=i}return Os(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function $f(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function Zf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=Sn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Jf(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var sd={};Jn(sd,{MAX_HP:()=>Jo,REGEN_EVERY:()=>yS,SAFE_FALL:()=>xS,createHealth:()=>jf,damage:()=>td,fallDamage:()=>Qf,hearts:()=>id,regen:()=>ed,respawnPoint:()=>nd});var Jo=20,xS=4,yS=4;function jf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Qf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function td(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function ed(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function nd(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function id(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Dc={animal:8,quiz:4};function ng(){return{list:[],nextId:1}}var Ko=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function ig(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function sg(n,t){return n<.2&&!t}function rg(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function og(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.held>0){n.held-=e,n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-r,-o);return}if(n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let h=n.home.x-n.p.x,l=n.home.z-n.p.z,m=Math.hypot(h,l);if(m>10){n.yaw=Math.atan2(-h,-l),n.v.x=h/m*s.speed,n.v.z=l/m*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let h=a>1.6?s.speed:0;n.v.x=r/(a||1)*h,n.v.z=o/(a||1)*h;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function ag(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null,meat:n.def.meat?{id:n.def.meat,n:1}:null}}var lg=(n,t)=>n?(t?2:1)+1:0;function Fr(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],h=[t.x,t.y,t.z],l=0,m=1/0;for(let f=0;f<3;f++){if(Math.abs(h[f])<1e-9){if(a[f]<r[f]||a[f]>o[f])return null;continue}let d=(r[f]-a[f])/h[f],x=(o[f]-a[f])/h[f];if(d>x&&([d,x]=[x,d]),l=Math.max(l,d),m=Math.min(m,x),l>m)return null}return l}function cg(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var hg=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function ug(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function fg(n,t,e,i,s=()=>64){let r=(t||[]).find(l=>l.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),h={};Nn(i,o);for(let l in a){let m=Sn(e,l,a[l],s);m&&(h[l]=m)}return{ok:!0,coins:o,items:a,leftovers:h,name_zh:r.name_zh}}function dg(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function rd(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function pg(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:rd(n[e].map,n,t).ok?n[e]:null}var cd={};Jn(cd,{COOLDOWN:()=>od,GRAV:()=>mg,LIFE:()=>gg,SPEED:()=>Nc,shoot:()=>ad,step:()=>ld});var Nc=26,mg=9,gg=2.5,od=.45;function ad(n,t){let e=Math.hypot(t.x,t.y,t.z)||1;return{p:{x:n.x,y:n.y,z:n.z},v:{x:t.x/e*Nc,y:t.y/e*Nc+1,z:t.z/e*Nc},age:0}}function ld(n,t,e,i){n.age+=t,n.v.y-=mg*t;let s=n.v.x*t,r=n.v.y*t,o=n.v.z*t,a=Math.hypot(s,r,o)||1e-6,h={x:s/a,y:r/a,z:o/a},l=null,m=a;for(let f of i){let d=Fr(n.p,h,f.p,f.w,f.h);d!=null&&d<=m&&(m=d,l=f)}if(l)return{hit:"mob",target:l.ref};for(let f=1;f<=4;f++){let d=n.p.x+s*f/4,x=n.p.y+r*f/4,p=n.p.z+o*f/4;if(e(Math.floor(d),Math.floor(x),Math.floor(p)))return n.p={x:n.p.x+s*(f-1)/4,y:n.p.y+r*(f-1)/4,z:n.p.z+o*(f-1)/4},{hit:"block"}}return n.p.x+=s,n.p.y+=r,n.p.z+=o,n.age>gg?{hit:"gone"}:null}var gd={};Jn(gd,{FOLLOW:()=>MS,GUARD:()=>bS,MAX:()=>Uc,TELEPORT:()=>hd,feed:()=>ud,foodsOf:()=>Fc,guardTarget:()=>dd,isPet:()=>ks,serialize:()=>pd,steer:()=>fd,valid:()=>md});var Uc=4,MS=2.5,hd=20,bS=10,ks=n=>!!(n&&n.def&&n.def.pet),Fc=n=>[].concat(n.food||[]);function ud(n,t,e){if(!ks(n)||n.tame||!Fc(n.def).includes(t))return{ok:!1};let i=n.def.tameNeed||2;return n.fed=(n.fed||0)+1,n.fed<i?{ok:!0,tamed:!1,fed:n.fed,need:i}:e>=4?(n.fed=i-1,{ok:!0,tamed:!1,full:!0,fed:n.fed,need:i}):(n.tame=!0,n.sit=!1,{ok:!0,tamed:!0,fed:n.fed,need:i})}function fd(n,t,e,i){if(n.t+=e,n.sit){n.v.x=0,n.v.z=0;return}let s=i||t,r=s.x-n.p.x,o=s.z-n.p.z,a=Math.hypot(r,o);if(a>(i?1.1:2.5)){let l=n.def.speed*(a>6?3:1.6);n.yaw=Math.atan2(-r,-o),n.v.x=r/a*l,n.v.z=o/a*l}else n.v.x=0,n.v.z=0,n.yaw=Math.atan2(-(t.x-n.p.x),-(t.z-n.p.z))}function dd(n,t){let e=null,i=10;for(let s of t){if(s.kind!=="quiz"||s.gone)continue;let r=Math.hypot(s.p.x-n.p.x,s.p.z-n.p.z);r<i&&(i=r,e=s)}return e}var pd=n=>n.filter(t=>ks(t)&&t.tame&&!t.gone).slice(0,4).map(t=>({type:t.type,x:t.p.x,y:t.p.y,z:t.p.z,sit:!!t.sit})),md=n=>(Array.isArray(n)?n:[]).filter(t=>t&&typeof t.type=="string"&&[t.x,t.y,t.z].every(Number.isFinite)).slice(0,4);var Fi={};function Or(n){return Fi[n]||(Fi[n]=new vn({color:n,transparent:!0}),Fi[n].userData.base=new he(n)),Fi[n]}var jo=null;function SS(){if(jo)return jo;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),jo=new jn(n),jo.colorSpace=on,jo}function xg(n,t){let e=new mn,i=n.colors,[s,r]=n.size,o=(h,l,m,f,d,x,p,M)=>{let y=new De(new Ke(h,l,m),M||Or(f));return y.position.set(d,x,p),e.add(y),y},a=[];if(n.kind==="villager"){for(let l of[-.13,.13]){let m=o(.2,.6,.22,i.leg,l,.6,0);m.geometry.translate(0,-.6/2,0),a.push(m)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let l of[-.36,.36])o(.16,.62,.18,t||i.body,l,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let h=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Fi.__face||(Fi.__face=new vn({map:SS(),transparent:!0}),Fi.__face.userData.base=new he("#ffffff"));let l=[Or(i.head),Or(i.head),Or(i.head),Or(i.head),Or(i.head),Fi.__face],m=new De(new Ke(s*.9,s*.8,s*.8),l);m.position.set(0,r*.72+s*.4,0),e.add(m),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let h=r<1&&n.id!=="chicken",l=n.id==="chicken"?.25:h?r*.35:.45,m=r-l-(n.id==="chicken"?.15:.25);o(s,m,n.id==="chicken"?s:s*1.35,i.body,0,l+m/2,0),i.patch&&o(s*.5,m*.55,.02+s*1.36,i.patch,s*.12,l+m*.55,0);let f=n.id==="chicken"?.3:h?.32:.45,d=o(f,f,f,i.head,0,l+m+f*.25,-(n.id==="chicken"?s*.35:s*.75));if(i.ear)for(let y of[-f*.3,f*.3])o(f*.26,f*.3,f*.16,i.ear,y,d.position.y+f*.6,d.position.z);if(i.eye)for(let y of[-f*.24,f*.24])o(f*.24,f*.26,.02,i.eye,y,d.position.y+f*.05,d.position.z-f/2-.01);if(n.pet){let y=o(.08,.08,.32,i.body,0,l+m*.85,s*.68+.12);y.rotation.x=n.id==="cat"?.7:.35}i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+f/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-f/2-.05));let x=n.id==="chicken"?.06:.18,p=n.id==="chicken"?0:s*.45,M=s*.3;for(let[y,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-M,-p],[M,-p],[-M,p],[M,p]]){let I=o(x,l,x,i.leg,y,l/2,g);I.geometry.translate(0,-l/2,0),I.position.y=l,a.push(I)}}return e.userData.legs=a,e}function yg(n){for(let t in Fi){let e=Fi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Oc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var zc="393b078920",kc=new URLSearchParams(location.search),ES=720,Bc=5,vg={boat:-.85,minecart:-.6,horse:.75},Mg=[[0,0,0,1,.1,1]],bg=[[0,0,0,1,.5,1]],TS=[[0,0,0,1,1,1]],CS=[[.3,0,.3,.7,.7,.7]],RS=20261008,xd=kc.get("test")==="1"||window.__HW_TEST__===!0,IS=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,c={touch:IS,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function wn(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ii(n,t){try{localStorage.setItem(n,t)}catch{}}async function PS(){let n=Tc(wn("hw_mode","survival")),t=Y0(n),e=!t.creative&&wn("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=u=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(u)?u+"_s":u,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";P0(X0(n));let[r,o,a,h,l,m,f,d,x]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json","data/books.json"].map(u=>fetch(u,{cache:"no-cache"}).then(_=>_.json()))),p=Rm(r),M=o.recipes||[],y=u=>p.maxStack(u),g={};try{let[u,_,S,T,L,z,rt,lt,at,vt,Wt,Kt,ie]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(Re=>mf(i(Re))));g={meta:u,player:_,inv:S,coins:T,furnaces:L,claimed:z,quests:rt,chests:lt,crops:at,achv:vt,mapd:Wt,vehs:Kt,storyd:ie,chunks:await gf(s)}}catch(u){console.warn("save unavailable",u)}let I=g.meta&&g.meta.seed||RS+Af[n].seedOffset,F=e==="shadow"?I+7777:I,w=e==="shadow"?Ju(F,p):Vm(I,p,l),C=b0(Object.fromEntries(Object.entries(g.chunks||{}).map(([u,_])=>[u.slice(s.length),_]))),A=g.inv?_c(g.inv):Vo();t.creative&&!g.inv&&Z0.forEach((u,_)=>{p.get(u)&&(A.slots[_]={id:u,count:64})});let D=c0(g.coins),b=Km(g.achv),R=f.achievements||[],N=sf(g.storyd);!g.storyd&&g.player&&bc(N,d);let O=u=>u==="look"?c.lookAcc||0:u==="walk"?c.walkAcc||0:b.stats[u]||0,Z=d0(),K=f0(D,{mode:wn("hw_coin_source","local"),member:u0(window)}),k=new xc(p,g.mapd),tt=jf(g.player&&g.player.hp!=null?g.player.hp:20);c.bed=g.player&&g.player.bed||null,c.horse=g.player&&g.player.horse||null,c.petsPending=md(g.player&&g.player.pets);let B=h.portals||[],q=Array.isArray(g.claimed)?g.claimed.slice():[],Q=g.furnaces||{},J=g.quests||{},nt=Object.fromEntries(Object.entries(g.chests||{}).map(([u,_])=>[u,_c(_,27)])),it=g.crops||{};c.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],c.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let St=o.smelt||[],Tt=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(c.time=g.meta.time);let Ht=Zi("#c"),qt=new hc({canvas:Ht,antialias:!1,powerPreference:"high-performance"}),Ut={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:c.touch?1.5:1.25,np:500,grain:!0}};function W(){let u=Ut[wn("hw_gfx","high")]||Ut.high;qt.setPixelRatio(Math.min(window.devicePixelRatio||1,u.pr)),c.np=u.np;let _=document.getElementById("grain");_&&(_.hidden=!u.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[wn("hw_btn","m")]||1),document.body.classList.toggle("lefty",wn("hw_lefty","off")==="on"),c.invert=wn("hw_invert","off")==="on"}W();let Y=new lo,ut=new he("#EFEBDD");Y.background=ut;let mt=new _n(72,1,.08,200);mt.rotation.order="YXZ";let yt=w0(p),It=A0(p,yt),le=I0(yt.canvas),Lt=new Worker("assets/hw-worker.js?v="+zc),ct=new wc({scene:Y,mats:le,reg:p,worker:Lt,diffs:C,onDirty:u=>{c.dirty.add(u),(c.mapDirty||(c.mapDirty=new Set)).add(u)}}),Qt=Math.max(2,Math.min(6,parseInt(kc.get("rd")||wn("hw_rd",c.touch?"3":"4"),10)||4));ct.setRenderDistance(Qt),mt.far=Qt*16+40,mt.updateProjectionMatrix();let Dt=await new Promise(u=>{let _=S=>{S.data.type==="ready"&&(Lt.removeEventListener("message",_),u(S.data.spawn))};Lt.addEventListener("message",_),Lt.postMessage({type:"init",seed:F,dim:e,blocks:r,structures:l,diffs:Object.fromEntries([...C].map(([S,T])=>[S,ff(T)]))})}),re=g.player&&g.player.dims&&g.player.dims[e];c.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||re)?Object.assign(c,{p:re?{x:re.x,y:re.y,z:re.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(re?re.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!re,sel:g.player.sel|0}):(g.player&&(c.sel=g.player.sel|0),c.p={x:Dt.x,y:Dt.y,z:Dt.z},c.yaw=Math.atan2(-(Dt.stele.x+.5-Dt.x),-(Dt.stele.z+.5-Dt.z)),c.pitch=-.15);let ge=new Ls(new xo(new Ke(1.004,1.004,1.004)),new Ps({color:1382164,transparent:!0,opacity:.45}));ge.visible=!1,Y.add(ge);let ye=E0().map(u=>new jn(u)),oe=new De(new Ke(1.01,1.01,1.01),new vn({map:ye[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));oe.visible=!1,Y.add(oe);let Oe=(u,_)=>{let S=document.createElement("canvas");S.width=S.height=64;let T=S.getContext("2d");T.fillStyle=u,T.beginPath(),T.arc(32,32,28,0,7),T.fill(),_&&(T.globalCompositeOperation="destination-out",T.beginPath(),T.arc(44,26,24,0,7),T.fill());let L=new jn(S);return L.colorSpace=on,L},H=new Is(new cs({map:Oe("#F2C46B"),depthWrite:!1,fog:!1})),He=new Is(new cs({map:Oe("#EDE6D0",!0),depthWrite:!1,fog:!1}));Y.add(H,He);let ve=500,U=new Float32Array(ve*6),v=new Float32Array(ve*3),$=new Float32Array(ve*3);for(let u=0;u<ve;u++)$[u*3]=Math.random()*24-12,$[u*3+1]=Math.random()*16,$[u*3+2]=Math.random()*24-12;let st=new ln;st.setAttribute("position",new je(U,3));let ht=new Ls(st,new Ps({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));ht.frustumCulled=!1,ht.visible=!1,Y.add(ht);let At=new ln;At.setAttribute("position",new je(v,3));let Pt=new po(At,new xr({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Pt.frustumCulled=!1,Pt.visible=!1,Y.add(Pt),c.weather=Hf();let ft=0;function pt(u,_,S){if(ht.visible=S==="rain",Pt.visible=S==="snow",!!S){ft+=u;for(let T=0;T<c.np;T++){let L=$[T*3],z=$[T*3+2],rt=S==="rain"?16:1.6,lt=_.y+10-($[T*3+1]+ft*rt)%16;if(S==="rain"){let at=T*6;U[at]=U[at+3]=_.x+L,U[at+2]=U[at+5]=_.z+z,U[at+1]=lt,U[at+4]=lt-.45}else{let at=T*3,vt=Math.sin(ft*.8+T)*.4;v[at]=_.x+L+vt,v[at+1]=lt,v[at+2]=_.z+z+vt*.6}}st.setDrawRange(0,c.np*2),At.setDrawRange(0,c.np),(S==="rain"?st:At).attributes.position.needsUpdate=!0}}let Rt=new mn,Yt=(u,_,S,T,L,z,rt)=>{let lt=new De(new Ke(u,_,S),new vn({color:T}));return lt.position.set(L,z,rt),lt.userData.base=new he(T),Rt.add(lt),lt},Ft=Yt(.24,.75,.26,"#26302A",-.14,.375,0),Nt=Yt(.24,.75,.26,"#26302A",.14,.375,0);Yt(.56,.7,.3,"#2F5A34",0,1.1,0);let te=Yt(.18,.66,.2,"#E7CDA6",-.38,1.12,0),se=Yt(.18,.66,.2,"#E7CDA6",.38,1.12,0);Yt(.46,.42,.42,"#E7CDA6",0,1.66,0),Yt(.5,.14,.46,"#151714",0,1.9,.02),Yt(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Ft,Nt,te,se].forEach(u=>{u.geometry.translate(0,-u.geometry.parameters.height/2+.05,0),u.position.y+=u.geometry.parameters.height/2-.05}),Rt.visible=!1,Y.add(Rt);let fe={},G=u=>fe[u]||(fe[u]=(()=>{let _=new Image;_.src=It[u];let S=new gn(_);return S.colorSpace=on,_.onload=()=>{S.needsUpdate=!0},new cs({map:S,depthWrite:!0,alphaTest:.3})})());function wt(u,_,S,T){let L=new Is(G(u));L.scale.set(.42,.42,1),Y.add(L),c.drops.push({id:u,s:L,p:{x:_,y:S,z:T},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let dt=(u,_,S)=>{let T=ct.get(u,_,S);return p.flat.solid[T]===1&&(p.flat.boxes[T]||!0)},Et=Object.fromEntries((a.mobs||[]).map(u=>[u.id,u])),Ct=ng(),gt=new Map,ee=0;function $t(u,_){for(let S=61;S>0;S--){let T=ct.get(u,S,_);if(p.flat.solid[T])return ct.get(u,S+1,_)||ct.get(u,S+2,_)?null:{y:S+1,n:T};if(p.flat.liquid[T])return null}return null}function ze(u,_,S,T=7){for(let L=-T;L<=T;L++)for(let z=-T;z<=T;z++)for(let rt=-T;rt<=T;rt++)if(p.flat.lightEmit[ct.get(u+rt,_+L,S+z)])return!0;return!1}function Se(u,_,S,T,L){let z=ig(Ct,u,{x:_+.5,y:S,z:T+.5}),rt=xg(u,L);return gt.set(z.id,rt),Y.add(rt),z}let An=new Set;function Un(){for(let u of w.villages.around(c.p.x-64,c.p.z-64,c.p.x+64,c.p.z+64))if(!(An.has(u.id)||!ct.ready(u.x,u.z))){An.add(u.id);for(let _=0;_<u.villagers;_++){let S=H0(u.id,_,m),T=u.x+(_%2?2:-2),L=u.z+(_-1),z=$t(T,L),rt=Se(Et.villager,T,z?z.y:u.y+1,L,S.prof.color);Object.assign(rt,{home:{x:u.x,z:u.z},village:u.id,role:S})}}}function Vc(u){if(Et.villager&&Un(),e==="overworld"&&c.horse&&!c.horseMob&&Et.horse&&ct.ready(c.horse.x,c.horse.z)){let rt=Se(Et.horse,Math.floor(c.horse.x),c.horse.y,Math.floor(c.horse.z));rt.tame=!0,c.horse.saddled&&Ed(rt),c.horseMob=rt}if(e==="overworld")for(let rt=c.petsPending.length-1;rt>=0;rt--){let lt=c.petsPending[rt];if(!Et[lt.type]||!ct.ready(lt.x,lt.z))continue;c.petsPending.splice(rt,1);let at=Se(Et[lt.type],Math.floor(lt.x),lt.y,Math.floor(lt.z));Object.assign(at,{tame:!0,sit:!!lt.sit}),Td(at)}let _=Math.random()*Math.PI*2,S=14+Math.random()*14,T=Math.floor(c.p.x+Math.cos(_)*S),L=Math.floor(c.p.z+Math.sin(_)*S);if(!ct.ready(T,L))return;let z=$t(T,L);if(z)if(Ko(Ct,"animal")<Dc.animal&&z.n===p.num("grass")&&u>.3){let rt=w.biomeOf(T,L),lt=Object.values(Et).filter(Kt=>Kt.kind==="animal"&&(!Kt.biome||Kt.biome===rt)),at=Math.random()*lt.reduce((Kt,ie)=>Kt+(ie.w??1),0),vt=lt[0];for(let Kt of lt)if(at-=Kt.w??1,at<=0){vt=Kt;break}let Wt=1+Math.floor(Math.random()*3);for(let Kt=0;Kt<Wt&&Ko(Ct,"animal")<Dc.animal;Kt++){let ie=T+Kt%2,Re=L+(Kt>>1),Ee=$t(ie,Re);Ee&&Se(vt,ie,Ee.y,Re)}}else t.quizMobs&&Ko(Ct,"quiz")<Dc.quiz&&sg(u,ze(T,z.y,L))&&Et.quizling&&Se(e==="shadow"&&Et.shadowling?Et.shadowling:Et.quizling,T,z.y,L)}function Hc(u,_,S){ee+=u,ee>2.5&&c.started&&(ee=0,Vc(e==="shadow"?0:_));for(let T=Ct.list.length-1;T>=0;T--){let L=Ct.list[T],z=gt.get(L.id),rt=Math.hypot(L.p.x-c.p.x,L.p.z-c.p.z);if(L.riding){L.p.x=c.p.x,L.p.y=c.p.y,L.p.z=c.p.z,L.yaw=c.yaw,L.v.x=c.v.x,L.v.z=c.v.z,Oc(z,L,S/1e3);continue}if(L.gone){L.goneT=(L.goneT||0)+u,Oc(z,L,S/1e3),L.goneT>.35&&(Y.remove(z),gt.delete(L.id),Ct.list.splice(T,1));continue}if(rg(L,_,rt)){L.gone=!0,L.goneT=0,L.village&&An.delete(L.village);continue}let lt=L.tame&&ks(L);if(lt&&!L.sit&&rt>20&&!c.ride&&u&&(L.p={x:c.p.x,y:c.p.y+.2,z:c.p.z},L.v={x:0,y:0,z:0}),!ct.ready(L.p.x,L.p.z))continue;if(lt){let vt=L.def.guard&&!L.sit?dd(L,Ct.list):null;vt&&Math.hypot(vt.p.x-L.p.x,vt.p.z-L.p.z)<1.8&&(vt.held=.3,vt.guarded||(vt.guarded=!0,Mt(`${L.def.name_zh}\u64CB\u4F4F\u932F\u984C\u602A\u4E86\uFF01\u5FEB\u53BB\u7B54\u984C\u6253\u6557\u5B83`))),fd(L,c.p,u,vt?vt.p:null)}else og(L,c.p,u,Math.random);L.v.y-=20*u,L.v.y<-20&&(L.v.y=-20);let at=dc(L.p,L.v,u,dt,{w:Math.min(.9,L.def.size[0]),h:L.def.size[1],canStep:!0,grounded:L.onGround});L.onGround=at.onGround,p.flat.liquid[ct.get(L.p.x,L.p.y+.3,L.p.z)]&&(L.v.y=2),Oc(z,L,S/1e3),L.sit&&(z.position.y-=.12)}yg(.35+.65*_)}function Ji(u,_,S){let T,L;u==="screen"?(Mi.set(_/innerWidth*2-1,-(S/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize(),T={x:mt.position.x,y:mt.position.y,z:mt.position.z},L={x:Mi.x,y:Mi.y,z:Mi.z}):(T=Br(),L=na());let z=u==="screen"?$n("screen",_,S):$n("center"),rt=null,lt=c.view==="tp"&&u==="screen"?8:4.5;z&&(lt=Math.min(lt,z.dist+.5));for(let at of Ct.list){if(at.gone||at.riding)continue;let vt=Fr(T,L,at.p,at.def.size[0],at.def.size[1]);vt!=null&&vt<lt&&(lt=vt,rt=at)}for(let at of c.vehicles){if(c.ride&&c.ride.veh===at)continue;let vt=Fr(T,L,at.p,1.3,.9);vt!=null&&vt<lt&&(lt=vt,rt=at.m)}if(c.boss){let at=Fr(T,L,c.boss.p,3.6,3.6);at!=null&&at<lt+1&&(lt=at,rt=c.boss.m)}return rt}function Ss(){try{return cg(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function Vs(u){if(u.kind==="vehicle"){Jc(u.veh);return}if(u.kind==="boss"){qg();return}if(u.type==="horse"){Dg(u);return}if(u.kind==="villager"){if(!t.trading){Mt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}Sg(u);return}if(ks(u)){Cd(u);return}if(u.kind==="animal"&&A.slots[c.sel]&&A.slots[c.sel].id===(u.def.food||"wheat")){t.consume&&Gn(A,c.sel,1),X();let S=Date.now();u.love=S,Mt(`${u.def.name_zh}\u5403\u4E86${p.name(u.def.food||"wheat")}\uFF0C\u597D\u958B\u5FC3`);let T=Nf(Ct.list,u,S);if(T&&Ko(Ct,"animal")<Df){let L=Se(u.def,Math.floor((u.p.x+T.p.x)/2),Math.floor(u.p.y),Math.floor((u.p.z+T.p.z)/2));gt.get(L.id).scale.setScalar(.65),u.love=0,T.love=0,Mt(`\u751F\u4E86\u4E00\u96BB\u5C0F${u.def.name_zh}\uFF01`),c.stats.bred=(c.stats.bred||0)+1,Me("bred")}else T&&Mt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(u.kind==="animal"&&u.def.noHit){Mt(`${u.def.name_zh}\u5728\u6162\u6162\u5403${p.name(u.def.food||"wheat")}\uFF0C\u4E0D\u8981\u5435\u7260\u3002\u62FF${p.name(u.def.food||"wheat")}\u9935\u7260\u770B\u770B`);return}if(u.kind==="animal"){let S=A.slots[c.sel],T=!!(S&&p.toolOf(S.id)&&p.toolOf(S.id).type==="sword"),L=ag(u,T,Math.random);if(u.v.y=4,u.v.x+=(u.p.x-c.p.x)*1.5,u.v.z+=(u.p.z-c.p.z)*1.5,T){let z=Ur(A,c.sel,p);z.broke&&Mt(`\u4F60\u7684${p.name(z.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}if(L&&L.drops)for(let z=0;z<L.drops.n;z++)wt(L.drops.id,u.p.x,u.p.y+.6,u.p.z);L&&L.meat&&wt(L.meat.id,u.p.x,u.p.y+.6,u.p.z);return}if(u.busy)return;u.busy=!0,On(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ask";let _=Ss().slice(0,30).sort(()=>Math.random()-.5);Yo(_t.ov,{ids:_,onDone:(S,T)=>{if(c.overlay=null,u.busy=!1,S&&u.def.tough&&!u.hurt){u.hurt=!0,Mt("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(S){let L=lg(!0,T)+(u.def.tough?2:0);Nn(D,L),Pn(),u.gone=!0,u.goneT=0,Mt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${L} \u91D1\u5E63`),c.dirtyMeta=!0,fn(),c.stats.quizWins=(c.stats.quizWins||0)+1,Me("quiz_wins")}else if(S===!1){let L=c.p.x-u.p.x,z=c.p.z-u.p.z,rt=Math.hypot(L,z)||1;c.v.x=L/rt*7,c.v.z=z/rt*7,c.v.y=4.5,u.p.x-=L/rt*1.5,u.p.z-=z/rt*1.5,Mt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let Xn=(u,_,S)=>ct.get(u,_,S),Ki=(u,_,S)=>{let T=p.get(ct.get(u,_,S));return T&&T.rail?{shape:T.rail,powered:!!T.powered}:null},_t=LS();function Mt(u){for(;_t.toasts.children.length>3;)_t.toasts.firstChild.remove();let _=P("div",{class:"toast"},u);_t.toasts.append(_),setTimeout(()=>_.remove(),2200)}function Qo(u){let _=P("div",{class:"toast ach"},P("i",{class:"badge"}),P("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",P("b",{},u.name_zh),u.coins&&t.coins?`\u3000+${u.coins} \u91D1\u5E63`:""));_t.toasts.append(_),setTimeout(()=>_.remove(),3500)}function Me(u,_=1){jm(b,u,_),c.dirtyMeta=!0;for(let S of Qm(b,R))Qo(S),S.coins&&t.coins&&(Nn(D,S.coins),Pn())}let si=()=>Math.max(5,Math.min(100,parseInt(wn("hw_daily_goal","20"),10)||20)),Oi=0;function ws(){let u=si();_t.learnCnt.textContent=Oi+"/"+u,_t.learnBar.style.width=Math.min(100,Oi/u*100)+"%",_t.learnPill.classList.toggle("done",Oi>=u)}function Hs(){try{Oi=B0()}catch{}ws()}z0(u=>{let _=Oi;Hs(),Me("answers"),u&&Me("answers_ok"),_<si()&&Oi>=si()&&Mt("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function ta(){let u=document.getElementById("pinbox"),_=window.KSParentPin;if(u.innerHTML="",!_||!_.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let S=P("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),T=P("input",{class:"typein",type:"number",min:"5",max:"100",value:String(si()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),L=()=>{if(!_.verify(S.value.trim())){Mt("\u5BC6\u78BC\u4E0D\u5C0D"),S.value="";return}ii("hw_daily_goal",String(Math.max(5,Math.min(100,+T.value||20)))),ws(),Mt("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+si()+" \u984C"),yd()};[S,T].forEach(z=>z.addEventListener("keydown",rt=>{rt.stopPropagation(),rt.key==="Enter"&&L()})),u.append(P("div",{class:"pin-ask"},P("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),P("div",{class:"typerow"},S,T,P("button",{class:"btn",onclick:L},"\u78BA\u5B9A")))),setTimeout(()=>S.focus(),50)}function Gc(u,_,S,T){Me("placed"),T==="torch"&&Me("place:torch");let L=c.recentPlaced||(c.recentPlaced=[]);L.push([u,_,S]),L.length>80&&L.shift(),!b.done.house&&e0(L,u,_,S)>=30&&Me("house")}function Wc(){let u=!1;for(let _ of Yn())b.stats["boss:"+_]||(b.stats["boss:"+_]=1,u=!0);u&&Me("boss",0)}let ea=D.coins;function Pn(){D.coins>ea&&tn("coin"),ea=D.coins,_t.coins.textContent=D.coins}let zr="";function E(){let u=id(tt.hp),_=u.join();_!==zr&&(zr=_,_t.hearts.innerHTML="",u.forEach(S=>_t.hearts.append(P("i",{class:"ht "+S}))))}function V(u){if(c.dead||u<=0||!t.damage)return;let _=u,S=$o(c.armor,p);if(u=Pf(u,S),S&&(If(c.armor,c.armorDur,p,_).forEach(z=>Mt(`\u4F60\u7684${p.name(z)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),nn(),c.dirtyMeta=!0),u<=0)return;let T=td(tt,u);E(),c.dirtyMeta=!0,tn("hurt"),_t.flash.classList.remove("on"),_t.flash.offsetWidth,_t.flash.classList.add("on"),T&&ot()}function ot(){Hr(!0),c.dead=!0,On(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="dead";let u=_t.ov;u.innerHTML="",u.hidden=!1,u.append(P("div",{class:"panel start"},P("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),P("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),P("button",{class:"btn big",onclick:et},c.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function et(){let u=nd(c.bed,Dt,!!c.bed&&e==="overworld");c.p={x:u.x,y:u.y,z:u.z},c.v={x:0,y:0,z:0},c.fallTop=u.y,tt.hp=20,c.dead=!1,E(),Fe(),c.dirtyMeta=!0,Mt(c.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function X(){_t.hotbar.innerHTML="";for(let _=0;_<9;_++){let S=A.slots[_];_t.hotbar.append(P("button",{class:"slot"+(_===c.sel?" on":""),"aria-label":S?p.name(S.id):"\u7A7A\u683C",onpointerdown:T=>{T.stopPropagation(),c.sel=_,X()}},S?P("img",{src:It[S.id],alt:""}):null,S&&S.count>1?P("span",{class:"cnt"},S.count):null,Bt(S),P("span",{class:"key"},_+1)))}let u=A.slots[c.sel];_t.selName.textContent=u?p.name(u.id):""}function Bt(u){let _=eg(u,p);return!_||_.left>=_.max?null:P("span",{class:"dur"+(_.frac<.25?" low":"")},P("i",{style:"width:"+Math.round(_.frac*100)+"%"}))}function Xt(u=4){let _=new Set,S=Math.floor(c.p.x),T=Math.floor(c.p.y),L=Math.floor(c.p.z);for(let z=-u;z<=u;z++)for(let rt=-u;rt<=u;rt++)for(let lt=-u;lt<=u;lt++){let at=ct.get(S+lt,T+z,L+rt);at&&_.add(p.get(at).id)}return _}let Ot=()=>({near:Xt(),owned:new Set(D.owned)}),Jt=-1,Gt=null,de=null,xe=u=>u==="inv"?A:u==="chest"?nt[de]:null,Zt=(u,_)=>u==="armor"?c.armor[_]?{id:c.armor[_],count:1,dur:c.armorDur[_]}:null:xe(u).slots[_];function Ie(u,_,S){if(!Gt){Zt(u,_)&&(Gt={c:u,i:_}),S();return}let T=Gt;if(Gt=null,T.c===u&&T.i===_){S();return}if(u==="armor"||T.c==="armor"){let[L,z,rt,lt]=u==="armor"?[T.c,T.i,u,_]:[u,_,T.c,T.i];if(L==="armor"){S();return}let at=xe(L),vt=at.slots[z],Wt=vt&&p.get(vt.id),Kt=c.armor[lt];if(vt&&!(Wt.armor&&Wt.armor.slot===lt)){Mt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),S();return}let ie=c.armorDur[lt],Re=Kt?Number.isFinite(ie)?{id:Kt,count:1,dur:ie}:{id:Kt,count:1}:null;vt?(c.armor[lt]=vt.id,c.armorDur[lt]=Number.isFinite(vt.dur)?vt.dur:null,vt.count>1?(vt.count--,Re&&Sn(at,Kt,1,y)):at.slots[z]=Re):Kt&&(c.armor[lt]=null,c.armorDur[lt]=null,at.slots[z]=Re),nn(),c.dirtyMeta=!0,X(),S();return}T.c===u?tf(xe(u),T.i,_,y):nf(xe(T.c),T.i,xe(u),_,y),c.dirtyMeta=!0,X(),S()}let Ge=(u,_,S,T="")=>{let L=Zt(u,_),z=Gt&&Gt.c===u&&Gt.i===_;return P("button",{class:"slot"+(z?" pick":"")+T,title:L?p.name(L.id):"",onclick:()=>Ie(u,_,S)},L?P("img",{src:It[L.id],alt:""}):null,L&&L.count>1?P("span",{class:"cnt"},L.count):null,Bt(L))},Ve=["\u982D","\u8EAB","\u817F","\u8173"];function Ue(u){let _=$o(c.armor,p);return P("div",{class:"armor-row"},Ve.map((S,T)=>P("div",{class:"armor-slot"},Ge("armor",T,u),P("small",{},S))),P("small",{class:"muted"},`\u8B77\u7532 ${_} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,_*4)}%\uFF09`))}function nn(){if(_t.armor){let u=$o(c.armor,p);_t.armor.textContent=u?`\u8B77\u7532 ${u}`:""}}function Vt(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=nt[de]||(nt[de]=Vo(27)),S=P("div",{class:"inv-grid"});for(let z=0;z<27;z++)S.append(Ge("chest",z,Vt));let T=P("div",{class:"inv-grid"});for(let z=9;z<36;z++)T.append(Ge("inv",z,Vt));let L=P("div",{class:"inv-grid hbrow"});for(let z=0;z<9;z++)L.append(Ge("inv",z,Vt," hb"));return u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u7BB1\u5B50"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),S,P("h3",{},"\u80CC\u5305"),T,L)),_}function en(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=P("div",{class:"inv-grid"}),S=lt=>Ge("inv",lt,en,lt<9?" hb":"");for(let lt=9;lt<36;lt++)_.append(S(lt));let T=P("div",{class:"inv-grid hbrow"});for(let lt=0;lt<9;lt++)T.append(S(lt));let L=P("div",{class:"craft"},P("h3",{},"\u5408\u6210"));if(t.creative){let lt=P("div",{class:"craft"},P("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),P("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),at=P("div",{class:"cat-grid"});$0(p).forEach(vt=>at.append(P("button",{class:"slot",title:p.name(vt),onclick:()=>{A.slots[c.sel]={id:vt,count:64},c.dirtyMeta=!0,X(),en(),Mt(`${p.name(vt)} \u653E\u9032\u7B2C ${c.sel+1} \u683C`)}},P("img",{src:It[vt],alt:""})))),lt.append(at),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),_,T),lt)));return}let z=Ot(),rt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};M.forEach(lt=>{let at=vc(A,lt,z),vt=at.ok;lt.blueprint&&at.reason==="blueprint"&&!Object.keys(lt.in).some(Wt=>Wt!=="stick"&&ei(A,Wt)>0)||L.append(P("div",{class:"rcp"+(vt?"":" no")},P("img",{src:It[lt.out.id],alt:""}),P("div",{class:"rcp-t"},P("b",{},`${lt.name_zh} \xD7${lt.out.count}`),P("small",{},Object.keys(lt.in).map(Wt=>`${p.name(Wt)} ${ei(A,Wt)}/${lt.in[Wt]}`).join("\u3001")+(rt[at.reason]?"\u3000\xB7 "+rt[at.reason]:""))),P("button",{class:"btn small",onclick:()=>{let Wt=ef(A,lt,y,Ot());Wt.ok?(Mt(`\u505A\u597D\u4E86\uFF1A${lt.name_zh} \xD7${lt.out.count}`),c.dirtyMeta=!0,Me("craft:"+lt.out.id)):Mt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Wt.reason]||"\u6750\u6599\u4E0D\u5920"),en(),X()}},"\u88FD\u4F5C")))}),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Ue(en),_,T),L)))}let Ae=o0(p);function En(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=P("div",{class:"shop"}),S=pg(B,Yn());Ae.filter(T=>!T.id.startsWith("portal_")||S&&T.id===S.block).forEach(T=>_.append(P("div",{class:"offer"+(T.locked?" locked":"")},P("img",{src:It[T.id],alt:""}),P("div",{class:"of-t"},P("b",{},`${T.name_zh}${T.qty>1?" \xD7"+T.qty:""}`),P("small",{},T.locked?`\uFF08${T.locked}\uFF09`:`${T.price} \u91D1\u5E63${T.desc?"\u3000"+T.desc:""}`)),Pr(D,T.id)?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",disabled:T.locked?!0:null,onclick:()=>qn(T)},T.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5546\u5E97\u3000",P("span",{class:"coin"}),` ${D.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),_))}function qn(u){let _=a0(D,A,u,y);_.ok?(Me("bought"),Me("buy:"+u.id),Mt(u.blueprint?`\u62FF\u5230 ${u.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${u.name_zh} \xD7${u.qty}`),c.dirtyMeta=!0,Pn(),X(),fn()):Mt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[_.reason]||"\u8CB7\u4E0D\u4E86"),En()}let Fn=null;function ri(){let u=_t.ov,_=Q[Fn]||(Q[Fn]=qf());u.innerHTML="",u.hidden=!1;let S=_.jobs[0],T=P("div",{class:"shop"});St.forEach(z=>{let rt=ei(A,z.in);T.append(P("div",{class:"offer"+(rt?"":" locked")},P("img",{src:It[z.in],alt:""}),P("div",{class:"of-t"},P("b",{},`${p.name(z.in)} \u2192 ${p.name(z.out)}`),P("small",{},`\u6709 ${rt} \u500B \xB7 \u6BCF\u500B ${z.time} \u79D2`)),P("button",{class:"btn small",onclick:()=>{let lt=Yf(_,A,z,Tt);lt.ok||Mt(lt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),c.dirtyMeta=!0,X(),ri()}},"\u653E\u9032\u53BB")))});let L=Object.values(_.done).reduce((z,rt)=>z+rt,0);u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u7194\u7210"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,_.fuel-_.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${ei(A,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Tt} \u500B\uFF09`),P("div",{class:"furnace-st"},S?`\u6B63\u5728\u71D2\uFF1A${p.name(S.in)}\uFF08\u9084\u8981 ${Math.ceil(S.left)} \u79D2\uFF0C\u6392\u968A ${_.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),P("div",{class:"row"},P("button",{class:"btn",disabled:L?null:!0,onclick:()=>{let z=Zf(_,A,y);z&&(Mt(`\u62FF\u51FA ${z} \u500B`),Me("smelted",z)),c.dirtyMeta=!0,X(),ri()}},`\u62FF\u51FA\u4F86\uFF08${L}\uFF09`)),T))}let Pe=null,Ye=(u,_)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||_}catch{return _}},Yn=()=>dg(Ye("hw_portal_rewards",[]),Ye("hi_save",null),B),Be='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function _i(){let u=B.find(L=>L.map===Pe),_=_t.ov;if(_.innerHTML="",_.hidden=!1,!u){Fe();return}let S=Object.keys(u.reward.items).map(L=>`${p.name(L)} \xD7${u.reward.items[L]}`).join("\u3001"),T=rd(u.map,B,Yn());if(!T.ok){_.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("div",{class:"padlock",html:Be}),P("p",{class:"big"},`\u5148\u6253\u5012 ${T.need.boss_zh} \u624D\u80FD\u9032\u5165`),P("p",{class:"muted"},`\u5F9E\u300C${T.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${T.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Fe},"\u77E5\u9053\u4E86"))));return}_.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${u.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${u.reward.coins} \u91D1\u5E63\u3001${S}\u3002`),P("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),P("div",{class:"row"},P("button",{class:"btn big",onclick:async()=>{await fn(),c.leaving=hg(u.map),location.href=c.leaving}},"\u9032\u5165"),P("button",{class:"btn ghost",onclick:Fe},"\u5148\u4E0D\u8981"))))}function vi(){if(!t.portals)return 0;let u;try{u=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{u=[]}let _=ug(u,q);for(let S of _){let T=fg(S,B,A,D,y);if(q.push(S.id),!!T.ok){for(let L in T.leftovers)for(let z=0;z<T.leftovers[L];z++)wt(L,c.p.x,c.p.y+1,c.p.z);Mt(`\u5F9E${T.name_zh}\u5E36\u56DE\u4F86\uFF1A${T.coins} \u91D1\u5E63\u3001${Object.keys(T.items).map(L=>p.name(L)+" \xD7"+T.items[L]).join("\u3001")}`)}}return _.length&&(Pn(),X(),c.dirtyMeta=!0,fn()),Wc(),_.length}let ji=null;function Sg(u){ji=u,u.busy=!0,un("trade")}function Xc(){let u=ji,_=_t.ov;if(!u)return Fe();_.innerHTML="",_.hidden=!1;let S=u.role,T=Lr(),L=P("div",{class:"shop"});S.prof.offers.forEach(rt=>{let lt=rt.blueprint||rt.give,at=!!rt.blueprint,vt=at&&p.blueprints.find(Kt=>Kt.id===rt.blueprint),Wt=at&&Pr(D,rt.blueprint);L.append(P("div",{class:"offer"},P("img",{src:It[lt],alt:""}),P("div",{class:"of-t"},P("b",{},at?vt.name_zh:`${p.name(lt)}${rt.count>1?" \xD7"+rt.count:""}`),P("small",{},`${rt.price} \u91D1\u5E63${at?"\u3000"+(vt.desc||""):""}`)),Wt?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",onclick:()=>{let Kt=G0(D,A,rt,y);Kt.ok?(tn("trade"),Me("traded"),Me("bought"),Mt(at?`\u62FF\u5230 ${vt.name_zh}\uFF01`:`\u8CB7\u5230 ${p.name(lt)} \xD7${rt.count}`),c.dirtyMeta=!0,Pn(),X(),fn()):Mt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[Kt.reason]||"\u8CB7\u4E0D\u4E86"),Xc()}},"\u8CFC\u8CB7")))});let z=P("div",{class:"quests"});S.quests.forEach(rt=>{let lt=wf(J,rt,T),at=Object.keys(rt.reward.items||{}).map(vt=>`${p.name(vt)} \xD7${rt.reward.items[vt]}`).join("\u3001");z.append(P("div",{class:"offer quest"+(lt?" locked":"")},P("div",{class:"of-t"},P("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+rt.title_zh),P("small",{},`${rt.desc}\uFF0C\u7B54\u5C0D ${rt.need} \u984C \u2192 ${rt.reward.coins} \u91D1\u5E63\u3001${at}`)),lt?P("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):P("button",{class:"btn small",onclick:()=>{c.overlay="quest",V0(_t.ov,{quest:rt,onDone:vt=>{if(c.overlay="trade",vt>=0){let Wt=W0(J,rt,vt,T,D,A,y);if(Wt.ok){for(let Kt in Wt.leftovers)for(let ie=0;ie<Wt.leftovers[Kt];ie++)wt(Kt,c.p.x,c.p.y+1,c.p.z);Mt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Wt.coins} \u91D1\u5E63\u3001${at}`),Pn(),X(),c.dirtyMeta=!0,fn(),c.stats.quests=(c.stats.quests||0)+1,Me("quests")}else Mt(`\u7B54\u5C0D ${vt} \u984C\uFF0C\u8981 ${rt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Xc()}})}},"\u63A5\u59D4\u8A17")))}),_.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6751\u6C11\u30FB${S.prof.name_zh}\u3000`,P("span",{class:"coin"}),` ${D.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("h3",{},"\u4EA4\u6613"),L,P("h3",{},"\u82F1\u6587\u59D4\u8A17"),P("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),z))}function yd(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=P("b",{},ct.rd),S=P("input",{type:"range",min:2,max:6,step:1,value:ct.rd,oninput:T=>{_.textContent=T.target.value},onchange:T=>{let L=+T.target.value;ct.setRenderDistance(L),mt.far=L*16+40,mt.updateProjectionMatrix(),ii("hw_rd",L)}});u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u8A2D\u5B9A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",_,S),P("label",{class:"set"},"\u756B\u8CEA",P("select",{onchange:T=>{ii("hw_gfx",T.target.value),W()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([T,L])=>P("option",{value:T,selected:wn("hw_gfx","high")===T?!0:null},L)))),P("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",P("select",{onchange:T=>{ii("hw_btn",T.target.value),W()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([T,L])=>P("option",{value:T,selected:wn("hw_btn","m")===T?!0:null},L)))),P("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",P("input",{type:"checkbox",checked:wn("hw_lefty","off")==="on"?!0:null,onchange:T=>{ii("hw_lefty",T.target.checked?"on":"off"),W()}})),P("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",P("input",{type:"checkbox",checked:wn("hw_invert","off")==="on"?!0:null,onchange:T=>{ii("hw_invert",T.target.checked?"on":"off"),W()}})),P("label",{class:"set"},"\u97F3\u6A02",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:T=>Pc({music:+T.target.value,muted:!1})})),P("label",{class:"set"},"\u97F3\u6548",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:T=>{Pc({sfx:+T.target.value,muted:!1}),tn("place","wood")}})),t.creative?P("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",P("input",{type:"checkbox",checked:wn("hw_weather","on")!=="off"?!0:null,onchange:T=>ii("hw_weather",T.target.checked?"on":"off")})):null,P("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Ag},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),P("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",P("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:T=>{T.target.files[0]&&Eg(T.target.files[0])}}))),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Tg},"\u91CD\u7F6E\u4E16\u754C"),t.creative?P("button",{class:"btn",onclick:()=>qc("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):P("button",{class:"btn",onclick:wg},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:ta},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${si()} \u984C\uFF08\u5BB6\u9577\uFF09`)),P("div",{id:"pinbox"}),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:()=>{rf(N),c.dirtyMeta=!0,Fe(),sh(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),P("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),P("p",{},P("a",{class:"home-link",href:"../../#s/game",onclick:()=>{fn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),P("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(K.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+zc)))}async function qc(u){await fn(),ii("hw_mode",u),c.resetting=!0,location.reload()}function wg(){let u=document.getElementById("pinbox"),_=window.KSParentPin;if(u.innerHTML="",!_||!_.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let S=P("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),T=()=>{let L=q0(_,S.value.trim());L.ok?qc("creative"):(Mt(L.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),S.value="")};S.addEventListener("keydown",L=>{L.stopPropagation(),L.key==="Enter"&&T()}),u.append(P("div",{class:"pin-ask"},P("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),P("div",{class:"typerow"},S,P("button",{class:"btn",onclick:T},"\u78BA\u5B9A")))),setTimeout(()=>S.focus(),50)}async function _d(){await fn(!0);let u={};for(let _=0;_<localStorage.length;_++){let S=localStorage.key(_);/^hw_/.test(S)&&S!=="hw_mode"&&(u[S]=localStorage.getItem(S))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await gf(""),ls:u}}async function Ag(){try{let u=new Blob([JSON.stringify(await _d())],{type:"application/json"}),_=P("a",{href:URL.createObjectURL(u),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+Lr()+".json"});document.body.append(_),_.click(),setTimeout(()=>{URL.revokeObjectURL(_.href),_.remove()},1500),Mt("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(u){Mt("\u532F\u51FA\u5931\u6557\uFF1A"+u.message)}}async function Eg(u){try{let _=JSON.parse(await u.text());if(!_||_.app!=="hero-world"||!_.db||typeof _.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;c.resetting=!0,await xf([]),await Ac(_.db);for(let S in _.ls||{})/^hw_/.test(S)&&S!=="hw_mode"&&ii(S,_.ls[S]);location.reload()}catch(_){c.resetting=!1,Mt("\u532F\u5165\u5931\u6557\uFF1A"+(_&&_.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":_.message))}}async function Tg(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){c.resetting=!0,ii("hw_dim","overworld");try{await xf(["hw_coins"])}catch(u){console.warn(u)}location.reload()}}function un(u){document.pointerLockElement&&document.exitPointerLock(),c.overlay=u,On(),Me("open:"+u,1),u==="inv"?(Jt=-1,Gt=null,en()):u==="shop"?En():u==="set"?yd():u==="furnace"?ri():u==="portal"?_i():u==="trade"?Xc():u==="chest"?(Gt=null,Vt()):u==="map"?nh():u==="ach"?Gg():u==="quests"?jg():u==="book"?(Gr=null,Wr()):u==="quiz"&&k0(_t.ov,{onAnswer:()=>Me("stele_answers"),onReward:_=>{Nn(D,_),Pn(),c.dirtyMeta=!0,fn()},onClose:()=>{c.overlay=null}})}function Fe(){if(c.overlay==="book")try{speechSynthesis.cancel()}catch{}_t.ov.hidden=!0,_t.ov.innerHTML="",c.overlay=null,ji&&(ji.busy=!1,ji=null)}let vd=()=>{_t.btnSnd.textContent=Zo()?"\u{1F507}":"\u{1F50A}"};_t.btnSnd.onclick=()=>{Rc(),Ff(),vd()},["pointerdown","keydown"].forEach(u=>addEventListener(u,()=>Rc(),{capture:!0,once:!0})),vd(),_t.btnInv.onclick=()=>c.overlay==="inv"?Fe():un("inv"),_t.btnShop.onclick=()=>c.overlay==="shop"?Fe():un("shop"),_t.btnSet.onclick=()=>c.overlay==="set"?Fe():un("set"),_t.btnView.onclick=()=>Md(),_t.bRide.onclick=()=>Hr(),_t.bMap.onclick=()=>c.overlay==="map"?Fe():un("map"),_t.restOk.onclick=()=>{_t.rest.hidden=!0},_t.bQuest.onclick=()=>c.overlay==="quests"?Fe():un("quests"),_t.bAch.onclick=()=>c.overlay==="ach"?Fe():un("ach");function Md(){c.view=c.view==="fp"?"tp":"fp",Mt(c.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function bd(){c.ride||(c.fly=!c.fly,c.v.y=0,_t.root.classList.toggle("flying",c.fly),Mt(c.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Mi=new j;function na(){let u=Math.cos(c.pitch);return{x:-Math.sin(c.yaw)*u,y:Math.sin(c.pitch),z:-Math.cos(c.yaw)*u}}let Br=()=>({x:c.p.x,y:c.p.y+1.62+c.eyeOff+(c.ride?vg[c.ride.kind]:0),z:c.p.z}),Sd=u=>u&&!p.flat.liquid[u],Yc=u=>p.flat.boxes[u]||(p.flat.shape[u]===4?Mg:p.flat.shape[u]===8?bg:null);function $n(u,_,S){if(u==="screen"){Mi.set(_/innerWidth*2-1,-(S/innerHeight)*2+1,.5).unproject(mt).sub(mt.position).normalize();let rt=mt.position,lt=c.view==="tp"?rt.distanceTo(new j(c.p.x,c.p.y+1.62,c.p.z)):0,at={x:rt.x,y:rt.y,z:rt.z},vt={x:Mi.x,y:Mi.y,z:Mi.z};c.lastRay={o:at,d:vt};let Wt=Cr(at,vt,Bc+1+lt,Xn,Sd,Yc);return Wt&&(Wt.at={x:at.x+vt.x*Wt.dist,y:at.y+vt.y*Wt.dist,z:at.z+vt.z*Wt.dist}),Wt}let T=Br(),L=na();c.lastRay={o:T,d:L};let z=Cr(T,L,Bc,Xn,Sd,Yc);return z&&(z.at={x:T.x+L.x*z.dist,y:T.y+L.y*z.dist,z:T.z+L.z*z.dist}),z}function On(){c.mining.active=!1,c.mining.k="",c.mining.t=0,oe.visible=!1}function Cg(u,_,S){tn("door");let T=p.get(ct.get(u,_,S)),L=p.get(T.openAs||T.closeAs);if(!L)return;let z=lt=>{let at=p.get(lt);return at&&at.interact==="door"},rt=_;for(;z(ct.get(u,rt-1,S));)rt--;for(let lt=rt;z(ct.get(u,lt,S));lt++)ct.set(u,lt,S,L.n);c.dirtyMeta=!0}let wd=()=>{let u=A.slots[c.sel];return u?p.toolOf(u.id):null};function Rg(u){let _=u.n,S=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Lc(p.get(_),wd());if(!ct.set(u.x,u.y,u.z,0))return;Z.sendBlock(u.x,u.y,u.z,0);let T=u.x+","+u.y+","+u.z,L=p.get(_);if(nt[T]){if(t.drops){for(let at of nt[T].slots)if(at)for(let vt=0;vt<at.count;vt++)wt(at.id,u.x+.5,u.y+.4,u.z+.5)}delete nt[T]}if(L&&L.crop){if(delete it[T],t.drops)for(let at of Cf(L.stage|0))for(let vt=0;vt<at.n;vt++)wt(at.id,u.x+.5,u.y+.3,u.z+.5);c.stats.harvested=(c.stats.harvested||0)+(L.stage===3?1:0),L.stage===3&&Me("harvested"),c.dirtyMeta=!0;return}let z=S.harvest?p.dropOf(_):null;if(z&&wt(z,u.x+.5,u.y+.4,u.z+.5),t.drops&&L.pattern==="leaves"&&Math.random()<(f.appleChance||.1)?wt("apple",u.x+.5,u.y+.4,u.z+.5):!S.harvest&&!S.creative&&Mt(`${p.name(_)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`),L.id==="bamboo")for(let at=u.y+1;ct.get(u.x,at,u.z)===_;at++)ct.set(u.x,at,u.z,0),t.drops&&wt("bamboo",u.x+.5,at+.4,u.z+.5);let rt=ct.get(u.x,u.y+1,u.z);if(p.flat.plant[rt]){delete it[u.x+","+(u.y+1)+","+u.z],ct.set(u.x,u.y+1,u.z,0);let at=t.drops&&p.dropOf(rt);at&&wt(at,u.x+.5,u.y+1.3,u.z+.5)}if(p.get(_).interact==="door")for(let at of[-1,1]){let vt=ct.get(u.x,u.y+at,u.z);p.get(vt)&&p.get(vt).interact==="door"&&ct.set(u.x,u.y+at,u.z,0)}let lt=u.x+","+u.y+","+u.z;if(c.bed&&c.bed.x===u.x&&c.bed.y===u.y&&c.bed.z===u.z&&(c.bed=null,Mt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),Q[lt]){let at=Jf(Q[lt]);for(let vt in at)for(let Wt=0;Wt<at[vt];Wt++)wt(vt,u.x+.5,u.y+.4,u.z+.5);delete Q[lt]}if(S.usesTool){let at=Ur(A,c.sel,p);at.broke&&Mt(`\u4F60\u7684${p.name(at.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}c.dirtyMeta=!0,c.stats.mined++,tn("break",Nr(L)),Me("mined"),Me("mine:"+(L.pattern==="log"?"wood":L.id))}function Gs(u){let _=A.slots[c.sel],S=_&&p.get(_.id);if(S&&S.food)return t.damage?(Lf(tt,S.food,20)?(tn("eat"),Gn(A,c.sel,1),E(),X(),c.dirtyMeta=!0,Mt(`\u5403\u4E86${S.name_zh}\uFF0C\u597D\u98FD\uFF01`),c.stats.ate=(c.stats.ate||0)+1):Mt("\u73FE\u5728\u4E0D\u9913"),!0):(Mt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(S&&S.id==="shadow_flint"){if(!t.portals)return Mt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let zt=p.num("dark_crystal"),ne=u&&u.n===zt?Ku((Le,Ze,Zn)=>ct.get(Le,Ze,Zn),u.x,u.y,u.z,zt):null;if(!ne)return Mt("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let Te=p.num("shadow_portal");for(let Le of ne)ct.set(Le[0],Le[1],Le[2],Te);return Me("portal_lit"),Gn(A,c.sel,1),X(),c.dirtyMeta=!0,Mt(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(S&&S.id==="fishing_rod")return c.fish?Fg():Ug(),!0;if(S&&S.id==="bow")return Rd(),!0;if(S&&S.id==="book")return un("book"),!0;if(S&&S.place==="boat"){if(c.ride)return Mt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let zt=c.lastRay,ne=zt&&Cr(zt.o,zt.d,Bc+1,Xn,Le=>p.flat.liquid[Le]||p.flat.solid[Le]);if(!ne||!p.flat.liquid[ne.n]||ct.get(ne.x,ne.y+1,ne.z))return Mt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;c.p={x:ne.x+.5,y:ne.y+1-.15,z:ne.z+.5};let Te=$c("boat",c.p,c.yaw,{y:ne.y+1});return t.consume&&Gn(A,c.sel,1),X(),Vr("boat",{y:ne.y+1,veh:Te}),!0}if(S&&S.place==="minecart"){if(c.ride)return Mt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let zt=u&&p.get(u.n);if(!zt||!zt.rail)return Mt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let ne=Vu(zt.rail,u.x,u.y,u.z,-Math.sin(c.yaw),-Math.cos(c.yaw),Ze=>!!Bo(Ki,u.x,u.y,u.z,Ze,zt.rail)),Te=gc(ne),Le=$c("minecart",{x:Te.x,y:Te.y+.05,z:Te.z},Te.yaw,{st:ne});return t.consume&&Gn(A,c.sel,1),X(),Vr("minecart",{st:ne,veh:Le}),!0}if(!u)return!1;let T=p.get(u.n);if(T&&T.interact==="chest"){if(tn("chest"),de=u.x+","+u.y+","+u.z,T.id==="loot_chest"&&!nt[de]){let zt=w.ruins&&w.ruins.at(u.x,u.z);nt[de]=zm(Mc,(l.loot||{})[zt?zt.kind:"forest_ruins"],Om(u.x,u.y,u.z),y),Me("loot"),Mt("\u627E\u5230\u907A\u8DE1\u7684\u5BF6\u7BB1\u4E86\uFF01"),c.dirtyMeta=!0}return un("chest"),!0}let L=S&&p.toolOf(_.id);if(L&&L.type==="hoe"&&Tf(T.id,!ct.get(u.x,u.y+1,u.z)||p.flat.plant[ct.get(u.x,u.y+1,u.z)])){if(ct.set(u.x,u.y+1,u.z,0),ct.set(u.x,u.y,u.z,p.num("farmland")),t.consume){let zt=Ur(A,c.sel,p);zt.broke&&Mt(`\u4F60\u7684${p.name(zt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return X(),c.dirtyMeta=!0,!0}if(S&&S.place==="crop")return T.id!=="farmland"||u.face[1]!==1||ct.get(u.x,u.y+1,u.z)?(Mt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(ct.set(u.x,u.y+1,u.z,p.num("wheat_0")),it[u.x+","+(u.y+1)+","+u.z]={t:Date.now(),wet:Rf(Xn,zt=>p.flat.liquid[zt]===1,u.x,u.y,u.z)},t.consume&&Gn(A,c.sel,1),X(),c.dirtyMeta=!0,c.stats.planted=(c.stats.planted||0)+1,!0);let z=p.get(u.n);if(z&&z.interact==="riddle")return Zg(u),!0;if(z&&z.interact==="quiz")return t.coins?(un("quiz"),!0):(Mt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let rt=A.slots[c.sel]&&p.get(A.slots[c.sel].id).placeable;if(z&&z.interact==="door")return Cg(u.x,u.y,u.z),!0;if(z&&z.interact==="portal"&&!rt&&!t.portals)return Mt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(z&&z.interact==="portal"&&!rt)return Pe=z.portal,un("portal"),!0;if(z&&z.interact==="bed"&&!rt&&e==="shadow")return Mt("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(z&&z.interact==="bed"&&!rt)return c.bed={x:u.x,y:u.y,z:u.z},c.dirtyMeta=!0,Me("bed"),Mt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(z&&z.interact==="craft"&&!rt)return un("inv"),!0;if(z&&z.interact==="furnace"&&!rt)return Fn=u.x+","+u.y+","+u.z,un("furnace"),!0;let lt=A.slots[c.sel];if(!lt)return Mt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let at=p.get(lt.id);if(!at||!at.placeable)return Mt(`${p.name(lt.id)} \u4E0D\u80FD\u653E`),!1;if(at.place==="slab"&&at.fullAs&&u.n===at.n&&u.face[1]===1&&ct.set(u.x,u.y,u.z,p.num(at.fullAs)))return t.consume&&Gn(A,c.sel,1),X(),c.stats.placed++,c.dirtyMeta=!0,!0;let vt=p.flat.plant[u.n]&&!p.flat.plant[at.n],Wt=vt?u.x:u.x+u.face[0],Kt=vt?u.y:u.y+u.face[1],ie=vt?u.z:u.z+u.face[2];if(Kt<0||Kt>=64)return!1;let Re=ct.get(Wt,Kt,ie);if(Re&&!p.flat.liquid[Re]&&!(vt&&p.flat.plant[Re]))return!1;let Ee=.6/2;if(at.solid&&Wt+1>c.p.x-Ee&&Wt<c.p.x+Ee&&ie+1>c.p.z-Ee&&ie<c.p.z+Ee&&Kt+1>c.p.y&&Kt<c.p.y+1.8)return!1;if(p.flat.plant[at.n]&&!p.flat.solid[ct.get(Wt,Kt-1,ie)])return Mt(`${at.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let sn=at.n;if(at.place==="slab"){let zt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&zt>.5)&&p.get(at.id+"_top")&&(sn=p.num(at.id+"_top"))}else if(at.place==="stairs"){let zt=-Math.sin(c.yaw),ne=-Math.cos(c.yaw),Te=Math.abs(zt)>Math.abs(ne)?zt>0?1:3:ne>0?2:0,Le=p.get(at.id+["","_e","_s","_w"][Te]);Le&&(sn=Le.n)}let ue=null;if(at.place==="rail"){if(!p.flat.solid[ct.get(Wt,Kt-1,ie)])return Mt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let zt=-Math.sin(c.yaw),ne=-Math.cos(c.yaw),Te=mc(Ki,Wt,Kt,ie,!!at.powered,Math.abs(zt)>Math.abs(ne)?"e":"n");sn=p.num(zo(!!at.powered,Te.shape)),ue=Te.updates}if(!ct.set(Wt,Kt,ie,sn))return!1;if(Z.sendBlock(Wt,Kt,ie,sn),ue)for(let[zt,ne,Te,Le]of ue){let Ze=Ki(zt,ne,Te);Ze&&ct.set(zt,ne,Te,p.num(zo(Ze.powered,Le)))}return tn("place",Nr(at)),at.interact==="door"&&!ct.get(Wt,Kt+1,ie)&&ct.set(Wt,Kt+1,ie,at.n),t.consume&&Gn(A,c.sel,1),c.dirtyMeta=!0,X(),c.stats.placed++,Gc(Wt,Kt,ie,at.id),!0}let kr={},Ws=u=>kr[u]||(kr[u]=(()=>{let _=new vn({color:u});return _.userData.base=new he(u),_})());function Ig(u){let _=new mn,S=(T,L,z,rt,lt,at,vt)=>{let Wt=new De(new Ke(T,L,z),Ws(rt));Wt.position.set(lt,at,vt),_.add(Wt)};if(u==="boat"){S(.9,.08,1.5,"#8C6640",0,.04,0);for(let T of[-1,1])S(.08,.3,1.5,"#A97E4E",T*.45,.19,0),S(.9,.3,.08,"#A97E4E",0,.19,T*.75);S(.9,.06,.25,"#C49A63",0,.25,.1)}else{S(.9,.08,1.1,"#5E6660",0,.12,0);for(let T of[-1,1])S(.08,.45,1.1,"#8C8A84",T*.45,.35,0),S(.9,.45,.08,"#8C8A84",0,.35,T*.55),S(.06,.18,.18,"#26302A",T*.47,.1,.35),S(.06,.18,.18,"#26302A",T*.47,.1,-.35)}return _}c.vehicles=[];function $c(u,_,S,T){let L=Ig(u);L.rotation.order="YXZ",L.position.set(_.x,_.y,_.z),L.rotation.y=S,Y.add(L);let z=Object.assign({kind:u,p:{x:_.x,y:_.y,z:_.z},yaw:S,obj:L,hits:0},T);return z.m={kind:"vehicle",veh:z,id:-2},c.vehicles.push(z),z}function Zc(u){c.ride||c.dead||(c.p={x:u.p.x,y:u.p.y,z:u.p.z},u.kind==="boat"?Vr("boat",{y:u.y,veh:u}):(u.st.v=0,Vr("minecart",{st:u.st,veh:u})))}function Jc(u){if(!(c.ride&&c.ride.veh===u)){if(u.hits++,u.hits<2){Mt("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),u.obj.position.y=u.p.y+.15,setTimeout(()=>{u.obj.position.y=u.p.y},120);return}c.vehicles.splice(c.vehicles.indexOf(u),1),Y.remove(u.obj),wt(u.kind,u.p.x,u.p.y+.5,u.p.z),c.dirtyMeta=!0,Mt(u.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Xs=new mn,Ad=new vn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),Kc=[0,1].map(()=>{let u=new De(new Ke(1,1,1),Ad);return Xs.add(u),u});Xs.visible=!1,Y.add(Xs);function Pg(u){let _=A.slots[c.sel],S=_&&p.get(_.id);if(!u||!S||!S.placeable)return null;let T=p.get(u.n);if(T&&["chest","quiz","door"].includes(T.interact))return null;if(S.place==="slab"&&S.fullAs&&u.n===S.n&&u.face[1]===1)return{x:u.x,y:u.y,z:u.z,n:p.num(S.fullAs)};let L=p.flat.plant[u.n]&&!p.flat.plant[S.n],z=L?u.x:u.x+u.face[0],rt=L?u.y:u.y+u.face[1],lt=L?u.z:u.z+u.face[2];if(rt<0||rt>=64)return null;let at=ct.get(z,rt,lt);if(at&&!p.flat.liquid[at]&&!(L&&p.flat.plant[at]))return null;let vt=S.n;if(S.place==="slab"){let Wt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Wt>.5)&&p.get(S.id+"_top")&&(vt=p.num(S.id+"_top"))}else if(S.place==="stairs"){let Wt=-Math.sin(c.yaw),Kt=-Math.cos(c.yaw),ie=Math.abs(Wt)>Math.abs(Kt)?Wt>0?1:3:Kt>0?2:0,Re=p.get(S.id+["","_e","_s","_w"][ie]);Re&&(vt=Re.n)}else if(S.place==="rail"){if(!p.flat.solid[ct.get(z,rt-1,lt)])return null;let Wt=-Math.sin(c.yaw),Kt=-Math.cos(c.yaw);vt=p.num(zo(!!S.powered,mc(Ki,z,rt,lt,!!S.powered,Math.abs(Wt)>Math.abs(Kt)?"e":"n").shape))}return{x:z,y:rt,z:lt,n:vt}}function Lg(u){let _=Pg(u);if(!_){Xs.visible=!1;return}let S=p.flat.shape[_.n],T=p.flat.boxes[_.n]||(S===4?Mg:S===8?bg:S>=1&&S<=3?CS:TS);Kc.forEach((L,z)=>{let rt=T[z];L.visible=!!rt,rt&&(L.scale.set((rt[3]-rt[0])*.98,(rt[4]-rt[1])*.98,(rt[5]-rt[2])*.98),L.position.set(_.x+(rt[0]+rt[3])/2,_.y+(rt[1]+rt[4])/2,_.z+(rt[2]+rt[5])/2))}),Xs.visible=!0}function Ed(u){u.saddled=!0;let _=gt.get(u.id);if(!_)return;let S=new De(new Ke(.62,.1,.6),Ws("#5C3A24"));S.position.set(0,1.4,.05),_.add(S)}function Vr(u,_){let S=_.veh?_.veh.obj:null;c.ride=Object.assign({kind:u,obj:S,yaw:_.veh?_.veh.yaw:c.yaw},_),c.fly=!1,_t.root.classList.remove("flying"),c.v={x:0,y:0,z:0},_t.bRide.hidden=!1,On(),Me("ride:"+u),Me("ride"),Mt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[u])}function Hr(u){let _=c.ride;if(_){if(c.ride=null,_t.bRide.hidden=!0,_.veh&&(_.veh.p={x:c.p.x,y:c.p.y,z:c.p.z},_.veh.yaw=_.yaw,_.st&&(_.st.v=0,_.veh.st=_.st)),_.kind==="horse"&&(_.m.riding=!1),_.kind==="minecart")c.p.y+=.2;else for(let[S,T]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let L={x:c.p.x+S,y:Math.floor(c.p.y+.5),z:c.p.z+T};if(Hm(L,dt)&&p.flat.solid[ct.get(L.x,L.y-1,L.z)]){c.p=L;break}}c.v={x:0,y:0,z:0},c.fallTop=c.p.y,u||Mt("\u4E0B\u4F86\u4E86")}}function Dg(u){let _=A.slots[c.sel];if(!u.tame){_&&(_.id==="wheat"||_.id==="apple")?(t.consume&&Gn(A,c.sel,1),X(),u.fed=(u.fed||0)+1,u.fed>=3?(u.tame=!0,c.horseMob=u,c.dirtyMeta=!0,Mt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):Mt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${u.fed}/3\uFF09`)):Mt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!u.saddled){_&&_.id==="saddle"?(t.consume&&Gn(A,c.sel,1),X(),Ed(u),c.horseMob=u,c.dirtyMeta=!0,Mt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):Mt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}c.ride||(u.riding=!0,c.p={x:u.p.x,y:u.p.y,z:u.p.z},Vr("horse",{m:u}),c.stats.rodeHorse=(c.stats.rodeHorse||0)+1)}function Td(u){let _=gt.get(u.id);if(!_||_.userData.collar)return;let[S,T]=u.def.size,L=new De(new Ke(.34,.07,.36),Ws("#E0352B"));L.position.set(0,T-.25,-S*.62),_.add(L),_.userData.collar=L}function Cd(u){let _=A.slots[c.sel],S=u.def.name_zh,T=Fc(u.def).map(z=>p.name(z)).join("\u6216");if(u.tame){u.sit=!u.sit,c.dirtyMeta=!0,Mt(u.sit?`${S}\u4E56\u4E56\u5750\u4E0B\u4F86\u7B49\u4F60`:`${S}\u8DDF\u8457\u4F60\u8D70`);return}let L=ud(u,_&&_.id,Ct.list.filter(z=>z.tame&&ks(z)&&!z.gone).length);if(!L.ok){Mt(`${S}\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260${T}\u8A66\u8A66\u770B`);return}if(t.consume&&Gn(A,c.sel,1),X(),tn("eat"),L.full){Mt(`\u5BF5\u7269\u6700\u591A ${4} \u96BB\uFF0C${S}\u5148\u7576\u670B\u53CB\u5C31\u597D`);return}if(!L.tamed){Mt(`${S}\u5403\u5F97\u597D\u958B\u5FC3\uFF08${L.fed}/${L.need}\uFF09`);return}Td(u),c.dirtyMeta=!0,Me("tamed"),fn(),Mt(`${S}\u8B8A\u6210\u4F60\u7684\u5BF5\u7269\u4E86\uFF01\u7260\u6703\u8DDF\u8457\u4F60\u8D70\uFF1B\u9EDE\u7260\u4E00\u4E0B\uFF1D\u5750\u4E0B\uFF0F\u8DDF\u8457\u8D70`+(u.def.guard?"\u3002\u665A\u4E0A\u7260\u6703\u5E6B\u4F60\u64CB\u4F4F\u932F\u984C\u602A":""))}function Ng(u,_,S,T,L,z,rt){let lt=c.ride;if(lt.kind==="boat"){let at=(T*S+z*_)*7,vt=(L*S+rt*_)*7,Wt=1-Math.exp(-2.5*u);c.v.x+=(at-c.v.x)*Wt,c.v.z+=(vt-c.v.z)*Wt,c.v.y=0;let Kt=(Ee,sn)=>p.flat.liquid[ct.get(Ee,lt.y-1,sn)]===1&&!p.flat.solid[ct.get(Ee,lt.y,sn)],ie=c.p.x+c.v.x*u,Re=c.p.z+c.v.z*u;Kt(ie+Math.sign(c.v.x)*.6,c.p.z)?c.p.x=ie:c.v.x=0,Kt(c.p.x,Re+Math.sign(c.v.z)*.6)?c.p.z=Re:c.v.z=0,c.p.y=lt.y-.15,Math.hypot(c.v.x,c.v.z)>.3&&(lt.yaw=Math.atan2(-c.v.x,-c.v.z))}else{Hu(lt.st,u,S,Ki);let at=gc(lt.st);c.p.x=at.x,c.p.z=at.z,c.p.y=at.y+.05,lt.yaw=at.yaw,lt.pitch=at.pitch,c.v.x=c.v.z=c.v.y=0}c.fallTop=c.p.y}let jc=(()=>{let u=new mn,_=new De(new Ke(.16,.1,.16),Ws("#E0352B")),S=new De(new Ke(.16,.08,.16),Ws("#EFEBDD"));return _.position.y=.05,S.position.y=-.04,u.add(_,S),u.visible=!1,Y.add(u),u})();function Ug(){let u=c.lastRay,_=u&&Cr(u.o,u.d,Bc+3,Xn,S=>p.flat.liquid[S]||p.flat.solid[S]);return!_||!p.flat.liquid[_.n]||ct.get(_.x,_.y+1,_.z)?(Mt("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(c.fish=Wu(Math.random),c.fish.at={x:_.x+.5,y:_.y+1,z:_.z+.5},jc.visible=!0,Mt("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Qc(){c.fish=null,jc.visible=!1}function Fg(){let u=qu(c.fish);if(Qc(),u!=="catch"){Mt("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let _=f.fishing.loot,S=Yu(_,Math.random);if(S.coins&&!t.coins&&(S=_[0]),S.coins)Nn(D,S.coins),Pn(),Mt(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${S.coins} \u91D1\u5E63`);else{let T=Sn(A,S.id,S.n,y);for(let L=0;L<T;L++)wt(S.id,c.p.x,c.p.y+1,c.p.z);Mt(S.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${p.name(S.id)} \xD7${S.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Ur(A,c.sel,p).broke&&Mt("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),X(),c.dirtyMeta=!0,tn("pickup"),Me("fish"),S.treasure&&Me("treasure")}let Og=new Ke(.05,.05,.62);c.arrows=[];function Rd(){let u=performance.now()/1e3;if(u-(c.bowT||0)<od)return;if(t.consume&&ei(A,"arrow")<1){Mt("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD");return}c.bowT=u;let _=c.lastRay||{o:Br(),d:na()},S=ad({x:_.o.x+_.d.x*.6,y:_.o.y+_.d.y*.6,z:_.o.z+_.d.z*.6},_.d);S.obj=new De(Og,Ws("#8C6640")),Y.add(S.obj),c.arrows.push(S),t.consume&&(Os(A,"arrow",1),Ur(A,c.sel,p).broke&&Mt("\u5F13\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01")),X(),c.dirtyMeta=!0,tn("place","wood"),Me("shot")}function zg(u){if(!c.arrows.length||!u)return;let _=Ct.list.filter(S=>!S.gone&&!S.riding&&(S.kind==="quiz"||S.kind==="animal"&&!S.def.noHit&&!S.tame&&S.type!=="horse")).map(S=>({p:S.p,w:S.def.size[0],h:S.def.size[1],ref:S}));c.boss&&_.push({p:c.boss.p,w:3.6,h:3.6,ref:c.boss.m});for(let S=c.arrows.length-1;S>=0;S--){let T=c.arrows[S],L=ld(T,u,dt,_);T.obj.position.set(T.p.x,T.p.y,T.p.z),Mi.set(T.p.x+T.v.x,T.p.y+T.v.y,T.p.z+T.v.z),T.obj.lookAt(Mi),L&&(Y.remove(T.obj),c.arrows.splice(S,1),L.hit==="mob"?(Me("arrow_hit"),Vs(L.target)):L.hit==="block"&&t.consume&&wt("arrow",T.p.x,T.p.y,T.p.z))}}let th=x.books||[],Bg=u=>{if(!(xd||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let _=new SpeechSynthesisUtterance(u);_.lang="en-US",_.rate=.85,speechSynthesis.speak(_)}catch{}},eh=u=>J["book:"+u.id]===Lr(),Gr=null,qs=!1;function Wr(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=th.find(T=>T.id===Gr),S=T=>P("div",{class:"p-head"},P("h2",{},T),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7"));if(!_){let T=P("div",{class:"shop"});th.forEach(L=>T.append(P("div",{class:"offer"+(eh(L)?" locked":"")},P("img",{src:It.book,alt:""}),P("div",{class:"of-t"},P("b",{class:"en"},L.title),P("small",{},L.title_zh+(eh(L)?"\u3000\u2713 \u4ECA\u5929\u7B54\u5C0D\u4E86":t.coins?`\u3000\u8B80\u5B8C\u7B54\u5C0D +${x.coins|0} \u91D1\u5E63`:""))),P("button",{class:"btn small",onclick:()=>{Gr=L.id,qs=!1,Wr()}},"\u8B80")))),u.append(P("div",{class:"panel"},S("\u82F1\u6587\u5C0F\u66F8"),P("p",{class:"muted"},"\u6311\u4E00\u7BC7\u4F86\u8B80\u3002\u8B80\u5B8C\u56DE\u7B54\u4E00\u500B\u554F\u984C\uFF08\u6BCF\u7BC7\u6BCF\u5929\u7B54\u5C0D\u7B2C\u4E00\u6B21\u6709\u91D1\u5E63\uFF09\u3002"),T));return}u.append(P("div",{class:"panel book"},S(_.title_zh),P("h3",{class:"en"},_.title),P("p",{class:"book-text en"},_.en),qs?P("p",{class:"book-text zh"},_.zh):null,P("div",{class:"row"},P("button",{class:"btn ghost",onclick:()=>{qs=!qs,Wr()}},qs?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"),P("button",{class:"btn ghost",onclick:()=>Bg(_.en)},"\u{1F50A} \u6717\u8B80")),P("div",{class:"row"},P("button",{class:"btn",onclick:()=>kg(_)},"\u8B80\u5B8C\u4E86\uFF0C\u56DE\u7B54\u554F\u984C"),P("button",{class:"btn ghost",onclick:()=>{Gr=null,Wr()}},"\u2190 \u63DB\u4E00\u672C"))))}function kg(u){try{speechSynthesis.cancel()}catch{}let _=u.q.options.slice().sort(()=>Math.random()-.5),S={id:"hwbook:"+u.id,module:"reading",tkey:"\u82F1\u6587\u5C0F\u66F8",type:"reading",local:!0,title:u.title,prompt:u.q.prompt,sub:qs?u.q.zh:"",options:_,answer:u.q.options[0],en:!0,why:""};c.overlay="ask",Yo(_t.ov,{question:S,title:"\u82F1\u6587\u5C0F\u66F8\uFF1A"+u.title,okText:"\u7B54\u5C0D\u4E86\uFF01\u4F60\u770B\u61C2\u9019\u7BC7\u6545\u4E8B\u4E86",onDone:T=>{if(c.overlay="book",T){let L=!eh(u),z=L&&t.coins?x.coins|0:0;J["book:"+u.id]=Lr(),z&&(Nn(D,z),Pn()),Me("books"),c.dirtyMeta=!0,fn(),Mt(z?`\u8B80\u61C2\u4E86\uFF01 +${z} \u91D1\u5E63`:"\u8B80\u61C2\u4E86\uFF01"),Gr=null}else T===!1&&Mt("\u518D\u8B80\u4E00\u6B21\u770B\u770B\uFF0C\u7B54\u6848\u5C31\u5728\u6545\u4E8B\u88E1\uFF01");Wr()}})}let Qi=2,ia=wn("hw_minimap","on")!=="off";function Vg(u){ia=u,ii("hw_minimap",u?"on":"off"),_t.mini.hidden=!u}_t.mini.hidden=!ia;function Hg(){let u=_t.mini,_=u.getContext("2d");_.fillStyle="#D9D3C0",_.fillRect(0,0,u.width,u.height),k.draw(_,c.p.x,c.p.z,2,u.width,u.height),Zu(_,u.width/2,u.height/2,c.yaw,7,"#E0352B")}function nh(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=Math.max(240,Math.min(innerWidth-60,760)),S=Math.max(200,Math.min(innerHeight-200,540)),T=P("canvas",{class:"bigmap",width:_,height:S}),L=T.getContext("2d");L.fillStyle="#D9D3C0",L.fillRect(0,0,_,S);let{x0:z,z0:rt}=k.draw(L,c.p.x,c.p.z,Qi,_,S),lt=(ie,Re)=>[(ie-z)*Qi,(Re-rt)*Qi],at=(ie,Re,Ee,sn,ue)=>{let[zt,ne]=lt(ie,Re);zt<-20||ne<-20||zt>_+20||ne>S+20||(L.fillStyle=sn,L.strokeStyle=sn,L.lineWidth=3,ue==="roof"?(L.beginPath(),L.moveTo(zt-8,ne+1),L.lineTo(zt,ne-7),L.lineTo(zt+8,ne+1),L.fill(),L.fillRect(zt-5,ne+1,10,7)):ue==="ring"?(L.beginPath(),L.arc(zt,ne,6,0,7),L.stroke()):L.fillRect(zt-5,ne-5,10,10),L.font="bold 12px sans-serif",L.textAlign="center",L.strokeStyle="#EFEBDD",L.strokeText(Ee,zt,ne-11),L.fillStyle="#26302A",L.fillText(Ee,zt,ne-11))},vt=Math.max(_,S)/Qi;for(let ie of w.villages.around(c.p.x-vt,c.p.z-vt,c.p.x+vt,c.p.z+vt))k.explored(ie.x,ie.z)&&at(ie.x,ie.z,"\u6751\u838A","#8C5A3A","roof");for(let ie of k.portals.values())at(ie.x+.5,ie.z+.5,ie.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");at(Dt.x,Dt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),c.bed&&at(c.bed.x+.5,c.bed.z+.5,"\u5E8A","#E0352B");let[Wt,Kt]=lt(c.p.x,c.p.z);Zu(L,Wt,Kt,c.yaw,9,"#E0352B"),u.append(P("div",{class:"panel map"},P("div",{class:"p-head"},P("h2",{},"\u5730\u5716"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),T,P("div",{class:"row"},P("button",{class:"btn small",onclick:()=>{Qi=Math.min(6,Qi+1),nh()}},"\u653E\u5927"),P("button",{class:"btn small",onclick:()=>{Qi=Math.max(1,Qi-1),nh()}},"\u7E2E\u5C0F"),P("label",{class:"set inline"},P("input",{type:"checkbox",checked:ia?!0:null,onchange:ie=>Vg(ie.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),P("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function Gg(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=R.filter(T=>b.done[T.id]).length,S=P("div",{class:"ach-list"});R.forEach(T=>{let L=!!b.done[T.id];S.append(P("div",{class:"ach-item"+(L?" done":"")},P("i",{class:"badge"}),P("div",{},P("b",{},T.name_zh),P("small",{},T.desc_zh+(L?"\u3000\u2713":`\uFF08${t0(b,T)}/${T.need}\uFF09`)+(T.coins?`\u3000\u734E\u52F5 ${T.coins} \u91D1\u5E63`:"")))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6210\u5C31\u3000${_} / ${R.length}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),S))}async function Wg(u){c.travelling||(c.travelling=!0,Hr(!0),Qc(),On(),Mt(u==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await fn(!0),ii("hw_dim",u),c.resetting=!0,location.reload())}function ih(){let u=c.boss;u&&(_t.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${u.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Xo[u.st.phase].name_zh}`,_t.bossHp.style.width=Math.max(0,u.st.hp/Wo*100)+"%")}function Xg(u){if(e!=="shadow"||b.stats.dragon)return;let _=yi,S=Math.hypot(c.p.x-_.x,c.p.z-_.z);if(!c.boss&&S<60&&ct.ready(_.x,_.z)){let z=y0();Y.add(z),c.boss={g:z,st:g0(),p:{x:_.x+.5,y:xi+1.5,z:_.z+.5},m:{kind:"boss",id:-1},t:0}}let T=c.boss;if(!T)return;T.t+=u,T.g.position.set(T.p.x,T.p.y+Math.sin(T.t*1.6)*.25,T.p.z),T.g.rotation.y=Math.atan2(-(c.p.x-T.p.x),-(c.p.z-T.p.z)),_0(T.g,T.t,u);let L=S<28;L===_t.bossbar.hidden&&(_t.bossbar.hidden=!L,L&&(ih(),T.greeted||(T.greeted=!0,Mt("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function qg(){let u=c.boss;if(!u||u.busy)return;u.busy=!0,On(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ask";let _=Xo[u.st.phase],S=Ss().slice(0,40).sort(()=>Math.random()-.5);Yo(_t.ov,{ids:u.st.retry.concat(S),types:_.types,modules:_.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${_.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(T,L,z)=>{c.overlay=null,u.busy=!1,T!=null&&Id(T,L,z&&z.id)}})}function Id(u,_,S){let T=c.boss;if(!T)return;let L=x0(T.st,u,_,S);if(!u){let z=c.p.x-T.p.x,rt=c.p.z-T.p.z,lt=Math.hypot(z,rt)||1;c.v.x=z/lt*8,c.v.z=rt/lt*8,c.v.y=5,Mt("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),ih();return}if(T.g.userData.hitT=.3,tn("hit","stone"),L.done){Yg();return}L.phaseUp!=null?(v0(T.g,L.phaseUp),Mt(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${L.phaseUp+1} \u968E\u6BB5\uFF1A${Xo[L.phaseUp].name_zh}`)):Mt(_?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),ih()}function Yg(){Y.remove(c.boss.g),c.boss=null,_t.bossbar.hidden=!0,t.coins&&(Nn(D,hf),Pn()),Me("dragon"),fn(),$g()}function $g(){On(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ending";let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${hf} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];u.append(P("div",{class:"ending"},P("div",{class:"paper sun"}),P("div",{class:"paper hill"}),P("div",{class:"paper hill b"}),P("div",{class:"credits"},P("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),_.map(S=>P("p",{},S)),P("button",{class:"btn big",onclick:Fe},"\u7E7C\u7E8C\u5192\u96AA"))))}function Zg(u){c.riddleBusy||(c.riddleBusy=!0,On(),document.pointerLockElement&&document.exitPointerLock(),c.overlay="ask",Yo(_t.ov,{ids:Ss().slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u82F1\u6587\u5716\u66F8\u9928\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",onDone:_=>{if(c.overlay=null,c.riddleBusy=!1,!_){_===!1&&Mt("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let S=-2;S<=2;S++){let T=p.get(ct.get(u.x,u.y+S,u.z));T&&T.interact==="riddle"&&ct.set(u.x,u.y+S,u.z,0)}Me("library"),c.dirtyMeta=!0,tn("door")}}))}function Jg(){if(!b.stats.village&&e==="overworld"){for(let u of w.villages.around(c.p.x-30,c.p.z-30,c.p.x+30,c.p.z+30))if(Math.hypot(u.x-c.p.x,u.z-c.p.z)<22){Me("village");break}}for(let u of af(N,d,O,Lr())){if(c.dirtyMeta=!0,u.kind==="tut"){tn("pickup"),N.tut.done&&Mt("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let _=t.coins?u.q.coins|0:0;_&&(Nn(D,_),Pn()),Mt((u.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+u.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+u.q.text)+(_?`\u3000+${_} \u91D1\u5E63`:""))}sh()}function Kg(u){if(u==="lair")return e==="shadow"?{x:yi.x+.5,z:yi.z+.5}:null;if(e!=="overworld")return null;if(u==="stele"&&Dt.stele)return{x:Dt.stele.x+.5,z:Dt.stele.z+.5};if(u==="portal"&&Dt.portal)return{x:Dt.portal.x+.5,z:Dt.portal.z+.5};if(u==="village"){if(!c.vilHint||Date.now()-c.vilHint.t>3e3){let _=null,S=1/0;for(let T of w.villages.around(c.p.x-400,c.p.z-400,c.p.x+400,c.p.z+400)){let L=Math.hypot(T.x-c.p.x,T.z-c.p.z);L<S&&(S=L,_=T)}c.vilHint={t:Date.now(),v:_}}return c.vilHint.v?{x:c.vilHint.v.x,z:c.vilHint.v.z}:null}return null}let Pd="";function sh(u){let _=!N.tut.done&&d.tutorial[N.tut.step],S=of(N,d),T=_||S,L=_?N.tut.step+(c.touch?"t":"d"):"";if((u||L!==Pd)&&(Pd=L,_t.tut.hidden=!_,_t.tut.innerHTML="",_&&_t.tut.append(P("b",{},`\u65B0\u624B\u6559\u5B78 ${N.tut.step+1}/${d.tutorial.length}`),P("span",{},_.text),P("small",{},c.touch?_.touch:_.desk),P("button",{class:"link",onclick:()=>{bc(N,d),c.dirtyMeta=!0,sh(!0)}},"\u8DF3\u904E\u6559\u5B78"))),_t.obj.hidden=!T||!c.started,!T)return;c.objTarget=Kg(T.hint),_t.objArrow.hidden=!c.objTarget;let z=c.objTarget?Math.round(Math.hypot(c.objTarget.x-c.p.x,c.objTarget.z-c.p.z)):0;_t.objText.textContent=(_?"":"\u4E3B\u7DDA\uFF1A")+(_?_.text:S.text)+(c.objTarget&&z>4?`\uFF08\u7D04 ${z} \u683C\uFF09`:"")}function jg(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let _=P("div",{class:"quest-list"});d.main.forEach((T,L)=>_.append(P("div",{class:"quest-item"+(L<N.main?" done":L===N.main?" cur":"")},P("b",{},(L<N.main?"\u2713 ":"")+T.title),P("small",{},T.text+(T.coins&&t.coins?`\u3000\u734E\u52F5 ${T.coins} \u91D1\u5E63`:"")))));let S=P("div",{class:"quest-list"});(N.daily?N.daily.picks:[]).forEach(T=>{let L=d.daily.find(rt=>rt.id===T),z=N.daily.done.includes(T);S.append(P("div",{class:"quest-item"+(z?" done":" cur")},P("b",{},(z?"\u2713 ":"")+L.text),P("small",{},`${z?L.need:lf(N,d,O,T)} / ${L.need}`+(L.coins&&t.coins?`\u3000\u734E\u52F5 ${L.coins} \u91D1\u5E63`:""))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5192\u96AA\u624B\u518A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Fe},"\xD7")),P("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),S,P("h3",{},`\u4E3B\u7DDA\u3000${Math.min(N.main,d.main.length)} / ${d.main.length}`),_,P("p",{class:"muted"},N.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${N.tut.step+1} \u6B65`))),setTimeout(()=>{let T=u.querySelector(".quest-item.cur");T&&T.scrollIntoView&&T.scrollIntoView({block:"nearest"})},0)}function Ld(){xd||!Ht.requestPointerLock||Ht.requestPointerLock()}addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let _=u.key.toLowerCase();if(_==="e"){c.overlay==="inv"?Fe():!c.overlay&&un("inv"),u.preventDefault();return}if(c.overlay!=="dead"&&!(c.overlay==="ask"||c.overlay==="quest")){if(_==="escape"&&c.overlay){c.overlay==="quiz"?(_t.ov.hidden=!0,_t.ov.innerHTML="",c.overlay=null):Fe();return}if(!c.overlay){if(_==="shift"&&c.ride){Hr();return}c.keys[_]=!0,u.code==="Space"&&(c.keys[" "]=!0,u.preventDefault()),_>="1"&&_<="9"&&(c.sel=+_-1,X()),_==="f"&&bd(),_==="v"&&Md(),_==="m"&&un("map"),_==="k"&&un("ach"),_==="j"&&un("quests")}}}),addEventListener("keyup",u=>{c.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(c.keys[" "]=!1)}),addEventListener("blur",()=>{c.keys={},On()}),Ht.addEventListener("mousedown",u=>{if(!(c.touch||c.overlay)){if(document.pointerLockElement!==Ht){Ld();return}if(u.button===0){let _=Ji("center");if(_){Vs(_);return}c.mining.active=!0,c.mining.src="center"}if(u.button===2){let _=Ji("center");if(_&&_.kind==="vehicle"){Zc(_.veh);return}Gs($n("center")),c.placeRepeat=.3,c.rightHeld=!0}}}),addEventListener("mouseup",u=>{u.button===0&&On(),u.button===2&&(c.rightHeld=!1)}),Ht.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===Ht&&(c.yaw-=u.movementX*.0024,c.pitch=Math.max(-1.55,Math.min(1.55,c.pitch-u.movementY*.0024*(c.invert?-1:1))))}),addEventListener("wheel",u=>{c.overlay||c.touch||(c.sel=(c.sel+(u.deltaY>0?1:8))%9,X())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{_t.root.classList.toggle("locked",document.pointerLockElement===Ht)});let Xr=new Map;function Qg(u){c.touch!==u&&(c.touch=u,_t.root.classList.toggle("touch",u),document.body.classList.toggle("is-touch",u))}_t.root.classList.toggle("touch",c.touch),document.body.classList.toggle("is-touch",c.touch),Ht.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||(Qg(!0),c.overlay))return;if(u.preventDefault(),(document.body.classList.contains("lefty")?u.clientX>innerWidth*.6:u.clientX<innerWidth*.4)&&u.clientY>innerHeight*.35&&!c.joy.active){c.joy={x:0,y:0,active:!0,id:u.pointerId,ox:u.clientX,oy:u.clientY},_t.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,_t.joy.hidden=!1,_t.knob.style.transform="translate(0px,0px)",Xr.set(u.pointerId,{kind:"joy"});return}let _={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1,hold:!1};_.timer=setTimeout(()=>{if(_.drag)return;let S=Ji("screen",_.x,_.y);if(S&&S.kind==="vehicle"){Jc(S.veh),_.vehHit=!0;return}_.hold=!0,c.mining.active=!0,c.mining.src="screen",c.mining.sx=_.x,c.mining.sy=_.y},280),Xr.set(u.pointerId,_),c.touchPress=_},{passive:!1}),addEventListener("pointermove",u=>{let _=Xr.get(u.pointerId);if(!_)return;if(_.kind==="joy"){let L=u.clientX-c.joy.ox,z=u.clientY-c.joy.oy,rt=Math.hypot(L,z),lt=55;rt>lt&&(L*=lt/rt,z*=lt/rt),c.joy.x=L/lt,c.joy.y=z/lt,_t.knob.style.transform=`translate(${L}px,${z}px)`;return}let S=u.clientX-_.x,T=u.clientY-_.y;_.x=u.clientX,_.y=u.clientY,!_.drag&&Math.hypot(_.x-_.sx,_.y-_.sy)>12&&(_.drag=!0,clearTimeout(_.timer),_.hold&&(On(),_.hold=!1)),_.drag?(c.yaw-=S*.0055,c.pitch=Math.max(-1.55,Math.min(1.55,c.pitch-T*.0055*(c.invert?-1:1)))):_.hold&&(c.mining.sx=_.x,c.mining.sy=_.y)});let Dd=u=>{let _=Xr.get(u.pointerId);if(_){if(Xr.delete(u.pointerId),c.touchPress===_&&(c.touchPress=null),_.kind==="joy"){c.joy={x:0,y:0,active:!1},_t.joy.hidden=!0;return}if(clearTimeout(_.timer),_.hold)On();else if(!_.drag&&performance.now()-_.t0<280&&!c.overlay&&A.slots[c.sel]&&A.slots[c.sel].id==="bow")Gs($n("screen",_.x,_.y));else if(!_.drag&&performance.now()-_.t0<280&&!c.overlay){let S=Ji("screen",_.x,_.y);S&&S.kind==="vehicle"?Zc(S.veh):S?Vs(S):Gs($n("screen",_.x,_.y))}}};addEventListener("pointerup",Dd),addEventListener("pointercancel",Dd);let Nd=(u,_,S)=>{u.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),_()}),u.addEventListener("pointerup",S),u.addEventListener("pointercancel",S),u.addEventListener("pointerleave",S)};Nd(_t.bJump,()=>{c.jumpHeld=!0},()=>{c.jumpHeld=!1}),Nd(_t.bDown,()=>{c.downHeld=!0},()=>{c.downHeld=!1}),_t.bFly.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),bd()}),_t.bPlace.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Gs($n("center"))}),document.addEventListener("touchmove",u=>{u.target.closest(".scroll, .panel")||u.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(u=>document.addEventListener(u,_=>_.preventDefault(),{passive:!1})),_t.start.hidden=!1,_t.go.onclick=()=>{_t.start.hidden=!0,c.started=!0,c.paused=!1,_t.root.classList.add("started"),c.touch||Ld()};async function fn(u){if(c.resetting)return;c.ride&&c.ride.veh&&(c.ride.veh.p={x:c.p.x,y:c.p.y,z:c.p.z},c.ride.veh.yaw=c.ride.yaw);let _={hw_meta:{v:1,seed:I,time:c.time,build:zc},hw_player:{dims:Object.assign({},c.dimPos,{[e]:{x:c.p.x,y:c.p.y,z:c.p.z,yaw:c.yaw}}),x:c.p.x,y:c.p.y,z:c.p.z,yaw:c.yaw,pitch:c.pitch,fly:c.fly,sel:c.sel,hp:tt.hp,bed:c.bed,armor:c.armor,armorDur:c.armorDur,horse:c.horseMob&&!c.horseMob.gone?{x:c.horseMob.p.x,y:c.horseMob.p.y,z:c.horseMob.p.z,saddled:!!c.horseMob.saddled}:c.horse,pets:pd(Ct.list).concat(c.petsPending).slice(0,4)},hw_inventory:Go(A),hw_coins:l0(D),[i("hw_furnaces")]:Q,[i("hw_chests")]:Object.fromEntries(Object.entries(nt).map(([S,T])=>[S,Go(T)])),[i("hw_crops")]:it,hw_quests:J,hw_portal_claimed:q.slice(-200),hw_ach:b,hw_story:N,[i("hw_vehicles")]:c.vehicles.map(S=>({kind:S.kind,x:S.p.x,y:S.p.y,z:S.p.z,yaw:S.yaw,wy:S.y,st:S.st?{x:S.st.x,y:S.st.y,z:S.st.z,shape:S.st.shape,from:S.st.from,s:S.st.s}:null}))};k.dirty&&(u||Date.now()-(c.mapSavedAt||0)>3e4)&&(_[i("hw_map")]=k.serialize(),c.mapSavedAt=Date.now());for(let S of c.dirty){let T=C.get(S);T&&(_[s+S]=ff(T))}c.dirty.clear(),c.dirtyMeta=!1;try{await Ac(_),c.lastSave=Date.now()}catch(S){console.warn("save failed",S),!c.quotaWarned&&S&&(S.name==="QuotaExceededError"||/quota/i.test(S.message||""))&&(c.quotaWarned=!0,Mt("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{c.started&&fn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&c.started&&fn(!0)}),addEventListener("pagehide",()=>{c.started&&fn(!0)}),c.stats={mined:0,placed:0};function Ud(){let u=innerWidth,_=innerHeight;qt.setSize(u,_,!1),mt.aspect=u/_,mt.updateProjectionMatrix()}addEventListener("resize",Ud),Ud(),Pn(),X(),E(),nn(),t.creative&&(Zi("#coinpill").hidden=!0,Zi("#modebadge").hidden=!1,_t.btnShop.hidden=!0,_t.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(u=>{u&&(u.kind==="boat"||u.kind==="minecart"&&u.st)&&$c(u.kind,u,u.yaw||0,u.kind==="boat"?{y:u.wy}:{st:Object.assign({v:0,lastIn:0},u.st)})}),Hs(),setInterval(Hs,6e4),vi(),e==="shadow"&&(Me("shadow"),setTimeout(()=>Mt("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",u=>{u.persisted&&vi()});let Fd=performance.now(),sa=0,rh=0,tx=new he("#EFEBDD"),ex=new he("#22302F"),nx=new he("#E6B48C");function Od(u){requestAnimationFrame(Od);let _=(u-Fd)/1e3;Fd=u;let S=Math.min(.05,_);c.frames.push(_*1e3),c.frames.length>4e3&&c.frames.shift(),ct.update(c.p.x,c.p.z);let T=ct.ready(c.p.x,c.p.z);if(c.auto&&ox(S),c.started&&!c.overlay&&T&&sx(S),c.started&&T&&!c.travelling){let ue=p.get(ct.get(c.p.x,c.p.y+.2,c.p.z));ue&&ue.interact==="shadow_portal"?!c.portalLock&&t.portals&&(c.portalT=(c.portalT||0)+S,c.portalT>1&&Wg(e==="shadow"?"overworld":"shadow")):(c.portalLock=!1,c.portalT=0)}c.started&&!c.dead&&ed(tt,S)&&(E(),c.dirtyMeta=!0),c.time=(c.time+S/ES)%1;let L=c.time*Math.PI*2,z=Math.sin(L),rt=e==="shadow"?.42:Math.min(1,Math.max(0,(z+.12)/.42));ut.copy(ex).lerp(tx,rt);let lt=Math.max(0,1-Math.abs(z)/.3)*(rt>.05?1:.4);if(ut.lerp(nx,lt*.55),e==="shadow"&&ut.set("#1C2620"),!(t.creative&&wn("hw_weather","on")==="off")?Gf(c.weather,S):c.weather.level=0,c.ambT=(c.ambT||0)+S,c.ambT>1){c.ambT=0;let ue=Math.floor(c.p.x),zt=Math.floor(c.p.z),ne=!1;for(let Le=2;Le<14&&!ne;Le++)p.flat.opaque[ct.get(ue,Math.floor(c.p.y)+Le,zt)]&&(ne=!0);c.underground=ne&&c.p.y<w.height(ue,zt)-4,c.biome=w.biomeOf(ue,zt);let Te=kf({day:rt,underground:c.underground});Te!==c.musicScene&&(c.musicScene=Te,Of(Vf[Te]))}let vt=c.underground||e==="shadow"?null:Wf(c.biome,c.weather),Wt=vt?c.weather.level:0;Wt&&ut.lerp(c.rainSky||(c.rainSky=new he("#8E9590")),.45*Wt),pt(S,mt.position,vt),zf(vt==="rain"?Wt:0),Ms(c.overlay==="quiz"||c.overlay==="ask"||c.overlay==="quest"),le.uniforms.uDay.value=rt*(1-.3*Wt),le.uniforms.uFog.value.set(...ix(ut));let Kt=Br();c.eyeOff*=Math.pow(5e-4,S);let ie=na();if(c.view==="tp"){let ue=Cr(Kt,{x:-ie.x,y:-ie.y,z:-ie.z},4,Xn,ne=>p.flat.opaque[ne]===1),zt=ue?Math.max(.4,ue.dist-.25):4;mt.position.set(Kt.x-ie.x*zt,Kt.y-ie.y*zt,Kt.z-ie.z*zt)}else mt.position.set(Kt.x,Kt.y,Kt.z);mt.rotation.set(c.pitch,c.yaw,0);let Re=mt.far*.8;if(H.position.set(mt.position.x+Math.cos(L)*Re,mt.position.y+Math.sin(L)*Re,mt.position.z+.25*Re),H.scale.setScalar(Re*.14),He.position.set(mt.position.x-Math.cos(L)*Re,mt.position.y-Math.sin(L)*Re,mt.position.z-.25*Re),He.scale.setScalar(Re*.1),H.visible=He.visible=e!=="shadow",Rt.visible=c.view==="tp",Rt.visible){Rt.position.set(c.p.x,c.p.y+(c.ride?vg[c.ride.kind]:0),c.p.z),Rt.rotation.y=c.yaw;let ue=Math.hypot(c.v.x,c.v.z),zt=Math.sin(u/120)*Math.min(1,ue/4)*.7;Ft.rotation.x=zt,Nt.rotation.x=-zt,te.rotation.x=-zt,se.rotation.x=zt;let ne=.35+.65*rt;Rt.children.forEach(Te=>Te.material.color.copy(Te.userData.base).multiplyScalar(ne))}for(let ue in fe)fe[ue].color.setScalar(.4+.6*rt);Ad.color.setScalar(.5+.5*rt);for(let ue in kr)kr[ue].color.copy(kr[ue].userData.base).multiplyScalar(.35+.65*rt);c.ride&&c.ride.obj&&(c.ride.obj.position.set(c.p.x,c.p.y,c.p.z),c.ride.obj.rotation.y=c.ride.yaw,c.ride.obj.rotation.x=c.ride.pitch||0);let Ee=c.started&&!c.overlay?c.mining.active&&c.mining.src==="screen"?$n("screen",c.mining.sx,c.mining.sy):$n("center"):null;if(Ee){ge.visible=!0;let ue=Yc(Ee.n);if(ue){let zt=1,ne=1,Te=1,Le=0,Ze=0,Zn=0;for(let Ys of ue)zt=Math.min(zt,Ys[0]),ne=Math.min(ne,Ys[1]),Te=Math.min(Te,Ys[2]),Le=Math.max(Le,Ys[3]),Ze=Math.max(Ze,Ys[4]),Zn=Math.max(Zn,Ys[5]);ge.scale.set(Le-zt,Ze-ne,Zn-Te),ge.position.set(Ee.x+(zt+Le)/2,Ee.y+(ne+Ze)/2,Ee.z+(Te+Zn)/2)}else ge.scale.set(1,1,1),ge.position.set(Ee.x+.5,Ee.y+.5,Ee.z+.5)}else ge.visible=!1;let sn=c.touchPress;if(Lg(!c.started||c.overlay||c.mining.active?null:c.touch?sn&&!sn.drag&&!sn.hold?$n("screen",sn.x,sn.y):null:Ee),c.mining.active&&Ee){let ue=Ee.x+","+Ee.y+","+Ee.z;ue!==c.mining.k&&(c.mining.k=ue,c.mining.t=0),c.mining.t+=S;let zt=t.creative?p.get(Ee.n).hardness<0?1/0:t.breakTime:Lc(p.get(Ee.n),wd()).time;if(zt===1/0)oe.visible=!1,c.mining.warned||(Mt(p.name(Ee.n)+"\u6316\u4E0D\u52D5"),c.mining.warned=!0);else{c.mining.tick=(c.mining.tick||0)+S,c.mining.tick>.25&&(c.mining.tick=0,tn("hit",Nr(p.get(Ee.n))));let ne=c.mining.t/zt;oe.visible=!0,oe.position.copy(ge.position),oe.scale.copy(ge.scale),oe.material.map=ye[Math.min(3,Math.floor(ne*4))],ne>=1&&(Rg(Ee),c.mining.k="",c.mining.t=0,oe.visible=!1)}}else oe.visible=!1,c.mining.active||(c.mining.warned=!1);if(c.rightHeld&&!c.overlay&&(c.placeRepeat-=S,c.placeRepeat<=0&&(Gs($n("center")),c.placeRepeat=.25)),rx(S),zg(c.overlay?0:S),c.fish){let ue=Xu(c.fish,S),zt=A.slots[c.sel];!zt||zt.id!=="fishing_rod"||Math.hypot(c.p.x-c.fish.at.x,c.p.z-c.fish.at.z)>16?Qc():(ue==="bite"?(Mt("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),tn("pickup")):ue==="escape"&&Mt("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),jc.position.set(c.fish.at.x,c.fish.at.y-.05+(c.fish.phase==="bite"?-.18:Math.sin(u/400)*.03),c.fish.at.z))}if(c.netT=(c.netT||0)+S,c.netT>.25&&(c.netT=0,Z.sendState({x:c.p.x,y:c.p.y,z:c.p.z,yaw:c.yaw,dim:e,ride:c.ride?c.ride.kind:null})),c.started){c.lookAcc=(c.lookAcc||0)+Math.min(1,Math.abs(c.yaw-(c.lastYaw??c.yaw))+Math.abs(c.pitch-(c.lastPitch??c.pitch))),c.lastYaw=c.yaw,c.lastPitch=c.pitch;let ue=Math.hypot(c.p.x-(c.lastPx??c.p.x),c.p.z-(c.lastPz??c.p.z));ue<2&&(c.walkAcc=(c.walkAcc||0)+ue),c.lastPx=c.p.x,c.lastPz=c.p.z,c.storyT=(c.storyT||0)+S,c.storyT>.5&&(c.storyT=0,Jg())}if(c.objTarget&&!_t.objArrow.hidden){let ue=c.objTarget,zt=Math.atan2(-(ue.x-c.p.x),-(ue.z-c.p.z))-c.yaw;_t.objArrow.style.transform="rotate("+-zt+"rad)"}if(c.started&&!document.hidden&&!c.dead&&(c.playT=(c.playT||0)+S,c.playT>1800&&(c.playT=0,_t.rest.hidden=!1,tn("pickup"))),c.mapT=(c.mapT||0)+S,c.mapT>.3&&(c.mapT=0,k.scan(ct,c.mapDirty),ia&&Hg()),c.cropT=(c.cropT||0)+S,c.cropT>2){c.cropT=0;let ue=Date.now();for(let zt in it){let[ne,Te,Le]=zt.split(",").map(Number);if(!ct.ready(ne,Le))continue;let Ze=p.get(ct.get(ne,Te,Le));if(!Ze||!Ze.crop){delete it[zt];continue}let Zn=Ef(it[zt].t,ue,it[zt].wet);Zn>(Ze.stage|0)&&(ct.set(ne,Te,Le,p.num("wheat_"+Zn)),c.dirtyMeta=!0)}}Hc(c.overlay?0:S,rt,u),Xg(c.overlay?0:S);for(let ue in Q){let zt=Q[ue];zt.jobs.length&&($f(zt,S),c.dirtyMeta=!0,c.overlay==="furnace"&&ue===Fn&&(c.furnUi=(c.furnUi||0)+S)>.5&&(c.furnUi=0,ri()))}qt.render(Y,mt),sa+=_,rh++,sa>.5&&(_t.dbg&&(_t.dbg.textContent=`${Math.round(rh/sa)} fps \xB7 \u5340\u584A ${ct.stats.loaded} \xB7 ${km[w.biomeOf(Math.floor(c.p.x),Math.floor(c.p.z))]} \xB7 ${c.p.x.toFixed(1)}, ${c.p.y.toFixed(1)}, ${c.p.z.toFixed(1)}`),sa=0,rh=0),!T&&c.started?_t.loading.hidden=!1:_t.loading.hidden=!0}function ix(u){let _=u.getHexString();return[parseInt(_.slice(0,2),16)/255,parseInt(_.slice(2,4),16)/255,parseInt(_.slice(4,6),16)/255]}function sx(u){let _=c.keys,S=(_.d?1:0)-(_.a?1:0),T=(_.w?1:0)-(_.s?1:0);c.joy.active&&(S=c.joy.x,T=-c.joy.y);let L=Math.min(1,Math.hypot(S,T));if(L>0){let Ze=Math.hypot(S,T);S=S/Ze*L,T=T/Ze*L}let z=-Math.sin(c.yaw),rt=-Math.cos(c.yaw),lt=Math.cos(c.yaw),at=-Math.sin(c.yaw);if(c.ride&&c.ride.kind!=="horse"){Ng(u,S,T,z,rt,lt,at);return}let vt=_.control||!c.fly&&_.shift||c.joy.active&&L>.92,Wt=Xn(c.p.x,c.p.y+.1,c.p.z),Kt=Xn(c.p.x,c.p.y+1,c.p.z),ie=p.flat.liquid[Wt]===1||p.flat.liquid[Kt]===1,Re=c.fly?10:c.ride?8.5:ie?2.6:vt?6.2:4.3,Ee=(z*T+lt*S)*Re,sn=(rt*T+at*S)*Re,ue=_[" "]||c.jumpHeld,zt=c.fly&&_.shift||c.downHeld;if(c.fly)c.v.x=Ee,c.v.z=sn,c.v.y=((ue?1:0)-(zt?1:0))*8;else{let Ze=c.onGround?14:5,Zn=1-Math.exp(-Ze*u);c.v.x+=(Ee-c.v.x)*Zn,c.v.z+=(sn-c.v.z)*Zn,ie?(c.v.y-=9*u,c.v.y<-3&&(c.v.y=-3),ue&&(c.v.y=3.4)):p.flat.climb[Wt]||p.flat.climb[Kt]?(c.v.y=ue||T>.1?3.2:zt?-3:Math.max(c.v.y-28*u,-1.5),c.fallTop=c.p.y):(c.v.y-=28*u,c.v.y<-40&&(c.v.y=-40),ue&&c.onGround&&(c.v.y=c.ride?10.5:8.6,c.onGround=!1))}let ne=c.onGround,Te=dc(c.p,c.v,u,dt,{canStep:!c.fly,grounded:c.onGround});if(c.onGround=Te.onGround,Te.stepped&&(c.eyeOff-=Te.stepped),c.fallTop==null||c.fly||ie||c.onGround&&ne?c.fallTop=c.p.y:c.onGround||(c.fallTop=Math.max(c.fallTop,c.p.y)),c.onGround&&!ne){let Ze=Qf(c.fallTop-c.p.y,{water:ie,flying:c.fly});Ze&&(V(Ze),Mt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),c.fallTop=c.p.y}let Le=Math.hypot(c.v.x,c.v.z);c.onGround&&!c.fly&&Le>1&&(c.stepT=(c.stepT||0)+u*Le,c.stepT>1.8&&(c.stepT=0,tn("step",Nr(p.get(Xn(c.p.x,c.p.y-.5,c.p.z)))))),c.p.y<-20&&(c.p={x:Dt.x,y:Dt.y+1,z:Dt.z},c.v={x:0,y:0,z:0},c.fallTop=c.p.y)}function rx(u){let _=c.p.x,S=c.p.y+.9,T=c.p.z;for(let L=c.drops.length-1;L>=0;L--){let z=c.drops[L];z.age+=u;let rt=_-z.p.x,lt=S-z.p.y,at=T-z.p.z,vt=Math.hypot(rt,lt,at);if(vt<1.5&&z.age>.25&&Sn(A,z.id,1,y)===0){Y.remove(z.s),c.drops.splice(L,1),c.dirtyMeta=!0,X(),tn("pickup");continue}if(vt<4.5&&z.age>.25?(z.v.x=rt/vt*6,z.v.y=lt/vt*6,z.v.z=at/vt*6,z.p.x+=z.v.x*u,z.p.y+=z.v.y*u,z.p.z+=z.v.z*u):(z.v.y-=18*u,z.v.x*=.9,z.v.z*=.9,dc(z.p,z.v,u,dt,{w:.25,h:.25})),z.age>300){Y.remove(z.s),c.drops.splice(L,1);continue}z.s.position.set(z.p.x,z.p.y+.2+Math.sin(z.age*3)*.06,z.p.z)}}c.auto=kc.get("auto")==="walk";let zd=0;function ox(u){c.started||_t.go.click(),zd+=u,c.keys.w=!0,c.keys[" "]=zd%1.6<.15,c.yaw+=u*.08}window.HW={build:zc,TEST:xd,G:c,reg:p,inv:A,wallet:D,world:ct,Inv:Mc,Aud:Bf,Amb:Xf,chests:nt,crops:it,Farm:Uf,clickSlot:Ie,MODE:n,RULE:t,switchMode:qc,questState:J,tradesJson:m,spawnVillagers:Un,terr:w,claimPortalRewards:vi,portals:B,claimedIds:q,mobS:Ct,mobDefs:Et,spawnMob:Se,hitMob:Vs,mobAt:Ji,surfaceY:$t,health:tt,hurt:V,Health:sd,furnaces:Q,Smelt:Kf,smeltList:St,recipes:M,craftCtx:Ot,breakInfo:Lc,start(){_t.go.click()},state(){return{pos:{...c.p},coins:D.coins,inv:Go(A),loaded:ct.stats.loaded,stats:{...c.stats},overlay:c.overlay,fly:c.fly}},lookAt(u,_,S){let T=Br(),L=u-T.x,z=_-T.y,rt=S-T.z;c.yaw=Math.atan2(-L,-rt),c.pitch=Math.atan2(z,Math.hypot(L,rt))},target(){let u=$n("center");return u&&{x:u.x,y:u.y,z:u.z,n:u.n,face:u.face}},mine(u){u?(c.mining.active=!0,c.mining.src="center"):On()},use(){return Gs($n("center"))},key(u,_){c.keys[u]=_},books:th,booksJson:x,shootArrow:Rd,Arch:cd,Pets:gd,petClick:Cd,open:un,close:Fe,save:fn,spawn:Dt,dismount:Hr,Rail:Gu,ach:b,mapv:k,Fish:$u,bump:Me,bank:K,net:Z,backupData:_d,applyPrefs:W,story:N,Story:cf,QJ:d,DIM:e,bossDamage:Id,Shadow:ju,hitVehicle:Jc,rideVehicle:Zc,ghostState:()=>({visible:Xs.visible,sy:Kc[0].scale.y,two:Kc[1].visible}),perf(){return{frames:c.frames.slice(),meshMs:ct.stats.meshMs.slice(),genMs:ct.stats.genMs.slice(),loaded:ct.stats.loaded}},resetPerf(){c.frames.length=0,ct.stats.meshMs.length=0,ct.stats.genMs.length=0},info:()=>({calls:qt.info.render.calls,tris:qt.info.render.triangles,geos:qt.info.memory.geometries,objs:Y.children.length}),ready:()=>ct.ready(c.p.x,c.p.z)},requestAnimationFrame(Od)}function LS(){let n=Zi("#ui"),t=e=>n.querySelector(e);return kc.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Zi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Zi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Zi("#start"),go:Zi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}PS().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
